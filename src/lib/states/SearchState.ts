import { nextPage } from "lib/utils/action";
import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";
import { doListBuilder, findThen } from "../utils/findPic";

class SearchState extends State {
    name = StateEnum.SEARCH;
    onUpdate() {
        super.onUpdate();
        nextPage();
        sleep(3000);
        if (!text("直播已结束").exists()) {
            StateMachine.pushState(StateEnum.INIT);
        }
    }
}

export default new SearchState();
