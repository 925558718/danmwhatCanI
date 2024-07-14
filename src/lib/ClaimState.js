import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class ClaimState extends State {
    constructor(name) {
        super(name);
    }
    onEnter() {
        super.onEnter();
    }
    onEnd() {}
    onUpdate() {
        if (hasAttended()) {
            toast("已参与 退出");
            back();
            StateMachine.pushState("check");
            return;
        }
        const button = clickButton();
        if (button.exists()) {
            const pos = pickup(button).center();
            console.log(pos);
            click(pos.x, pos.y);
            sleep(1000);
            StateMachine.pushState("check");
        }
    }
}

function clickButton() {
    const a1 = text("一键发表评论");
    const a2 = text("发送评论 参与抽奖");
    if (a1.exists()) return a1;
    if (a2.exists()) return a2;
    return text("what can i Say");
}

function hasAttended() {
    return text("参与成功 等待开奖").exists() || text("活动已结束").exists();
}

export default new ClaimState("claim");
