import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class InitState extends State {
    name: string = "init";
    onEnd() {}
    async onUpdate() {
        const wraper = id("vq=");
        if (wraper.exists()) {
            const comp = pickup(wraper).bounds();
            let pos = findPic("pk", [comp.left, comp.top, comp.right - comp.left, comp.bottom - comp.top]);
            console.log(pos);
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
