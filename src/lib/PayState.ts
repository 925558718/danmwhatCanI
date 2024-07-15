import State from "./State";
import StateMachine from "./StateMachine";

class PayState extends State {
    name: string = "pay";
    onEnd() {
        super.onEnd();
    }
    onUpdate() {
        const submitBill = text("提交订单");
        if (submitBill.exists()) {
            const { x, y } = pickup(submitBill).center();
            click(x, y);

            sleep(3000);
            const confirmPayPos = pickup(text("确认支付")).center();
            click(confirmPayPos.x, confirmPayPos.y);
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

export default new PayState();
