import State, { StateEnum } from "./State";

class StateMachine {
    public currentState: State | null;
    map: Map<StateEnum, State>;
    constructor() {
        this.currentState = null;
        this.map = new Map();
    }
    init(states: State[], name: StateEnum) {
        for (let i = 0; i < states.length; i++) {
            this.map.set(states[i].name, states[i]);
        }
        this.pushState(name);
    }

    pushState(name: StateEnum) {
        if (this.map.has(name)) {
            let newState = this.map.get(name) as State;
            this.currentState?.onEnd();
            this.currentState = newState;
            this.currentState.onEnter();
        }
    }
}

export default new StateMachine();
