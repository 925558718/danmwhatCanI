import machine from "../utils/StateMachine";
import { StateEnum } from "../utils/State";

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
}

main();
