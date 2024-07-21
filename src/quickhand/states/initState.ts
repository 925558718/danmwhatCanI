import { doListBuilder, findObjectsThen, findPic, findThen } from "../../utils/findPic";
import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";

class InitState extends State {
    name = StateEnum.INIT;
    async onUpdate() {
        findThen(text("去赚钱"), (UiObject) => {
            const comp = UiObject.bounds();
            click(comp)
        });
    }
}

export default new InitState();
