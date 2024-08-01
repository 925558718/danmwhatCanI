import StateMachine from "./StateMachine";

abstract class AbstractState {
    abstract name: string;
    private w: org.autojs.autojs.runtime.api.Floaty.JsRawWindow | null | undefined;
    onEnd() {
        this.w?.close();
    }
    onEnter() {
        this.w = floaty.rawWindow(`<text color="#00ffff">当前是${this.name}状态</text>`);
        console.log(this.name + " enter");
    }
    onUpdate() {
        StateMachine.execHooks()
    }
}

export enum StateEnum {
    INIT = "init",
    CHECK = "check",
    PAY = "pay",
    CLAIM = "claim",
    SEARCH = "search",
}

export default AbstractState;
