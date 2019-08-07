(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/app/app.scss":
/*!**************************!*\
  !*** ./src/app/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/assets/bluehost.svg":
/*!*************************************!*\
  !*** ./src/app/assets/bluehost.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBluehost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "#3575D3"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h5.3v5.3H0zm6.8 0h5.3v5.3H6.8zm6.9 0H19v5.3h-5.3zM0 6.8h5.3v5.3H0zm6.8 0h5.3v5.3H6.8zm6.9 0H19v5.3h-5.3zM0 13.7h5.3V19H0zm6.8 0h5.3V19H6.8zM13.7 13.7H19V19h-5.3zM29.8 8.2c1.1-1 2.5-1.5 4-1.5 2.7 0 5.3 1.8 5.3 6.3s-2.9 6.3-6.1 6.3c-1.6 0-3.2-.4-4.6-1.3V0h1.4zm0 9.1c1 .5 2.1.8 3.2.8 2.5 0 4.8-1.5 4.8-5.1 0-3.2-1.8-5.1-4.1-5.1-1.5.1-2.9.8-3.9 1.9zM41.5 19V0h1.3v19zm5.8-4.7c0 2.9 1.4 3.7 2.8 3.7 1.8-.1 3.3-1.1 4.2-2.7V6.9h1.4v12.2h-1.4v-2.4c-1 1.5-2.8 2.5-4.6 2.5-1.9 0-3.8-1.1-3.8-4.8V6.9h1.4zm21.4 3.9c-1.3.7-2.8 1.1-4.3 1-4.1-.1-6.2-3.4-6.1-6.8 0-3.2 2.5-5.8 5.6-5.8h.4c3.3.1 5.5 2.7 5.1 6.6h-9.8c0 2.6 2.1 4.7 4.7 4.8h.1c1.3 0 2.6-.3 3.8-.9zm-.5-6.1c.1-2.2-1.6-4.1-3.8-4.2h-.2c-2.4-.1-4.4 1.8-4.5 4.2zm5.6-2.9c1-1.6 2.6-2.5 4.5-2.6 2.4 0 3.9 1.8 3.9 4.6V19h-1.3v-7.6c0-2.6-1.4-3.6-2.8-3.6-1.8.2-3.3 1.2-4.2 2.7V19h-1.3V0H74c-.2 0-.2 9.2-.2 9.2zm22.3 3.7c0 4-2.7 6.3-5.9 6.3-3.5 0-5.9-2.8-5.9-6.3-.2-3.3 2.3-6.1 5.6-6.3h.3c3.2.1 5.9 2.4 5.9 6.3zm-10.3 0c0 2.7 1.6 5 4.5 5s4.5-2.4 4.5-5-1.7-5-4.5-5-4.5 2.3-4.5 5zm13.4 4c1 .6 2.1 1 3.2 1 1.3 0 2.9-.5 2.8-1.8 0-1.1-1.2-2-3-2.7-2.1-.8-3.9-1.6-3.9-3.5s1.8-3.3 4.2-3.3c1.2 0 2.3.3 3.4.9l-.5 1.1c-.9-.5-1.8-.7-2.8-.7-2 0-2.9 1-2.9 2 0 1.3 1.5 1.8 3.4 2.6 2.9 1.1 3.6 2.5 3.6 3.6 0 1.9-1.8 3.1-4.2 3.1-1.4 0-2.7-.4-3.9-1.1zm16.4-10V8h-4v6.7c0 2 .8 3.2 2.6 3.3.8 0 1.6-.1 2.3-.5l.4 1.2c-.9.3-1.8.5-2.7.5-2.2 0-3.9-1.3-3.9-4.5V8H108V6.9h2.2V2.8h1.4v4.1z"
}));

var SvgBluehost = function SvgBluehost(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 116.8 19.3"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE2LjggMTkuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9IiMzNTc1RDMiPgogICAgICAgIDxwYXRoIGQ9Im0wIDBoNS4zdjUuM2gtNS4zem02LjggMGg1LjN2NS4zaC01LjN6bTYuOSAwaDUuM3Y1LjNoLTUuM3ptLTEzLjcgNi44aDUuM3Y1LjNoLTUuM3ptNi44IDBoNS4zdjUuM2gtNS4zem02LjkgMGg1LjN2NS4zaC01LjN6bS0xMy43IDYuOWg1LjN2NS4zaC01LjN6bTYuOCAwaDUuM3Y1LjNoLTUuM3oiIC8+CiAgICAgICAgPHBhdGggZD0ibTEzLjcgMTMuN2g1LjN2NS4zaC01LjN6IiAvPgogICAgICAgIDxwYXRoIGQ9Im0yOS44IDguMmMxLjEtMSAyLjUtMS41IDQtMS41IDIuNyAwIDUuMyAxLjggNS4zIDYuM3MtMi45IDYuMy02LjEgNi4zYy0xLjYgMC0zLjItLjQtNC42LTEuM3YtMThoMS40em0wIDkuMWMxIC41IDIuMS44IDMuMi44IDIuNSAwIDQuOC0xLjUgNC44LTUuMSAwLTMuMi0xLjgtNS4xLTQuMS01LjEtMS41LjEtMi45LjgtMy45IDEuOXptMTEuNyAxLjd2LTE5aDEuM3YxOXptNS44LTQuN2MwIDIuOSAxLjQgMy43IDIuOCAzLjcgMS44LS4xIDMuMy0xLjEgNC4yLTIuN3YtOC40aDEuNHYxMi4yaC0xLjR2LTIuNGMtMSAxLjUtMi44IDIuNS00LjYgMi41LTEuOSAwLTMuOC0xLjEtMy44LTQuOHYtNy41aDEuNHptMjEuNCAzLjljLTEuMy43LTIuOCAxLjEtNC4zIDEtNC4xLS4xLTYuMi0zLjQtNi4xLTYuOCAwLTMuMiAyLjUtNS44IDUuNi01LjhoLjRjMy4zLjEgNS41IDIuNyA1LjEgNi42aC05LjhjMCAyLjYgMi4xIDQuNyA0LjcgNC44aC4xYzEuMyAwIDIuNi0uMyAzLjgtLjl6bS0uNS02LjFjLjEtMi4yLTEuNi00LjEtMy44LTQuMmgtLjJjLTIuNC0uMS00LjQgMS44LTQuNSA0LjJ6bTUuNi0yLjljMS0xLjYgMi42LTIuNSA0LjUtMi42IDIuNCAwIDMuOSAxLjggMy45IDQuNnY3LjhoLTEuM3YtNy42YzAtMi42LTEuNC0zLjYtMi44LTMuNi0xLjguMi0zLjMgMS4yLTQuMiAyLjd2OC41aC0xLjN2LTE5aDEuNGMtLjIgMC0uMiA5LjItLjIgOS4yem0yMi4zIDMuN2MwIDQtMi43IDYuMy01LjkgNi4zLTMuNSAwLTUuOS0yLjgtNS45LTYuMy0uMi0zLjMgMi4zLTYuMSA1LjYtNi4zaC4zYzMuMi4xIDUuOSAyLjQgNS45IDYuM3ptLTEwLjMgMGMwIDIuNyAxLjYgNSA0LjUgNXM0LjUtMi40IDQuNS01LTEuNy01LTQuNS01LTQuNSAyLjMtNC41IDV6bTEzLjQgNGMxIC42IDIuMSAxIDMuMiAxIDEuMyAwIDIuOS0uNSAyLjgtMS44IDAtMS4xLTEuMi0yLTMtMi43LTIuMS0uOC0zLjktMS42LTMuOS0zLjVzMS44LTMuMyA0LjItMy4zYzEuMiAwIDIuMy4zIDMuNC45bC0uNSAxLjFjLS45LS41LTEuOC0uNy0yLjgtLjctMiAwLTIuOSAxLTIuOSAyIDAgMS4zIDEuNSAxLjggMy40IDIuNiAyLjkgMS4xIDMuNiAyLjUgMy42IDMuNiAwIDEuOS0xLjggMy4xLTQuMiAzLjEtMS40IDAtMi43LS40LTMuOS0xLjF6bTE2LjQtMTB2MS4xaC00djYuN2MwIDIgLjggMy4yIDIuNiAzLjMuOCAwIDEuNi0uMSAyLjMtLjVsLjQgMS4yYy0uOS4zLTEuOC41LTIuNy41LTIuMiAwLTMuOS0xLjMtMy45LTQuNXYtNi43aC0yLjN2LTEuMWgyLjJ2LTQuMWgxLjR2NC4xeiIgLz4KICAgIDwvZz4KPC9zdmc+");


/***/ }),

/***/ "./src/app/components/app-button/index.js":
/*!************************************************!*\
  !*** ./src/app/components/app-button/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var AppButton = function AppButton(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: "bluehost"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AppButton);

/***/ }),

/***/ "./src/app/components/app-button/style.scss":
/*!**************************************************!*\
  !*** ./src/app/components/app-button/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-card/index.js":
/*!**********************************************!*\
  !*** ./src/app/components/app-card/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EIGCard; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */




var EIGCard =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EIGCard, _Component);

  function EIGCard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EIGCard);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EIGCard).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EIGCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          desc = _this$props.desc,
          className = _this$props.className,
          children = _this$props.children,
          isCentered = _this$props.isCentered;
      var cardClass = className ? 'eig-card ' + className : 'eig-card';
      var centeredClass = isCentered ? ' is-centered' : '';
      var iconSize = isCentered ? 48 : 28;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: cardClass + centeredClass
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
        icon: icon ? icon : '',
        size: iconSize
      }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: 'title'
      }, title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, desc), children);
    }
  }]);

  return EIGCard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/app/components/app-card/style.scss":
/*!************************************************!*\
  !*** ./src/app/components/app-card/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-header/index.js":
/*!************************************************!*\
  !*** ./src/app/components/app-header/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _assets_bluehost_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/bluehost.svg */ "./src/app/assets/bluehost.svg");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var AppHeader = function AppHeader() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
    id: "eig-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "eig-logo-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_bluehost_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./src/app/components/app-header/style.scss":
/*!**************************************************!*\
  !*** ./src/app/components/app-header/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-nav-link/index.js":
/*!**************************************************!*\
  !*** ./src/app/components/app-nav-link/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



var AppLink = function AppLink(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: {
      pathname: props.to || '',
      state: {
        setFocus: true
      }
    },
    activeClassName: "active"
  }, props.children || '');
};

/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./src/app/components/app-page/index.js":
/*!**********************************************!*\
  !*** ./src/app/components/app-page/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-page/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);







/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



var EIGPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EIGPage, _Component);

  function EIGPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EIGPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EIGPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EIGPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var location = this.props.location;

      if (location.state && location.state.setFocus) {
        this.container.focus({
          preventScroll: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("section", {
        tabIndex: "-1",
        ref: function ref(container) {
          return _this.container = container;
        },
        className: "app-page"
      }, this.props.children);
    }
  }]);

  return EIGPage;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(EIGPage));

/***/ }),

/***/ "./src/app/components/app-page/style.scss":
/*!************************************************!*\
  !*** ./src/app/components/app-page/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-primary-nav/index.js":
/*!*****************************************************!*\
  !*** ./src/app/components/app-primary-nav/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-primary-nav/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




var PrimaryNavigation = function PrimaryNavigation() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "tabs"
  }, "TABS GO HERE");
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryNavigation);

/***/ }),

/***/ "./src/app/components/app-primary-nav/style.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/app-primary-nav/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-spinner/index.js":
/*!*************************************************!*\
  !*** ./src/app/components/app-spinner/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-spinner/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var wrapperClass = '';

var AppSpinner = function AppSpinner(props) {
  // if (props.brand) {
  //     wrapperClass += 'brand';
  // }
  // if (props.large) {
  //     wrapperClass += ' size-large';
  // }
  // if('overlay' === props.position) {
  //     wrapperClass += ' overlay'
  // }
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "loader-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (AppSpinner);

/***/ }),

/***/ "./src/app/components/app-spinner/style.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app-spinner/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/index.js":
/*!*************************************!*\
  !*** ./src/app/components/index.js ***!
  \*************************************/
/*! exports provided: AppButton, AppCard, AppHeader, AppNavLink, AppPage, AppPrimaryNav, AppSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-button */ "./src/app/components/app-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppButton", function() { return _app_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _app_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-card */ "./src/app/components/app-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppCard", function() { return _app_card__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header */ "./src/app/components/app-header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return _app_header__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _app_nav_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-nav-link */ "./src/app/components/app-nav-link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppNavLink", function() { return _app_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-page */ "./src/app/components/app-page/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPage", function() { return _app_page__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _app_primary_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-primary-nav */ "./src/app/components/app-primary-nav/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPrimaryNav", function() { return _app_primary_nav__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _app_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-spinner */ "./src/app/components/app-spinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSpinner", function() { return _app_spinner__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main */ "./src/app/main.js");








/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var bluehost_i18n = 'bluehost-wp-admin-app';

var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props)); // create refs for skip focus links

    _this.navFocus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createRef"])();
    _this.contentFocus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createRef"])(); // make refs/this available in

    _this.handleNavFocus = _this.handleNavFocus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleContentFocus = _this.handleContentFocus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "handleNavFocus",
    value: function handleNavFocus(event) {
      event.preventDefault(); // no anchor jumps that done bork hash-routing

      this.navFocus.current.focus({
        preventScroll: true
      });
    }
  }, {
    key: "handleContentFocus",
    value: function handleContentFocus(event) {
      event.preventDefault(); // no anchor jumps that done bork hash-routing

      this.contentFocus.current.focus({
        preventScroll: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["HashRouter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("main", {
        id: "bluehost-app-wrap",
        className: "animated fadeIn fast"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        className: "screen-reader-shortcut bh-spa-skip",
        href: "#",
        onClick: this.handleNavFocus,
        onKeyPress: this.handleNavFocus
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Skip to Navigation', bluehost_i18n)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        className: "screen-reader-shortcut bh-spa-skip",
        href: "#",
        onClick: this.handleContentFocus,
        onKeyPress: this.handleContentFocus
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Skip to Content', bluehost_i18n)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_10__["AppHeader"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        id: "navigation",
        tabIndex: "-1",
        ref: this.navFocus
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_10__["AppPrimaryNav"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        tabIndex: "-1",
        ref: this.contentFocus
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_main__WEBPACK_IMPORTED_MODULE_11__["default"], null)))));
    }
  }]);

  return App;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");


/**
 * External dependencies
 */


var HomeRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/pages/home */ "./src/app/pages/home/index.js"));
});
var MktRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/pages/marketplace */ "./src/app/pages/marketplace/index.js"));
});
var ToolsRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/pages/tools */ "./src/app/pages/tools/index.js"));
});
var SettingsRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @/pages/settings */ "./src/app/pages/settings/index.js"));
});
var HelpRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/pages/help */ "./src/app/pages/help/index.js"));
});


var AppMain = function AppMain() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("main", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading...")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/home",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HomeRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/marketplace",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MktRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/tools",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToolsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/settings",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SettingsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/help",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HelpRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/home"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppMain);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/app/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * DOM ID of root element to initialize app
 * @see ../inc/class-eig-wp-module-admin-app-page.php
 */

var WP_PAGE_ROOT_ELEMENT = 'bluehost-app';

function bhHandleFirstTab(e) {
  if (e.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]) {
    document.body.classList.add('bh-spa-keynav');
    window.removeEventListener('keydown', bhHandleFirstTab);
  }
}

window.addEventListener('keydown', bhHandleFirstTab);
/**
 * When DOM is ready, load app on root element, replacing #app-loader markup.
 */

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById(WP_PAGE_ROOT_ELEMENT));
});

/***/ }),

/***/ "@wordpress/a11y":
/*!***************************************!*\
  !*** external {"this":["wp","a11y"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!*******************************************!*\
  !*** external {"this":["wp","domReady"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ })

},[["./src/index.js","admin-manifest"]]]);
//# sourceMappingURL=admin.js.map