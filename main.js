(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var StateMachine = /*#__PURE__*/_createClass(function StateMachine(states, InitState) {
    _classCallCheck(this, StateMachine);
    _defineProperty(this, "pushState", function (name) {
      if (this.map.has(name)) {
        var newState = this.map.get(name);
        this.currentState.onEnd();
        this.currentState = newState;
        this.currentState.onEnter();
      }
    });
    InitState.onEnter();
    this.currentState = InitState;
    this.map = new Map();
    for (var i = 0; i < states.length; i++) {
      this.map.set(states[i].name, states[i]);
    }
  });

  var State = /*#__PURE__*/function () {
    function State(name) {
      _classCallCheck(this, State);
      this.name = name;
    }
    return _createClass(State, [{
      key: "onEnd",
      value: function onEnd() {}
    }, {
      key: "onEnter",
      value: function onEnter() {}
    }, {
      key: "onUpdate",
      value: function onUpdate() {}
    }]);
  }();

  var InitState = /*#__PURE__*/function (_State) {
    function InitState(name) {
      _classCallCheck(this, InitState);
      return _callSuper(this, InitState, [name]);
    }
    _inherits(InitState, _State);
    return _createClass(InitState, [{
      key: "onEnd",
      value: function onEnd() {}
    }, {
      key: "onUpdate",
      value: function onUpdate() {}
    }, {
      key: "onEnter",
      value: function onEnter() {
        toast("script start running");
        var path = "/sdcard/init.png";
        captureScreen(path);
        var res = images.read(path);
        console.log(res);
      }
    }]);
  }(State);
  var InitState$1 = new InitState("init");

  var ClaimState = /*#__PURE__*/function (_State) {
    function ClaimState(name) {
      _classCallCheck(this, ClaimState);
      return _callSuper(this, ClaimState, [name]);
    }
    _inherits(ClaimState, _State);
    return _createClass(ClaimState, [{
      key: "onEnter",
      value: function onEnter() {
        toast("script start running");
      }
    }, {
      key: "onEnd",
      value: function onEnd() {}
    }, {
      key: "onUpdate",
      value: function onUpdate() {}
    }]);
  }(State);
  var ClaimState$1 = new ClaimState("claim");

  function main() {
    if (!requestScreenCapture()) {
      toast("请求截图失败");
      exit();
    }
    var machine = new StateMachine([InitState$1, ClaimState$1], InitState$1);
    while (0) {
      machine.currentState.onUpdate();
    }
  }
  main();

}));
