import { readableStreamToText } from "bun";
import { watch } from "fs";

import ora from "ora";
import chalk from "chalk";
const spinner = ora().start();
processBuild();
console.log(chalk.green("watching file..."));
watch("src", { recursive: true }, async (event, filename) => {
    processBuild();
});

async function processBuild() {
    const sub = Bun.spawn({
        cmd: ["pnpm", "build"],
        stderr: "pipe",
    });
    spinner.start("building");
    const err = await readableStreamToText(sub.stderr);
    if (err) {
        console.log(chalk.green(err));
    } else {
        spinner.succeed("build done");
    }
}
