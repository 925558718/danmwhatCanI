import State from "./State";

class StateMachine {
    public currentState: State;
    map: Map<string, State>;
    constructor() {
        this.currentState = null;
        this.map = new Map();
    }
    init() {
        this.currentState.onEnter();
    }
    config(states: State[], InitState: State) {
        this.currentState = InitState;
        for (var i = 0; i < states.length; i++) {
            this.map.set(states[i].name, states[i]);
        }
    }

    pushState(name: string) {
        if (this.map.has(name)) {
            let newState = this.map.get(name) as State;
            this.currentState.onEnd();
            this.currentState = newState;
            this.currentState.onEnter();
        }
    }
}

export default new StateMachine();
