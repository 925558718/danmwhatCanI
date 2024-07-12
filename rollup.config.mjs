import clear from "rollup-plugin-clear"
import { babel } from "@rollup/plugin-babel"
export default {
    input: "./src/index.js",
    output: [
        {
            file: "main.js",
            format: "umd",
        },
    ],
    plugins: [
        clear({
            // required, point out which directories should be clear.
            targets: ["dist"],
            // optional, whether clear the directores when rollup recompile on --watch mode.
            watch: true, // default: false
        }),
        babel({ babelHelpers: "bundled" }),
    ],
}
