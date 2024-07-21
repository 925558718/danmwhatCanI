import StateMachine from "./StateMachine";
import { findObjectsThen } from "./findPic";

abstract class AbstractState {
    abstract name: StateEnum;
    private w: org.autojs.autojs.runtime.api.Floaty.JsRawWindow | null | undefined;
    onEnd() {
        this.w?.close();
    }
    onEnter() {
        this.w = floaty.rawWindow(`<text color="#00ffff">当前是${this.name}状态</text>`);
        console.log(this.name + " enter");
    }
    onUpdate() {
        // 矫正器

        if (this.name === StateEnum.CLAIM) {
            findObjectsThen([id("vq="), id("udh")], () => {
                StateMachine.pushState(StateEnum.INIT);
            });
        }
        if (this.name !== StateEnum.CHECK) {
            findObjectsThen([text("我知道了"), text("立即购买")], () => {
                console.log("worng");

                StateMachine.pushState(StateEnum.CHECK);
            });
        }
        if (this.name !== StateEnum.SEARCH && text("直播已结束").exists() && !textContains("说点什么").exists()) {
            StateMachine.pushState(StateEnum.SEARCH);
        }
    }
}

export enum StateEnum {
    INIT = "init",
    CHECK = "check",
    PAY = "pay",
    CLAIM = "claim",
    SEARCH = "search",
}

export default AbstractState;
