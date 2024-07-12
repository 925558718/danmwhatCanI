import State from "./State"
import StateMachine from "./StateMachine"

class CheckRewardState extends State {
    constructor(name) {
        super(name)
    }
    onEnd() {}
    onUpdate() {
        const path = `/sdcard/check.png`
        captureScreen(path)
        const img = images.read(path)
        const templ = images.read("/sdcard/小图.png")
        const templ2 = images.read("/sdcard/小图.png")
        var p = findImage(img, templ, {
            threshold: 0.8,
        })
        if (p) {
            click(p.x, p.y)
            StateMachine.pushState("claim")
        }

        var p2 = findImage(img, templ, {
            threshold: 0.8,
        })
        if (p2) {
            click(p.x, p.y)
            StateMachine.pushState("claim")
        }
    }
    onEnter() {}
}

export default new CheckRewardState("check")
