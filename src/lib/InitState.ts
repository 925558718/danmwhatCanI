import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class InitState extends State {
    name: string = "init";
    onEnd() {
        super.onEnd();
    }
    async onUpdate() {
        const wrapper = id("vq=");
        const wrapper2 = id("udh");
        if (wrapper.exists() || wrapper2.exists()) {
            const comp = pickup(wrapper.exists() ? wrapper : wrapper2).bounds();
            let pos = findPic("pk", [comp.left, comp.top, comp.right - comp.left, comp.bottom - comp.top]);
            if (pos) {
                toast("发现福袋");
                let res = click(pos.x, pos.y);
                res && StateMachine.pushState("claim");
            } else {
                toast("当前没有福袋");
                console.log("当前没有福袋");
                sleep(60 * 1000);
            }
        }
    }
    onEnter() {
        super.onEnter();
    }
}

export default new InitState();
