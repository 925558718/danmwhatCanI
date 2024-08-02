import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder, findThen } from "../../utils/findPic";

class CheckState extends State {
    name = StateEnum.CHECK;
    onUpdate() {
        super.onUpdate();
        if (StateMachine.getStayTime() > 1000 * 60 * 20) {
            StateMachine.pushState(StateEnum.INIT);
            return;
        }

        findThen(text("我知道了"), (UiObject) => {
            console.log("没中奖");
            const pos = UiObject.center();
            console.log("没中奖", pos);
            let res = click(pos.x, pos.y);
            UiObject.click();
            sleep(10000);
            res && StateMachine.pushState(StateEnum.INIT);
        });
        findThen(text("立即购买"), (UiObject) => {
            console.log("中奖了");
            const pos = UiObject.center();
            const res = click(pos.x, pos.y);
            sleep(3000);
            res && StateMachine.pushState(StateEnum.PAY);
        });
        findThen(text("立即领取奖品"), (UI) => {
            findThen(textContains("已阅读并同意"), (comgress) => {
                const comp = comgress.bounds();
                click(comp.left + 5, comp.top + 5);
            });
            sleep(200);
            const { x, y } = UI.center();
            click(x, y);
            StateMachine.pushState(StateEnum.PAY);
        });
    }
}

export default new CheckState();
