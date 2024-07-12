import machine from "./lib/StateMachine"
import InitState from "./lib/InitState"
import ClaimState from "./lib/ClaimState"
import PayState from "./lib/PayState"
import CheckRewardState from "./lib/CheckRewardState"

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败")
        exit()
    }
    machine.config([InitState, ClaimState, PayState, CheckRewardState], InitState)
    machine.init()
    while (0) {
        machine.currentState.onUpdate()
    }
}
main()
