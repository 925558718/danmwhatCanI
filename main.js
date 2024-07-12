var State = require("State");
var StateMachine = require("StateMachine");
var InitState = require("InitState");
var ClaimState = require("ClaimState");
function main() {
  var machine = new StateMachine([InitState, ClaimState], InitState);
  while (0) {
    machine.currentState.onUpdate();
  }
}
main();
