!function(){function t(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r,o,i=new(function(){function e(){t(this,e),this.startTime=Date.now(),this.currentState=null,this.map=new Map}return n(e,[{key:"init",value:function(t,e){for(var n=0;n<t.length;n++)this.map.set(t[n].name,t[n]);this.pushState(e)}},{key:"pushState",value:function(t){if(this.map.has(t)){this.startTime=Date.now();var e,n=this.map.get(t);null===(e=this.currentState)||void 0===e||e.onEnd(),this.currentState=n,this.currentState.onEnter()}}},{key:"getStayTime",value:function(){return Date.now()-this.startTime}}]),e}());function c(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){n(t);return}a.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n||t):o.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=a(t);return n=e?Reflect.construct(r,arguments,a(this).constructor):r.apply(this,arguments),n&&("object"==(n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}function p(t,e){var n=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var a=i.value;if(a.exists())return e(pickup(a)),!0}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return!1}function h(t,e){var n=t.exists();return n&&e(pickup(t)),n}function y(t){var e=[],n=!0;function r(){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0)(0,o.value)()}catch(t){n=!0,r=t}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}return{next:function o(i,c,a){return c&&!c.exists()?(a&&a(),n=!1):n&&e.push(function(){c?i(pickup(c)):i(null),sleep(t)}),{next:o,exec:r}},exec:r}}"function"==typeof SuppressedError&&SuppressedError;var v=function(){function e(){t(this,e)}return n(e,[{key:"onEnd",value:function(){var t;null===(t=this.w)||void 0===t||t.close()}},{key:"onEnter",value:function(){this.w=floaty.rawWindow('<text color="#00ffff">当前是'.concat(this.name,"状态</text>")),console.log(this.name+" enter")}},{key:"onUpdate",value:function(){"init"!==this.name&&"check"!==this.name&&p([id("vq="),id("udh")],function(){i.pushState("init")}),"check"!==this.name&&p([text("我知道了"),text("立即购买")],function(){i.pushState("check")}),text("直播已结束").exists()&&i.pushState("search")}}]),e}();(o=r||(r={})).INIT="init",o.CHECK="check",o.PAY="pay",o.CLAIM="claim",o.SEARCH="search";var x=new(function(e){f(l,e);var o=s(l);function l(){var e;return t(this,l),e=o.apply(this,arguments),e.name=r.INIT,e}return n(l,[{key:"onUpdate",value:function(){var t,e=this,n=this;return(t=function(){return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,function(t){return(u(a(l.prototype),"onUpdate",e).call(n),i.getStayTime()>6e5)?i.pushState(r.SEARCH):p([id("vq="),id("udh")],function(t){var e=t.bounds(),n=function(t,e){for(var n=captureScreen(),r=images.read("./assets/".concat("pk",".png")),o=[],i=0;i<10;i++){var c=images.pixel(r,Math.floor(Math.random()*r.width),Math.floor(Math.random()*r.height)),a=images.findColor(n,c,{threshold:10,region:e});a&&o.push(a)}if(o.length>=5){for(var u=o[0],l=u.x,f=u.y,s=1;s<o.length;s++)l=(o[s].x+l)/2,f=(o[s].y+f)/2;return{x:l,y:f}}return null}(0,[e.left,e.top,e.right-e.left,e.bottom-e.top]);n?(toast("发现福袋"),click(n.x,n.y)&&i.pushState(r.CLAIM)):(toast("当前没有福袋"),console.log("当前没有福袋"),sleep(6e4))}),[2]})},function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)})})()}}]),l}(v)),d=new(function(e){f(c,e);var o=s(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.CLAIM,e}return n(c,[{key:"onUpdate",value:function(){u(a(c.prototype),"onUpdate",this).call(this),p([text("参与成功 等待开奖"),text("活动已结束")],function(){toast("已参与 退出"),back(),i.pushState(r.CHECK)}),y(3e3).next(function(t){var e=t.center();click(e.x,e.y)},textStartsWith("加入粉丝团")).next(function(t){var e=t.center();click(e.x,e.y)},textStartsWith("加入粉丝团")).next(function(){back()}).next(function(){i.pushState(r.INIT)}).exec(),y(1e3).next(function(){p([text("一键发表评论"),text("发送评论 参与抽奖"),textContains("发送评论")],function(t){var e=t.center();console.log(e),click(e.x,e.y)})}).next(function(){h(text("开始观看直播任务 参与抽奖"),function(t){var e=t.center();console.log(e),click(e.x,e.y),sleep(1e3),back()})}).next(function(){i.pushState(r.CHECK)}).exec()}}]),c}(v)),b=new(function(e){f(c,e);var o=s(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.PAY,e}return n(c,[{key:"onUpdate",value:function(){u(a(c.prototype),"onUpdate",this).call(this),y(3e3).next(function(t){var e=t.center();click(e.x,e.y)},text("提交订单")).next(function(t){var e=t.center();click(e.x,e.y)},text("确认支付")).next(function(){back()}).next(function(){i.pushState(r.INIT)}).exec()}}]),c}(v)),m=new(function(e){f(c,e);var o=s(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.CHECK,e}return n(c,[{key:"onUpdate",value:function(){u(a(c.prototype),"onUpdate",this).call(this),h(text("我知道了"),function(t){toast("没中奖");var e=t.center();console.log("没中奖",e);var n=click(e.x,e.y);t.click(),sleep(1e4),n&&i.pushState(r.INIT)}),h(text("立即购买"),function(t){toast("中奖了");var e=t.center(),n=click(e.x,e.y);sleep(3e3),n&&i.pushState(r.PAY)})}}]),c}(v));!function(){for(requestScreenCapture()||(toast("请求截图失败"),exit()),i.init([x,d,b,m],r.INIT);;){var t;sleep(2e3),null===(t=i.currentState)||void 0===t||t.onUpdate(),sleep(2e3)}}()}();