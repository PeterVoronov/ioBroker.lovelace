"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_user_ha-user-badge_ts"],{

/***/ "./src/components/user/ha-user-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/user/ha-user-badge.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_class_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/directives/class-map */ \"./node_modules/lit/directives/class-map.js\");\n/* harmony import */ var lit_directives_style_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit/directives/style-map */ \"./node_modules/lit/directives/style-map.js\");\n/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ \"./src/common/entity/compute_state_domain.ts\");\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/user */ \"./src/data/user.ts\");\n\n\n\n\n\n\n\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n\n\n\nvar UserBadge = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.customElement)(\"ha-user-badge\")], function (_initialize, _LitElement) {\n  var UserBadge = /*#__PURE__*/function (_LitElement2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(UserBadge, _LitElement2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(UserBadge);\n    function UserBadge() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, UserBadge);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(UserBadge);\n  }(_LitElement);\n  return {\n    F: UserBadge,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.property)({\n        attribute: false\n      })],\n      key: \"user\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.state)()],\n      key: \"_personPicture\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_personEntityId\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"willUpdate\",\n      value: function willUpdate(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(UserBadge.prototype), \"willUpdate\", this).call(this, changedProps);\n        if (changedProps.has(\"user\")) {\n          this._getPersonPicture();\n          return;\n        }\n        var oldHass = changedProps.get(\"hass\");\n        if (this._personEntityId && oldHass && this.hass.states[this._personEntityId] !== oldHass.states[this._personEntityId]) {\n          var entityState = this.hass.states[this._personEntityId];\n          if (entityState) {\n            this._personPicture = entityState.attributes.entity_picture;\n          } else {\n            this._getPersonPicture();\n          }\n        } else if (!this._personEntityId && oldHass) {\n          this._getPersonPicture();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this.hass || !this.user) {\n          return lit__WEBPACK_IMPORTED_MODULE_9__.nothing;\n        }\n        var picture = this._personPicture;\n        if (picture) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_9__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"<div\\n        style=\", \"\\n        class=\\\"picture\\\"\\n      ></div>\"])), (0,lit_directives_style_map__WEBPACK_IMPORTED_MODULE_12__.styleMap)({\n            backgroundImage: \"url(\".concat(picture, \")\")\n          }));\n        }\n        var initials = (0,_data_user__WEBPACK_IMPORTED_MODULE_14__.computeUserInitials)(this.user.name);\n        return (0,lit__WEBPACK_IMPORTED_MODULE_9__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"<div\\n      class=\\\"initials \", \"\\\"\\n    >\\n      \", \"\\n    </div>\"])), (0,lit_directives_class_map__WEBPACK_IMPORTED_MODULE_11__.classMap)({\n          long: initials.length > 2\n        }), initials);\n      }\n    }, {\n      kind: \"method\",\n      key: \"_getPersonPicture\",\n      value: function _getPersonPicture() {\n        this._personEntityId = undefined;\n        this._personPicture = undefined;\n        if (!this.hass || !this.user) {\n          return;\n        }\n        for (var _i = 0, _Object$values = Object.values(this.hass.states); _i < _Object$values.length; _i++) {\n          var entity = _Object$values[_i];\n          if (entity.attributes.user_id === this.user.id && (0,_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__.computeStateDomain)(entity) === \"person\") {\n            this._personEntityId = entity.entity_id;\n            this._personPicture = entity.attributes.entity_picture;\n            break;\n          }\n        }\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      :host {\\n        display: contents;\\n      }\\n      .picture {\\n        width: 40px;\\n        height: 40px;\\n        background-size: cover;\\n        border-radius: 50%;\\n      }\\n      .initials {\\n        display: inline-block;\\n        box-sizing: border-box;\\n        width: 40px;\\n        line-height: 40px;\\n        border-radius: 50%;\\n        text-align: center;\\n        background-color: var(--light-primary-color);\\n        text-decoration: none;\\n        color: var(--text-light-primary-color, var(--primary-text-color));\\n        overflow: hidden;\\n      }\\n      .initials.long {\\n        font-size: 80%;\\n      }\\n    \"])));\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_9__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBMEJBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHM/OTc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEdyb3VwLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgbm90aGluZyxcbn0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVVc2VySW5pdGlhbHMsIFVzZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQgeyBDdXJyZW50VXNlciwgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXVzZXItYmFkZ2VcIilcbmNsYXNzIFVzZXJCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyB1c2VyPzogVXNlciB8IEN1cnJlbnRVc2VyO1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX3BlcnNvblBpY3R1cmU/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcGVyc29uRW50aXR5SWQ/OiBzdHJpbmc7XG5cbiAgcHVibGljIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlczx0aGlzPikge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInVzZXJcIikpIHtcbiAgICAgIHRoaXMuX2dldFBlcnNvblBpY3R1cmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fcGVyc29uRW50aXR5SWQgJiZcbiAgICAgIG9sZEhhc3MgJiZcbiAgICAgIHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fcGVyc29uRW50aXR5SWRdICE9PVxuICAgICAgICBvbGRIYXNzLnN0YXRlc1t0aGlzLl9wZXJzb25FbnRpdHlJZF1cbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eVN0YXRlID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9wZXJzb25FbnRpdHlJZF07XG4gICAgICBpZiAoZW50aXR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5fcGVyc29uUGljdHVyZSA9IGVudGl0eVN0YXRlLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9nZXRQZXJzb25QaWN0dXJlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdGhpcy5fcGVyc29uRW50aXR5SWQgJiYgb2xkSGFzcykge1xuICAgICAgdGhpcy5fZ2V0UGVyc29uUGljdHVyZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMudXNlcikge1xuICAgICAgcmV0dXJuIG5vdGhpbmc7XG4gICAgfVxuICAgIGNvbnN0IHBpY3R1cmUgPSB0aGlzLl9wZXJzb25QaWN0dXJlO1xuXG4gICAgaWYgKHBpY3R1cmUpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXZcbiAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BpY3R1cmV9KWAgfSl9XG4gICAgICAgIGNsYXNzPVwicGljdHVyZVwiXG4gICAgICA+PC9kaXY+YDtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbHMgPSBjb21wdXRlVXNlckluaXRpYWxzKHRoaXMudXNlci5uYW1lKTtcbiAgICByZXR1cm4gaHRtbGA8ZGl2XG4gICAgICBjbGFzcz1cImluaXRpYWxzICR7Y2xhc3NNYXAoeyBsb25nOiBpbml0aWFscyEubGVuZ3RoID4gMiB9KX1cIlxuICAgID5cbiAgICAgICR7aW5pdGlhbHN9XG4gICAgPC9kaXY+YDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBlcnNvblBpY3R1cmUoKSB7XG4gICAgdGhpcy5fcGVyc29uRW50aXR5SWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGVyc29uUGljdHVyZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy51c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIE9iamVjdC52YWx1ZXModGhpcy5oYXNzLnN0YXRlcykpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50aXR5LmF0dHJpYnV0ZXMudXNlcl9pZCA9PT0gdGhpcy51c2VyLmlkICYmXG4gICAgICAgIGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpID09PSBcInBlcnNvblwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGVyc29uRW50aXR5SWQgPSBlbnRpdHkuZW50aXR5X2lkO1xuICAgICAgICB0aGlzLl9wZXJzb25QaWN0dXJlID0gZW50aXR5LmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICAgIH1cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgICAgLmluaXRpYWxzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1wcmltYXJ5LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5pbml0aWFscy5sb25nIHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdXNlci1iYWRnZVwiOiBVc2VyQmFkZ2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/user/ha-user-badge.ts\n");

/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GROUPS: function() { return /* binding */ GROUPS; },\n/* harmony export */   SYSTEM_GROUP_ID_ADMIN: function() { return /* binding */ SYSTEM_GROUP_ID_ADMIN; },\n/* harmony export */   SYSTEM_GROUP_ID_READ_ONLY: function() { return /* binding */ SYSTEM_GROUP_ID_READ_ONLY; },\n/* harmony export */   SYSTEM_GROUP_ID_USER: function() { return /* binding */ SYSTEM_GROUP_ID_USER; },\n/* harmony export */   computeUserBadges: function() { return /* binding */ computeUserBadges; },\n/* harmony export */   computeUserInitials: function() { return /* binding */ computeUserInitials; },\n/* harmony export */   createUser: function() { return /* binding */ createUser; },\n/* harmony export */   deleteUser: function() { return /* binding */ deleteUser; },\n/* harmony export */   fetchUsers: function() { return /* binding */ fetchUsers; },\n/* harmony export */   updateUser: function() { return /* binding */ updateUser; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\nvar mdiCrownCircleOutline = \"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z\";\nvar mdiAlphaSCircleOutline = \"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z\";\nvar mdiHomeCircleOutline = \"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14\";\nvar mdiCancel = \"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z\";\nvar SYSTEM_GROUP_ID_ADMIN = \"system-admin\";\nvar SYSTEM_GROUP_ID_USER = \"system-users\";\nvar SYSTEM_GROUP_ID_READ_ONLY = \"system-read-only\";\nvar GROUPS = [SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_ADMIN];\nvar fetchUsers = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee(hass) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", hass.callWS({\n            type: \"config/auth/list\"\n          }));\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function fetchUsers(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar createUser = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee2(hass, name, group_ids, local_only) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          return _context2.abrupt(\"return\", hass.callWS({\n            type: \"config/auth/create\",\n            name: name,\n            group_ids: group_ids,\n            local_only: local_only\n          }));\n        case 1:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function createUser(_x2, _x3, _x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar updateUser = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee3(hass, userId, params) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          return _context3.abrupt(\"return\", hass.callWS(Object.assign(Object.assign({}, params), {}, {\n            type: \"config/auth/update\",\n            user_id: userId\n          })));\n        case 1:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return function updateUser(_x6, _x7, _x8) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar deleteUser = /*#__PURE__*/function () {\n  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee4(hass, userId) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          return _context4.abrupt(\"return\", hass.callWS({\n            type: \"config/auth/delete\",\n            user_id: userId\n          }));\n        case 1:\n        case \"end\":\n          return _context4.stop();\n      }\n    }, _callee4);\n  }));\n  return function deleteUser(_x9, _x10) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar computeUserInitials = function computeUserInitials(name) {\n  if (!name) {\n    return \"?\";\n  }\n  return name.trim()\n  // Split by space and take first 3 words\n  .split(\" \").slice(0, 3)\n  // Of each word, take first letter\n  .map(function (s) {\n    return s.substring(0, 1);\n  }).join(\"\");\n};\nvar OWNER_ICON = mdiCrownCircleOutline;\nvar SYSTEM_ICON = mdiAlphaSCircleOutline;\nvar LOCAL_ICON = mdiHomeCircleOutline;\nvar DISABLED_ICON = mdiCancel;\nvar computeUserBadges = function computeUserBadges(hass, user, includeSystem) {\n  var labels = [];\n  var translate = function translate(key) {\n    return hass.localize(\"ui.panel.config.users.\".concat(key));\n  };\n  if (user.is_owner) {\n    labels.push([OWNER_ICON, translate(\"is_owner\")]);\n  }\n  if (includeSystem && user.system_generated) {\n    labels.push([SYSTEM_ICON, translate(\"is_system\")]);\n  }\n  if (user.local_only) {\n    labels.push([LOCAL_ICON, translate(\"is_local\")]);\n  }\n  if (!user.is_active) {\n    labels.push([DISABLED_ICON, translate(\"is_not_active\")]);\n  }\n  return labels;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvZGF0YS91c2VyLnRzP2VmYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgbWRpQ3Jvd25DaXJjbGVPdXRsaW5lLFxuICBtZGlBbHBoYVNDaXJjbGVPdXRsaW5lLFxuICBtZGlIb21lQ2lyY2xlT3V0bGluZSxcbiAgbWRpQ2FuY2VsLFxufSBmcm9tIFwiQG1kaS9qc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgVHJhbnNsYXRpb25EaWN0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX0FETUlOID0gXCJzeXN0ZW0tYWRtaW5cIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfVVNFUiA9IFwic3lzdGVtLXVzZXJzXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1JFQURfT05MWSA9IFwic3lzdGVtLXJlYWQtb25seVwiO1xuXG5leHBvcnQgY29uc3QgR1JPVVBTID0gW1NZU1RFTV9HUk9VUF9JRF9VU0VSLCBTWVNURU1fR1JPVVBfSURfQURNSU5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZTogc3RyaW5nO1xuICBpc19vd25lcjogYm9vbGVhbjtcbiAgaXNfYWN0aXZlOiBib29sZWFuO1xuICBsb2NhbF9vbmx5OiBib29sZWFuO1xuICBzeXN0ZW1fZ2VuZXJhdGVkOiBib29sZWFuO1xuICBncm91cF9pZHM6IChrZXlvZiBUcmFuc2xhdGlvbkRpY3RbXCJncm91cHNcIl0pW107XG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVXNlclBhcmFtcyB7XG4gIG5hbWU/OiBVc2VyW1wibmFtZVwiXTtcbiAgaXNfYWN0aXZlPzogVXNlcltcImlzX2FjdGl2ZVwiXTtcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXTtcbiAgbG9jYWxfb25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFVzZXJbXT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvbGlzdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIG5hbWU6IHN0cmluZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIGdyb3VwX2lkcz86IFVzZXJbXCJncm91cF9pZHNcIl0sXG4gIGxvY2FsX29ubHk/OiBib29sZWFuXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9jcmVhdGVcIixcbiAgICBuYW1lLFxuICAgIGdyb3VwX2lkcyxcbiAgICBsb2NhbF9vbmx5LFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVzZXJJZDogc3RyaW5nLFxuICBwYXJhbXM6IFVwZGF0ZVVzZXJQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8eyB1c2VyOiBVc2VyIH0+KHtcbiAgICAuLi5wYXJhbXMsXG4gICAgdHlwZTogXCJjb25maWcvYXV0aC91cGRhdGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCB1c2VySWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8dm9pZD4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvZGVsZXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVVc2VySW5pdGlhbHMgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBcIj9cIjtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5hbWVcbiAgICAgIC50cmltKClcbiAgICAgIC8vIFNwbGl0IGJ5IHNwYWNlIGFuZCB0YWtlIGZpcnN0IDMgd29yZHNcbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5zbGljZSgwLCAzKVxuICAgICAgLy8gT2YgZWFjaCB3b3JkLCB0YWtlIGZpcnN0IGxldHRlclxuICAgICAgLm1hcCgocykgPT4gcy5zdWJzdHJpbmcoMCwgMSkpXG4gICAgICAuam9pbihcIlwiKVxuICApO1xufTtcblxuY29uc3QgT1dORVJfSUNPTiA9IG1kaUNyb3duQ2lyY2xlT3V0bGluZTtcbmNvbnN0IFNZU1RFTV9JQ09OID0gbWRpQWxwaGFTQ2lyY2xlT3V0bGluZTtcbmNvbnN0IExPQ0FMX0lDT04gPSBtZGlIb21lQ2lyY2xlT3V0bGluZTtcbmNvbnN0IERJU0FCTEVEX0lDT04gPSBtZGlDYW5jZWw7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVXNlckJhZGdlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlcjogVXNlcixcbiAgaW5jbHVkZVN5c3RlbTogYm9vbGVhblxuKSA9PiB7XG4gIGNvbnN0IGxhYmVsczogW3N0cmluZywgc3RyaW5nXVtdID0gW107XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IChcbiAgICBrZXk6IEV4dHJhY3Q8XG4gICAgICBrZXlvZiBUcmFuc2xhdGlvbkRpY3RbXCJ1aVwiXVtcInBhbmVsXCJdW1wiY29uZmlnXCJdW1widXNlcnNcIl0sXG4gICAgICBgaXNfJHtzdHJpbmd9YFxuICAgID5cbiAgKSA9PiBoYXNzLmxvY2FsaXplKGB1aS5wYW5lbC5jb25maWcudXNlcnMuJHtrZXl9YCk7XG5cbiAgaWYgKHVzZXIuaXNfb3duZXIpIHtcbiAgICBsYWJlbHMucHVzaChbT1dORVJfSUNPTiwgdHJhbnNsYXRlKFwiaXNfb3duZXJcIildKTtcbiAgfVxuICBpZiAoaW5jbHVkZVN5c3RlbSAmJiB1c2VyLnN5c3RlbV9nZW5lcmF0ZWQpIHtcbiAgICBsYWJlbHMucHVzaChbU1lTVEVNX0lDT04sIHRyYW5zbGF0ZShcImlzX3N5c3RlbVwiKV0pO1xuICB9XG4gIGlmICh1c2VyLmxvY2FsX29ubHkpIHtcbiAgICBsYWJlbHMucHVzaChbTE9DQUxfSUNPTiwgdHJhbnNsYXRlKFwiaXNfbG9jYWxcIildKTtcbiAgfVxuICBpZiAoIXVzZXIuaXNfYWN0aXZlKSB7XG4gICAgbGFiZWxzLnB1c2goW0RJU0FCTEVEX0lDT04sIHRyYW5zbGF0ZShcImlzX25vdF9hY3RpdmVcIildKTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbHM7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/user.ts\n");

/***/ })

}]);