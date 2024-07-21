import { doListBuilder, findObjectsThen, findPic, findThen } from "../../utils/findPic";
import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";

class TaskState extends State {
    name = StateEnum.INIT;
    async onUpdate() {
        let checkIn = findThen(text("立即签到"), (UiObject) => {
            const comp = UiObject.bounds();
            click(comp)
        });
        if(checkIn) {
            back();
        }
        let goClaim = findThen(text("去领取"), (UiObject) => {
            const comp = UiObject.bounds();
            click(comp)
        });
    }
}


//一键领取 开心收下
export default new TaskState();
