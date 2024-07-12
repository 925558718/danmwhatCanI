import fs from "fs"
import ora from "ora"
import chalk from "chalk"
import { spawn } from "child_process"

const spinner = ora().start()
const buildInfo = spawn("rollup", ["-c"])
buildInfo.stderr.on("data", (data) => {
    console.error(chalk.red(data))
})
buildInfo.on("close", (code) => {
    if (code === 0) {
        spinner.succeed(chalk.blue.bold("build successfully"))
    }
})
const filePath = "./src/"
console.log(`正在监听 ${filePath}`)
fs.watch(filePath, { recursive: true }, (event, filename) => {
    const spinner = ora().start()
    console.log(chalk.green(`file content updated`))
    if (filename) {
        const output = spawn("rollup", ["-c"])
        output.stderr.on("data", (data) => {
            console.error(chalk.red(data))
        })
        output.on("close", (code) => {
            if (code === 0) {
                spinner.succeed(chalk.blue.bold("build successfully"))
            }
        })
    }
})
