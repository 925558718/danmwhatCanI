import machine from "../utils/StateMachine";
import InitState from "./states/InitState";
import ClaimState from "./states/ClaimState";
import PayState from "./states/PayState";
import CheckState from "./states/CheckState";
import { StateEnum } from "../utils/State";
import { findObjectsThen } from "@/utils/findPic";

function main() {
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
    machine.init([InitState, ClaimState, PayState, CheckState], StateEnum.INIT);
    machine.addHooks(() => {
        //心跳检测
        if (machine.getStayTime() % 30 === 0) {
            swipe(100, 100, 101, 101, 10);
        }
    });
    machine.addHooks(() => {
        let name = machine.currentState?.name;
        // 矫正器

        if (name === StateEnum.CLAIM) {
            findObjectsThen([id("vq+"), id("vq="), id("udh"), id("vqg"), id("vr=")], () => {
                machine.pushState(StateEnum.INIT);
            });
        }
        if (name !== StateEnum.CHECK) {
            findObjectsThen([text("我知道了"), text("立即购买")], () => {
                machine.pushState(StateEnum.CHECK);
            });
        }
        if (name !== StateEnum.SEARCH && text("直播已结束").exists() && !textContains("说点什么").exists()) {
            machine.pushState(StateEnum.SEARCH);
        }
    });

    while (1) {
        sleep(2000);
        machine.currentState?.onUpdate();
        sleep(2000);
    }
}

main();
