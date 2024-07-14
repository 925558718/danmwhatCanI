import { findPic } from "./findPic"
import State from "./State"
import StateMachine from "./StateMachine"

class CheckState extends State {
    constructor(name) {
        super(name)
    }
    onEnd() { }
    onUpdate() {
        const noReward = indexInParent(4).desc('没有抽中福袋')
        if (noReward.exists()) {
            const button = indexInParent(13).text('我知道了')
            if(button.exists()) {
                const pos = pickup(button).center()
                click(pos.x, pos.y)
                sleep(10000)
                StateMachine.pushState('init')
            }
        }
    }

    onEnter() { super.onEnter() }
}

export default new CheckState("check")


//desc('没有抽中福袋')
//text('我知道了')