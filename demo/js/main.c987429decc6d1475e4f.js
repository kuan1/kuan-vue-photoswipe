!function(t){function s(s){for(var i,o,r=s[0],a=s[1],l=s[2],u=0,_=[];u<r.length;u++)o=r[u],n[o]&&_.push(n[o][0]),n[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);for(c&&c(s);_.length;)_.shift()();return p.push.apply(p,l||[]),e()}function e(){for(var t,s=0;s<p.length;s++){for(var e=p[s],i=!0,r=1;r<e.length;r++){var a=e[r];0!==n[a]&&(i=!1)}i&&(p.splice(s--,1),t=o(o.s=e[0]))}return t}var i={},n={main:0},p=[];function o(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(e,i,function(s){return t[s]}.bind(null,i));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var c=a;p.push([23,"vendor"]),e()}({23:function(t,s,e){"use strict";e.r(s);var i,n=e(0),p=n.a.extend(e(24).default),o={preview:function(){for(var t=arguments.length,s=new Array(t),e=0;e<t;e++)s[e]=arguments[e];var o;i?(o=i).init.apply(o,s):(i=new p({el:document.createElement("div")}),document.body.appendChild(i.$el),n.a.nextTick(function(){var t;(t=i).init.apply(t,s)}))},push:function(){var t;if(!i)return this.preview.apply(this,arguments);(t=i).push.apply(t,arguments)},close:function(){i&&i.close()}},r={data:function(){return{images:[{src:"https://placekitten.com/600/400",w:600,h:400},{src:"https://placekitten.com/1200/900",w:1200,h:900}]}},mounted:function(){var t=this;this.show(),setInterval(function(){t.pushImages()},5e3)},methods:{show:function(){o.preview(this.images,{index:1,change:this.change})},pushImages:function(){o.push([{src:"https://placekitten.com/600/400",w:600,h:400},{src:"https://placekitten.com/1200/900",w:1200,h:900}])},change:function(t){console.log("切换页面",t)}}},a=e(1),l=Object(a.a)(r,function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("button",{on:{click:this.show}},[this._v("显示")])])},[],!1,null,null,null);l.options.__file="App.vue";var c=l.exports;n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:c}})},24:function(t,s,e){"use strict";e.r(s);var i=e(5),n=e.n(i),p=(e(14),e(17),e(6)),o=e.n(p),r=e(7),a=e.n(r),l={data:function(){return{pswp:null}},methods:{init:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.images=s;var i=e.index,n=void 0===i?0:i,p=e.history,r=void 0!==p&&p,l=e.change;this.pswp||(this.pswp=new o.a(this.$refs.pswp,a.a,s,{history:r,index:n}),this.pswp.init(),this.pswp.listen("close",this.close),l&&this.pswp.listen("afterChange",function(){l(t.pswp.getCurrentIndex())}))},push:function(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.pswp||this.init(arguments),(t=this.pswp.items).push.apply(t,n()(s)),this.pswp.invalidateCurrItems(),this.pswp.updateSize(!0),void 0!==e.index&&this.pswp.goTo(e.index)},close:function(){this.pswp&&(this.pswp.close(),this.pswp=null)}},beforeDestroy:function(){this.close()}},c=e(1),u=Object(c.a)(l,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"pswp__bg"}),this._v(" "),this._m(0)])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pswp__scroll-wrap"},[e("div",{staticClass:"pswp__container"},[e("div",{staticClass:"pswp__item"}),t._v(" "),e("div",{staticClass:"pswp__item"}),t._v(" "),e("div",{staticClass:"pswp__item"})]),t._v(" "),e("div",{staticClass:"pswp__ui pswp__ui--hidden"},[e("div",{staticClass:"pswp__top-bar"},[e("div",{staticClass:"pswp__counter"}),t._v(" "),e("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),e("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),e("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),e("div",{staticClass:"pswp__preloader"},[e("div",{staticClass:"pswp__preloader__icn"},[e("div",{staticClass:"pswp__preloader__cut"},[e("div",{staticClass:"pswp__preloader__donut"})])])])]),t._v(" "),e("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[e("div",{staticClass:"pswp__share-tooltip"})]),t._v(" "),e("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),e("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),e("div",{staticClass:"pswp__caption"},[e("div",{staticClass:"pswp__caption__center"})])])])}],!1,null,null,null);u.options.__file="PhotoSwipe.vue";s.default=u.exports}});