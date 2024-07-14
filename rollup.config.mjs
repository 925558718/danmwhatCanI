import clear from "rollup-plugin-clear"
import { babel } from "@rollup/plugin-babel"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
export default {
    input: "./src/index.ts",
    output: [
        {
            file: "main.js",
            format: "iife",
        },
    ],
    plugins: [
        clear({
            // required, point out which directories should be clear.
            targets: ["dist"],
            // optional, whether clear the directores when rollup recompile on --watch mode.
            watch: true, // default: false
        }),
        typescript(
            { tsconfig: "./tsconfig.json" }
        ),
        terser(),
    ],
}
