import { findPic } from "./findPic";
import State from "./State";
import StateMachine from "./StateMachine";

class CheckState extends State {
    constructor(name) {
        super(name);
    }
    onEnd() {}
    onUpdate() {
        const noReward = text("我知道了");
        const buyNow = text("立即购买");
        if (noReward.exists()) {
            const pos = pickup(noReward).center();
            click(pos.x, pos.y);
            sleep(10000);
            StateMachine.pushState("init");
        }
        if (buyNow.exists()) {
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

export default new CheckState("check");

//desc('没有抽中福袋')
//text('我知道了')
