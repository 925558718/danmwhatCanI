import StateMachine from "./lib/StateMachine"
import InitState from "./lib/InitState"
import ClaimState from "./lib/ClaimState"
function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败")
        exit()
    }
    var machine = new StateMachine([InitState, ClaimState], InitState)
    while (0) {
        machine.currentState.onUpdate()
    }
}
main()
