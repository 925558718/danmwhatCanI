import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder } from "../../utils/findPic";

class PayState extends State {
    name = StateEnum.PAY;
    onUpdate() {
        doListBuilder(3000)
            .next((o1) => {
                if (o1) {
                    const { x, y } = o1.center();
                    click(x, y);
                }
            }, ["提交订单"])
            .next((o2) => {
                if (o2) {
                    const { x, y } = o2.center();
                    click(x, y);
                }
            }, ["确认支付"])
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
