import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/index.gen.tsx",
    output: {
      file: "./dist/index.temp.js",
      format: "cjs",
    },
    plugins: [
      typescript({
        typescript: require("typescript"),
        useTsconfigDeclarationDir: false,
      }),
    ],
  },
  {
    input: "./src/index.bs.js",
    output: {
      file: "./dist/index.bs.js",
      format: "esm",
    },
    plugins: [commonjs(), resolve()],
  },
];
