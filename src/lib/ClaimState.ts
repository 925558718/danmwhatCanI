import State from "./State";
import StateMachine from "./StateMachine";

class ClaimState extends State {
    name: string = "claim";
    onEnd() {
        super.onEnd();
    }
    onUpdate() {
        if (hasAttended()) {
            toast("已参与 退出");
            back();
            StateMachine.pushState("check");
            return;
        }
        if (textStartsWith("加入粉丝团").exists()) {
            while (textStartsWith("加入粉丝团").exists()) {
                const join = pickup(textStartsWith("加入粉丝团")).center();
                click(join.x, join.y);
                sleep(3000);
            }
            back();
        }
        const button = clickButton();

        if (button) {
            const pos = button.center();
            console.log(pos);
            click(pos.x, pos.y);
        }
    }
    onEnter() {
        super.onEnter();
    }
}
function clickButton() {
    let arr = [
        text("一键发表评论"),
        text("发送评论 参与抽奖"),
        textContains("发送评论"),
        text("开始观看直播任务 参与抽奖"),
    ];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].exists()) return arr[i].findOnce();
    }
    return null;
}

function hasAttended(): boolean {
    return existsOne(text("参与成功 等待开奖"), text("活动已结束"));
}

export default new ClaimState();

className("com.lynx.tasm.behavior.ui.text.FlattenUIText");

// action('FOCUS', 'SELECT', 'CLEAR_SELECTION', 'ACCESSIBILITY_FOCUS', 'SCROLL_FORWARD', 'SCROLL_BACKWARD', 'SHOW_ON_SCREEN')
