"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9897],{9897:function(e,t,r){r.r(t),r.d(t,{HuiEnergyUsageGraphCard:function(){return q}});var n,o,i,a,s,l=r(27088),c=r(70390),u=r(3700),d=r(4535),f=r(59699),p=r(37500),h=r(26767),y=r(5701),m=r(17717),v=r(228),g=r(14516),b=r(15838),_=r(89525),k=r(49684),w=r(91741),E=r(18457),S=(r(32833),r(22098),r(55424)),P=r(73826);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function O(e,t){return N(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||$(e,t)||K()}function j(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,o)}function C(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=$(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return R(this,r)}}function R(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function I(){I=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!B(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[i])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,N(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||$(t)||K()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=H(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:W(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=W(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Z(e){var t,r=H(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function V(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function U(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function W(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function H(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}function K(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){if(Array.isArray(e))return e}var q=function(e,t,r,n){var o=I();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(U(i.descriptor)||U(o.descriptor)){if(B(i)||B(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(B(i)){if(B(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}V(i,o)}else t.push(i)}return t}(a.d.map(Z)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,h.M)("hui-energy-usage-graph-card")],(function(e,t){var r,h,P=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(n,t);var r=T(n);function n(){var t;A(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r.call.apply(r,[this].concat(i)),e(F(t)),t}return n}(t);return{F:P,d:[{kind:"field",decorators:[(0,y.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,m.S)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,m.S)()],key:"_start",value:function(){return(0,l.Z)()}},{kind:"field",decorators:[(0,m.S)()],key:"_end",value:function(){return(0,c.Z)()}},{kind:"method",key:"hassSubscribe",value:function(){var e,t=this;return[(0,S.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((function(e){return t._getStatistics(e)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,p.dy)(o||(o=D(["\n      <ha-card>\n        ",'\n        <div\n          class="content ','"\n        >\n          <ha-chart-base\n            .data=',"\n            .options=",'\n            chart-type="bar"\n          ></ha-chart-base>\n          ',"\n        </div>\n      </ha-card>\n    "])),this._config.title?(0,p.dy)(i||(i=D(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,v.$)({"has-header":!!this._config.title}),this._chartData,this._createOptions(this._start,this._end,this.hass.locale),this._chartData.datasets.some((function(e){return e.data.length}))?"":(0,p.dy)(a||(a=D(['<div class="no-data">\n                ',"\n              </div>"])),(0,u.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):(0,p.dy)(n||(n=D([""])))}},{kind:"field",key:"_createOptions",value:function(){var e=this;return(0,g.Z)((function(t,r,n){var o=(0,d.Z)(r,t);return{parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:t.getTime(),suggestedMax:r.getTime(),adapters:{date:{locale:n}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(e){return e.tick&&e.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:o>35?"monthyear":o>7?"date":o>2?"weekday":o>0?"datetime":"hour",minUnit:o>35?"month":o>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0,callback:function(e){return(0,E.uf)(Math.abs(e),n)}}}},plugins:{tooltip:{mode:"x",intersect:!0,position:"nearest",filter:function(e){return"0"!==e.formattedValue},callbacks:{title:function(e){if(o>0)return e[0].label;var t=new Date(e[0].parsed.x);return"".concat((0,k.mr)(t,n)," - ").concat((0,k.mr)((0,f.Z)(t,1),n))},label:function(e){return"".concat(e.dataset.label,": ").concat((0,E.uf)(Math.abs(e.parsed.y),n)," kWh")},footer:function(t){var r,o=0,i=0,a=C(t);try{for(a.s();!(r=a.n()).done;){var s=r.value,l=s.dataset.data[s.dataIndex].y;l>0?o+=l:i+=Math.abs(l)}}catch(c){a.e(c)}finally{a.f()}return[o?e.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed",{num:(0,E.uf)(o,n)}):"",i?e.hass.localize("ui.panel.lovelace.cards.energyenergy_usage_graph.total_returned",{num:(0,E.uf)(i,n)}):""].filter(Boolean)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,E.Hd)(n)}}))}},{kind:"method",key:"_getStatistics",value:(r=regeneratorRuntime.mark((function e(t){var r,n,o,i,a,s,l,u,d,f,p,h,y,m,v,g,k,E,S,P,x,j,D,A,z,T,R,F,M,I,Z,V,B,U,W,H,K,$=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n={},o=C(t.prefs.energy_sources),e.prev=3,o.s();case 5:if((i=o.n()).done){e.next=21;break}if("solar"!==(a=i.value).type){e.next=10;break}return n.solar?n.solar.push(a.stat_energy_from):n.solar=[a.stat_energy_from],e.abrupt("continue",19);case 10:if("battery"!==a.type){e.next=13;break}return n.to_battery?(n.to_battery.push(a.stat_energy_to),n.from_battery.push(a.stat_energy_from)):(n.to_battery=[a.stat_energy_to],n.from_battery=[a.stat_energy_from]),e.abrupt("continue",19);case 13:if("grid"===a.type){e.next=15;break}return e.abrupt("continue",19);case 15:s=C(a.flow_from);try{for(s.s();!(l=s.n()).done;)u=l.value,n.from_grid?n.from_grid.push(u.stat_energy_from):n.from_grid=[u.stat_energy_from]}catch(G){s.e(G)}finally{s.f()}d=C(a.flow_to);try{for(d.s();!(f=d.n()).done;)p=f.value,n.to_grid?n.to_grid.push(p.stat_energy_to):n.to_grid=[p.stat_energy_to]}catch(G){d.e(G)}finally{d.f()}case 19:e.next=5;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),o.e(e.t0);case 26:return e.prev=26,o.f(),e.finish(26);case 29:if(this._start=t.start,this._end=t.end||(0,c.Z)(),h={},y={},m=getComputedStyle(this),v={to_grid:m.getPropertyValue("--energy-grid-return-color").trim(),to_battery:m.getPropertyValue("--energy-battery-in-color").trim(),from_grid:m.getPropertyValue("--energy-grid-consumption-color").trim(),used_grid:m.getPropertyValue("--energy-grid-consumption-color").trim(),used_solar:m.getPropertyValue("--energy-solar-color").trim(),used_battery:m.getPropertyValue("--energy-battery-out-color").trim()},g={used_grid:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid"),used_solar:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar"),used_battery:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery")},Object.entries(n).forEach((function(e){var r=O(e,2),n=r[0],o=r[1],i=["solar","to_grid","from_grid","to_battery","from_battery"].includes(n),a=!["solar","from_battery"].includes(n),s={},l={};o.forEach((function(e){var r=t.stats[e];if(r){var n,o={};r.forEach((function(e){if(null!==e.sum)if(void 0!==n){var t=e.sum-n;i&&(s[e.start]=e.start in s?s[e.start]+t:t),a&&!(e.start in o)&&(o[e.start]=t),n=e.sum}else n=e.sum})),l[e]=o}})),i&&(y[n]=s),a&&(h[n]=l)})),k={},E={},(y.to_grid||y.to_battery)&&y.solar){for(S={},P=0,x=Object.keys(y.solar);P<x.length;P++)A=x[P],S[A]=(y.solar[A]||0)-((null===(j=y.to_grid)||void 0===j?void 0:j[A])||0)-((null===(D=y.to_battery)||void 0===D?void 0:D[A])||0),S[A]<0&&(y.to_battery&&(k[A]=-1*S[A],k[A]>((null===(z=y.from_grid)||void 0===z?void 0:z[A])||0)&&(E[A]=Math.min(0,k[A]-((null===(T=y.from_grid)||void 0===T?void 0:T[A])||0)),k[A]=null===(R=y.from_grid)||void 0===R?void 0:R[A])),S[A]=0);h.used_solar={used_solar:S}}if(y.from_battery)if(y.to_grid){for(F={},M=0,I=Object.keys(y.from_battery);M<I.length;M++)Z=I[M],F[Z]=(y.from_battery[Z]||0)-(E[Z]||0);h.used_battery={used_battery:F}}else h.used_battery={used_battery:y.from_battery};if(h.from_grid&&y.to_battery){for(V={},B=function(){for(var e=W[U],t=0,r=void 0,n=0,o=Object.entries(h.from_grid);n<o.length;n++){var i=O(o[n],2),a=i[0];if(i[1][e]&&(r=a,t++),t>1)break}if(1===t)h.from_grid[r][e]-=k[e]||0;else{var s=0;Object.values(h.from_grid).forEach((function(t){s+=t[e]||0,delete t[e]})),V[e]=s-(k[e]||0)}},U=0,W=Object.keys(k);U<W.length;U++)B();h.used_grid={used_grid:V}}H=[],Object.values(h).forEach((function(e){Object.values(e).forEach((function(e){H=H.concat(Object.keys(e))}))})),K=Array.from(new Set(H)),Object.entries(h).forEach((function(e){var t=O(e,2),n=t[0],o=t[1];Object.entries(o).forEach((function(e,t){var o=O(e,2),i=o[0],a=o[1],s=[],l=$.hass.states[i],c=t>0?$.hass.themes.darkMode?(0,_.C)((0,b.Rw)((0,b.wK)(v[n])),t):(0,_.W)((0,b.Rw)((0,b.wK)(v[n])),t):void 0,u=c?(0,b.CO)((0,b.p3)(c)):v[n];s.push({label:n in g?g[n]:l?(0,w.C)(l):i,order:"used_solar"===n?0:"to_battery"===n?Object.keys(h).length:t+1,borderColor:u,backgroundColor:u+"7F",stack:"stack",data:[]});var d,f=C(K);try{for(f.s();!(d=f.n()).done;){var p=d.value,y=a[p]||0,m=new Date(p);s[0].data.push({x:m.getTime(),y:y&&["to_grid","to_battery"].includes(n)?-1*y:y})}}catch(G){f.e(G)}finally{f.f()}Array.prototype.push.apply(r,s)}))})),this._chartData={datasets:r};case 47:case"end":return e.stop()}}),e,this,[[3,23,26,29]])})),h=function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){j(i,n,o,a,s,"next",e)}function s(e){j(i,n,o,a,s,"throw",e)}a(void 0)}))},function(e){return h.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(s||(s=D(["\n      ha-card {\n        height: 100%;\n      }\n      .card-header {\n        padding-bottom: 0;\n      }\n      .content {\n        padding: 16px;\n      }\n      .has-header {\n        padding-top: 0;\n      }\n      .no-data {\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20%;\n        margin-left: 32px;\n        box-sizing: border-box;\n      }\n    "])))}}]}}),(0,P.f)(p.oi))}}]);