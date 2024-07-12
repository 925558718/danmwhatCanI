import State from "./State"
class InitState extends State {
    constructor(name) {
        super(name)
    }
    onEnd() {}
    onUpdate() {}
    onEnter() {
        toast("script start running")
        const path = `/sdcard/init.png`
        captureScreen(path)
        const res=images.read(path)
        console.log(res)
    }
}

export default new InitState("init")
