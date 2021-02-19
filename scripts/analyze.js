#!/usr/bin/env node
const path = require("path");
const rollup = require("rollup").rollup;
const rollupAnalyzer = require("rollup-plugin-analyzer");
const commonjs = require("@rollup/plugin-commonjs");

rollup({
  input: path.resolve(__dirname, "../es/index.js"),
  plugins: [commonjs()],
}).then((bundle) => {
  rollupAnalyzer
    .formatted(bundle, {
      summaryOnly: true,
    })
    .then(console.log)
    .catch(console.error);
});
