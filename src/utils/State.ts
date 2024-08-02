import StateMachine from "./StateMachine";

abstract class AbstractState {
    abstract name: string;
    onEnd() {}
    onEnter() {
        console.log(`${this.name} Enter`)
    }
    onUpdate() {
        StateMachine.execHooks();
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
