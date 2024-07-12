import State from "./State"
import StateMachine from "./StateMachine"

class PayState extends State {
    constructor(name) {
        super(name)
    }
    onEnd() {}
    onUpdate() {
        const path = `/sdcard/check.png`
        captureScreen(path)
        const img = images.read(path)
        const templ = images.read("/sdcard/小图.png")
        StateMachine.pushState("init")
    }
    onEnter() {}
}

export default new CheckRewardState("pay")
