var State = require("./State");

var onEnter = () => {
  toast("script start running");
};
var InitState = new State("claim", onEnter);

module.exports = InitState;
