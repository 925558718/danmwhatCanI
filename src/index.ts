import machine from "./lib/StateMachine";
import InitState from "./lib/states/InitState";
import ClaimState from "./lib/states/ClaimState";
import PayState from "./lib/states/PayState";
import CheckState from "./lib/states/CheckState";
import { StateEnum } from "./lib/State";

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
    machine.init([InitState, ClaimState, PayState, CheckState], StateEnum.INIT);

    while (1) {
        sleep(2000);
        machine.currentState.onUpdate();
        sleep(2000);
    }
}

main();
