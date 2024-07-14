import { findPic } from "./findPic"
import State from "./State"
import StateMachine from "./StateMachine"

class ClaimState extends State {
    constructor(name) {
        super(name)
    }
    onEnter() {
        super.onEnter()
    }
    onEnd() { }
    onUpdate() {

        const canClick = !text('参与成功 等待开奖').exists() && !text('活动已结束').exists()
        if (canClick) {
            const button = text('一键发表评论')
            if (button.exists()) {
                const pos = pickup(button).center()
                console.log(pos);
                click(pos.x, pos.y)
                sleep(1000)
            }

        } else {
            toast("已参与 退出")
            const wrap = indexInParent(1).className('com.lynx.tasm.ui.image.FlattenUIImage')
            let pos = pickup(wrap).bounds()
            click(pos.left + 10, pos.top - 10)
            StateMachine.pushState('check')
        }

    }



}

export default new ClaimState("claim")

