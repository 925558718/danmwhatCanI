import State from "./State";
import StateMachine from "./StateMachine";

class ClaimState extends State {
    name: string = "claim";
    onEnd() {}
    onUpdate() {
        if (hasAttended()) {
            toast("已参与 退出");
            back();
            StateMachine.pushState("check");
            return;
        }
        if (text("加入粉丝团").exists()) {
            const join1 = pickup(text("加入粉丝团")).center();
            click(join1.x, join1.y);
            sleep(3000);
            const join2 = pickup(text("加入粉丝团")).center();
            click(join2.x, join2.y);
            sleep(3000);
            back();
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
    onEnter() {
        super.onEnter();
    }
}

function clickButton() {
    const a1 = text("一键发表评论");
    const a2 = text("发送评论 参与抽奖");
    if (a1.exists()) return a1;
    if (a2.exists()) return a2;
    return text("what can i Say");
}

function hasAttended(): boolean {
    return existsOne(text("参与成功 等待开奖"), text("活动已结束"));
}

export default new ClaimState();
