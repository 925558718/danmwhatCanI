class State {
    constructor(name) {
        this.name = name;
    }
    onEnd() {}
    onEnter() {
        console.log(this.name + " enter");
        sleep(1000);
    }
    onUpdate() {}
}

export default State;
