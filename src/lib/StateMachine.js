class StateMachine {
    constructor() {}
    init() {
        this.currentState.onEnter()
    }
    config(states, InitState) {
        this.currentState = InitState
        this.map = {}
        for (var i = 0; i < states.length; i++) {
            this.map[states[i].name]= states[i]
        }
    }
    
    pushState(name) {
        if (this.map[name]) {
            let newState = this.map[name]
            this.currentState.onEnd()
            this.currentState = newState
            this.currentState.onEnter()
        }
    }
}

export default new StateMachine()
