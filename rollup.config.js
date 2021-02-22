import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import size from "rollup-plugin-size";
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import visualizer from "rollup-plugin-visualizer";
import replace from "@rollup/plugin-replace";

const inputSrcs = [["src/index.ts", "ninshu", "ninshu"]];

const extensions = [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"];
const babelConfig = { extensions, runtimeHelpers: true };
const resolveConfig = { extensions };

export default inputSrcs
  .map(([input, name, file]) => {
    return [
      {
        input: input,
        output: {
          name,
          file: `dist/${file}.development.js`,
          format: "umd",
          sourcemap: true,
        },
        plugins: [resolve(resolveConfig), babel(babelConfig), commonJS()],
      },
      {
        input: input,
        output: {
          name,
          file: `dist/${file}.production.min.js`,
          format: "umd",
          sourcemap: true,
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": `"production"`,
            delimiters: ["", ""],
          }),
          resolve(resolveConfig),
          babel(babelConfig),
          commonJS(),
          terser(),
          size(),
          visualizer({
            filename: "stats.json",
            json: true,
          }),
        ],
      },
    ];
  })
  .flat();
