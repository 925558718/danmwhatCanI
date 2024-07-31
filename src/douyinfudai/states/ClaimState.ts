import State, { StateEnum } from "../../utils/State";
import StateMachine from "../../utils/StateMachine";
import { doListBuilder, findObjectsThen, findThen } from "../../utils/findPic";
class ClaimState extends State {
    name = StateEnum.CLAIM;
    onUpdate() {
        super.onUpdate();
        // 刚进来发现在已参与
        findObjectsThen([text("参与成功 等待开奖"), text("活动已结束"),textContains("还需看")], () => {
            toast("已参与 退出");
            back();
            StateMachine.pushState(StateEnum.CHECK);
        });
        if (!text("加入粉丝团（1钻）").exists()) {
            let isExist = findObjectsThen([textStartsWith("加入粉丝团"), textContains("开通店铺会员")], () => {
                //参加粉丝团
                doListBuilder(2000)
                    .next(
                        (UiObject) => {
                            const { x, y } = UiObject.center();
                            click(x, y);
                        },
                        ["加入粉丝团", "去开通店铺会员"]
                    )
                    .next(
                        (UiObject) => {
                            const { x, y } = UiObject.center();
                            console.log(x, y);

                            click(x, y);
                        },
                        ["加入粉丝团", "同意协议"]
                    )
                    .next(() => {
                        back();
                    })
                    .next(() => {
                        StateMachine.pushState(StateEnum.INIT);
                    })
                    .exec();
            });
            if (isExist) return;
        }

        //点击抽奖 有的会有观看时长限制 有两个步骤 大多数只有一步
        doListBuilder(2000)
            .next(() => {
                findObjectsThen(
                    [text("一键发表评论"), text("发送评论 参与抽奖"), text("参与抽奖"), textContains("发送评论").clickable()],
                    (UiObject) => {
                        const pos = UiObject.center();
                        click(pos.x, pos.y);
                    }
                );
            })
            .next(() => {
                findThen(textContains("开始观看直播任务"), (UiObject) => {
                    const pos = UiObject.center();
                    click(pos.x, pos.y);
                    sleep(1000);
                    back();
                });
                doListBuilder(1000)
                    .next(
                        (UiObject) => {
                            const pos = UiObject.center();
                            click(pos.x, pos.y);
                        },
                        ["转发直播间 参与抽奖"]
                    )
                    .next(
                        (UiObject) => {
                            const pos = UiObject.center();
                            click(pos.x, pos.y);
                        },
                        ["嘎嘎你呗"]
                    )
                    .next(
                        (UiObject) => {
                            const pos = UiObject.center();
                            click(pos.x, pos.y);
                        },
                        ["发送"]
                    );
            })
            .next(() => {
                StateMachine.pushState(StateEnum.CHECK);
            })
            .exec();
    }
}

export default new ClaimState();
