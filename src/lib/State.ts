abstract class AbstractState {
    abstract name: StateEnum;
    private w: org.autojs.autojs.runtime.api.Floaty.JsRawWindow | null;
    onEnd() {
        this.w.close();
    }
    onEnter() {
        this.w = floaty.rawWindow(`<text color="#00ffff">当前是${this.name}状态</text>`);
        console.log(this.name + " enter");
    }
    abstract onUpdate(): void;
}

export enum StateEnum {
    INIT = "init",
    CHECK = "check",
    PAY = "pay",
    CLAIM = "state",
}

export default AbstractState;
