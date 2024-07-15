import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class InitState extends State {
    name: string = "init";
    onEnd() {}
    async onUpdate() {
        let pos = findPic("pk", 0, [0, 0, device.width / 4, device.height / 4]);
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
    onEnter() {
        super.onEnter();
    }
}

export default new InitState();
