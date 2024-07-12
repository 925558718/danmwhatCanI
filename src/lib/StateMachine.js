class StateMachine {
    constructor() {}
    init() {
        this.currentState.onEnter()
    }
    config(states, InitState) {
        this.currentState = InitState
        this.map = new Map()
        for (var i = 0; i < states.length; i++) {
            this.map.set(states[i].name, states[i])
        }
    }
    pushState(name) {
        if (this.map.has(name)) {
            let newState = this.map.get(name)
            this.currentState.onEnd()
            this.currentState = newState
            this.currentState.onEnter()
        }
    }
}

export default new StateMachine()
