import machine from "../utils/StateMachine";
import InitState from "./states/InitState";
import ClaimState from "./states/ClaimState";
import PayState from "./states/PayState";
import CheckState from "./states/CheckState";
import { StateEnum } from "../utils/State";
import { findObjectsThen } from "@/utils/findPic";
import SearchState from "./states/SearchState";

function main() {
    setOptions();
    machine.init([InitState, ClaimState, PayState, CheckState, SearchState], StateEnum.INIT);
    machine.addHooks(() => {
        //心跳检测
        if (machine.getCountTime() % 30 === 0) {
            swipe(100, 100, 101, 101, 10);
        }
    });
    machine.addHooks(() => {
        // 矫正器
        let name = machine.currentState?.name;

        if (text("直播已结束").exists()) {
            machine.pushState(StateEnum.SEARCH);
            return;
        }
    });

    while (1) {
        sleep(2000);
        machine.currentState?.onUpdate();
        sleep(2000);
    }
}

main();
function setOptions() {
    if (!requestScreenCapture()) {
        console.log("请求截图失败");
        exit();
    }
    console
        .build({
            size: [0.4, 0.3],
            position: [0.6, 0.2],
            title: "",
            titleTextSize: 0,
            contentTextSize: 7,
            backgroundColor: "deep-orange-900",
            titleBackgroundAlpha: 0,
            contentBackgroundAlpha: 0.3,
            exitOnClose: 6e3,
        })
        .show();
}
