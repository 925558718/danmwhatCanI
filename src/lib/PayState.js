import State from "./State";
import StateMachine from "./StateMachine";

class PayState extends State {
    constructor(name) {
        super(name);
    }
    onEnd() {}
    onUpdate() {
        const submitBill = text("提交订单");
        if (submitBill.exists()) {
            const { x, y } = pickup(submitBill).center();
            click(x, y);
            sleep(3000);
            back();
            sleep(3000);
            StateMachine.pushState("init");
        }
    }
    onEnter() {
        super.onEnter();
    }
}

export default new PayState("pay");
