/*! For license information please see chunk.656b27e96b9e450e96c3.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2411],{52003:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}n.d(e,{F:function(){return o},C:function(){return i}});var o=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,r){var o,i,c,u,s,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=l.length>2&&void 0!==l[2]&&l[2],e.parentNode){t.next=3;break}throw new Error("Cannot setup Leaflet map on disconnected element");case 3:return t.next=5,n.e(6085).then(n.t.bind(n,70208,23));case 5:if((i=t.sent.default).Icon.Default.imagePath="/static/images/leaflet/images/",!o){t.next=10;break}return t.next=10,n.e(7716).then(n.t.bind(n,27716,23));case 10:return c=i.map(e),(u=document.createElement("link")).setAttribute("href","/static/images/leaflet/leaflet.css"),u.setAttribute("rel","stylesheet"),e.parentNode.appendChild(u),c.setView([52.3731339,4.8903147],13),s=a(i,Boolean(r)).addTo(c),t.abrupt("return",[c,i,s]);case 18:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t,n){return e.apply(this,arguments)}}(),i=function(t,e,n,r){return e.removeLayer(n),(n=a(t,r)).addTo(e),n},a=function(t,e){return t.tileLayer("https://{s}.basemaps.cartocdn.com/".concat(e?"dark_all":"light_all","/{z}/{x}/{y}").concat(t.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})}},27269:function(t,e,n){"use strict";n.d(e,{p:function(){return r}});var r=function(t){return t.substr(t.indexOf(".")+1)}},22311:function(t,e,n){"use strict";n.d(e,{N:function(){return o}});var r=n(58831),o=function(t){return(0,r.M)(t.entity_id)}},91741:function(t,e,n){"use strict";n.d(e,{C:function(){return o}});var r=n(27269),o=function(t){return void 0===t.attributes.friendly_name?(0,r.p)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}},45841:function(t,e,n){"use strict";n.d(e,{V3:function(){return a},AD:function(){return c},nq:function(){return u},zt:function(){return s},$H:function(){return l},Bf:function(){return f},vp:function(){return p},fT:function(){return h},Pc:function(){return y}});var r,o=n(83849),i=n(38353),a=i.u,c=i.Q,u="#9b9b9b",s=function(t){return t.callWS({type:"zone/list"})},l=function(t,e){return t.callWS(Object.assign({type:"zone/create"},e))},f=function(t,e,n){return t.callWS(Object.assign({type:"zone/update",zone_id:e},n))},p=function(t,e){return t.callWS({type:"zone/delete",zone_id:e})},h=function(t){r=t,(0,o.c)("/config/zone/new")},y=function(){var t=r;return r=void 0,t}},27849:function(t,e,n){"use strict";n(39841);var r,o=n(50856);n(28426);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,customElements.get("app-header-layout"));var e,n,i,l=s(f);function f(){return a(this,f),l.apply(this,arguments)}return e=f,i=[{key:"template",get:function(){return(0,o.d)(r||(t=['\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot="header"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using \'transform\' will cause \'position: fixed\' elements to behave like\n           \'position: absolute\' relative to this element. */\n          transform: translate(0);\n          margin-left: env(safe-area-inset-left);\n          margin-right: env(safe-area-inset-right);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id="wrapper" class="initializing">\n        <slot id="headerSlot" name="header"></slot>\n\n        <div id="contentContainer"><slot></slot></div>\n        <slot id="fab" name="fab"></slot>\n      </div>\n    '],(e=['\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot="header"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot="header"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using \'transform\' will cause \'position: fixed\' elements to behave like\n           \'position: absolute\' relative to this element. */\n          transform: translate(0);\n          margin-left: env(safe-area-inset-left);\n          margin-right: env(safe-area-inset-right);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id="wrapper" class="initializing">\n        <slot id="headerSlot" name="header"></slot>\n\n        <div id="contentContainer"><slot></slot></div>\n        <slot id="fab" name="fab"></slot>\n      </div>\n    '])||(e=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))));var t,e}}],(n=null)&&c(e.prototype,n),i&&c(e,i),f}();customElements.define("ha-app-layout",p)},11052:function(t,e,n){"use strict";n.d(e,{I:function(){return p}});var r=n(76389),o=n(47181);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=(0,r.o)((function(t){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(l,t);var e,n,r,i=s(l);function l(){return a(this,l),i.apply(this,arguments)}return e=l,(n=[{key:"fire",value:function(t,e,n){return n=n||{},(0,o.B)(n.node||this,t,e,n)}}])&&c(e.prototype,n),r&&c(e,r),l}(t)}))},1265:function(t,e,n){"use strict";var r=n(76389);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.Z=(0,r.o)((function(t){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,r,o=u(s);function s(){return i(this,s),o.apply(this,arguments)}return e=s,r=[{key:"properties",get:function(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}}],(n=[{key:"__computeLocalize",value:function(t){return t}}])&&a(e.prototype,n),r&&a(e,r),s}(t)}))},73085:function(t,e,n){"use strict";n(44285);var r,o=n(50856),i=n(28426);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,n,i,a=f(p);function p(){return c(this,p),a.apply(this,arguments)}return e=p,i=[{key:"template",get:function(){return(0,o.d)(r||(t=['\n      <style include="iron-positioning"></style>\n      <style>\n        .marker {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: 2.5em;\n          text-align: center;\n          height: 2.5em;\n          line-height: 2.5em;\n          font-size: 1.5em;\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-marker-color, var(--primary-color));\n          color: var(--primary-text-color);\n          background-color: var(--card-background-color);\n        }\n        iron-image {\n          border-radius: 50%;\n        }\n      </style>\n\n      <div class="marker" style$="border-color:{{entityColor}}">\n        <template is="dom-if" if="[[entityName]]">[[entityName]]</template>\n        <template is="dom-if" if="[[entityPicture]]">\n          <iron-image\n            sizing="cover"\n            class="fit"\n            src="[[entityPicture]]"\n          ></iron-image>\n        </template>\n      </div>\n    '],e||(e=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))));var t,e}},{key:"properties",get:function(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null},entityColor:{type:String,value:null}}}}],(n=[{key:"ready",value:function(){var t=this;s(h(p.prototype),"ready",this).call(this),this.addEventListener("click",(function(e){return t.badgeTap(e)}))}},{key:"badgeTap",value:function(t){t.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}}])&&u(e.prototype,n),i&&u(e,i),p}((0,n(11052).I)(i.H3));customElements.define("ha-entity-marker",y)},2411:function(t,e,n){"use strict";n.r(e);n(12730);var r,o=n(50856),i=n(28426),a=n(52003),c=n(22311),u=n(91741),s=n(83849),l=(n(16509),n(48932),n(45841)),f=(n(27849),n(1265));n(3426),n(73085);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(_,t);var e,n,i,f,p,y=w(_);function _(){return b(this,_),y.apply(this,arguments)}return e=_,n=[{key:"connectedCallback",value:function(){v(O(_.prototype),"connectedCallback",this).call(this),this.loadMap()}},{key:"loadMap",value:(f=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._darkMode=this.hass.themes.darkMode,t.next=3,(0,a.F)(this.$.map,this._darkMode);case 3:e=t.sent,n=h(e,3),this._map=n[0],this.Leaflet=n[1],this._tileLayer=n[2],this.drawEntities(this.hass),this._map.invalidateSize(),this.fitMap();case 11:case"end":return t.stop()}}),t,this)})),p=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=f.apply(t,e);function i(t){d(o,n,r,i,a,"next",t)}function a(t){d(o,n,r,i,a,"throw",t)}i(void 0)}))},function(){return p.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this._map&&this._map.remove()}},{key:"computeShowEditZone",value:function(t){return t.user.is_admin}},{key:"openZonesEditor",value:function(){(0,s.c)("/config/zone")}},{key:"fitMap",value:function(){var t;0===this._mapItems.length?this._map.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),14):(t=new this.Leaflet.latLngBounds(this._mapItems.map((function(t){return t.getLatLng()}))),this._map.fitBounds(t.pad(.5)))}},{key:"drawEntities",value:function(t){var e=this,n=this._map;if(n){this._darkMode!==this.hass.themes.darkMode&&(this._darkMode=this.hass.themes.darkMode,this._tileLayer=(0,a.C)(this.Leaflet,n,this._tileLayer,this.hass.themes.darkMode)),this._mapItems&&this._mapItems.forEach((function(t){t.remove()}));var r=this._mapItems=[];this._mapZones&&this._mapZones.forEach((function(t){t.remove()}));var o=this._mapZones=[];Object.keys(t.states).forEach((function(i){var a=t.states[i];if("home"!==a.state&&"latitude"in a.attributes&&"longitude"in a.attributes){var s,f=(0,u.C)(a);if("zone"===(0,c.N)(a)){if(a.attributes.passive)return;var p="";if(a.attributes.icon){var h=document.createElement("ha-icon");h.setAttribute("icon",a.attributes.icon),p=h.outerHTML}else{var y=document.createElement("span");y.innerHTML=f,p=y.outerHTML}return s=e.Leaflet.divIcon({html:p,iconSize:[24,24],className:"icon"}),o.push(e.Leaflet.marker([a.attributes.latitude,a.attributes.longitude],{icon:s,interactive:!1,title:f}).addTo(n)),void o.push(e.Leaflet.circle([a.attributes.latitude,a.attributes.longitude],{interactive:!1,color:l.V3,radius:a.attributes.radius}).addTo(n))}var d=a.attributes.entity_picture||"",b=f.split(" ").map((function(t){return t.substr(0,1)})).join("");s=e.Leaflet.divIcon({html:"<ha-entity-marker entity-id='"+a.entity_id+"' entity-name='"+b+"' entity-picture='"+d+"'></ha-entity-marker>",iconSize:[45,45],className:""}),r.push(e.Leaflet.marker([a.attributes.latitude,a.attributes.longitude],{icon:s,title:(0,u.C)(a)}).addTo(n)),a.attributes.gps_accuracy&&r.push(e.Leaflet.circle([a.attributes.latitude,a.attributes.longitude],{interactive:!1,color:"#0288D1",radius:a.attributes.gps_accuracy}).addTo(n))}}))}}}],i=[{key:"template",get:function(){return(0,o.d)(r||(t=['\n      <style include="ha-style">\n        #map {\n          height: calc(100vh - var(--header-height));\n          width: 100%;\n          z-index: 0;\n          background: inherit;\n        }\n\n        .icon {\n          color: var(--primary-text-color);\n        }\n      </style>\n\n      <ha-app-layout>\n        <app-header fixed slot="header">\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.map\')]]</div>\n            <template is="dom-if" if="[[computeShowEditZone(hass)]]">\n              <ha-icon-button\n                icon="hass:pencil"\n                on-click="openZonesEditor"\n              ></ha-icon-button>\n            </template>\n          </app-toolbar>\n        </app-header>\n        <div id="map"></div>\n      </ha-app-layout>\n    '],e||(e=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))));var t,e}},{key:"properties",get:function(){return{hass:{type:Object,observer:"drawEntities"},narrow:Boolean}}}],n&&m(e.prototype,n),i&&m(e,i),_}((0,f.Z)(i.H3));customElements.define("ha-panel-map",k)},3426:function(t,e,n){"use strict";n(21384);var r=n(11654),o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="ha-style">\n  <template>\n    <style>\n    '.concat(r.Qx.cssText,"\n    </style>\n  </template>\n</dom-module>"),document.head.appendChild(o.content)}}]);
//# sourceMappingURL=chunk.656b27e96b9e450e96c3.js.map