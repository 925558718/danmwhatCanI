import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder, findObjects } from "../../utils/findPic";

class ReceiveState extends State {
    name = StateEnum.RECEIVE;
    onUpdate() {
        doListBuilder(3000)
            .next(() => {
                const UiObject = findObjects([textContains("领取奖品")]);
                if (UiObject) {
                    const { x, y } = UiObject.center();
                    click(x, y);
                    return true;
                }
                return false;
            })
            .next(() => {
                const UiObject = findObjects([textContains("购买成功")]);
                if (UiObject) {
                    return back();
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
    }
}

export default new ReceiveState();
