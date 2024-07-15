abstract class AbstractState {
    abstract name: string;
    abstract onEnd(): void;
    onEnter() {
        toast(this.name + " enter");
        console.log(this.name + " enter");
    }
    abstract onUpdate(): void;
}

export default AbstractState;
