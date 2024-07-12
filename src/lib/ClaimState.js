import State from "./State"
import StateMachine from "./StateMachine"

class ClaimState extends State {
    constructor(name) {
        super(name)
    }
    onEnter() {
        sleep(1000)
    }
    onEnd() {}
    onUpdate() {
        const path = `/sdcard/claim.png`
        captureScreen(path)
        const res = images.read(path)
        const templ = images.read("/sdcard/小图.png")
        var p = findImage(img, templ, {
            threshold: 0.8,
        })

        click(p.x, p.y)

        sleep(1000)

        click(0, 0)

        captureScreen(path)
        let time = ocr()

        setTimeout(function () {
            StateMachine.pushState("")
        }, 5000)
    }
}

export default new ClaimState("claim")
