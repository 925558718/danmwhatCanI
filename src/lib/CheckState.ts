import State from "./State";
import StateMachine from "./StateMachine";

class CheckState extends State {
    name: string = "check";
    onEnd() {
        super.onEnd();
    }
    onUpdate() {
        const noReward = text("我知道了");
        const buyNow = text("立即购买");
        if (noReward.exists()) {
            toast("没中奖");
            const pos = pickup(noReward).center();
            let res = click(pos.x, pos.y);
            sleep(10000);
            res && StateMachine.pushState("init");
        }
        if (buyNow.exists()) {
            toast("中奖了");
            const pos = pickup(buyNow).center();
            click(pos.x, pos.y);
            sleep(3000);
            StateMachine.pushState("pay");
        }
    }
    onEnter() {
        super.onEnter();
    }
}

export default new CheckState();
