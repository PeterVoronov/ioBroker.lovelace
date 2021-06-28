/*! For license information please see chunk.38c556de14ecfe9c445e.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2613],{74015:function(e,t,n){"use strict";var i,r;n.d(t,{j2:function(){return s},UX:function(){return o},KT:function(){return d}});var o={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},a=((i={})[""+o.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",i[""+o.LIST_ITEM_CLASS]="mdc-list-item",i[""+o.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",i[""+o.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",i[""+o.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",i[""+o.ROOT]="mdc-list",(r={})[""+o.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",r[""+o.LIST_ITEM_CLASS]="mdc-deprecated-list-item",r[""+o.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",r[""+o.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",r[""+o.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",r[""+o.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",r[""+o.ROOT]="mdc-deprecated-list",r),s={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+o.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+o.LIST_ITEM_CLASS+" a,\n    ."+a[o.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[o.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+o.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+o.LIST_ITEM_CLASS+" a,\n    ."+o.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+o.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+a[o.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[o.LIST_ITEM_CLASS]+" a,\n    ."+a[o.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+a[o.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},d={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300}},62613:function(e,t,n){"use strict";var i=n(36220),r=n(55704),o=(n(87724),n(78220)),a=n(14114),s=n(82612),d=n(49629),c=n(72774),l="Unknown",u="Backspace",f="Enter",m="Spacebar",p="PageUp",h="PageDown",v="End",y="Home",I="ArrowLeft",b="ArrowUp",_="ArrowRight",E="ArrowDown",S="Delete",g="Escape",x="Tab",T=new Set;T.add(u),T.add(f),T.add(m),T.add(p),T.add(h),T.add(v),T.add(y),T.add(I),T.add(b),T.add(_),T.add(E),T.add(S),T.add(g),T.add(x);var A=8,C=13,R=32,L=33,w=34,O=35,F=36,k=37,M=38,D=39,N=40,P=46,j=27,U=9,K=new Map;K.set(A,u),K.set(C,f),K.set(R,m),K.set(L,p),K.set(w,h),K.set(O,v),K.set(F,y),K.set(k,I),K.set(M,b),K.set(D,_),K.set(N,E),K.set(P,S),K.set(j,g),K.set(U,x);var X=new Set;function B(e){var t=e.key;if(T.has(t))return t;var n=K.get(e.keyCode);return n||l}X.add(p),X.add(h),X.add(v),X.add(y),X.add(I),X.add(b),X.add(_),X.add(E);var V=n(74015);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function q(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Q(e);if(t){var r=Q(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return J(this,n)}}function J(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e,t){return e-t},te=function(e,t){for(var n=Array.from(e),i=Array.from(t),r={added:[],removed:[]},o=n.sort(ee),a=i.sort(ee),s=0,d=0;s<o.length||d<a.length;){var c=o[s],l=a[d];c!==l?void 0!==c&&(void 0===l||c<l)?(r.removed.push(c),s++):void 0!==l&&(void 0===c||l<c)&&(r.added.push(l),d++):(s++,d++)}return r},ne=["input","button","textarea","select"];function ie(e){return e instanceof Set}var re,oe,ae=function(e){var t=e===V.KT.UNSET_INDEX?new Set:e;return ie(t)?new Set(t):new Set([t])},se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(o,e);var t,n,i,r=Z(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,Object.assign(Object.assign({},o.defaultAdapter),e))).isMulti_=!1,t.wrapFocus_=!1,t.isVertical_=!0,t.selectedIndex_=V.KT.UNSET_INDEX,t.focusedItemIndex_=V.KT.UNSET_INDEX,t.useActivatedClass_=!1,t.ariaCurrentAttrValue_=null,t}return t=o,i=[{key:"strings",get:function(){return V.j2}},{key:"numbers",get:function(){return V.KT}},{key:"defaultAdapter",get:function(){return{focusItemAtIndex:function(){},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},notifyAction:function(){},notifySelected:function(){},getSelectedStateForElementIndex:function(){return!1},setDisabledStateForElementIndex:function(){},getDisabledStateForElementIndex:function(){return!1},setSelectedStateForElementIndex:function(){},setActivatedStateForElementIndex:function(){},setTabIndexForElementIndex:function(){},setAttributeForElementIndex:function(){},getAttributeForElementIndex:function(){return null}}}}],(n=[{key:"setWrapFocus",value:function(e){this.wrapFocus_=e}},{key:"setMulti",value:function(e){this.isMulti_=e;var t=this.selectedIndex_;if(e){if(!ie(t)){var n=t===V.KT.UNSET_INDEX;this.selectedIndex_=n?new Set:new Set([t])}}else if(ie(t))if(t.size){var i=Array.from(t).sort(ee);this.selectedIndex_=i[0]}else this.selectedIndex_=V.KT.UNSET_INDEX}},{key:"setVerticalOrientation",value:function(e){this.isVertical_=e}},{key:"setUseActivatedClass",value:function(e){this.useActivatedClass_=e}},{key:"getSelectedIndex",value:function(){return this.selectedIndex_}},{key:"setSelectedIndex",value:function(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(ae(e)):this.setSingleSelectionAtIndex_(e))}},{key:"handleFocusIn",value:function(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,0)}},{key:"handleFocusOut",value:function(e,t){var n=this;t>=0&&this.adapter.setTabIndexForElementIndex(t,-1),setTimeout((function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()}),0)}},{key:"handleKeydown",value:function(e,t,n){var i="ArrowLeft"===B(e),r="ArrowUp"===B(e),o="ArrowRight"===B(e),a="ArrowDown"===B(e),s="Home"===B(e),d="End"===B(e),c="Enter"===B(e),l="Spacebar"===B(e);if(this.adapter.isRootFocused())r||d?(e.preventDefault(),this.focusLastElement()):(a||s)&&(e.preventDefault(),this.focusFirstElement());else{var u=this.adapter.getFocusedElementIndex();if(!(-1===u&&(u=n)<0)){var f;if(this.isVertical_&&a||!this.isVertical_&&o)this.preventDefaultEvent(e),f=this.focusNextElement(u);else if(this.isVertical_&&r||!this.isVertical_&&i)this.preventDefaultEvent(e),f=this.focusPrevElement(u);else if(s)this.preventDefaultEvent(e),f=this.focusFirstElement();else if(d)this.preventDefaultEvent(e),f=this.focusLastElement();else if((c||l)&&t){var m=e.target;if(m&&"A"===m.tagName&&c)return;this.preventDefaultEvent(e),this.setSelectedIndexOnAction_(u,!0)}this.focusedItemIndex_=u,void 0!==f&&(this.setTabindexAtIndex_(f),this.focusedItemIndex_=f)}}}},{key:"handleSingleSelection",value:function(e,t,n){e!==V.KT.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t,n),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}},{key:"focusNextElement",value:function(e){var t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter.focusItemAtIndex(t),t}},{key:"focusPrevElement",value:function(e){var t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(t),t}},{key:"focusFirstElement",value:function(){return this.adapter.focusItemAtIndex(0),0}},{key:"focusLastElement",value:function(){var e=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(e),e}},{key:"setEnabled",value:function(e,t){this.isIndexValid_(e)&&this.adapter.setDisabledStateForElementIndex(e,!t)}},{key:"preventDefaultEvent",value:function(e){var t=e.target,n="".concat(t.tagName).toLowerCase();-1===ne.indexOf(n)&&e.preventDefault()}},{key:"setSingleSelectionAtIndex_",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.selectedIndex_!==e&&(this.selectedIndex_!==V.KT.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter.notifySelected(e))}},{key:"setMultiSelectionAtIndex_",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=ae(this.selectedIndex_),i=te(n,e);if(i.removed.length||i.added.length){var r,o=Y(i.removed);try{for(o.s();!(r=o.n()).done;){var a=r.value;t&&this.adapter.setSelectedStateForElementIndex(a,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(a,!1)}}catch(l){o.e(l)}finally{o.f()}var s,d=Y(i.added);try{for(d.s();!(s=d.n()).done;){var c=s.value;t&&this.adapter.setSelectedStateForElementIndex(c,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(c,!0)}}catch(l){d.e(l)}finally{d.f()}this.selectedIndex_=e,this.adapter.notifySelected(e,i)}}},{key:"setAriaForSingleSelectionAtIndex_",value:function(e){this.selectedIndex_===V.KT.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(e,V.j2.ARIA_CURRENT));var t=null!==this.ariaCurrentAttrValue_,n=t?V.j2.ARIA_CURRENT:V.j2.ARIA_SELECTED;this.selectedIndex_!==V.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,n,"false");var i=t?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(e,n,i)}},{key:"setTabindexAtIndex_",value:function(e){this.focusedItemIndex_===V.KT.UNSET_INDEX&&0!==e?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(e,0)}},{key:"setTabindexToFirstSelectedItem_",value:function(){var e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==V.KT.UNSET_INDEX?e=this.selectedIndex_:ie(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min.apply(Math,H(this.selectedIndex_))),this.setTabindexAtIndex_(e)}},{key:"isIndexValid_",value:function(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;var t,n=!1,i=Y(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(n=this.isIndexInRange_(r))break}}catch(o){i.e(o)}finally{i.f()}return n}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return e===V.KT.UNSET_INDEX||this.isIndexInRange_(e)}return!1}},{key:"isIndexInRange_",value:function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t}},{key:"setSelectedIndexOnAction_",value:function(e,t,n){if(!this.adapter.getDisabledStateForElementIndex(e)){var i=e;this.isMulti_&&(i=new Set([e])),this.isIndexValid_(i)&&(this.isMulti_?this.toggleMultiAtIndex(e,n,t):t||n?this.setSingleSelectionAtIndex_(e,t):this.selectedIndex_===e&&this.setSingleSelectionAtIndex_(V.KT.UNSET_INDEX),t&&this.adapter.notifyAction(e))}}},{key:"toggleMultiAtIndex",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!1;i=void 0===t?!this.adapter.getSelectedStateForElementIndex(e):t;var r=ae(this.selectedIndex_);i?r.add(e):r.delete(e),this.setMultiSelectionAtIndex_(r,n)}}])&&G(t.prototype,n),i&&G(t,i),o}(c.K);function de(e){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function le(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function fe(e,t,n,i,r,o,a){try{var s=e[o](a),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(i,r)}function me(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){fe(o,i,r,a,s,"next",e)}function s(e){fe(o,i,r,a,s,"throw",e)}a(void 0)}))}}function pe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function he(e,t,n){return(he="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_e(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=_e(e);if(t){var r=_e(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Ie(this,n)}}function Ie(e,t){return!t||"object"!==de(t)&&"function"!=typeof t?be(e):t}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ee=function(e){return e.hasAttribute("mwc-list-item")};function Se(){var e=this,t=this.itemsReadyResolver;this.itemsReady=new Promise((function(t){return e.itemsReadyResolver=t})),t()}var ge,xe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(l,e);var t,n,i,o,a,c=ye(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this)).mdcAdapter=null,e.mdcFoundationClass=se,e.activatable=!1,e.multi=!1,e.wrapFocus=!1,e.itemRoles=null,e.innerRole=null,e.innerAriaLabel=null,e.rootTabbable=!1,e.previousTabindex=null,e.noninteractive=!1,e.itemsReadyResolver=function(){},e.itemsReady=Promise.resolve([]),e.items_=[];var t=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return function(){var i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];clearTimeout(t),t=setTimeout((function(){e(i)}),n)}}(e.layout.bind(be(e)));return e.debouncedLayout=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Se.call(be(e)),t(n)},e}return t=l,(n=[{key:"_getUpdateComplete",value:(a=me(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getUpdateComplete());case 1:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"getUpdateComplete",value:(o=me(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,!he(_e(l.prototype),"getUpdateComplete",this)){e.next=7;break}return e.next=4,he(_e(l.prototype),"getUpdateComplete",this).call(this);case 4:t=e.sent,e.next=9;break;case 7:return e.next=9,he(_e(l.prototype),"_getUpdateComplete",this).call(this);case 9:return e.next=11,this.itemsReady;case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"assignedElements",get:function(){var e=this.slotElement;return e?e.assignedNodes({flatten:!0}).filter(s.OE):[]}},{key:"items",get:function(){return this.items_}},{key:"updateItems",value:function(){var e,t=this,n=[],i=le(this.assignedElements);try{for(i.s();!(e=i.n()).done;){var r=e.value;Ee(r)&&(n.push(r),r._managingList=this),r.hasAttribute("divider")&&!r.hasAttribute("role")&&r.setAttribute("role","separator")}}catch(d){i.e(d)}finally{i.f()}this.items_=n;var o=new Set;if(this.items_.forEach((function(e,n){t.itemRoles?e.setAttribute("role",t.itemRoles):e.removeAttribute("role"),e.selected&&o.add(n)})),this.multi)this.select(o);else{var a=o.size?o.entries().next().value[1]:-1;this.select(a)}var s=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(s)}},{key:"selected",get:function(){var e=this.index;if(!ie(e))return-1===e?null:this.items[e];var t,n=[],i=le(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;n.push(this.items[r])}}catch(o){i.e(o)}finally{i.f()}return n}},{key:"index",get:function(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}},{key:"render",value:function(){var e=null===this.innerRole?void 0:this.innerRole,t=null===this.innerAriaLabel?void 0:this.innerAriaLabel,n=this.rootTabbable?"0":"-1";return(0,r.dy)(re||(re=ce(["\n      \x3c!-- @ts-ignore --\x3e\n      <ul\n          tabindex=",'\n          role="','"\n          aria-label="','"\n          class="mdc-deprecated-list"\n          @keydown=',"\n          @focusin=","\n          @focusout=","\n          @request-selected=","\n          @list-item-rendered=",">\n        <slot></slot>\n        ","\n      </ul>\n    "])),n,(0,d.o)(e),(0,d.o)(t),this.onKeydown,this.onFocusIn,this.onFocusOut,this.onRequestSelected,this.onListItemConnected,this.renderPlaceholder())}},{key:"renderPlaceholder",value:function(){return void 0!==this.emptyMessage&&0===this.assignedElements.length?(0,r.dy)(oe||(oe=ce(["\n        <mwc-list-item noninteractive>","</mwc-list-item>\n      "])),this.emptyMessage):null}},{key:"firstUpdated",value:function(){he(_e(l.prototype),"firstUpdated",this).call(this),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}},{key:"onFocusIn",value:function(e){if(this.mdcFoundation&&this.mdcRoot){var t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}},{key:"onFocusOut",value:function(e){if(this.mdcFoundation&&this.mdcRoot){var t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}},{key:"onKeydown",value:function(e){if(this.mdcFoundation&&this.mdcRoot){var t=this.getIndexOfTarget(e),n=e.target,i=Ee(n);this.mdcFoundation.handleKeydown(e,i,t)}}},{key:"onRequestSelected",value:function(e){if(this.mdcFoundation){var t=this.getIndexOfTarget(e);if(-1===t&&(this.layout(),-1===(t=this.getIndexOfTarget(e))))return;if(this.items[t].disabled)return;var n=e.detail.selected,i=e.detail.source;this.mdcFoundation.handleSingleSelection(t,"interaction"===i,n),e.stopPropagation()}}},{key:"getIndexOfTarget",value:function(e){var t,n=this.items,i=le(e.composedPath());try{for(i.s();!(t=i.n()).done;){var r=t.value,o=-1;if((0,s.OE)(r)&&Ee(r)&&(o=n.indexOf(r)),-1!==o)return o}}catch(a){i.e(a)}finally{i.f()}return-1}},{key:"createAdapter",value:function(){var e=this;return this.mdcAdapter={getListItemCount:function(){return e.mdcRoot?e.items.length:0},getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:function(t,n){if(!e.mdcRoot)return"";var i=e.items[t];return i?i.getAttribute(n):""},setAttributeForElementIndex:function(t,n,i){if(e.mdcRoot){var r=e.items[t];r&&r.setAttribute(n,i)}},focusItemAtIndex:function(t){var n=e.items[t];n&&n.focus()},setTabIndexForElementIndex:function(t,n){var i=e.items[t];i&&(i.tabindex=n)},notifyAction:function(t){var n={bubbles:!0,composed:!0};n.detail={index:t};var i=new CustomEvent("action",n);e.dispatchEvent(i)},notifySelected:function(t,n){var i={bubbles:!0,composed:!0};i.detail={index:t,diff:n};var r=new CustomEvent("selected",i);e.dispatchEvent(r)},isFocusInsideList:function(){return(0,s.WU)(e)},isRootFocused:function(){var t=e.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:function(t,n){var i=e.items[t];i&&(i.disabled=n)},getDisabledStateForElementIndex:function(t){var n=e.items[t];return!!n&&n.disabled},setSelectedStateForElementIndex:function(t,n){var i=e.items[t];i&&(i.selected=n)},getSelectedStateForElementIndex:function(t){var n=e.items[t];return!!n&&n.selected},setActivatedStateForElementIndex:function(t,n){var i=e.items[t];i&&(i.activated=n)}},this.mdcAdapter}},{key:"selectUi",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.items[e];n&&(n.selected=!0,n.activated=t)}},{key:"deselectUi",value:function(e){var t=this.items[e];t&&(t.selected=!1,t.activated=!1)}},{key:"select",value:function(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}},{key:"toggle",value:function(e,t){this.multi&&this.mdcFoundation.toggleMultiAtIndex(e,t)}},{key:"onListItemConnected",value:function(e){var t=e.target;this.layout(-1===this.items.indexOf(t))}},{key:"layout",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.updateItems();var t,n=this.items[0],i=le(this.items);try{for(i.s();!(t=i.n()).done;){var r=t.value;r.tabindex=-1}}catch(o){i.e(o)}finally{i.f()}n&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=n):n.tabindex=0),this.itemsReadyResolver()}},{key:"getFocusedItemIndex",value:function(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;var e=(0,s.Mh)();if(!e.length)return-1;for(var t=e.length-1;t>=0;t--){var n=e[t];if(Ee(n))return this.items.indexOf(n)}return-1}},{key:"focusItemAtIndex",value:function(e){var t,n=le(this.items);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(0===i.tabindex){i.tabindex=-1;break}}}catch(r){n.e(r)}finally{n.f()}this.items[e].tabindex=0,this.items[e].focus()}},{key:"focus",value:function(){var e=this.mdcRoot;e&&e.focus()}},{key:"blur",value:function(){var e=this.mdcRoot;e&&e.blur()}}])&&pe(t.prototype,n),i&&pe(t,i),l}(o.H);(0,i.gn)([(0,r.Cb)({type:String})],xe.prototype,"emptyMessage",void 0),(0,i.gn)([(0,r.IO)(".mdc-deprecated-list")],xe.prototype,"mdcRoot",void 0),(0,i.gn)([(0,r.IO)("slot")],xe.prototype,"slotElement",void 0),(0,i.gn)([(0,r.Cb)({type:Boolean}),(0,a.P)((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],xe.prototype,"activatable",void 0),(0,i.gn)([(0,r.Cb)({type:Boolean}),(0,a.P)((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],xe.prototype,"multi",void 0),(0,i.gn)([(0,r.Cb)({type:Boolean}),(0,a.P)((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],xe.prototype,"wrapFocus",void 0),(0,i.gn)([(0,r.Cb)({type:String}),(0,a.P)((function(e,t){void 0!==t&&this.updateItems()}))],xe.prototype,"itemRoles",void 0),(0,i.gn)([(0,r.Cb)({type:String})],xe.prototype,"innerRole",void 0),(0,i.gn)([(0,r.Cb)({type:String})],xe.prototype,"innerAriaLabel",void 0),(0,i.gn)([(0,r.Cb)({type:Boolean})],xe.prototype,"rootTabbable",void 0),(0,i.gn)([(0,r.Cb)({type:Boolean,reflect:!0}),(0,a.P)((function(e){var t=this.slotElement;if(e&&t){var n=(0,s.f6)(t,'[tabindex="0"]');this.previousTabindex=n,n&&n.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],xe.prototype,"noninteractive",void 0);var Te,Ae,Ce=(0,r.iv)(ge||(Te=['@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}'],Ae||(Ae=Te.slice(0)),ge=Object.freeze(Object.defineProperties(Te,{raw:{value:Object.freeze(Ae)}}))));function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=ke(e);if(t){var r=ke(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Fe(this,n)}}function Fe(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(n,e);var t=Oe(n);function n(){return Le(this,n),t.apply(this,arguments)}return n}(xe);Me.styles=Ce,Me=(0,i.gn)([(0,r.Mo)("mwc-list")],Me)}}]);
//# sourceMappingURL=chunk.38c556de14ecfe9c445e.js.map