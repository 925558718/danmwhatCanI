import machine from "./lib/StateMachine.js"
import InitState from "./lib/InitState.js"
import ClaimState from "./lib/ClaimState.js"
import PayState from "./lib/PayState.js"
import CheckState from "./lib/CheckState.js"

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败")
        exit()
    }
    machine.config([InitState, ClaimState, PayState, CheckState], InitState)
    machine.init()
    while (1) {
        sleep(1000)
        machine.currentState.onUpdate()
        sleep(1000)
    }
}


main()
