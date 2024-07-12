import State from "./State"

class ClaimState extends State {
    constructor(name) {
        super(name)
    }
    onEnter() {
        toast("script start running")
    }
    onEnd() {}
    onUpdate() {}
}

export default new ClaimState("claim")
