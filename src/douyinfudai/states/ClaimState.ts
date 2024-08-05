import { nextPage, randomClick } from "@/utils/action";
import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder, findObjects, findObjectsThen } from "../../utils/findPic";
class ClaimState extends State {
    name = StateEnum.CLAIM;
    onUpdate() {
        super.onUpdate();
        // 刚进来发现在已参与
        let UI = findObjects([text("参与成功 等待开奖"), text("活动已结束"), textContains("还需看")]);
        if (UI) {
            console.log("已参与");
            back();
            StateMachine.pushState(StateEnum.CHECK);
            return;
        }

        let NO = findObjects([text("参与成功 等待开奖"), text("活动已结束"), textContains("还需看")]);
        if (UI) {
            console.log("已参与");
            back();
            StateMachine.pushState(StateEnum.CHECK);
            return;
        }

        if (!text("加入粉丝团（1钻）").exists()) {
            let isExist = findObjectsThen([textStartsWith("加入粉丝团"), textContains("开通店铺会员")], () => {
                //参加粉丝团
                doListBuilder(2000)
                    .next(() => {
                        const UiObject = findObjects([text("去开通店铺会员"), textContains("加入粉丝团")]);
                        const pos = UiObject?.center();
                        if (pos) {
                            click(pos.x, pos.y);
                        }
                        return UiObject !== null;
                    })
                    .next(() => {
                        const UiObject = findObjects([textContains("去开通店铺会员"), textContains("加入粉丝团")]);
                        const pos = UiObject?.center();
                        if (pos) {
                            click(pos?.x, pos?.y);
                        }
                        return UiObject !== null;
                    })
                    .next(() => {
                        return back();
                    })
                    .next(() => {
                        StateMachine.pushState(StateEnum.INIT);
                        return true;
                    })
                    .exec();
            });
            if (isExist) return;
        }

        //点击抽奖 有的会有观看时长限制 有两个步骤 大多数只有一步
        doListBuilder(500)
            .next(() => {
                let UI = findObjects([textContains("参考价值")]);
                if (UI) {
                    const content = UI?.text();
                    const idx = content.indexOf("参");
                    if (idx > -1) {
                        let price = content.substring(1, idx);
                        return +price < 1;
                    }
                }
                back();
                nextPage();
                StateMachine.pushState(StateEnum.INIT);
                return false;
            })
            .next(() => {
                const UiObject = findObjects([
                    text("一键发表评论"),
                    text("发送评论 参与抽奖"),
                    text("参与抽奖"),
                    textContains("发送评论").clickable(),
                ]);
                const pos = UiObject?.center();
                console.log(pos, "参与抽奖");
                if (pos) {
                    let res = randomClick(pos.x, pos.y);
                    console.log("是否点中:" + res);
                }
                const joined = findObjects([text("参与成功 等待抽奖")]);
                if (joined) {
                    console.log("参与了")
                    StateMachine.pushState(StateEnum.CHECK);
                    return false;
                }
                return UiObject !== null;
            })
            .next(() => {
                let look = findObjects([textContains("开始观看直播任务")]);
                if (look) {
                    const pos = look.center();
                    click(pos.x, pos.y);
                    sleep(1000);
                    back();
                } else {
                    doListBuilder(1000)
                        .next(() => {
                            const UiObject = findObjects([text("转发直播间 参与抽奖")]);
                            const pos = UiObject?.center();
                            if (pos) {
                                click(pos?.x, pos?.y);
                            }
                            return UiObject !== null;
                        })
                        .next(() => {
                            const UiObject = findObjects([text("嘎嘎你呗")]);
                            const pos = UiObject?.center();
                            if (pos) {
                                click(pos?.x, pos?.y);
                            }
                            return UiObject !== null;
                        })
                        .next(() => {
                            const UiObject = findObjects([textContains("发送")]);
                            const pos = UiObject?.center();
                            if (pos) {
                                click(pos?.x, pos?.y);
                            }
                            return UiObject !== null;
                        });
                }
                return true;
            })
            .next(() => {
                StateMachine.pushState(StateEnum.CHECK);
                return true;
            })
            .exec();
    }
}

export default new ClaimState();
//参与成功 等待开奖
