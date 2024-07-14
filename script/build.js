import fs from "fs"
import ora from "ora"
import chalk from "chalk"
import { exec } from "child_process"

const spinner = ora().start()
const filePath = "./src/"
console.log(`正在监听`)
fs.watch(filePath, { recursive: true }, (event, filename) => {
    if (filename) {
        exec("rollup -c", process)
    }
})


function process(err, stdout, stderr) {
    if (err) {
        console.log(chalk.red(stderr))
        return
    }
    console.log(chalk.green(`build done`))
    spinner.stop()
}