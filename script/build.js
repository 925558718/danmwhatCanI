import fs from "fs";
import ora from "ora";
import chalk from "chalk";
import { exec } from "child_process";
import { debounce } from "lodash-es";
const spinner = ora().start();
const filePath = "./src/";
console.log(`正在监听`);
fs.watch(filePath, { recursive: true }, (event, filename) => {
    if (filename) {
        exec("parcel build", process);
    }
});

function process(err, stdout, stderr) {
    if (err) {
        console.log(stderr);
    }
    spinner.stop();
}
