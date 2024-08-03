import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder, findObjects } from "../../utils/findPic";

class PayState extends State {
    name = StateEnum.PAY;
    onUpdate() {
        doListBuilder(3000)
            .next(() => {
                const UiObject = findObjects([textContains("提交订单")]);
                if (UiObject) {
                    const { x, y } = UiObject.center();
                    click(x, y);
                    return true;
                }
                return false;
            })
            .next(() => {
                const UiObject = findObjects([textContains("确认支付")]);
                if (UiObject) {
                    const { x, y } = UiObject.center();
                    click(x, y);
                    return true;
                }
                return false;
            })
            .next(() => {
                return back();
            })
            .next(() => {
                StateMachine.pushState(StateEnum.INIT);
                return true;
            })
            .exec();
        doListBuilder(3000)
            .next(
                () => {
                    const UiObject = findObjects([textContains("确认支付")]);
                    if (UiObject) {
                        const { x, y } = UiObject.center();
                        click(x, y);
                        return true;
                    }
                    return false;
                }
            )
            .next(() => {
                return back();
            })
            .next(() => {
                return back();
            })
            .next(() => {
                StateMachine.pushState(StateEnum.INIT);
                return true;
            })
            .exec();
    }
}

export default new PayState();
