import { findObjects, findObjectsThen, findPic } from "../../utils/findPic";
import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { props } from "../props";

class InitState extends State {
    name = StateEnum.INIT;
    async onUpdate() {
        super.onUpdate();
        // 如果停留了10分钟没有红包 就寻找下一个直播间
        if (StateMachine.getStayTime() > 1000 * 60 * 3) {
            StateMachine.pushState(StateEnum.SEARCH);
            return;
        }
        let people = findObjects([descContains("在线观众")]);
        if (people) {
            let number = people.text();
            let idx = number.indexOf("万");
            if (idx > -1) {
                let count = number.substring(0, idx);
                props.peopleCount = +count * 10000;
            } else {
                props.peopleCount = +number;
            }
        }
        findObjectsThen([id("vq+"), id("vq="), id("udh"), id("vqg"), id("vr=")], (UiObject) => {
            const comp = UiObject.bounds();
            let pos = findPic("pk", [comp.left, comp.top, comp.right - comp.left, comp.bottom - comp.top]);
            if (pos) {
                console.log("发现福袋");
                let res = click(pos.x, pos.y);
                res && StateMachine.pushState(StateEnum.CLAIM);
            } else {
                console.log("当前没有福袋");
                sleep(30 * 1000);
            }
        });
    }
}

export default new InitState();
