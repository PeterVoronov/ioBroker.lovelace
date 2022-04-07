"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9695],{7323:function(e,t,n){n.d(t,{p:function(){return o}});var o=function(e,t){return e&&e.config.components.includes(t)}},83270:function(e,t,n){n.d(t,{_Y:function(){return o},VU:function(){return r},u_:function(){return i},bi:function(){return a},_t:function(){return c},LI:function(){return s},AV:function(){return l},Mc:function(){return u},dn:function(){return d},H9:function(){return p},De:function(){return f},LV:function(){return h},QD:function(){return m},A$:function(){return C},tW:function(){return g},n8:function(){return y}});var o=function(e,t,n){return e.callApi("POST","cloud/login",{email:t,password:n})},r=function(e){return e.callApi("POST","cloud/logout")},i=function(e,t){return e.callApi("POST","cloud/forgot_password",{email:t})},a=function(e,t,n){return e.callApi("POST","cloud/register",{email:t,password:n})},c=function(e,t){return e.callApi("POST","cloud/resend_confirm",{email:t})},s=function(e){return e.callWS({type:"cloud/status"})},l=function(e,t){return e.callWS({type:"cloud/cloudhook/create",webhook_id:t})},u=function(e,t){return e.callWS({type:"cloud/cloudhook/delete",webhook_id:t})},d=function(e){return e.callWS({type:"cloud/remote/connect"})},p=function(e){return e.callWS({type:"cloud/remote/disconnect"})},f=function(e){return e.callWS({type:"cloud/subscription"})},h=function(e,t){return e.callWS(Object.assign({type:"cloud/update_prefs"},t))},m=function(e,t,n){return e.callWS(Object.assign({type:"cloud/google_assistant/entities/update",entity_id:t},n))},C=function(e){return e.callApi("POST","cloud/google_actions/sync")},g=function(e,t,n){return e.callWS(Object.assign({type:"cloud/alexa/entities/update",entity_id:t},n))},y=function(e){return e.callWS({type:"cloud/tts/info"})}},59695:function(e,t,n){n.r(t),n.d(t,{configSections:function(){return Z}});n(53973),n(89194);var o=n(26767),r=n(5701),i=n(17717),a=n(7323),c=n(59708),s=n(83270);function l(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){l(i,o,r,a,c,"next",e)}function c(e){l(i,o,r,a,c,"throw",e)}a(void 0)}))}}var d=function(){var e=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.callWS({type:"supervisor/api",endpoint:"/supervisor/available_updates",method:"get"});case 2:return e.abrupt("return",e.sent.available_updates);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(n(15291),n(18199));function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){h(i,o,r,a,c,"next",e)}function c(e){h(i,o,r,a,c,"throw",e)}a(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=S(e);if(t){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var r=t.placement;if(t.kind===o&&("static"===r||"prototype"===r)){var i="static"===r?e:n;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var o=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],o=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!w(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:n,finishers:o};var i=this.decorateConstructor(n,t);return o.push.apply(o,i.finishers),i.finishers=o,i},addElementPlacement:function(e,t,n){var o=t[e.placement];if(!n&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var n=[],o=[],r=e.decorators,i=r.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,r[i])(c)||c);e=s.element,this.addElementPlacement(e,t),s.finisher&&o.push(s.finisher);var l=s.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:o,extras:n}},decorateConstructor:function(e,t){for(var n=[],o=t.length-1;o>=0;o--){var r=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[o])(r)||r);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=L(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:n,placement:o,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var o=(0,t[n])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function V(e){var t,n=L(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function H(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function P(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function L(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _(e,t,n){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},_(e,t,n||e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",O="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",D="M21.8,13H20V21H13V17.67L15.79,14.88L16.5,15C17.66,15 18.6,14.06 18.6,12.9C18.6,11.74 17.66,10.8 16.5,10.8A2.1,2.1 0 0,0 14.4,12.9L14.5,13.61L13,15.13V9.65C13.66,9.29 14.1,8.6 14.1,7.8A2.1,2.1 0 0,0 12,5.7A2.1,2.1 0 0,0 9.9,7.8C9.9,8.6 10.34,9.29 11,9.65V15.13L9.5,13.61L9.6,12.9A2.1,2.1 0 0,0 7.5,10.8A2.1,2.1 0 0,0 5.4,12.9A2.1,2.1 0 0,0 7.5,15L8.21,14.88L11,17.67V21H4V13H2.25C1.83,13 1.42,13 1.42,12.79C1.43,12.57 1.85,12.15 2.28,11.72L11,3C11.33,2.67 11.67,2.33 12,2.33C12.33,2.33 12.67,2.67 13,3L17,7V6H19V9L21.78,11.78C22.18,12.18 22.59,12.59 22.6,12.8C22.6,13 22.2,13 21.8,13M7.5,12A0.9,0.9 0 0,1 8.4,12.9A0.9,0.9 0 0,1 7.5,13.8A0.9,0.9 0 0,1 6.6,12.9A0.9,0.9 0 0,1 7.5,12M16.5,12C17,12 17.4,12.4 17.4,12.9C17.4,13.4 17,13.8 16.5,13.8A0.9,0.9 0 0,1 15.6,12.9A0.9,0.9 0 0,1 16.5,12M12,6.9C12.5,6.9 12.9,7.3 12.9,7.8C12.9,8.3 12.5,8.7 12,8.7C11.5,8.7 11.1,8.3 11.1,7.8C11.1,7.3 11.5,6.9 12,6.9Z",K="M11 15H6L13 1V9H18L11 23V15Z",x="M18,6H13A2,2 0 0,0 11,8V10.28C10.41,10.62 10,11.26 10,12A2,2 0 0,0 12,14C13.11,14 14,13.1 14,12C14,11.26 13.6,10.62 13,10.28V8H16V16H8V8H10V6H8L6,6V18H18M20,20H4V4H20M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20C21.11,22 22,21.1 22,20V4C22,2.89 21.11,2 20,2Z",T="M2.53,19.65L3.87,20.21V11.18L1.44,17.04C1.03,18.06 1.5,19.23 2.53,19.65M22.03,15.95L17.07,4C16.76,3.23 16.03,2.77 15.26,2.75C15,2.75 14.73,2.79 14.47,2.9L7.1,5.95C6.35,6.26 5.89,7 5.87,7.75C5.86,8 5.91,8.29 6,8.55L11,20.5C11.29,21.28 12.03,21.74 12.81,21.75C13.07,21.75 13.33,21.7 13.58,21.6L20.94,18.55C21.96,18.13 22.45,16.96 22.03,15.95M7.88,8.75A1,1 0 0,1 6.88,7.75A1,1 0 0,1 7.88,6.75C8.43,6.75 8.88,7.2 8.88,7.75C8.88,8.3 8.43,8.75 7.88,8.75M5.88,19.75A2,2 0 0,0 7.88,21.75H9.33L5.88,13.41V19.75Z",z="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z",j="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",Z={dashboard:[{path:"/config/integrations",translationKey:"devices",iconPath:O,iconColor:"#0D47A1",core:!0},{path:"/config/automation",translationKey:"automations",iconPath:z,iconColor:"#518C43",core:!0},{path:"/config/blueprint",translationKey:"blueprints",iconPath:T,iconColor:"#64B5F6",component:"blueprint"},{path:"/hassio",translationKey:"supervisor",iconPath:D,iconColor:"#4084CD",component:"hassio"},{path:"/config/lovelace/dashboards",translationKey:"dashboards",iconPath:j,iconColor:"#B1345C",component:"lovelace"},{path:"/config/energy",translationKey:"energy",iconPath:K,iconColor:"#F1C447",component:"energy"},{path:"/config/tags",translationKey:"tags",iconPath:x,iconColor:"#616161",component:"tag"},{path:"/config/person",translationKey:"people",iconPath:E,iconColor:"#E48629",components:["person","zone","users"]},{path:"#external-app-configuration",translationKey:"companion",iconPath:"M9.82,12.5C9.84,12.33 9.86,12.17 9.86,12C9.86,11.83 9.84,11.67 9.82,11.5L10.9,10.69C11,10.62 11,10.5 10.96,10.37L9.93,8.64C9.87,8.53 9.73,8.5 9.62,8.53L8.34,9.03C8.07,8.83 7.78,8.67 7.47,8.54L7.27,7.21C7.27,7.09 7.16,7 7.03,7H5C4.85,7 4.74,7.09 4.72,7.21L4.5,8.53C4.21,8.65 3.92,8.83 3.65,9L2.37,8.5C2.25,8.47 2.12,8.5 2.06,8.63L1.03,10.36C0.97,10.5 1,10.61 1.1,10.69L2.18,11.5C2.16,11.67 2.15,11.84 2.15,12C2.15,12.17 2.17,12.33 2.19,12.5L1.1,13.32C1,13.39 1,13.53 1.04,13.64L2.07,15.37C2.13,15.5 2.27,15.5 2.38,15.5L3.66,15C3.93,15.18 4.22,15.34 4.53,15.47L4.73,16.79C4.74,16.91 4.85,17 5,17H7.04C7.17,17 7.28,16.91 7.29,16.79L7.5,15.47C7.8,15.35 8.09,15.17 8.36,15L9.64,15.5C9.76,15.53 9.89,15.5 9.95,15.37L11,13.64C11.04,13.53 11,13.4 10.92,13.32L9.82,12.5M6,13.75C5,13.75 4.2,12.97 4.2,12C4.2,11.03 5,10.25 6,10.25C7,10.25 7.8,11.03 7.8,12C7.8,12.97 7,13.75 6,13.75M17,1H7A2,2 0 0,0 5,3V6H7V4H17V20H7V18H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1Z",iconColor:"#8E24AA"},{path:"/config/server_control",translationKey:"settings",iconPath:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",iconColor:"#4A5963",core:!0}],devices:[{component:"integrations",path:"/config/integrations",translationKey:"ui.panel.config.integrations.caption",iconPath:"M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z",iconColor:"#2D338F",core:!0},{component:"devices",path:"/config/devices",translationKey:"ui.panel.config.devices.caption",iconPath:O,iconColor:"#2D338F",core:!0},{component:"entities",path:"/config/entities",translationKey:"ui.panel.config.entities.caption",iconPath:"M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z",iconColor:"#2D338F",core:!0},{component:"areas",path:"/config/areas",translationKey:"ui.panel.config.areas.caption",iconPath:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",iconColor:"#2D338F",core:!0}],automations:[{component:"automation",path:"/config/automation",translationKey:"ui.panel.config.automation.caption",iconPath:z,iconColor:"#518C43"},{component:"scene",path:"/config/scene",translationKey:"ui.panel.config.scene.caption",iconPath:"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",iconColor:"#518C43"},{component:"script",path:"/config/script",translationKey:"ui.panel.config.script.caption",iconPath:"M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z",iconColor:"#518C43"},{component:"helpers",path:"/config/helpers",translationKey:"ui.panel.config.helpers.caption",iconPath:"M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z",iconColor:"#4D2EA4",core:!0}],blueprints:[{component:"blueprint",path:"/config/blueprint",translationKey:"ui.panel.config.blueprint.caption",iconPath:T,iconColor:"#518C43"}],tags:[{component:"tag",path:"/config/tags",translationKey:"ui.panel.config.tag.caption",iconPath:x,iconColor:"#616161"}],energy:[{component:"energy",path:"/config/energy",translationKey:"ui.panel.config.energy.caption",iconPath:K,iconColor:"#F1C447"}],lovelace:[{component:"lovelace",path:"/config/lovelace/dashboards",translationKey:"ui.panel.config.lovelace.caption",iconPath:j,iconColor:"#B1345C"}],persons:[{component:"person",path:"/config/person",translationKey:"ui.panel.config.person.caption",iconPath:E,iconColor:"#E48629"},{component:"zone",path:"/config/zone",translationKey:"ui.panel.config.zone.caption",iconPath:"M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z",iconColor:"#E48629"},{component:"users",path:"/config/users",translationKey:"ui.panel.config.users.caption",iconPath:"M22,4H14V7H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,18H14V16H20V18M20,14H14V12H20V14M20,10H14V8H20V10M13,6H11V2H13V6Z",iconColor:"#E48629",core:!0,advancedOnly:!0}],general:[{component:"core",path:"/config/core",translationKey:"ui.panel.config.core.caption",iconPath:D,iconColor:"#4A5963",core:!0},{component:"server_control",path:"/config/server_control",translationKey:"ui.panel.config.server_control.caption",iconPath:"M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z",iconColor:"#4A5963",core:!0},{component:"logs",path:"/config/logs",translationKey:"ui.panel.config.logs.caption",iconPath:"M18 7C16.9 7 16 7.9 16 9V15C16 16.1 16.9 17 18 17H20C21.1 17 22 16.1 22 15V11H20V15H18V9H22V7H18M2 7V17H8V15H4V7H2M11 7C9.9 7 9 7.9 9 9V15C9 16.1 9.9 17 11 17H13C14.1 17 15 16.1 15 15V9C15 7.9 14.1 7 13 7H11M11 9H13V15H11V9Z",iconColor:"#4A5963",core:!0},{component:"info",path:"/config/info",translationKey:"ui.panel.config.info.caption",iconPath:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",iconColor:"#4A5963",core:!0}]};!function(e,t,n,o){var r=b();if(o)for(var i=0;i<o.length;i++)r=o[i](r);var a=t((function(e){r.initializeInstanceElements(e,c.elements)}),n),c=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},o=0;o<e.length;o++){var r,i=e[o];if("method"===i.kind&&(r=t.find(n)))if(P(i.descriptor)||P(r.descriptor)){if(w(i)||w(r))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");r.descriptor=i.descriptor}else{if(w(i)){if(w(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");r.decorators=i.decorators}H(i,r)}else t.push(i)}return t}(a.d.map(V)),e);r.initializeClassElements(a.F,c.elements),r.runClassFinishers(a.F,c.finishers)}([(0,o.M)("ha-panel-config")],(function(e,t){var o,l,u=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(o,t);var n=y(o);function o(){var t;C(this,o);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i)),e(A(t)),t}return o}(t);return{F:u,d:[{kind:"field",decorators:[(0,r.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.C)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.C)()],key:"route",value:void 0},{kind:"field",key:"routerOptions",value:function(){return{defaultPage:"dashboard",routes:{areas:{tag:"ha-config-areas",load:function(){return Promise.all([n.e(5916),n.e(1359),n.e(8165),n.e(3567)]).then(n.bind(n,83567))}},automation:{tag:"ha-config-automation",load:function(){return Promise.all([n.e(5009),n.e(8161),n.e(2955),n.e(4409),n.e(8200),n.e(879),n.e(8055),n.e(4040),n.e(4444),n.e(4577),n.e(1819),n.e(7502),n.e(9505),n.e(1248),n.e(1536),n.e(3883),n.e(196),n.e(6976),n.e(5916),n.e(5517),n.e(7426),n.e(2421),n.e(2094),n.e(9916),n.e(2001),n.e(6002),n.e(3268),n.e(8478),n.e(7792),n.e(6786),n.e(1359),n.e(8331),n.e(7065),n.e(7192),n.e(33),n.e(3902),n.e(7396),n.e(723),n.e(5557)]).then(n.bind(n,15557))}},blueprint:{tag:"ha-config-blueprint",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(1819),n.e(196),n.e(5916),n.e(2421),n.e(7792),n.e(1359),n.e(7164),n.e(7065),n.e(9706),n.e(2519),n.e(6145)]).then(n.bind(n,32958))}},tags:{tag:"ha-config-tags",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(196),n.e(5916),n.e(7792),n.e(1359),n.e(7164),n.e(7065),n.e(2519),n.e(2952),n.e(1318)]).then(n.bind(n,22130))}},cloud:{tag:"ha-config-cloud",load:function(){return Promise.all([n.e(5009),n.e(8161),n.e(2955),n.e(8200),n.e(879),n.e(6976),n.e(5517),n.e(2421),n.e(6002),n.e(6186),n.e(8165),n.e(9381),n.e(10),n.e(8772),n.e(5818)]).then(n.bind(n,75818))}},core:{tag:"ha-config-core",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(1819),n.e(1248),n.e(3268),n.e(8118),n.e(1359),n.e(8165),n.e(9706),n.e(4909),n.e(3956),n.e(7979),n.e(8128),n.e(872)]).then(n.bind(n,81211))}},devices:{tag:"ha-config-devices",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(4577),n.e(1819),n.e(7502),n.e(1536),n.e(3883),n.e(196),n.e(6976),n.e(5916),n.e(2421),n.e(7792),n.e(6786),n.e(1359),n.e(7164),n.e(8165),n.e(8007),n.e(7065),n.e(3143),n.e(9381),n.e(7192),n.e(9706),n.e(2519),n.e(2952),n.e(7396),n.e(1177),n.e(7224),n.e(1422)]).then(n.bind(n,88744))}},server_control:{tag:"ha-config-server-control",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(3268),n.e(1359),n.e(8165),n.e(4909),n.e(8128),n.e(537)]).then(n.bind(n,77980))}},logs:{tag:"ha-config-logs",load:function(){return Promise.all([n.e(1359),n.e(4909),n.e(4066),n.e(2917)]).then(n.bind(n,56795))}},info:{tag:"ha-config-info",load:function(){return Promise.all([n.e(4444),n.e(4577),n.e(7502),n.e(1536),n.e(3883),n.e(1359),n.e(2446),n.e(171)]).then(n.bind(n,74685))}},customize:"dashboard",dashboard:{tag:"ha-config-dashboard",load:function(){return Promise.all([n.e(3268),n.e(8165),n.e(9381),n.e(2446),n.e(4518)]).then(n.bind(n,34518))}},entities:{tag:"ha-config-entities",load:function(){return Promise.all([n.e(5009),n.e(8161),n.e(2955),n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(4577),n.e(7502),n.e(1536),n.e(3883),n.e(196),n.e(6976),n.e(7792),n.e(3756),n.e(1359),n.e(7164),n.e(7065),n.e(2519),n.e(9845)]).then(n.bind(n,94009))}},energy:{tag:"ha-config-energy",load:function(){return Promise.all([n.e(5482),n.e(8007),n.e(9381),n.e(7192),n.e(9706),n.e(5424),n.e(10),n.e(878),n.e(7553)]).then(n.bind(n,74313))}},integrations:{tag:"ha-config-integrations",load:function(){return Promise.all([n.e(8161),n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(4577),n.e(7502),n.e(1536),n.e(3883),n.e(5916),n.e(1480),n.e(362),n.e(1359),n.e(7164),n.e(8052),n.e(7090)]).then(n.bind(n,47090))}},lovelace:{tag:"ha-config-lovelace",load:function(){return n.e(2730).then(n.bind(n,52730))}},person:{tag:"ha-config-person",load:function(){return Promise.all([n.e(5916),n.e(1359),n.e(8165),n.e(7399)]).then(n.bind(n,77399))}},script:{tag:"ha-config-script",load:function(){return Promise.all([n.e(5009),n.e(8161),n.e(2955),n.e(4409),n.e(8200),n.e(879),n.e(8055),n.e(4040),n.e(4444),n.e(4577),n.e(1819),n.e(7502),n.e(9505),n.e(1248),n.e(1536),n.e(3883),n.e(196),n.e(6976),n.e(5916),n.e(5517),n.e(7426),n.e(2421),n.e(2094),n.e(9916),n.e(2001),n.e(6002),n.e(3268),n.e(8478),n.e(7792),n.e(6786),n.e(1359),n.e(8331),n.e(7065),n.e(7192),n.e(33),n.e(3902),n.e(7396),n.e(723),n.e(927)]).then(n.bind(n,20927))}},scene:{tag:"ha-config-scene",load:function(){return Promise.all([n.e(8161),n.e(4409),n.e(8200),n.e(879),n.e(8055),n.e(4040),n.e(4444),n.e(4577),n.e(1536),n.e(196),n.e(5916),n.e(7792),n.e(9126),n.e(4535),n.e(1359),n.e(7164),n.e(8165),n.e(8007),n.e(7065),n.e(3143),n.e(7576),n.e(7192),n.e(9706),n.e(33),n.e(2519),n.e(640),n.e(5703),n.e(4590)]).then(n.bind(n,38562))}},helpers:{tag:"ha-config-helpers",load:function(){return Promise.all([n.e(5009),n.e(8161),n.e(2955),n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(196),n.e(6976),n.e(5916),n.e(7792),n.e(3700),n.e(1359),n.e(7164),n.e(8007),n.e(7065),n.e(9706),n.e(2519),n.e(8635)]).then(n.bind(n,18690))}},users:{tag:"ha-config-users",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4040),n.e(4444),n.e(196),n.e(5916),n.e(7792),n.e(1359),n.e(7164),n.e(7065),n.e(2519),n.e(4246)]).then(n.bind(n,9914))}},zone:{tag:"ha-config-zone",load:function(){return Promise.all([n.e(8161),n.e(4444),n.e(5916),n.e(1359),n.e(8165),n.e(3956),n.e(7979),n.e(8128),n.e(873)]).then(n.bind(n,10873))}},zha:{tag:"zha-config-dashboard-router",load:function(){return n.e(6094).then(n.bind(n,86094))}},zwave:{tag:"zwave-config-router",load:function(){return n.e(8189).then(n.bind(n,88189))}},mqtt:{tag:"mqtt-config-panel",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(3822),n.e(10),n.e(8052),n.e(8180)]).then(n.bind(n,42660))}},ozw:{tag:"ozw-config-router",load:function(){return n.e(7904).then(n.bind(n,37904))}},zwave_js:{tag:"zwave_js-config-router",load:function(){return n.e(7100).then(n.bind(n,17100))}}}}}},{kind:"field",decorators:[(0,i.S)()],key:"_wideSidebar",value:function(){return!1}},{kind:"field",decorators:[(0,i.S)()],key:"_wide",value:function(){return!1}},{kind:"field",decorators:[(0,i.S)()],key:"_cloudStatus",value:void 0},{kind:"field",decorators:[(0,i.S)()],key:"_supervisorUpdates",value:void 0},{kind:"field",key:"_listeners",value:function(){return[]}},{kind:"method",key:"connectedCallback",value:function(){var e=this;_(S(u.prototype),"connectedCallback",this).call(this),this._listeners.push((0,c.K)("(min-width: 1040px)",(function(t){e._wide=t}))),this._listeners.push((0,c.K)("(min-width: 1296px)",(function(t){e._wideSidebar=t})))}},{kind:"method",key:"disconnectedCallback",value:function(){for(_(S(u.prototype),"disconnectedCallback",this).call(this);this._listeners.length;)this._listeners.pop()()}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;_(S(u.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("title"),(0,a.p)(this.hass,"cloud")&&(this._updateCloudStatus(),this.addEventListener("connection-status",(function(e){"connected"===e.detail&&t._updateCloudStatus()}))),(0,a.p)(this.hass,"hassio")?(this._loadSupervisorUpdates(),this.addEventListener("connection-status",(function(e){"connected"===e.detail&&t._loadSupervisorUpdates()}))):this._supervisorUpdates=null,this.addEventListener("ha-refresh-cloud-status",(function(){return t._updateCloudStatus()})),this.style.setProperty("--app-header-background-color","var(--sidebar-background-color)"),this.style.setProperty("--app-header-text-color","var(--sidebar-text-color)"),this.style.setProperty("--app-header-border-bottom","1px solid var(--divider-color)")}},{kind:"method",key:"updatePageEl",value:function(e){var t,n,o="docked"===this.hass.dockedSidebar?this._wideSidebar:this._wide;"setProperties"in e?e.setProperties({route:this.routeTail,hass:this.hass,showAdvanced:Boolean(null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced),isWide:o,narrow:this.narrow,cloudStatus:this._cloudStatus,supervisorUpdates:this._supervisorUpdates}):(e.route=this.routeTail,e.hass=this.hass,e.showAdvanced=Boolean(null===(n=this.hass.userData)||void 0===n?void 0:n.showAdvanced),e.isWide=o,e.narrow=this.narrow,e.cloudStatus=this._cloudStatus,e.supervisorUpdates=this._supervisorUpdates)}},{kind:"method",key:"_updateCloudStatus",value:(l=m(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.LI)(this.hass);case 2:this._cloudStatus=e.sent,("connecting"===this._cloudStatus.cloud||this._cloudStatus.logged_in&&this._cloudStatus.prefs.remote_enabled&&!this._cloudStatus.remote_connected)&&setTimeout((function(){return t._updateCloudStatus()}),5e3);case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{kind:"method",key:"_loadSupervisorUpdates",value:(o=m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(this.hass);case 3:this._supervisorUpdates=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this._supervisorUpdates=null;case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(){return o.apply(this,arguments)})}]}}),p.n)}}]);