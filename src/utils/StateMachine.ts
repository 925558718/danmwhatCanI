import State, { StateEnum } from "./State";

class StateMachine {
    public currentState: State | null;
    map: Map<StateEnum, State>;
    private count: number = 0;
    private hooks: (() => void)[] = [];
    constructor() {
        this.currentState = null;
        this.map = new Map();
    }
    init(states: State[], name: StateEnum) {
        for (let i = 0; i < states.length; i++) {
            this.map.set(states[i].name as StateEnum, states[i]);
        }
        this.pushState(name);
    }

    pushState(name: StateEnum) {
        if (this.map.has(name)) {
            this.count = 0;
            let newState = this.map.get(name) as State;
            this.currentState?.onEnd();
            this.currentState = newState;
            this.currentState.onEnter();
        }
    }
    getStayTime() {
        return this.count;
    }
    addHooks(fn: () => void) {
        this.hooks.push(fn);
    }
    execHooks() {
        this.count = this.count + 1;
        for (let i = 0; i < this.hooks.length; i++) {
            this.hooks[i]();
        }
    }
}

export default new StateMachine();
