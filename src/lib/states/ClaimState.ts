import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";
import { doListBuilder, findObjectsThen, findThen } from "../utils/findPic";
class ClaimState extends State {
    name = StateEnum.CLAIM;
    onUpdate() {
        super.onUpdate();
        // 刚进来发现在已参与
        findObjectsThen([text("参与成功 等待开奖"), text("活动已结束")], () => {
            toast("已参与 退出");
            back();
            StateMachine.pushState(StateEnum.CHECK);
        });

        let isExist = findObjectsThen([textStartsWith("加入粉丝团"), textContains("开通店铺会员")], () => {
            //参加粉丝团
            console.log(21);
            
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

        //点击抽奖 有的会有观看时长限制 有两个步骤 大多数只有一步
        doListBuilder(1000)
            .next(() => {
                findObjectsThen(
                    [text("一键发表评论"), text("发送评论 参与抽奖"), textContains("发送评论")],
                    (UiObject) => {
                        console.log(123);
                        
                        const pos = UiObject.center();
                        console.log(pos);
                        click(pos.x, pos.y);
                    }
                );
            })
            .next(() => {
                findThen(text("开始观看直播任务 参与抽奖"), (UiObject) => {
                    const pos = UiObject.center();
                    console.log(pos);
                    click(pos.x, pos.y);
                    sleep(1000);
                    back();
                });
            })
            .next(() => {
                StateMachine.pushState(StateEnum.CHECK);
            })
            .exec();
    }
}

export default new ClaimState();
