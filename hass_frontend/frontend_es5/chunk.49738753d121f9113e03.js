/*! For license information please see chunk.49738753d121f9113e03.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8555],{29101:function(t,n,e){"use strict";e(65233),e(65660);var i,r,o,a=e(9672),s=e(87156),l=e(50856),u=e(87529);(0,a.k)({_template:(0,l.d)(i||(r=['\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: \'\';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id="scrim" on-click="close"></div>\n\n    \x3c!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 --\x3e\n    <div id="contentContainer" opened$="[[opened]]" persistent$="[[persistent]]" position$="[[position]]" swipe-open$="[[swipeOpen]]">\n      <slot></slot>\n    </div>\n'],o=['\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: \'\';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id="scrim" on-click="close"></div>\n\n    \x3c!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 --\x3e\n    <div id="contentContainer" opened\\$="[[opened]]" persistent\\$="[[persistent]]" position\\$="[[position]]" swipe-open\\$="[[swipeOpen]]">\n      <slot></slot>\n    </div>\n'],o||(o=r.slice(0)),i=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}})))),is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){(0,u.T8)(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){27===t.keyCode&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var n=this.$.contentContainer.getBoundingClientRect();this._savedWidth=n.width,"left"===this.position?this._translateOffset=n.left:this._translateOffset=n.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var n=t.detail.dx+this._translateOffset,e=this.getWidth(),i="left"===this.position?n>=0||n<=-e:n<=0||n>=e;if(!i){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=e/2;t.detail.dx<-o?this.opened="right"===this.position:t.detail.dx>o&&(this.opened="left"===this.position),i?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,n){for(var e,i=Date.now(),r=i-100,o=0,a=n.length-1;o<=a;){var s=o+a>>1,l=n[s];l.timeStamp>=r?(e=l,a=s-1):o=s+1}return e?(t.detail.dx-e.dx)/(i-e.timeStamp||1):0},_flingDrawer:function(t,n){var e=this._calculateVelocity(t,n);if(!(Math.abs(e)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var i,r=t.detail.dx+this._translateOffset,o=this.getWidth(),a="left"===this.position,s=e>0;i=!s&&a?-(r+o):s&&!a?o-r:-r,s?(e=Math.max(e,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(e=Math.min(e,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*i/e;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var n=this.getWidth();"left"===this.position?(t=Math.max(-n,Math.min(t,0)),this.$.scrim.style.opacity=1+t/n):(t=Math.max(0,Math.min(t,n)),this.$.scrim.style.opacity=1-t/n),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),n=(0,s.vz)(this).querySelectorAll(t);n.length>0?(this._firstTabStop=n[0],this._lastTabStop=n[n.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var e=this.getAttribute("tabindex");e&&parseInt(e,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===t.keyCode&&(t.shiftKey?this._firstTabStop&&(0,s.vz)(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&(0,s.vz)(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,n){this.toggleClass("visible",t&&!n,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}})},91107:function(t,n,e){"use strict";function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==e)return;var i,r,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==e.return||e.return()}finally{if(s)throw r}}return o}(t,n)||u(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n,e){return(o=a()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return e&&s(r,e.prototype),r}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){if(t){if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,{Ud:function(){return w}});var h=Symbol("Comlink.proxy"),d=Symbol("Comlink.endpoint"),f=Symbol("Comlink.releaseProxy"),y=Symbol("Comlink.thrown"),b=function(t){return"object"===p(t)&&null!==t||"function"==typeof t},_=new Map([["proxy",{canHandle:function(t){return b(t)&&t[h]},serialize:function(t){var n=new MessageChannel,e=n.port1,i=n.port2;return m(t,e),[i,[i]]},deserialize:function(t){return t.start(),w(t)}}],["throw",{canHandle:function(t){return b(t)&&y in t},serialize:function(t){var n=t.value;return[n instanceof Error?{isError:!0,value:{message:n.message,name:n.name,stack:n.stack}}:{isError:!1,value:n},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;n.addEventListener("message",(function e(a){if(a&&a.data){var s,u=Object.assign({path:[]},a.data),c=u.id,p=u.type,h=u.path,d=(a.data.argumentList||[]).map(I);try{var f=h.slice(0,-1).reduce((function(t,n){return t[n]}),t),b=h.reduce((function(t,n){return t[n]}),t);switch(p){case"GET":s=b;break;case"SET":f[h.slice(-1)[0]]=I(a.data.value),s=!0;break;case"APPLY":s=b.apply(f,d);break;case"CONSTRUCT":var _;s=k(o(b,l(d)));break;case"ENDPOINT":var w=new MessageChannel,g=w.port1,T=w.port2;m(t,T),s=D(g,[g]);break;case"RELEASE":s=void 0;break;default:return}}catch(_){s=r({value:_},y,0)}Promise.resolve(s).catch((function(t){return r({value:t},y,0)})).then((function(t){var r=i(A(t),2),o=r[0],a=r[1];n.postMessage(Object.assign(Object.assign({},o),{id:c}),a),"RELEASE"===p&&(n.removeEventListener("message",e),v(n))}))}})),n.start&&n.start()}function v(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function w(t,n){return T(t,[],n)}function g(t){if(t)throw new Error("Proxy has been released and is not useable")}function T(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,o=new Proxy(e,{get:function(e,i){if(g(r),i===f)return function(){return N(t,{type:"RELEASE",path:n.map((function(t){return t.toString()}))}).then((function(){v(t),r=!0}))};if("then"===i){if(0===n.length)return{then:function(){return o}};var a=N(t,{type:"GET",path:n.map((function(t){return t.toString()}))}).then(I);return a.then.bind(a)}return T(t,[].concat(l(n),[i]))},set:function(e,o,a){g(r);var s=i(A(a),2),u=s[0],c=s[1];return N(t,{type:"SET",path:[].concat(l(n),[o]).map((function(t){return t.toString()})),value:u},c).then(I)},apply:function(e,o,a){g(r);var s=n[n.length-1];if(s===d)return N(t,{type:"ENDPOINT"}).then(I);if("bind"===s)return T(t,n.slice(0,-1));var l=i(S(a),2),u=l[0],c=l[1];return N(t,{type:"APPLY",path:n.map((function(t){return t.toString()})),argumentList:u},c).then(I)},construct:function(e,o){g(r);var a=i(S(o),2),s=a[0],l=a[1];return N(t,{type:"CONSTRUCT",path:n.map((function(t){return t.toString()})),argumentList:s},l).then(I)}});return o}function S(t){var n,e=t.map(A);return[e.map((function(t){return t[0]})),(n=e.map((function(t){return t[1]})),Array.prototype.concat.apply([],n))]}var E=new WeakMap;function D(t,n){return E.set(t,n),t}function k(t){return Object.assign(t,r({},h,!0))}function A(t){var n,e=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=u(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw o}}}}(_);try{for(e.s();!(n=e.n()).done;){var r=i(n.value,2),o=r[0],a=r[1];if(a.canHandle(t)){var s=i(a.serialize(t),2);return[{type:"HANDLER",name:o,value:s[0]},s[1]]}}}catch(l){e.e(l)}finally{e.f()}return[{type:"RAW",value:t},E.get(t)||[]]}function I(t){switch(t.type){case"HANDLER":return _.get(t.name).deserialize(t.value);case"RAW":return t.value}}function N(t,n,e){return new Promise((function(i){var r=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function n(e){e.data&&e.data.id&&e.data.id===r&&(t.removeEventListener("message",n),i(e.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:r},n),e)}))}}}]);
//# sourceMappingURL=chunk.49738753d121f9113e03.js.map