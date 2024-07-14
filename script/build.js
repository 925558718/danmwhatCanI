import fs from "fs"
import ora from "ora"
import chalk from "chalk"
import { exec } from "child_process"
import { debounce } from "lodash-es"
const spinner = ora().start()
const filePath = "./src/"
console.log(`正在监听`)
let buildFn=debounce(exec,1000,{
    leading:true
})
fs.watch(filePath, { recursive: true }, (event, filename) => {
    if (filename) {
        buildFn("rollup -c", process)
    }
})


function process(err, stdout, stderr) {
    console.log(chalk.green(`build done`))
    spinner.stop()
}