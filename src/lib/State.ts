let w = null;
abstract class AbstractState {
    abstract name: string;
    onEnd() {
        if (w) {
            w.close();
        }
    }
    onEnter() {
        console.log(this.name + " enter");
        w = floaty.rawWindow(`<text color="#00ffff">当前是${this.name}状态</text>`);
    }
    abstract onUpdate(): void;
}

export default AbstractState;
