import State from "./State"
import StateMachine from "./StateMachine"

class InitState extends State {
    constructor(name) {
        super(name)
    }
    onEnd() {}
    async onUpdate(worker) {
        toast("script start running")
        const path = `/sdcard/init.png`
        captureScreen(path)
        const res = images.read(path)
        var img = images.read(path)
        var templ = images.read("/sdcard/小图.png")
        var p = findImage(img, templ, {
            threshold: 0.8,
        })
        if (p) {
            click(p.x, p.y)
            StateMachine.pushState("claim")
        }

        const {
            data: { text },
        } = await worker.recognize("https://tesseract.projectnaptha.com/img/eng_bw.png")
        console.log(text)
        await worker.terminate()
    }
    onEnter() {}
}

export default new InitState("init")
