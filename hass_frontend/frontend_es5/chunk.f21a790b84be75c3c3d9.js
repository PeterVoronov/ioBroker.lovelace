(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7282],{73589:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=function(e){var t=parseFloat(e);if(isNaN(t))throw new Error("".concat(e," is not a number"));return t};function i(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:n(e.substr(0,e.length-1))};var t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:n(t[0]),h:1}:{w:n(t[0]),h:n(t[1])}}catch(r){}return null}},67250:function(e,t,r){"use strict";var n,i,o,a,s,c=r(50424),l=r(55358),u=r(7323),d=r(47181),f=r(91741),p=r(40095),h=r(50538);r(319);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var i=_(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:I(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=I(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function I(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=P();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(x(o.descriptor)||x(i.descriptor)){if(S(o)||S(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(S(o)){if(S(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}O(o,i)}else t.push(o)}return t}(a.d.map(C)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,l.Mo)("ha-camera-stream")],(function(e,t){var r,m;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t);var r=g(n);function n(){var t;b(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(E(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:function(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_url",value:void 0},{kind:"method",key:"render",value:function(){return this.stateObj?(0,c.dy)(i||(i=v(["\n      ","\n    "])),this._shouldRenderMJPEG?(0,c.dy)(o||(o=v(["\n            <img\n              @load=","\n              .src=","\n              .alt=","\n            />\n          "])),this._elementResized,(0,h.nk)(this.stateObj),"Preview of the ".concat((0,f.C)(this.stateObj)," camera.")):this._url?(0,c.dy)(a||(a=v(["\n            <ha-hls-player\n              autoplay\n              playsinline\n              .allowExoPlayer=","\n              .muted=","\n              .controls=","\n              .hass=","\n              .url=","\n            ></ha-hls-player>\n          "])),this.allowExoPlayer,this.muted,this.controls,this.hass,this._url):""):(0,c.dy)(n||(n=v([""])))}},{kind:"method",key:"updated",value:function(e){e.has("stateObj")&&!this._shouldRenderMJPEG&&(this._forceMJPEG=void 0,this._getStreamUrl())}},{kind:"get",key:"_shouldRenderMJPEG",value:function(){return this._forceMJPEG===this.stateObj.entity_id||!(0,u.p)(this.hass,"stream")||!(0,p.e)(this.stateObj,h.qW)}},{kind:"method",key:"_getStreamUrl",value:(r=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Lr)(this.hass,this.stateObj.entity_id);case 3:t=e.sent,r=t.url,this._url=r,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this._forceMJPEG=this.stateObj.entity_id;case 12:case"end":return e.stop()}}),e,this,[[0,8]])})),m=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function a(e){y(o,n,i,a,s,"next",e)}function s(e){y(o,n,i,a,s,"throw",e)}a(void 0)}))},function(){return m.apply(this,arguments)})},{kind:"method",key:"_elementResized",value:function(){(0,d.B)(this,"iron-resize")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,c.iv)(s||(s=v(["\n      :host,\n      img {\n        display: block;\n      }\n\n      img {\n        width: 100%;\n      }\n    "])))}}]}}),c.oi)},50538:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}r.d(t,{qW:function(){return c},nk:function(){return l},Xn:function(){return p},Lr:function(){return f},i4:function(){return u},Mw:function(){return h}});var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,n,i,o){var a,s,c,l,u,d,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=f.length,s=new Array(a>5?a-5:0),c=5;c<a;c++)s[c-5]=f[c];if((l=i[t])||(l=i[t]={}),!(u=l[o])){e.next=6;break}return e.abrupt("return",u);case 6:return d=n.apply(void 0,[i,o].concat(s)),l[o]=d,d.then((function(){return setTimeout((function(){l[o]=void 0}),r)}),(function(){l[o]=void 0})),e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))});return function(e,r,n,i,o){return t.apply(this,arguments)}}(),o=r(22814);function a(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,c,"next",e)}function c(e){a(o,n,i,s,c,"throw",e)}s(void 0)}))}}var c=2,l=function(e){return"/api/camera_proxy_stream/".concat(e.entity_id,"?token=").concat(e.attributes.access_token)},u=function(e,t){return i("_cameraTmbUrl",9e3,d,e,t)},d=function(){var e=s(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.iI)(t,"/api/camera_proxy/".concat(r));case 2:return n=e.sent,e.abrupt("return",t.hassUrl(n.path));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=s(regeneratorRuntime.mark((function e(t,r,n){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={type:"camera/stream",entity_id:r},n&&(i.format=n),e.next=4,t.callWS(i);case 4:return(o=e.sent).url=t.hassUrl(o.url),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),p=function(e,t){return e.callWS({type:"camera/get_prefs",entity_id:t})},h=function(e,t,r){return e.callWS(Object.assign({type:"camera/update_prefs",entity_id:t},r))}},97282:function(e,t,r){"use strict";var n,i,o,a,s,c,l=r(50424),u=r(55358),d=r(76666),f=r(92483),p=r(49706),h=r(73589),m=(r(67250),r(50538)),y=r(56007);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){b(o,n,i,a,s,"next",e)}function s(e){b(o,n,i,a,s,"throw",e)}a(void 0)}))}}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=z(e);if(t){var i=z(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(){O=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!I(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=D(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function S(e){var t,r=D(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function I(e){return e.decorators&&e.decorators.length}function j(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function D(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===v(t)?t:String(t)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t,r){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,n){var i=O();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(j(o.descriptor)||j(i.descriptor)){if(I(o)||I(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(I(o)){if(I(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}x(o,i)}else t.push(o)}return t}(a.d.map(S)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,u.Mo)("hui-image")],(function(e,t){var r,v,b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,t);var r=_(n);function n(){var t;w(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(C(t)),t}return n}(t);return{F:b,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"entity",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"image",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"stateImage",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"cameraImage",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"cameraView",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"aspectRatio",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"filter",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"stateFilter",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"darkModeImage",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"darkModeFilter",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_loadError",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_cameraImageSrc",value:void 0},{kind:"field",decorators:[(0,u.IO)("img")],key:"_image",value:void 0},{kind:"field",key:"_lastImageHeight",value:void 0},{kind:"field",key:"_cameraUpdater",value:void 0},{kind:"method",key:"connectedCallback",value:function(){T(z(b.prototype),"connectedCallback",this).call(this),this.cameraImage&&"live"!==this.cameraView&&this._startUpdateCameraInterval()}},{kind:"method",key:"disconnectedCallback",value:function(){T(z(b.prototype),"disconnectedCallback",this).call(this),this._stopUpdateCameraInterval()}},{kind:"method",key:"render",value:function(){if(!this.hass)return(0,l.dy)(n||(n=g([""])));var e,t,r=this.aspectRatio?(0,h.Z)(this.aspectRatio):null,c=this.entity?this.hass.states[this.entity]:void 0,u=c?c.state:y.nZ,m=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?t=this.hass.states[this.cameraImage]:e=this._cameraImageSrc;else if(this.stateImage){var v=this.stateImage[u];v?e=v:(e=this.image,m=!0)}else e=this.darkModeImage&&this.hass.themes.darkMode?this.darkModeImage:this.image;e&&(e=this.hass.hassUrl(e));var b=this.filter||"";(this.hass.themes.darkMode&&this.darkModeFilter&&(b+=this.darkModeFilter),this.stateFilter&&this.stateFilter[u]&&(b+=this.stateFilter[u]),!b&&this.entity)&&(b=(!c||p.tj.includes(u))&&m?"grayscale(100%)":"");return(0,l.dy)(i||(i=g(["\n      <div\n        style=","\n        class=","\n      >\n        ","\n        ","\n      </div>\n    "])),(0,f.V)({paddingBottom:r&&r.w>0&&r.h>0?"".concat((100*r.h/r.w).toFixed(2),"%"):""}),(0,d.$)({ratio:Boolean(r&&r.w>0&&r.h>0)}),this.cameraImage&&"live"===this.cameraView?(0,l.dy)(o||(o=g(["\n              <ha-camera-stream\n                muted\n                .hass=","\n                .stateObj=","\n              ></ha-camera-stream>\n            "])),this.hass,t):(0,l.dy)(a||(a=g(['\n              <img\n                id="image"\n                src=',"\n                @error=","\n                @load=","\n                style=","\n              />\n            "])),e,this._onImageError,this._onImageLoad,(0,f.V)({filter:b,display:this._loadError?"none":"block"})),this._loadError?(0,l.dy)(s||(s=g(['<div\n              id="brokenImage"\n              style=',"\n            ></div>"])),(0,f.V)({height:"".concat(this._lastImageHeight||"100","px")})):"")}},{kind:"method",key:"updated",value:function(e){if(e.has("hass")){var t=e.get("hass");t&&t.connected===this.hass.connected||(this.hass.connected&&"live"!==this.cameraView?(this._updateCameraImageSrc(),this._startUpdateCameraInterval()):this.hass.connected||(this._stopUpdateCameraInterval(),this._cameraImageSrc=void 0,this._loadError=!0))}else e.has("cameraImage")&&"live"!==this.cameraView&&(this._updateCameraImageSrc(),this._startUpdateCameraInterval())}},{kind:"method",key:"_startUpdateCameraInterval",value:function(){var e=this;this._stopUpdateCameraInterval(),this.cameraImage&&this.isConnected&&(this._cameraUpdater=window.setInterval((function(){return e._updateCameraImageSrc()}),1e4))}},{kind:"method",key:"_stopUpdateCameraInterval",value:function(){this._cameraUpdater&&(clearInterval(this._cameraUpdater),this._cameraUpdater=void 0)}},{kind:"method",key:"_onImageError",value:function(){this._loadError=!0}},{kind:"method",key:"_onImageLoad",value:(v=k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadError=!1,e.next=3,this.updateComplete;case 3:this._lastImageHeight=this._image.offsetHeight;case 4:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{kind:"method",key:"_updateCameraImageSrc",value:(r=k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hass&&this.cameraImage){e.next=2;break}return e.abrupt("return");case 2:if(this.hass.states[this.cameraImage]){e.next=6;break}return this._onImageError(),e.abrupt("return");case 6:return e.next=8,(0,m.i4)(this.hass,this.cameraImage);case 8:this._cameraImageSrc=e.sent;case 9:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,l.iv)(c||(c=g(['\n      img {\n        display: block;\n        height: auto;\n        transition: filter 0.2s linear;\n        width: 100%;\n      }\n\n      .ratio {\n        position: relative;\n        width: 100%;\n        height: 0;\n      }\n\n      .ratio img,\n      .ratio div {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #brokenImage {\n        background: grey url("/static/images/image-broken.svg") center/36px\n          no-repeat;\n      }\n    '])))}}]}}),l.oi)}}]);
//# sourceMappingURL=chunk.f21a790b84be75c3c3d9.js.map