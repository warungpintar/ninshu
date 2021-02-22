#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const { exec, execSync } = require("child_process");

const rootPath = path.join(__dirname, "..");

execSync("yarn install", { cwd: rootPath });

const ora = require("ora");
const minimatch = require("minimatch");

fs.readdirSync(rootPath)
  .filter((n) => minimatch(n, "*.js"))
  .forEach((n) => {
    const spinner = ora(`Benchmarking ${n.replace(".js", "")}`).start();
    exec(`node ${n}`, { cwd: rootPath, stdio: "inherit" }, (err, stdout) => {
      spinner.succeed();
      console.log(stdout);
    });
  });
