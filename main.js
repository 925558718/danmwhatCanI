!function(){"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(t,e,n){return e=i(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,c()?Reflect.construct(e,n||[],i(t).constructor):e.apply(t,n))}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e,n){return e&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},o.apply(null,arguments)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function u(){u=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new G(r||[]);return o(a,"_invoke",{value:S(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function m(){}function w(){}function b(){}var x={};l(x,a,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(N([])));k&&k!==n&&r.call(k,a)&&(x=k);var O=b.prototype=m.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var f=h(e,n,r);if("normal"===f.type){if(o=r.done?d:y,f.arg===g)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=d,r.method="throw",r.arg=f.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(O,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new j(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(O),l(O,f,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function l(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:e+""}var s=function(){return r((function t(){n(this,t)}),[{key:"init",value:function(){this.currentState.onEnter()}},{key:"config",value:function(t,e){this.currentState=e,this.map={};for(var n=0;n<t.length;n++)this.map[t[n].name]=t[n]}},{key:"pushState",value:function(t){if(this.map[t]){var e=this.map[t];this.currentState.onEnd(),this.currentState=e,this.currentState.onEnter()}}}])}(),h=new s;function p(t){var e=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=captureScreen(),a=images.read("./assets/".concat(t,".png"));sleep(1e3);var c=findImage(i,a,{threshold:.6,region:[e,n,o,r]});return console.log(c),sleep(1e3),c}var y=function(){return r((function t(e){n(this,t),this.name=e}),[{key:"onEnd",value:function(){}},{key:"onEnter",value:function(){console.log(this.name+" enter"),sleep(1e3)}},{key:"onUpdate",value:function(){}}])}(),v=function(c){function f(t){return n(this,f),e(this,f,[t])}return a(f,c),r(f,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:(l=u().mark((function t(){var e,n,r,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=id("udh").minWidth(20)).exists()&&e.childCount?(n=pickup(e).bounds(),r=n.height(),o=n.width(),i=p("pk",255,n.left,n.top,r,o),click(i.x,i.y)&&h.pushState("claim")):(toast("当前没有福袋"),console.log("当前没有福袋"),sleep(6e4));case 2:case"end":return t.stop()}}),t)})),s=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=l.apply(e,n);function a(e){t(i,r,o,a,c,"next",e)}function c(e){t(i,r,o,a,c,"throw",e)}a(void 0)}))},function(){return s.apply(this,arguments)})},{key:"onEnter",value:function(){o(i(f.prototype),"onEnter",this).call(this)}}]);var l,s}(y),d=new v("init");var g=new(function(t){function c(t){return n(this,c),e(this,c,[t])}return a(c,t),r(c,[{key:"onEnter",value:function(){o(i(c.prototype),"onEnter",this).call(this)}},{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){if(text("参与成功 等待开奖").exists()||text("活动已结束").exists())return toast("已参与 退出"),back(),void h.pushState("check");var t,e,n=(t=text("一键发表评论"),e=text("发送评论 参与抽奖"),t.exists()?t:e.exists()?e:text("what can i Say"));if(n.exists()){var r=pickup(n).center();console.log(r),click(r.x,r.y),sleep(1e3),h.pushState("check")}}}])}(y))("claim"),m=new(function(t){function c(t){return n(this,c),e(this,c,[t])}return a(c,t),r(c,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){var t=text("提交订单");if(t.exists()){var e=pickup(t).center(),n=e.x,r=e.y;click(n,r),sleep(3e3),back(),sleep(3e3),h.pushState("init")}}},{key:"onEnter",value:function(){o(i(c.prototype),"onEnter",this).call(this)}}])}(y))("pay"),w=new(function(t){function c(t){return n(this,c),e(this,c,[t])}return a(c,t),r(c,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){var t=text("我知道了"),e=text("立即购买");if(t.exists()){var n=pickup(t).center();click(n.x,n.y),sleep(1e4),h.pushState("init")}if(e.exists()){var r=pickup(e).center();click(r.x,r.y),sleep(3e3),h.pushState("pay")}}},{key:"onEnter",value:function(){o(i(c.prototype),"onEnter",this).call(this)}}])}(y))("check");!function(){for(requestScreenCapture()||(toast("请求截图失败"),exit()),h.config([d,g,m,w],d),h.init();;)sleep(1e3),h.currentState.onUpdate(),sleep(1e3)}()}();
