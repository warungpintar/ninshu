#!/usr/bin/env node
const del = require("del");
const esbuild = require("esbuild");
const ora = require("ora");
const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const minimatch = require("minimatch");
const fse = require("fs-extra");

const rootPath = path.join(__dirname, "..");

// loading and benchmarking
function bench(message = "") {
  const loading = ora(message);
  return {
    start: () => {
      loading.start();
      console.time(message);
    },
    stop: () => {
      loading.succeed();
      console.timeEnd(message);
    },
  };
}

// cleaning up previous build
function cleanup() {
  const measure = bench("cleanup artifact");
  measure.start();
  del.sync([
    path.join(rootPath, "*.(!config.js|js|ts|js.map)"),
    path.join(rootPath, "dist/**"),
  ]);
  measure.stop();
}

// typescript stuff
function tsc() {
  const measure = bench("generating ts declaration files");
  measure.start();
  // run tsc to generate typescript type declaration
  execSync("npx tsc", {
    cwd: rootPath,
  });

  // the declaration file will be written into
  // dist/src folder
  const tsDistFiles = fs.readdirSync(path.join(rootPath, "dist/src"));
  const tsDeclarationFiles = tsDistFiles.filter((f) =>
    minimatch(f, "*.gen.d.ts")
  );

  // gather all type declaration text to be bundled into single file
  // index.d.ts
  const tsDeclarationBundled = tsDeclarationFiles.map((n) => {
    let text = fs.readFileSync(path.join(rootPath, "dist/src", n), {
      encoding: "utf-8",
    });
    const name = n.replace(".gen.d.ts", "");

    // move every declaration file into root dir
    // and use export default instead of name export
    fs.writeFileSync(
      path.join(rootPath, name + ".d.ts"),
      text + "\nexport default " + name
    );

    return text;
  });

  // write index.d.ts
  fs.writeFileSync(
    path.join(rootPath, "index.d.ts"),
    tsDeclarationBundled.join("\n")
  );

  measure.stop();
}

// copy bs-platform js into internal folder
// instead of bundling it, we keep use require
// theoretically, this approach will save bundle size
function generateInternal() {
  const measure = bench("generate internal files");
  measure.start();
  fse.copySync(
    path.join(rootPath, "node_modules/bs-platform/lib/js"),
    path.join(rootPath, "internal/lib/js")
  );
  measure.stop();
}

function rewriteJs() {
  const measure = bench("rewrite js files");
  measure.start();
  const files = fs.readdirSync(path.join(rootPath, "src"));
  const jsFiles = files.filter((f) => minimatch(f, "*.bs.js"));

  const functionNames = jsFiles.map((n) => {
    let text = fs.readFileSync(path.join(rootPath, "src", n), {
      encoding: "utf-8",
    });
    const name = n.replace(".bs.js", "");
    text = text
      .replace(/\.bs\.js/g, "")
      // replace ./internal with ../internal
      // if we want to bundle it using esbuild
      // because the internal folder isn't exist in the dist folder
      // TODO: using relative import
      .replace(/bs-platform/g, "./internal")
      .replace(`exports.${name}`, "exports");

    fs.writeFileSync(path.join(rootPath, "dist", name + ".js"), text);

    return name;
  });

  // generate index.js file
  // that re-exporting every function available
  const importStatement = functionNames
    .map((n) => `const ${n} = require("./${n}.js");`)
    .join("\n");

  const rawText = `${importStatement}\n\nexports = { ${functionNames.join(
    ",\n"
  )} };`;

  // write index.js
  fs.writeFileSync(path.join(rootPath, "dist/index.js"), rawText);

  measure.stop();

  return ["index", ...functionNames];
}

console.time("total build time");
cleanup();
tsc();
generateInternal();
const functionNames = rewriteJs();

const esbuildMeasurement = bench("esbuild");
esbuildMeasurement.start();
esbuild.buildSync({
  entryPoints: functionNames.map((n) =>
    path.join(rootPath, "dist", n.concat(".js"))
  ),
  bundle: false,
  sourcemap: true,
  minify: true,
  outdir: rootPath,
});
esbuildMeasurement.stop();
console.timeEnd("total build time");
