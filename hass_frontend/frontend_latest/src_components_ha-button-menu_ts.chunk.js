"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_ha-button-menu_ts"],{

/***/ "./src/components/ha-button-menu.ts":
/*!******************************************!*\
  !*** ./src/components/ha-button-menu.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HaButtonMenu\": () => (/* binding */ HaButtonMenu)\n/* harmony export */ });\n/* harmony import */ var _material_mwc_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-menu */ \"./node_modules/@material/mwc-menu/mwc-menu.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _dialogs_make_dialog_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/make-dialog-manager */ \"./src/dialogs/make-dialog-manager.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nlet HaButtonMenu = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.customElement)(\"ha-button-menu\")], function (_initialize, _LitElement) {\n  class HaButtonMenu extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HaButtonMenu,\n    d: [{\n      kind: \"field\",\n      key: _dialogs_make_dialog_manager__WEBPACK_IMPORTED_MODULE_3__.FOCUS_TARGET,\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)()],\n      key: \"corner\",\n\n      value() {\n        return \"TOP_START\";\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)()],\n      key: \"menuCorner\",\n\n      value() {\n        return \"START\";\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Number\n      })],\n      key: \"x\",\n\n      value() {\n        return null;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Number\n      })],\n      key: \"y\",\n\n      value() {\n        return null;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Boolean\n      })],\n      key: \"multi\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Boolean\n      })],\n      key: \"activatable\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Boolean\n      })],\n      key: \"disabled\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        type: Boolean\n      })],\n      key: \"fixed\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.query)(\"mwc-menu\", true)],\n      key: \"_menu\",\n      value: void 0\n    }, {\n      kind: \"get\",\n      key: \"items\",\n      value: function items() {\n        var _this$_menu;\n\n        return (_this$_menu = this._menu) === null || _this$_menu === void 0 ? void 0 : _this$_menu.items;\n      }\n    }, {\n      kind: \"get\",\n      key: \"selected\",\n      value: function selected() {\n        var _this$_menu2;\n\n        return (_this$_menu2 = this._menu) === null || _this$_menu2 === void 0 ? void 0 : _this$_menu2.selected;\n      }\n    }, {\n      kind: \"method\",\n      key: \"focus\",\n      value: function focus() {\n        var _this$_menu3;\n\n        if ((_this$_menu3 = this._menu) !== null && _this$_menu3 !== void 0 && _this$_menu3.open) {\n          this._menu.focusItemAtIndex(0);\n        } else {\n          var _this$_triggerButton;\n\n          (_this$_triggerButton = this._triggerButton) === null || _this$_triggerButton === void 0 ? void 0 : _this$_triggerButton.focus();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return lit__WEBPACK_IMPORTED_MODULE_1__.html`\n      <div @click=${this._handleClick}>\n        <slot name=\"trigger\" @slotchange=${this._setTriggerAria}></slot>\n      </div>\n      <mwc-menu\n        .corner=${this.corner}\n        .menuCorner=${this.menuCorner}\n        .fixed=${this.fixed}\n        .multi=${this.multi}\n        .activatable=${this.activatable}\n        .y=${this.y}\n        .x=${this.x}\n      >\n        <slot></slot>\n      </mwc-menu>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated(changedProps) {\n        _get(_getPrototypeOf(HaButtonMenu.prototype), \"firstUpdated\", this).call(this, changedProps);\n\n        if (document.dir === \"rtl\") {\n          this.updateComplete.then(() => {\n            this.querySelectorAll(\"mwc-list-item\").forEach(item => {\n              const style = document.createElement(\"style\");\n              style.innerHTML = \"span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}\";\n              item.shadowRoot.appendChild(style);\n            });\n          });\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_handleClick\",\n      value: function _handleClick() {\n        if (this.disabled) {\n          return;\n        }\n\n        this._menu.anchor = this;\n\n        this._menu.show();\n      }\n    }, {\n      kind: \"get\",\n      key: \"_triggerButton\",\n      value: function _triggerButton() {\n        return this.querySelector('ha-icon-button[slot=\"trigger\"], mwc-button[slot=\"trigger\"]');\n      }\n    }, {\n      kind: \"method\",\n      key: \"_setTriggerAria\",\n      value: function _setTriggerAria() {\n        if (this._triggerButton) {\n          this._triggerButton.ariaHasPopup = \"menu\";\n        }\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_1__.css`\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n      ::slotted([disabled]) {\n        color: var(--disabled-text-color);\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_1__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS1idXR0b24tbWVudS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQVBBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBVEE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFYQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQWJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBZkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBakJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7O0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTs7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUFBO0FBNkJBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQUFBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQUE7QUFBQTtBQUFBO0FBeURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckVBO0FBQUE7QUFBQTtBQUFBO0FBd0VBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBN0VBO0FBQUE7QUFBQTtBQUFBO0FBZ0ZBO0FBR0E7QUFuRkE7QUFBQTtBQUFBO0FBQUE7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUF6RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJHQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2hhLWJ1dHRvbi1tZW51LnRzPzJiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtbWVudVwiO1xuaW1wb3J0IHR5cGUgeyBDb3JuZXIsIE1lbnUsIE1lbnVDb3JuZXIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1tZW51XCI7XG5pbXBvcnQgeyBjc3MsIENTU1Jlc3VsdEdyb3VwLCBodG1sLCBMaXRFbGVtZW50LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgRk9DVVNfVEFSR0VUIH0gZnJvbSBcIi4uL2RpYWxvZ3MvbWFrZS1kaWFsb2ctbWFuYWdlclwiO1xuaW1wb3J0IHR5cGUgeyBIYUljb25CdXR0b24gfSBmcm9tIFwiLi9oYS1pY29uLWJ1dHRvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWJ1dHRvbi1tZW51XCIpXG5leHBvcnQgY2xhc3MgSGFCdXR0b25NZW51IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBbRk9DVVNfVEFSR0VUXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgY29ybmVyOiBDb3JuZXIgPSBcIlRPUF9TVEFSVFwiO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBtZW51Q29ybmVyOiBNZW51Q29ybmVyID0gXCJTVEFSVFwiO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KSBwdWJsaWMgeDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pIHB1YmxpYyB5OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBtdWx0aSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFjdGl2YXRhYmxlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBmaXhlZCA9IGZhbHNlO1xuXG4gIEBxdWVyeShcIm13Yy1tZW51XCIsIHRydWUpIHByaXZhdGUgX21lbnU/OiBNZW51O1xuXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnU/Lml0ZW1zO1xuICB9XG5cbiAgcHVibGljIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudT8uc2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX21lbnU/Lm9wZW4pIHtcbiAgICAgIHRoaXMuX21lbnUuZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJpZ2dlckJ1dHRvbj8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5faGFuZGxlQ2xpY2t9PlxuICAgICAgICA8c2xvdCBuYW1lPVwidHJpZ2dlclwiIEBzbG90Y2hhbmdlPSR7dGhpcy5fc2V0VHJpZ2dlckFyaWF9Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG13Yy1tZW51XG4gICAgICAgIC5jb3JuZXI9JHt0aGlzLmNvcm5lcn1cbiAgICAgICAgLm1lbnVDb3JuZXI9JHt0aGlzLm1lbnVDb3JuZXJ9XG4gICAgICAgIC5maXhlZD0ke3RoaXMuZml4ZWR9XG4gICAgICAgIC5tdWx0aT0ke3RoaXMubXVsdGl9XG4gICAgICAgIC5hY3RpdmF0YWJsZT0ke3RoaXMuYWN0aXZhdGFibGV9XG4gICAgICAgIC55PSR7dGhpcy55fVxuICAgICAgICAueD0ke3RoaXMueH1cbiAgICAgID5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9td2MtbWVudT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChkb2N1bWVudC5kaXIgPT09IFwicnRsXCIpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbChcIm13Yy1saXN0LWl0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcInNwYW4ubWF0ZXJpYWwtaWNvbnM6Zmlyc3Qtb2YtdHlwZSB7IG1hcmdpbi1sZWZ0OiB2YXIoLS1tZGMtbGlzdC1pdGVtLWdyYXBoaWMtbWFyZ2luLCAzMnB4KSAhaW1wb3J0YW50OyBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O31cIjtcbiAgICAgICAgICBpdGVtIS5zaGFkb3dSb290IS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWVudSEuYW5jaG9yID0gdGhpcztcbiAgICB0aGlzLl9tZW51IS5zaG93KCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdHJpZ2dlckJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2hhLWljb24tYnV0dG9uW3Nsb3Q9XCJ0cmlnZ2VyXCJdLCBtd2MtYnV0dG9uW3Nsb3Q9XCJ0cmlnZ2VyXCJdJ1xuICAgICkgYXMgSGFJY29uQnV0dG9uIHwgQnV0dG9uIHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyaWdnZXJBcmlhKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyQnV0dG9uKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyQnV0dG9uLmFyaWFIYXNQb3B1cCA9IFwibWVudVwiO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIDo6c2xvdHRlZChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1idXR0b24tbWVudVwiOiBIYUJ1dHRvbk1lbnU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ha-button-menu.ts\n");

/***/ })

}]);