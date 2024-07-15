!function(){function t(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r=new(function(){function e(){t(this,e),this.currentState=null,this.map=new Map}return n(e,[{key:"init",value:function(){this.currentState.onEnter()}},{key:"config",value:function(t,e){this.currentState=e;for(var n=0;n<t.length;n++)this.map.set(t[n].name,t[n])}},{key:"pushState",value:function(t){if(this.map.has(t)){var e=this.map.get(t);this.currentState.onEnd(),this.currentState=e,this.currentState.onEnter()}}}]),e}());function o(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){n(t);return}c.done?e(a):Promise.resolve(a).then(r,o)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n||t):o.value}})(t,e,n||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=i(t);return n=e?Reflect.construct(r,arguments,i(this).constructor):r.apply(this,arguments),n&&("object"==(n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}"function"==typeof SuppressedError&&SuppressedError;var s=function(){function e(){t(this,e)}return n(e,[{key:"onEnter",value:function(){toast(this.name+" enter"),console.log(this.name+" enter")}}]),e}(),f=new(function(e){a(s,e);var c=l(s);function s(){var e;return t(this,s),e=c.apply(this,arguments),e.name="init",e}return n(s,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){var t;return(t=function(){var t;return function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}(this,function(e){return console.log(t=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2?arguments[2]:void 0,n=captureScreen(),r=images.read("./assets/".concat(t,".png")),o=images.clip(n,e);sleep(1e3);var i=findImage(o,r,{threshold:.2,region:e});return sleep(1e3),i}("pk",0,[0,0,device.width/4,device.height/4])),t?(toast("发现福袋"),click(t.x,t.y)&&r.pushState("claim")):(toast("当前没有福袋"),console.log("当前没有福袋"),sleep(6e4)),[2]})},function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function c(t){o(u,r,i,c,a,"next",t)}function a(t){o(u,r,i,c,a,"throw",t)}c(void 0)})})()}},{key:"onEnter",value:function(){u(i(s.prototype),"onEnter",this).call(this)}}]),s}(s)),p=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name="claim",e}return n(c,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){if(existsOne(text("参与成功 等待开奖"),text("活动已结束"))){toast("已参与 退出"),back(),r.pushState("check");return}var t,e,n=(t=text("一键发表评论"),e=text("发送评论 参与抽奖"),t.exists()?t:e.exists()?e:text("what can i Say"));if(n.exists()){var o=pickup(n).center();console.log(o),click(o.x,o.y),sleep(1e3),r.pushState("check")}}},{key:"onEnter",value:function(){u(i(c.prototype),"onEnter",this).call(this)}}]),c}(s)),h=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name="pay",e}return n(c,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){var t=text("提交订单");if(t.exists()){var e=pickup(t).center();click(e.x,e.y),sleep(3e3),back(),sleep(3e3),r.pushState("init")}}},{key:"onEnter",value:function(){u(i(c.prototype),"onEnter",this).call(this)}}]),c}(s)),y=new(function(e){a(c,e);var o=l(c);function c(){var e;return t(this,c),e=o.apply(this,arguments),e.name="check",e}return n(c,[{key:"onEnd",value:function(){}},{key:"onUpdate",value:function(){var t=text("我知道了"),e=text("立即购买");if(t.exists()){toast("没中奖");var n=pickup(t).center(),o=click(n.x,n.y);sleep(1e4),o&&r.pushState("init")}if(e.exists()){toast("中奖了");var i=pickup(e).center();click(i.x,i.y),sleep(3e3),r.pushState("pay")}}},{key:"onEnter",value:function(){u(i(c.prototype),"onEnter",this).call(this)}}]),c}(s));!function(){for(requestScreenCapture()||(toast("请求截图失败"),exit()),r.config([f,p,h,y],f),r.init();;)sleep(2e3),r.currentState.onUpdate(),sleep(2e3)}()}();