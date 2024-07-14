import machine from "./lib/StateMachine";
import InitState from "./lib/InitState";
import ClaimState from "./lib/ClaimState";
import PayState from "./lib/PayState";
import CheckState from "./lib/CheckState";

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
    machine.config([InitState, ClaimState, PayState, CheckState], InitState);
    machine.init();

    while (1) {
        sleep(2000);
        machine.currentState.onUpdate();
        sleep(2000);
    }
}

main();
