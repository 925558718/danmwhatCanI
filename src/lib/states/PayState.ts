import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";
import { doListBuilder } from "../utils/findPic";

class PayState extends State {
    name = StateEnum.PAY;
    onUpdate() {
        super.onUpdate();
        doListBuilder(3000)
            .next((o1) => {
                const { x, y } = o1.center();
                click(x, y);
            }, text("提交订单"))
            .next((o2) => {
                const { x, y } = o2.center();
                click(x, y);
            }, text("确认支付"))
            .next(() => {
                back();
            })
            .next(() => {
                StateMachine.pushState(StateEnum.INIT);
            })
            .exec();
    }
}

export default new PayState();
