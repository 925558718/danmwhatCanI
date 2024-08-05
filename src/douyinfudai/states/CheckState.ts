import { randomClick } from "@/utils/action";
import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { findObjects } from "../../utils/findPic";

class CheckState extends State {
    name = StateEnum.CHECK;
    onUpdate() {
        super.onUpdate();
        if (StateMachine.getStayTime() > 1000 * 60 * 15) {
            StateMachine.pushState(StateEnum.INIT);
            return;
        }
        const Iknow = findObjects([text("我知道了")])
        if (Iknow) {
            console.log("没中奖");
            const pos = Iknow.center();
            randomClick(pos.x,pos.y)
            StateMachine.pushState(StateEnum.INIT);
        }

        const buy = findObjects([text("立即购买")])
        if (buy) {
            console.log("中奖了");
            const pos = buy.center();
            click(pos.x, pos.y);
            sleep(3000);
            StateMachine.pushState(StateEnum.PAY);
        }

        const reward = findObjects([text("立即购买")])
        if (reward) {
            let agree = findObjects([textContains("已阅读并同意")])
            if (agree) {
                const comp = agree.bounds();
                click(comp.left + 5, comp.top + 5);
            }
            sleep(200);
            const { x, y } = reward.center();
            click(x, y);
            StateMachine.pushState(StateEnum.PAY);
        }
    }
}

export default new CheckState();
