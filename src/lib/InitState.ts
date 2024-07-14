import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class InitState extends State {
    name: string = "init";
    onEnd() {}
    async onUpdate() {
        const udh = id("udh").minWidth(20);
        if (udh.exists()) {
            toast("发现福袋");
            let rect = pickup(udh).bounds();
            const height = rect.height();
            const width = rect.width();
            let pos = findPic("pk", 255, [rect.left, rect.top, width, height]);
            let res = click(pos.x, pos.y);
            res && StateMachine.pushState("claim");
        } else {
            toast("当前没有福袋");
            console.log("当前没有福袋");
            sleep(60 * 1000);
        }
    }
    onEnter() {
        super.onEnter();
    }
}

export default new InitState();
