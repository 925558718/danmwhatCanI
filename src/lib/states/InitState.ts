import { findObjectsThen, findPic } from "../utils/findPic";
import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";

class InitState extends State {
    name = StateEnum.INIT;
    async onUpdate() {
        findObjectsThen([id("vq="), id("udh")], (UiObject) => {
            const comp = UiObject.bounds();
            let pos = findPic("pk", [comp.left, comp.top, comp.right - comp.left, comp.bottom - comp.top]);
            if (pos) {
                toast("发现福袋");
                let res = click(pos.x, pos.y);
                res && StateMachine.pushState(StateEnum.CLAIM);
            } else {
                toast("当前没有福袋");
                console.log("当前没有福袋");
                sleep(60 * 1000);
            }
        });
    }
}

export default new InitState();
