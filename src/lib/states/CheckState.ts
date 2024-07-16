import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";
import { findThen } from "../utils/findPic";

class CheckState extends State {
    name = StateEnum.CHECK;
    onUpdate() {
        findThen(text("我知道了"), (UiObject) => {
            toast("没中奖");
            const pos = UiObject.center();
            console.log("没中奖", pos);
            let res = click(pos.x, pos.y);
            UiObject.click()
            sleep(10000);
            res && StateMachine.pushState(StateEnum.INIT);
        });
        findThen(text("立即购买"), (UiObject) => {
            toast("中奖了");
            const pos = UiObject.center();
            const res = click(pos.x, pos.y);
            sleep(3000);
            res && StateMachine.pushState(StateEnum.PAY);
        });
    }
}

export default new CheckState();
