import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "./dist/index.bundle.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [terser()],
  },
];
