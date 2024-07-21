import machine from "../utils/StateMachine";
import InitState from "./states/InitState";
import ClaimState from "./states/ClaimState";
import PayState from "./states/PayState";
import CheckState from "./states/CheckState";
import { StateEnum } from "../utils/State";

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
    machine.init([InitState, ClaimState, PayState, CheckState], StateEnum.INIT);

    while (1) {
        sleep(2000);
        machine.currentState?.onUpdate();
        sleep(2000);
    }
}

main();
