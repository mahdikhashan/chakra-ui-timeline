import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJSON from './package.json' assert { type: 'json' };

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: "./lib/index.ts",
    output: [
      {
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJSON.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: Object.keys(packageJSON.peerDependencies)
  },
  {
    input: "dist/esm/types/lib/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
