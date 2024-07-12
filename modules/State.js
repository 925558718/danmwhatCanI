function emptyInvoke() {}
function State(name, enterFn, endFn, updateFn) {
  this.name = name;
  this.enterFn = enterFn || emptyInvoke;
  this.endFn = endFn || emptyInvoke;
  this.updateFn = updateFn || emptyInvoke;
}

State.prototype.onEnter = function () {
  this.enterFn();
};

State.prototype.onEnd = function () {
  this.endFn();
};

State.prototype.onUpdate = function () {
  this.updateFn();
};

module.exports = State
