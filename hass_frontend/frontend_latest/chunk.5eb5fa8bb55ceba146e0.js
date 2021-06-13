/*! For license information please see chunk.5eb5fa8bb55ceba146e0.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4528],{4528:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>T});var r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o=function(){if("function"==typeof requestAnimationFrame)return requestAnimationFrame.bind(i);return function(t){return setTimeout((function(){t(+Date.now())}),1e3/60)}}();var s=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,c=r&&HTMLElement.prototype.attachShadow&&-1!==HTMLElement.prototype.attachShadow.toString().indexOf("[native code]")?HTMLElement.prototype.attachShadow:null,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&c()}function a(){o(s)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){if(r&&!this.connected_){if(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a){this.mutationsObserver_=new MutationObserver(this.refresh);var t={attributes:!0,childList:!0,characterData:!0,subtree:!0};if(this.mutationsObserver_.observe(document,t),c){var e=this;!function n(r){var i=r.shadowRoot;i&&(e.mutationsObserver_.observe(i,t),n(i));for(var o=r.firstElementChild;o;)n(o),o=o.nextElementSibling}(document),HTMLElement.prototype.attachShadow=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=c.apply(this,n);return e.mutationsObserver_.observe(i,t),i}}}else document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0;this.connected_=!0}},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&(this.mutationsObserver_.disconnect(),c&&(HTMLElement.prototype.attachShadow=c)),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return t.instance_||(t.instance_=new t),t.instance_},t.instance_=null,t}();function u(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}var f=function(t,e){var n,r;try{for(var i=u(Object.keys(e)),o=i.next();!o.done;o=i.next()){var s=o.value;Object.defineProperty(t,s,{value:e[s],enumerable:!1,writable:!1,configurable:!0})}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return t},d=function(t){var e;return(null===(e=null==t?void 0:t.ownerDocument)||void 0===e?void 0:e.defaultView)||i},l=m(0,0,0,0);function v(t){return"number"==typeof t?t:parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}function _(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=d(t).getComputedStyle(t),i=function(t){var e=t;return{top:v(e["padding-top"]),right:v(e["padding-right"]),bottom:v(e["padding-bottom"]),left:v(e["padding-left"])}}(r),o=i.left+i.right,s=i.top+i.bottom,a=v(r.width),c=v(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),!function(t){return t===d(t).document.documentElement}(t)){var h=Math.round(a+o)-e,u=Math.round(c+s)-n;1!==Math.abs(h)&&(a-=h),1!==Math.abs(u)&&(c-=u)}return m(i.left,i.top,a,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function y(t){return r?b(t)?function(t){var e=t.getBBox();return m(0,0,e.width,e.height)}(t):_(t):l}function m(t,e,n,r){return{x:t,y:e,width:n,height:r}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=y(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,i,o,s,a,c,h=(r=(n=e).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),f(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);f(this,{target:t,contentRect:h})},E=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n,r=t(this.__entries__,e);return null===(n=this.__entries__[r])||void 0===n?void 0:n[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){var n,r;void 0===e&&(e=null);try{for(var i=u(this.__entries__),o=i.next();!o.done;o=i.next()){var s=o.value;t.call(e,s[1],s[0])}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},e}()}(),O=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new E,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(void 0===t)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(void 0===t)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),M=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance();this.observer_=new O(e,n,this)}return t.prototype.observe=function(t){this.observer_.observe(t)},t.prototype.unobserve=function(t){this.observer_.unobserve(t)},t.prototype.disconnect=function(){this.observer_.disconnect()},t}();const T=void 0!==i.ResizeObserver?i.ResizeObserver:M}}]);
//# sourceMappingURL=chunk.5eb5fa8bb55ceba146e0.js.map