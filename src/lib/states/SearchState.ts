import { nextPage } from "lib/utils/action";
import State, { StateEnum } from "../State";
import StateMachine from "../StateMachine";
import { doListBuilder, findThen } from "../utils/findPic";

class SearchState extends State {
    name = StateEnum.SEARCH;
    onUpdate() {
        super.onUpdate();
        nextPage();
        sleep(1000)
        if (textContains("说点什么").exists()) {
            StateMachine.pushState(StateEnum.INIT);
        }
    }
}

export default new SearchState();
