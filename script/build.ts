import { readableStreamToText } from "bun";
import { watch } from "fs";

import ora from "ora";
import chalk from "chalk";
const spinner = ora().start();
console.log(chalk.green("watching file..."));
watch("src", { recursive: true }, async (event, filename) => {
    const sub = Bun.spawn({
        cmd: ["parcel", "build"],
        stderr: "pipe",
    });
    const err = await readableStreamToText(sub.stderr);
    err && console.log(chalk.green(err));
});
