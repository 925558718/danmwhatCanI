!function(){function t(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r,o,i=new(function(){function e(){t(this,e),this.currentState=null,this.map=new Map}return n(e,[{key:"init",value:function(t,e){for(var n=0;n<t.length;n++)this.map.set(t[n].name,t[n]);this.pushState(e)}},{key:"pushState",value:function(t){if(this.map.has(t)){var e,n=this.map.get(t);null===(e=this.currentState)||void 0===e||e.onEnd(),this.currentState=n,this.currentState.onEnter()}}}]),e}());function c(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){n(t);return}u.done?e(a):Promise.resolve(a).then(r,o)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=f(t);return n=e?Reflect.construct(r,arguments,f(this).constructor):r.apply(this,arguments),n&&("object"==(n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}function s(t,e){for(var n=0;n<t.length;n++)if(t[n].exists())return e(pickup(t[n])),!0;return!1}function p(t,e){var n=t.exists();return n?(e(pickup(t)),!0):n}function h(t){var e=[],n=!0,r=function(){for(var t=0;t<e.length;t++)e[t]()};return{next:function o(i,c){return c&&!c.exists()?n=!1:n&&e.push(function(){c?i(pickup(c)):i(),sleep(t)}),{next:o,exec:r}},exec:r}}"function"==typeof SuppressedError&&SuppressedError;var v=function(){function e(){t(this,e)}return n(e,[{key:"onEnd",value:function(){var t;null===(t=this.w)||void 0===t||t.close()}},{key:"onEnter",value:function(){this.w=floaty.rawWindow('<text color="#00ffff">当前是'.concat(this.name,"状态</text>")),console.log(this.name+" enter")}}]),e}();(o=r||(r={})).INIT="init",o.CHECK="check",o.PAY="pay",o.CLAIM="claim";var y=new(function(e){a(u,e);var o=l(u);function u(){var e;return t(this,u),e=o.apply(this,arguments),e.name=r.INIT,e}return n(u,[{key:"onUpdate",value:function(){var t;return(t=function(){return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,function(t){return s([id("vq="),id("udh")],function(t){var e=t.bounds(),n=function(t,e){for(var n=captureScreen(),r=images.read("./assets/".concat("pk",".png")),o=[],i=0;i<10;i++){var c=images.pixel(r,Math.floor(random()*r.width),Math.floor(random()*r.height)),u=images.findColor(n,c,{threshold:10,region:e});u&&o.push(u)}if(o.length>=5){var a=o[0].x,f=o[0].y;if(o.length>1)for(var l=0;l++;o.length)a=(o[l].x+a)/2,f=(o[l].y+f)/2;return{x:a,y:f}}return null}(0,[e.left,e.top,e.right-e.left,e.bottom-e.top]);n?(toast("发现福袋"),click(n.x,n.y)&&i.pushState(r.CLAIM)):(toast("当前没有福袋"),console.log("当前没有福袋"),sleep(6e4))}),[2]})},function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){c(i,r,o,u,a,"next",t)}function a(t){c(i,r,o,u,a,"throw",t)}u(void 0)})})()}}]),u}(v)),x=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.CLAIM,e}return n(c,[{key:"onUpdate",value:function(){s([text("参与成功 等待开奖"),text("活动已结束")],function(){toast("已参与 退出"),back(),i.pushState(r.CHECK)}),h(3e3).next(function(t){var e=t.center();click(e.x,e.y)},textStartsWith("加入粉丝团")).next(function(t){var e=t.center();click(e.x,e.y)},textStartsWith("加入粉丝团")).next(function(){back()}).exec(),h(1e3).next(function(){s([text("一键发表评论"),text("发送评论 参与抽奖"),textContains("发送评论")],function(t){var e=t.center();console.log(e),click(e.x,e.y)})}).next(function(){p(text("开始观看直播任务 参与抽奖"),function(t){var e=t.center();console.log(e),click(e.x,e.y),sleep(1e3),back()})}).next(function(){i.pushState(r.CHECK)}).exec()}}]),c}(v)),b=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.PAY,e}return n(c,[{key:"onUpdate",value:function(){h(3e3).next(function(t){if(t){var e=t.center();click(e.x,e.y)}},text("提交订单")).next(function(t){if(t){var e=t.center();click(e.x,e.y)}},text("确认支付")).next(function(){back()}).next(function(){i.pushState(r.INIT)}).exec()}}]),c}(v)),d=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name=r.CHECK,e}return n(c,[{key:"onUpdate",value:function(){p(text("我知道了"),function(t){toast("没中奖");var e=t.center();console.log("没中奖",e);var n=click(e.x,e.y);t.click(),sleep(1e4),n&&i.pushState(r.INIT)}),p(text("立即购买"),function(t){toast("中奖了");var e=t.center(),n=click(e.x,e.y);sleep(3e3),n&&i.pushState(r.PAY)})}}]),c}(v));!function(){for(requestScreenCapture()||(toast("请求截图失败"),exit()),i.init([y,x,b,d],r.INIT);;){var t;sleep(2e3),null===(t=i.currentState)||void 0===t||t.onUpdate(),sleep(2e3)}}()}();