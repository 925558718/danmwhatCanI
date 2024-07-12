class StateMachine {
    constructor(states, InitState) {
        InitState.onEnter()
        this.currentState = InitState
        this.map = new Map()
        for (var i = 0; i < states.length; i++) {
            this.map.set(states[i].name, states[i])
        }
    }
    pushState = function (name) {
        if (this.map.has(name)) {
            let newState = this.map.get(name)
            this.currentState.onEnd()
            this.currentState = newState
            this.currentState.onEnter()
        }
    }
}

export default StateMachine
