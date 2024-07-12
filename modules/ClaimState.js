var State = require("./State");

const onEnter = () => {
  toast("start claim stage");
};
var ClaimState = new State("claim", onEnter);

module.exports = ClaimState;
