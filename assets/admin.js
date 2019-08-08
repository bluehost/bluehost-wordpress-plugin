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

/***/ "./src/app/assets/box-full-regular.svg":
/*!*********************************************!*\
  !*** ./src/app/assets/box-full-regular.svg ***!
  \*********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBoxFullRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21.947 11.495L20.34 8.287a.507.507 0 00-.521-.278l-1.582.203.69-1.89c.115-.313.1-.653-.04-.955-.141-.303-.39-.53-.706-.646l-1.732-.634a1.25 1.25 0 00-1.6.746l-.964 2.65a4.486 4.486 0 00-4.365-3.47c-2.35 0-4.256 1.81-4.456 4.106l-.855-.11a.514.514 0 00-.521.278l-1.604 3.208c-.143.287.01.63.315.717l1.63.465v4.596c0 .459.311.858.754.967l6.746 1.688c.424.106.78.047.967 0l6.752-1.688a1 1 0 00.755-.967v-4.596l1.626-.465a.51.51 0 00.318-.717zm-5.775-5.913l1.263.459-.867 2.383-1.504.19 1.108-3.032zm-12.216 5.52l.759-1.517 4.83.615-1.286 2.13-4.303-1.229zm7.31 7.216l-5.74-1.435v-3.778l3.051.87a.51.51 0 00.577-.228l2.113-3.5v8.071zm1.205-9.373l-.455.06-5.473-.696C6.649 6.749 7.934 5.51 9.52 5.51a3 3 0 012.995 2.995c0 .15-.022.297-.044.44zm6.034 7.938l-5.74 1.435v-8.072l2.112 3.504c.103.172.33.3.577.228l3.051-.87v3.775zm-2.736-4.552L14.484 10.2l4.833-.615.758 1.516-4.306 1.23z",
  fillRule: "evenodd"
});

var SvgBoxFullRegular = function SvgBoxFullRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIGJveC1mdWxsLXJlZ3VsYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi0vLTI0cHgtLy1ib3gtZnVsbC1yZWd1bGFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMjEuOTQ2OTU3OSwxMS40OTQ1Mzk4IEwyMC4zNDAwOTM2LDguMjg3MDUxNDYgQzIwLjIxNTI4ODcsOC4wMzQzMjEzNSAxOS45NjI1NTg1LDcuOTkwNjM5NjEgMTkuODE5MDMyOCw4LjAwOTM2MDM1IEwxOC4yMzcxMjk1LDguMjEyMTY4NDcgTDE4LjkyNjY3NzEsNi4zMjEzNzI4MyBDMTkuMDQyMTIxNyw2LjAwOTM2MDM0IDE5LjAyNjUyMTEsNS42NjkyNjY3NCAxOC44ODYxMTU1LDUuMzY2NjE0NjMgQzE4Ljc0NTcwOTksNS4wNjM5NjI1MiAxOC40OTYwOTk5LDQuODM2MTkzNDEgMTguMTgwOTY3Myw0LjcyMDc0ODc5IEwxNi40NDkyOTgsNC4wODczNjM0NSBDMTUuODAzNDMyMiwzLjg1MDIzMzk3IDE1LjA4NTgwMzQsNC4xODcyMDc0NSAxNC44NDg2NzQsNC44MzMwNzMyOSBMMTMuODg0NTU1NCw3LjQ4MjA1OTI2IEMxMy40MTk2NTY4LDUuNDk0NTM5NzUgMTEuNjQ3NDI1OSw0LjAxMjQ4MDQ2IDkuNTE5NTAwNzcsNC4wMTI0ODA0NiBDNy4xNzAwNDY3OCw0LjAxMjQ4MDQ2IDUuMjYzNjUwNTEsNS44MjIxNTI4NiA1LjA2Mzk2MjUyLDguMTE4NTY0NzIgTDQuMjA5MDQ4MzIsOC4wMDkzNjAzNSBDNC4wNjU1MjI1OCw3Ljk5MDYzOTYxIDMuODE1OTEyNiw4LjAzNzQ0MTQ4IDMuNjg3OTg3NDgsOC4yODcwNTE0NiBMMi4wODQyNDMzMiwxMS40OTQ1Mzk4IEMxLjk0MDcxNzU4LDExLjc4MTU5MTMgMi4wOTM2MDM2OSwxMi4xMjQ4MDUgMi4zOTkzNzU5MywxMi4yMTIxNjg1IEw0LjAyODA4MTA4LDEyLjY3NzA2NzEgTDQuMDI4MDgxMDgsMTcuMjczMDEwOSBDNC4wMjgwODEwOCwxNy43MzE2NjkzIDQuMzQwMDkzNTcsMTguMTMxMDQ1MyA0Ljc4MzE1MTI5LDE4LjI0MDI0OTYgTDExLjUyODg2MTIsMTkuOTI4MjM3MiBDMTEuOTUzMTk4MSwyMC4wMzQzMjE0IDEyLjMwODg5MjQsMTkuOTc1MDM5IDEyLjQ5NjA5OTgsMTkuOTI4MjM3MiBMMTkuMjQ4MDUsMTguMjQwMjQ5NiBDMTkuNjkxMTA3NywxOC4xMjc5MjUxIDIwLjAwMzEyMDIsMTcuNzI4NTQ5MiAyMC4wMDMxMjAyLDE3LjI3MzAxMDkgTDIwLjAwMzEyMDIsMTIuNjc3MDY3MSBMMjEuNjI4NzA1MiwxMi4yMTIxNjg1IEMyMS45Mzc1OTc2LDEyLjEyNDgwNSAyMi4wODczNjM1LDExLjc4MTU5MTMgMjEuOTQ2OTU3OSwxMS40OTQ1Mzk4IFogTTE2LjE3MTYwNjksNS41ODE5MDMyNCBMMTcuNDM1MjU3NCw2LjA0MDU2MTU5IEwxNi41Njc4NjI3LDguNDI0MzM2OTYgTDE1LjA2Mzk2MjYsOC42MTQ2NjQ1NyBMMTYuMTcxNjA2OSw1LjU4MTkwMzI0IFogTTMuOTU2MzE4MjEsMTEuMTAxNDA0MSBMNC43MTQ1MDg1NCw5LjU4NTAyMzM5IEw5LjU0NDQ2MTc3LDEwLjE5OTY4OCBMOC4yNTg5NzAzNCwxMi4zMzA3MzMyIEwzLjk1NjMxODIxLDExLjEwMTQwNDEgTDMuOTU2MzE4MjEsMTEuMTAxNDA0MSBaIE0xMS4yNjY3NzA3LDE4LjMxODI1MjggTDUuNTI1NzQxLDE2Ljg4Mjk5NTMgTDUuNTI1NzQxLDEzLjEwNDUyNDIgTDguNTc3MjIzMDcsMTMuOTc1MDM5IEM4LjgyNjgzMzA2LDE0LjA0NjgwMTkgOS4wNTE0ODIwNCwxMy45MTg4NzY4IDkuMTU0NDQ2MTYsMTMuNzQ3MjY5OSBMMTEuMjY2NzcwNywxMC4yNDY0ODk5IEwxMS4yNjY3NzA3LDE4LjMxODI1MjggWiBNMTIuNDcxMTM4OCw4Ljk0NTM5NzggTDEyLjAxNTYwMDYsOS4wMDQ2ODAxNyBMNi41NDI5MDE2OSw4LjMwODg5MjM0IEM2LjY0ODk4NTkzLDYuNzQ4ODI5OTMgNy45MzQ0NzczNiw1LjUxMDE0MDM3IDkuNTE5NTAwNzcsNS41MTAxNDAzNyBDMTEuMTcwMDQ2OCw1LjUxMDE0MDM3IDEyLjUxNDgyMDYsNi44NTQ5MTQxNyAxMi41MTQ4MjA2LDguNTA1NDYwMiBDMTIuNTE0ODIwNiw4LjY1NTIyNjE5IDEyLjQ5Mjk3OTcsOC44MDE4NzIwNiAxMi40NzExMzg4LDguOTQ1Mzk3OCBMMTIuNDcxMTM4OCw4Ljk0NTM5NzggWiBNMTguNTA1NDYwMywxNi44ODI5OTUzIEwxMi43NjQ0MzA2LDE4LjMxODI1MjggTDEyLjc2NDQzMDYsMTAuMjQ2NDg5OSBMMTQuODc2NzU1MSwxMy43NTAzOSBDMTQuOTc5NzE5MiwxMy45MjE5OTY5IDE1LjIwNzQ4ODMsMTQuMDQ5OTIyIDE1LjQ1Mzk3ODIsMTMuOTc4MTU5MSBMMTguNTA1NDYwMywxMy4xMDc2NDQzIEwxOC41MDU0NjAzLDE2Ljg4Mjk5NTMgTDE4LjUwNTQ2MDMsMTYuODgyOTk1MyBaIE0xNS43NjkxMTA4LDEyLjMzMDczMzIgTDE0LjQ4MzYxOTQsMTAuMTk5Njg4IEwxOS4zMTY2OTI3LDkuNTg1MDIzMzkgTDIwLjA3NDg4MywxMS4xMDE0MDQxIEwxNS43NjkxMTA4LDEyLjMzMDczMzIgTDE1Ljc2OTExMDgsMTIuMzMwNzMzMiBaIiBpZD0iYm94LWZ1bGwtcmVndWxhciI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=");


/***/ }),

/***/ "./src/app/assets/credit-card-regular.svg":
/*!************************************************!*\
  !*** ./src/app/assets/credit-card-regular.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCreditCardRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M20.33 4.222H3.67C2.747 4.222 2 4.97 2 5.89V18.11c0 .92.747 1.667 1.67 1.667h16.66c.923 0 1.67-.747 1.67-1.667V5.89c0-.92-.747-1.667-1.67-1.667zM3.878 5.89h16.244c.114 0 .208.094.208.208v1.459H3.67V6.097c0-.114.094-.208.208-.208zM20.122 18.11H3.878a.209.209 0 01-.208-.208V12h16.66v5.903a.209.209 0 01-.208.208zM8.667 14.64v1.389c0 .229-.188.416-.417.416h-2.5a.418.418 0 01-.417-.416v-1.39c0-.228.188-.416.417-.416h2.5c.23 0 .417.188.417.417zm6.666 0v1.389c0 .229-.187.416-.416.416h-4.723a.418.418 0 01-.416-.416v-1.39c0-.228.187-.416.416-.416h4.723c.229 0 .416.188.416.417z",
  fillRule: "evenodd"
});

var SvgCreditCardRegular = function SvgCreditCardRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIGNyZWRpdC1jYXJkLXJlZ3VsYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi0vLTI0cHgtLy1jcmVkaXQtY2FyZC1yZWd1bGFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMjAuMzI5ODYxMiw0LjIyMjIyMjE4IEwzLjY3MDEzODg1LDQuMjIyMjIyMTggQzIuNzQ2NTI3NzMsNC4yMjIyMjIxOCAxLjk5OTk5OTk1LDQuOTY4NzQ5OTYgMS45OTk5OTk5NSw1Ljg4ODg4ODg2IEwxLjk5OTk5OTk1LDE4LjExMTExMTEgQzEuOTk5OTk5OTUsMTkuMDMxMjUgMi43NDY1Mjc3MywxOS43Nzc3Nzc4IDMuNjcwMTM4ODUsMTkuNzc3Nzc3OCBMMjAuMzI5ODYxMiwxOS43Nzc3Nzc4IEMyMS4yNTM0NzIzLDE5Ljc3Nzc3NzggMjEuOTk5OTk5OSwxOS4wMzEyNSAyMS45OTk5OTk5LDE4LjExMTExMTEgTDIxLjk5OTk5OTksNS44ODg4ODg4NiBDMjEuOTk5OTk5OSw0Ljk2ODc0OTk2IDIxLjI1MzQ3MjMsNC4yMjIyMjIxOCAyMC4zMjk4NjEyLDQuMjIyMjIyMTggWiBNMy44Nzg0NzIxOCw1Ljg4ODg4ODg2IEwyMC4xMjE1Mjc4LDUuODg4ODg4ODYgQzIwLjIzNjExMTIsNS44ODg4ODg4NiAyMC4zMjk4NjEyLDUuOTgyNjM4ODYgMjAuMzI5ODYxMiw2LjA5NzIyMjE5IEwyMC4zMjk4NjEyLDcuNTU1NTU1NTMgTDMuNjcwMTM4ODUsNy41NTU1NTU1MyBMMy42NzAxMzg4NSw2LjA5NzIyMjE5IEMzLjY3MDEzODg1LDUuOTgyNjM4ODYgMy43NjM4ODg4NSw1Ljg4ODg4ODg2IDMuODc4NDcyMTgsNS44ODg4ODg4NiBaIE0yMC4xMjE1Mjc4LDE4LjExMTExMTEgTDMuODc4NDcyMTgsMTguMTExMTExMSBDMy43NjM4ODg4NSwxOC4xMTExMTExIDMuNjcwMTM4ODUsMTguMDE3MzYxMSAzLjY3MDEzODg1LDE3LjkwMjc3NzggTDMuNjcwMTM4ODUsMTIgTDIwLjMyOTg2MTIsMTIgTDIwLjMyOTg2MTIsMTcuOTAyNzc3OCBDMjAuMzI5ODYxMiwxOC4wMTczNjExIDIwLjIzNjExMTIsMTguMTExMTExMSAyMC4xMjE1Mjc4LDE4LjExMTExMTEgWiBNOC42NjY2NjY2NSwxNC42Mzg4ODg5IEw4LjY2NjY2NjY1LDE2LjAyNzc3NzggQzguNjY2NjY2NjUsMTYuMjU2OTQ0NSA4LjQ3OTE2NjY1LDE2LjQ0NDQ0NDUgOC4yNDk5OTk5OCwxNi40NDQ0NDQ1IEw1Ljc0OTk5OTk3LDE2LjQ0NDQ0NDUgQzUuNTIwODMzMywxNi40NDQ0NDQ1IDUuMzMzMzMzMywxNi4yNTY5NDQ1IDUuMzMzMzMzMywxNi4wMjc3Nzc4IEw1LjMzMzMzMzMsMTQuNjM4ODg4OSBDNS4zMzMzMzMzLDE0LjQwOTcyMjIgNS41MjA4MzMzLDE0LjIyMjIyMjIgNS43NDk5OTk5NywxNC4yMjIyMjIyIEw4LjI0OTk5OTk4LDE0LjIyMjIyMjIgQzguNDc5MTY2NjUsMTQuMjIyMjIyMiA4LjY2NjY2NjY1LDE0LjQwOTcyMjIgOC42NjY2NjY2NSwxNC42Mzg4ODg5IFogTTE1LjMzMzMzMzQsMTQuNjM4ODg4OSBMMTUuMzMzMzMzNCwxNi4wMjc3Nzc4IEMxNS4zMzMzMzM0LDE2LjI1Njk0NDUgMTUuMTQ1ODMzMywxNi40NDQ0NDQ1IDE0LjkxNjY2NjcsMTYuNDQ0NDQ0NSBMMTAuMTk0NDQ0NCwxNi40NDQ0NDQ1IEM5Ljk2NTI3Nzc3LDE2LjQ0NDQ0NDUgOS43Nzc3Nzc3NywxNi4yNTY5NDQ1IDkuNzc3Nzc3NzcsMTYuMDI3Nzc3OCBMOS43Nzc3Nzc3NywxNC42Mzg4ODg5IEM5Ljc3Nzc3Nzc3LDE0LjQwOTcyMjIgOS45NjUyNzc3NywxNC4yMjIyMjIyIDEwLjE5NDQ0NDQsMTQuMjIyMjIyMiBMMTQuOTE2NjY2NywxNC4yMjIyMjIyIEMxNS4xNDU4MzMzLDE0LjIyMjIyMjIgMTUuMzMzMzMzNCwxNC40MDk3MjIyIDE1LjMzMzMzMzQsMTQuNjM4ODg4OSBaIiBpZD0iY3JlZGl0LWNhcmQtcmVndWxhciI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=");


/***/ }),

/***/ "./src/app/assets/id-card-alt-regular.svg":
/*!************************************************!*\
  !*** ./src/app/assets/id-card-alt-regular.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgIdCardAltRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.778 5.333h-5v-1.11a1.11 1.11 0 00-1.111-1.112h-3.334a1.11 1.11 0 00-1.11 1.111v1.111h-5A2.224 2.224 0 002 7.556v11.11c0 1.226.997 2.223 2.222 2.223h15.556A2.224 2.224 0 0022 18.667V7.556a2.224 2.224 0 00-2.222-2.223zm-8.89-.555h2.223V7H10.89V4.778zm9.445 13.889c0 .305-.25.555-.555.555H15.86c.007-.038.028-.073.028-.11v-.668c0-1.104-1.045-2-2.333-2-.375 0-.65.278-1.556.278-.934 0-1.16-.278-1.556-.278-1.288 0-2.333.896-2.333 2v.667c0 .038.017.073.028.111H4.222a.557.557 0 01-.555-.555V7.556c0-.306.25-.556.555-.556h5v1.667h5.556V7h5c.305 0 .555.25.555.556v11.11zM12 10.889a2.224 2.224 0 00-2.222 2.222c0 1.226.996 2.222 2.222 2.222a2.224 2.224 0 002.222-2.222A2.224 2.224 0 0012 10.89z",
  fillRule: "evenodd"
});

var SvgIdCardAltRegular = function SvgIdCardAltRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIGlkLWNhcmQtYWx0LXJlZ3VsYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi0vLTI0cHgtLy1pZC1jYXJkLWFsdC1yZWd1bGFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTkuNzc3Nzc3OCw1LjMzMzMzMzMgTDE0Ljc3Nzc3NzgsNS4zMzMzMzMzIEwxNC43Nzc3Nzc4LDQuMjIyMjIyMTggQzE0Ljc3Nzc3NzgsMy42MDc2Mzg4NSAxNC4yODEyNSwzLjExMTExMTA3IDEzLjY2NjY2NjcsMy4xMTExMTEwNyBMMTAuMzMzMzMzMywzLjExMTExMTA3IEM5LjcxODc0OTk5LDMuMTExMTExMDcgOS4yMjIyMjIyMSwzLjYwNzYzODg1IDkuMjIyMjIyMjEsNC4yMjIyMjIxOCBMOS4yMjIyMjIyMSw1LjMzMzMzMzMgTDQuMjIyMjIyMTgsNS4zMzMzMzMzIEMyLjk5NjUyNzczLDUuMzMzMzMzMyAxLjk5OTk5OTk1LDYuMzI5ODYxMDggMS45OTk5OTk5NSw3LjU1NTU1NTUzIEwxLjk5OTk5OTk1LDE4LjY2NjY2NjcgQzEuOTk5OTk5OTUsMTkuODkyMzYxMiAyLjk5NjUyNzczLDIwLjg4ODg4ODkgNC4yMjIyMjIxOCwyMC44ODg4ODg5IEwxOS43Nzc3Nzc4LDIwLjg4ODg4ODkgQzIxLjAwMzQ3MjMsMjAuODg4ODg4OSAyMS45OTk5OTk5LDE5Ljg5MjM2MTIgMjEuOTk5OTk5OSwxOC42NjY2NjY3IEwyMS45OTk5OTk5LDcuNTU1NTU1NTMgQzIxLjk5OTk5OTksNi4zMjk4NjEwOCAyMS4wMDM0NzIzLDUuMzMzMzMzMyAxOS43Nzc3Nzc4LDUuMzMzMzMzMyBaIE0xMC44ODg4ODg5LDQuNzc3Nzc3NzQgTDEzLjExMTExMTEsNC43Nzc3Nzc3NCBMMTMuMTExMTExMSw2Ljk5OTk5OTk3IEwxMC44ODg4ODg5LDYuOTk5OTk5OTcgTDEwLjg4ODg4ODksNC43Nzc3Nzc3NCBaIE0yMC4zMzMzMzM0LDE4LjY2NjY2NjcgQzIwLjMzMzMzMzQsMTguOTcyMjIyMyAyMC4wODMzMzM0LDE5LjIyMjIyMjMgMTkuNzc3Nzc3OCwxOS4yMjIyMjIzIEwxNS44NjExMTExLDE5LjIyMjIyMjMgQzE1Ljg2ODA1NTYsMTkuMTg0MDI3OCAxNS44ODg4ODg5LDE5LjE0OTMwNTYgMTUuODg4ODg4OSwxOS4xMTExMTExIEwxNS44ODg4ODg5LDE4LjQ0NDQ0NDUgQzE1Ljg4ODg4ODksMTcuMzQwMjc3OCAxNC44NDM3NSwxNi40NDQ0NDQ1IDEzLjU1NTU1NTYsMTYuNDQ0NDQ0NSBDMTMuMTgwNTU1NiwxNi40NDQ0NDQ1IDEyLjkwNjI1LDE2LjcyMjIyMjIgMTIsMTYuNzIyMjIyMiBDMTEuMDY1OTcyMiwxNi43MjIyMjIyIDEwLjg0MDI3NzgsMTYuNDQ0NDQ0NSAxMC40NDQ0NDQ0LDE2LjQ0NDQ0NDUgQzkuMTU2MjQ5OTksMTYuNDQ0NDQ0NSA4LjExMTExMTA5LDE3LjM0MDI3NzggOC4xMTExMTEwOSwxOC40NDQ0NDQ1IEw4LjExMTExMTA5LDE5LjExMTExMTEgQzguMTExMTExMDksMTkuMTQ5MzA1NiA4LjEyODQ3MjIsMTkuMTg0MDI3OCA4LjEzODg4ODg3LDE5LjIyMjIyMjMgTDQuMjIyMjIyMTgsMTkuMjIyMjIyMyBDMy45MTY2NjY2MywxOS4yMjIyMjIzIDMuNjY2NjY2NjIsMTguOTcyMjIyMyAzLjY2NjY2NjYyLDE4LjY2NjY2NjcgTDMuNjY2NjY2NjIsNy41NTU1NTU1MyBDMy42NjY2NjY2Miw3LjI0OTk5OTk4IDMuOTE2NjY2NjMsNi45OTk5OTk5NyA0LjIyMjIyMjE4LDYuOTk5OTk5OTcgTDkuMjIyMjIyMjEsNi45OTk5OTk5NyBMOS4yMjIyMjIyMSw4LjY2NjY2NjY1IEwxNC43Nzc3Nzc4LDguNjY2NjY2NjUgTDE0Ljc3Nzc3NzgsNi45OTk5OTk5NyBMMTkuNzc3Nzc3OCw2Ljk5OTk5OTk3IEMyMC4wODMzMzM0LDYuOTk5OTk5OTcgMjAuMzMzMzMzNCw3LjI0OTk5OTk4IDIwLjMzMzMzMzQsNy41NTU1NTU1MyBMMjAuMzMzMzMzNCwxOC42NjY2NjY3IFogTTEyLDEwLjg4ODg4ODkgQzEwLjc3NDMwNTUsMTAuODg4ODg4OSA5Ljc3Nzc3Nzc3LDExLjg4NTQxNjcgOS43Nzc3Nzc3NywxMy4xMTExMTExIEM5Ljc3Nzc3Nzc3LDE0LjMzNjgwNTYgMTAuNzc0MzA1NSwxNS4zMzMzMzM0IDEyLDE1LjMzMzMzMzQgQzEzLjIyNTY5NDUsMTUuMzMzMzMzNCAxNC4yMjIyMjIyLDE0LjMzNjgwNTYgMTQuMjIyMjIyMiwxMy4xMTExMTExIEMxNC4yMjIyMjIyLDExLjg4NTQxNjcgMTMuMjI1Njk0NSwxMC44ODg4ODg5IDEyLDEwLjg4ODg4ODkgWiIgaWQ9ImlkLWNhcmQtYWx0LXJlZ3VsYXIiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+");


/***/ }),

/***/ "./src/app/assets/question-circle-regular.svg":
/*!****************************************************!*\
  !*** ./src/app/assets/question-circle-regular.svg ***!
  \****************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgQuestionCircleRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 2.312c-5.35 0-9.688 4.34-9.688 9.688A9.687 9.687 0 0012 21.688 9.687 9.687 0 0021.688 12c0-5.348-4.338-9.688-9.688-9.688zm0 17.5A7.808 7.808 0 014.187 12 7.81 7.81 0 0112 4.187 7.81 7.81 0 0119.813 12 7.808 7.808 0 0112 19.813zm4.19-9.968c0 2.619-2.83 2.66-2.83 3.627v.248c0 .259-.21.469-.468.469h-1.784a.469.469 0 01-.468-.47v-.337c0-1.397 1.058-1.955 1.858-2.403.686-.385 1.107-.647 1.107-1.156 0-.674-.86-1.12-1.554-1.12-.906 0-1.324.428-1.912 1.17a.47.47 0 01-.651.083L8.4 9.13a.47.47 0 01-.103-.64c.923-1.355 2.098-2.116 3.928-2.116 1.917 0 3.963 1.496 3.963 3.469zm-2.55 6.531c0 .905-.735 1.64-1.64 1.64-.905 0-1.64-.735-1.64-1.64 0-.905.735-1.64 1.64-1.64.905 0 1.64.735 1.64 1.64z",
  fillRule: "evenodd"
});

var SvgQuestionCircleRegular = function SvgQuestionCircleRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIHF1ZXN0aW9uLWNpcmNsZS1yZWd1bGFyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tLy0yNHB4LS8tcXVlc3Rpb24tY2lyY2xlLXJlZ3VsYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMiwyLjMxMjQ5OTk1IEM2LjY1MDExNzE2LDIuMzEyNDk5OTUgMi4zMTI0OTk5NSw2LjY1MTY3OTY2IDIuMzEyNDk5OTUsMTIgQzIuMzEyNDk5OTUsMTcuMzUxNDQ1MyA2LjY1MDExNzE2LDIxLjY4NzUgMTIsMjEuNjg3NSBDMTcuMzQ5ODgyOCwyMS42ODc1IDIxLjY4NzUsMTcuMzUxNDQ1MyAyMS42ODc1LDEyIEMyMS42ODc1LDYuNjUxNjc5NjYgMTcuMzQ5ODgyOCwyLjMxMjQ5OTk1IDEyLDIuMzEyNDk5OTUgWiBNMTIsMTkuODEyNSBDNy42ODIzNDM3MywxOS44MTI1IDQuMTg3NDk5OTYsMTYuMzE5MTAxNiA0LjE4NzQ5OTk2LDEyIEM0LjE4NzQ5OTk2LDcuNjgzNzg5MDQgNy42ODI0OTk5OCw0LjE4NzQ5OTk2IDEyLDQuMTg3NDk5OTYgQzE2LjMxNjA1NDcsNC4xODc0OTk5NiAxOS44MTI1LDcuNjgyNDYwOTIgMTkuODEyNSwxMiBDMTkuODEyNSwxNi4zMTc1NzgxIDE2LjMxOTEwMTYsMTkuODEyNSAxMiwxOS44MTI1IFogTTE2LjE4OTIxODgsOS44NDM3NDk5OSBDMTYuMTg5MjE4OCwxMi40NjI5Njg4IDEzLjM2MDI3MzQsMTIuNTAzMjgxMyAxMy4zNjAyNzM0LDEzLjQ3MTIxMDkgTDEzLjM2MDI3MzQsMTMuNzE4NzUgQzEzLjM2MDI3MzQsMTMuOTc3NjE3MiAxMy4xNTAzOTA2LDE0LjE4NzUgMTIuODkxNTIzNCwxNC4xODc1IEwxMS4xMDg0Mzc1LDE0LjE4NzUgQzEwLjg0OTU3MDMsMTQuMTg3NSAxMC42Mzk2ODc1LDEzLjk3NzYxNzIgMTAuNjM5Njg3NSwxMy43MTg3NSBMMTAuNjM5Njg3NSwxMy4zODA1MDc4IEMxMC42Mzk2ODc1LDExLjk4NDIxODcgMTEuNjk4MjgxMiwxMS40MjYwNTQ3IDEyLjQ5ODI0MjIsMTAuOTc3NTM5MSBDMTMuMTg0MjE4OCwxMC41OTI5Njg3IDEzLjYwNDY0ODQsMTAuMzMxNDA2MiAxMy42MDQ2NDg0LDkuODIyMTA5MzYgQzEzLjYwNDY0ODQsOS4xNDg0Mzc0OSAxMi43NDUzMTI1LDguNzAxMjg5MDUgMTIuMDUwNTg1OSw4LjcwMTI4OTA1IEMxMS4xNDQ3NjU2LDguNzAxMjg5MDUgMTAuNzI2NjAxNiw5LjEzMDA3ODExIDEwLjEzODc4OTEsOS44NzE5NTMxMSBDOS45ODAzMTI0OSwxMC4wNzE5NTMxIDkuNjkxMTMyOCwxMC4xMDkxMDE2IDkuNDg3NzczNDIsOS45NTQ5MjE4NiBMOC40MDA4OTg0Miw5LjEzMDc4MTI0IEM4LjIwMTQwNjIzLDguOTc5NTMxMjMgOC4xNTY3MTg3Myw4LjY5ODUxNTYxIDguMjk3NjE3MTcsOC40OTE2MDE1NCBDOS4yMjA1NDY4Niw3LjEzNjM2NzE2IDEwLjM5NjA5MzcsNi4zNzQ5OTk5NyAxMi4yMjYzMjgxLDYuMzc0OTk5OTcgQzE0LjE0MzE2NDEsNi4zNzQ5OTk5NyAxNi4xODkyMTg4LDcuODcxMjQ5OTggMTYuMTg5MjE4OCw5Ljg0Mzc0OTk5IEwxNi4xODkyMTg4LDkuODQzNzQ5OTkgWiBNMTMuNjQwNjI1LDE2LjM3NSBDMTMuNjQwNjI1LDE3LjI3OTY0ODUgMTIuOTA0NjQ4NCwxOC4wMTU2MjUgMTIsMTguMDE1NjI1IEMxMS4wOTUzNTE2LDE4LjAxNTYyNSAxMC4zNTkzNzUsMTcuMjc5NjQ4NSAxMC4zNTkzNzUsMTYuMzc1IEMxMC4zNTkzNzUsMTUuNDcwMzUxNiAxMS4wOTUzNTE2LDE0LjczNDM3NSAxMiwxNC43MzQzNzUgQzEyLjkwNDY0ODQsMTQuNzM0Mzc1IDEzLjY0MDYyNSwxNS40NzAzNTE2IDEzLjY0MDYyNSwxNi4zNzUgWiIgaWQ9InF1ZXN0aW9uLWNpcmNsZS1yZWd1bGFyIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==");


/***/ }),

/***/ "./src/app/assets/shield-check-regular.svg":
/*!*************************************************!*\
  !*** ./src/app/assets/shield-check-regular.svg ***!
  \*************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgShieldCheckRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.375 11.004A.473.473 0 007.711 11l-.887.879a.473.473 0 00-.004.664l3.547 3.574c.184.184.48.184.664.004l6.742-6.687a.473.473 0 00.004-.664l-.879-.887a.473.473 0 00-.664-.004l-5.523 5.476-2.336-2.351zM20.223 5.27l-7.5-3.125a1.88 1.88 0 00-1.442 0l-7.5 3.125c-.699.289-1.156.972-1.156 1.73 0 7.754 4.473 13.113 8.652 14.855.461.192.98.192 1.442 0 3.347-1.394 8.656-6.21 8.656-14.855 0-.758-.457-1.441-1.152-1.73zM12 20.125C8.191 18.539 4.5 13.613 4.5 7L12 3.875 19.5 7c0 6.79-3.844 11.602-7.5 13.125z",
  fillRule: "evenodd"
});

var SvgShieldCheckRegular = function SvgShieldCheckRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIHNoaWVsZC1jaGVjay1yZWd1bGFyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tLy0yNHB4LS8tc2hpZWxkLWNoZWNrLXJlZ3VsYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik04LjM3NDk5OTk4LDExLjAwMzkwNjIgQzguMTkxNDA2MjMsMTAuODIwMzEyNSA3Ljg5NDUzMTIzLDEwLjgyMDMxMjUgNy43MTA5Mzc0OCwxMSBMNi44MjQyMTg3MiwxMS44Nzg5MDYyIEM2LjY0MDYyNDk3LDEyLjA2MjUgNi42NDA2MjQ5NywxMi4zNTkzNzUgNi44MjAzMTI0NywxMi41NDI5Njg4IEwxMC4zNjcxODc1LDE2LjExNzE4NzUgQzEwLjU1MDc4MTIsMTYuMzAwNzgxMyAxMC44NDc2NTYyLDE2LjMwMDc4MTMgMTEuMDMxMjUsMTYuMTIxMDkzOCBMMTcuNzczNDM3NSw5LjQzMzU5Mzc0IEMxNy45NTcwMzEzLDkuMjQ5OTk5OTkgMTcuOTU3MDMxMyw4Ljk1MzEyNDk4IDE3Ljc3NzM0MzgsOC43Njk1MzEyMyBMMTYuODk4NDM3NSw3Ljg4MjgxMjQ4IEMxNi43MTQ4NDM4LDcuNjk5MjE4NzMgMTYuNDE3OTY4OCw3LjY5OTIxODczIDE2LjIzNDM3NSw3Ljg3ODkwNjIzIEwxMC43MTA5Mzc1LDEzLjM1NTQ2ODggTDguMzc0OTk5OTgsMTEuMDAzOTA2MiBaIE0yMC4yMjI2NTYzLDUuMjY5NTMxMjIgTDEyLjcyMjY1NjMsMi4xNDQ1MzEyIEMxMi4yNjEyNTEsMS45NTMxMjE2NiAxMS43NDI2NTUzLDEuOTUzMTIxNjYgMTEuMjgxMjUsMi4xNDQ1MzEyIEwzLjc4MTI0OTk2LDUuMjY5NTMxMjIgQzMuMDgyMDMxMjEsNS41NTg1OTM3MiAyLjYyNDk5OTk1LDYuMjQyMTg3NDcgMi42MjQ5OTk5NSw2Ljk5OTk5OTk3IEMyLjYyNDk5OTk1LDE0Ljc1MzkwNjMgNy4wOTc2NTYyMywyMC4xMTMyODEzIDExLjI3NzM0MzcsMjEuODU1NDY4OCBDMTEuNzM4MjgxMiwyMi4wNDY4NzUxIDEyLjI1NzgxMjUsMjIuMDQ2ODc1MSAxMi43MTg3NSwyMS44NTU0Njg4IEMxNi4wNjY0MDYzLDIwLjQ2MDkzNzUgMjEuMzc1LDE1LjY0NDUzMTMgMjEuMzc1LDYuOTk5OTk5OTcgQzIxLjM3NSw2LjI0MjE4NzQ3IDIwLjkxNzk2ODgsNS41NTg1OTM3MiAyMC4yMjI2NTYzLDUuMjY5NTMxMjIgWiBNMTIsMjAuMTI1IEM4LjE5MTQwNjIzLDE4LjUzOTA2MjUgNC40OTk5OTk5NiwxMy42MTMyODEzIDQuNDk5OTk5OTYsNi45OTk5OTk5NyBMMTIsMy44NzQ5OTk5NiBMMTkuNSw2Ljk5OTk5OTk3IEMxOS41LDEzLjc4OTA2MjUgMTUuNjU2MjUsMTguNjAxNTYyNSAxMiwyMC4xMjUgWiIgaWQ9InNoaWVsZC1jaGVjay1yZWd1bGFyIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==");


/***/ }),

/***/ "./src/app/assets/sign-out-regular.svg":
/*!*********************************************!*\
  !*** ./src/app/assets/sign-out-regular.svg ***!
  \*********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSignOutRegular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.743 4.515h3.275a.47.47 0 01.467.467v.936a.47.47 0 01-.467.468H5.743A1.872 1.872 0 003.87 8.257v7.486c0 1.033.839 1.871 1.872 1.871h3.275a.47.47 0 01.467.468v.936a.47.47 0 01-.467.467H5.743A3.744 3.744 0 012 15.743V8.257a3.744 3.744 0 013.743-3.742zm9.01.76l-.765.764a.463.463 0 00.008.667l4.41 4.28h-9.7a.47.47 0 00-.468.468v1.092c0 .257.21.468.468.468h9.7l-4.41 4.276a.47.47 0 00-.008.667l.764.764c.184.183.48.183.663 0l6.41-6.394a.468.468 0 000-.662l-6.41-6.394a.472.472 0 00-.663.004z",
  fillRule: "evenodd"
});

var SvgSignOutRegular = function SvgSignOutRegular(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIHNpZ24tb3V0LXJlZ3VsYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi0vLTI0cHgtLy1zaWduLW91dC1yZWd1bGFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNNS43NDI2OTAwMyw0LjUxNDYxOTg1IEw5LjAxNzU0Mzg0LDQuNTE0NjE5ODUgQzkuMjc0ODUzNzksNC41MTQ2MTk4NSA5LjQ4NTM4MDEsNC43MjUxNDYxNiA5LjQ4NTM4MDEsNC45ODI0NTYxMSBMOS40ODUzODAxLDUuOTE4MTI4NjIgQzkuNDg1MzgwMSw2LjE3NTQzODU3IDkuMjc0ODUzNzksNi4zODU5NjQ4OCA5LjAxNzU0Mzg0LDYuMzg1OTY0ODggTDUuNzQyNjkwMDMsNi4zODU5NjQ4OCBDNC43MDk1NTE2Miw2LjM4NTk2NDg4IDMuODcxMzQ0OTksNy4yMjQxNzE1MiAzLjg3MTM0NDk5LDguMjU3MzA5OTIgTDMuODcxMzQ0OTksMTUuNzQyNjkwMSBDMy44NzEzNDQ5OSwxNi43NzU4Mjg1IDQuNzA5NTUxNjIsMTcuNjE0MDM1MSA1Ljc0MjY5MDAzLDE3LjYxNDAzNTEgTDkuMDE3NTQzODQsMTcuNjE0MDM1MSBDOS4yNzQ4NTM3OSwxNy42MTQwMzUxIDkuNDg1MzgwMSwxNy44MjQ1NjE0IDkuNDg1MzgwMSwxOC4wODE4NzE0IEw5LjQ4NTM4MDEsMTkuMDE3NTQzOSBDOS40ODUzODAxLDE5LjI3NDg1MzggOS4yNzQ4NTM3OSwxOS40ODUzODAyIDkuMDE3NTQzODQsMTkuNDg1MzgwMiBMNS43NDI2OTAwMywxOS40ODUzODAyIEMzLjY3NjQxMzIxLDE5LjQ4NTM4MDIgMS45OTk5OTk5NSwxNy44MDg5NjY5IDEuOTk5OTk5OTUsMTUuNzQyNjkwMSBMMS45OTk5OTk5NSw4LjI1NzMwOTkyIEMxLjk5OTk5OTk1LDYuMTkxMDMzMTEgMy42NzY0MTMyMSw0LjUxNDYxOTg1IDUuNzQyNjkwMDMsNC41MTQ2MTk4NSBaIE0xNC43NTI0MzY3LDUuMjc0ODUzNzcgTDEzLjk4ODMwNDEsNi4wMzg5ODYzMiBDMTMuODAxMTY5Niw2LjIyNjEyMDgzIDEzLjgwNTA2ODIsNi41MjYzMTU3NiAxMy45OTYxMDE0LDYuNzA1NjUyOTkgTDE4LjQwNTQ1ODEsMTAuOTg2MzU0OCBMOC43MDU2NTMsMTAuOTg2MzU0OCBDOC40NDgzNDMwNiwxMC45ODYzNTQ4IDguMjM3ODE2NzUsMTEuMTk2ODgxMSA4LjIzNzgxNjc1LDExLjQ1NDE5MSBMOC4yMzc4MTY3NSwxMi41NDU4MDkgQzguMjM3ODE2NzUsMTIuODAzMTE4OSA4LjQ0ODM0MzA2LDEzLjAxMzY0NTIgOC43MDU2NTMsMTMuMDEzNjQ1MiBMMTguNDA1NDU4MSwxMy4wMTM2NDUyIEwxMy45OTYxMDE0LDE3LjI5MDQ0ODQgQzEzLjgwODk2NjksMTcuNDczNjg0MiAxMy44MDUwNjgyLDE3Ljc3Mzg3OTIgMTMuOTg4MzA0MSwxNy45NTcxMTUgTDE0Ljc1MjQzNjcsMTguNzIxMjQ3NiBDMTQuOTM1NjcyNSwxOC45MDQ0ODM1IDE1LjIzMTk2ODgsMTguOTA0NDgzNSAxNS40MTUyMDQ3LDE4LjcyMTI0NzYgTDIxLjgyNDU2MTUsMTIuMzI3NDg1NCBDMjIuMDA3Nzk3MywxMi4xNDQyNDk1IDIyLjAwNzc5NzMsMTEuODQ3OTUzMiAyMS44MjQ1NjE1LDExLjY2NDcxNzMgTDE1LjQxNTIwNDcsNS4yNzA5NTUxMyBDMTUuMjMxOTY4OCw1LjA5MTYxNzkgMTQuOTM1NjcyNSw1LjA5MTYxNzkgMTQuNzUyNDM2Nyw1LjI3NDg1Mzc3IFoiIGlkPSJzaWduLW91dC1yZWd1bGFyIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==");


/***/ }),

/***/ "./src/app/assets/user-astronaut-light.svg":
/*!*************************************************!*\
  !*** ./src/app/assets/user-astronaut-light.svg ***!
  \*************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgUserAstronautLight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M14.5 7h-5A2.502 2.502 0 007 9.5v.625a4.378 4.378 0 004.375 4.375h1.25A4.378 4.378 0 0017 10.125V9.5C17 8.121 15.879 7 14.5 7zm1.25 3.125a3.13 3.13 0 01-3.125 3.125h-1.25a3.13 3.13 0 01-3.125-3.125V9.5c0-.688.559-1.25 1.25-1.25h5c.691 0 1.25.562 1.25 1.25v.625zm-.625 7.5h-6.25C7.84 17.625 7 18.465 7 19.5v2.188c0 .171.14.312.312.312h.625c.172 0 .313-.14.313-.313V19.5c0-.344.281-.625.625-.625h6.25c.344 0 .625.281.625.625v2.188c0 .171.14.312.313.312h.625c.171 0 .312-.14.312-.313V19.5c0-1.035-.84-1.875-1.875-1.875zm-5 1.875a.627.627 0 00-.625.625v1.563c0 .171.14.312.312.312h.626c.171 0 .312-.14.312-.313v-1.562a.627.627 0 00-.625-.625zm7.156-4.676A7.519 7.519 0 0019.066 12h.434a.627.627 0 00.625-.625v-3.75A.627.627 0 0019.5 7h-.438A7.49 7.49 0 0012 2a7.49 7.49 0 00-7.063 5H4.5a.627.627 0 00-.625.625v3.75c0 .344.281.625.625.625h.437a7.47 7.47 0 001.786 2.824A5.238 5.238 0 003.25 19.75v1.938c0 .171.14.312.312.312h.625c.172 0 .313-.14.313-.313V19.75c0-2.016 1.504-3.672 3.45-3.945A7.448 7.448 0 0012 17a7.448 7.448 0 004.05-1.195c1.946.27 3.45 1.925 3.45 3.945v1.938c0 .171.14.312.313.312h.625c.171 0 .312-.14.312-.313V19.75a5.24 5.24 0 00-3.469-4.926zM12 15.75A6.258 6.258 0 015.75 9.5 6.258 6.258 0 0112 3.25a6.258 6.258 0 016.25 6.25A6.258 6.258 0 0112 15.75z",
  fillRule: "evenodd"
});

var SvgUserAstronautLight = function SvgUserAstronautLight(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uIC8gMjRweCAvIHVzZXItYXN0cm9uYXV0LWxpZ2h0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tLy0yNHB4LS8tdXNlci1hc3Ryb25hdXQtbGlnaHQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNC41LDYuOTk5OTk5OTcgTDkuNDk5OTk5OTcsNi45OTk5OTk5NyBDOC4xMjEwOTM3Myw2Ljk5OTk5OTk3IDYuOTk5OTk5OTcsOC4xMjEwOTM3MyA2Ljk5OTk5OTk3LDkuNDk5OTk5OTcgTDYuOTk5OTk5OTcsMTAuMTI1IEM2Ljk5OTk5OTk3LDEyLjUzOTA2MjUgOC45NjA5Mzc0OCwxNC41IDExLjM3NSwxNC41IEwxMi42MjUsMTQuNSBDMTUuMDM5MDYyNSwxNC41IDE3LDEyLjUzOTA2MjUgMTcsMTAuMTI1IEwxNyw5LjQ5OTk5OTk3IEMxNyw4LjEyMTA5MzczIDE1Ljg3ODkwNjMsNi45OTk5OTk5NyAxNC41LDYuOTk5OTk5OTcgWiBNMTUuNzUsMTAuMTI1IEMxNS43NSwxMS44NDc2NTYyIDE0LjM0NzY1NjMsMTMuMjUgMTIuNjI1LDEzLjI1IEwxMS4zNzUsMTMuMjUgQzkuNjUyMzQzNzQsMTMuMjUgOC4yNDk5OTk5OCwxMS44NDc2NTYyIDguMjQ5OTk5OTgsMTAuMTI1IEw4LjI0OTk5OTk4LDkuNDk5OTk5OTkgQzguMjQ5OTk5OTgsOC44MTI0OTk5OCA4LjgwODU5MzczLDguMjQ5OTk5OTggOS40OTk5OTk5OSw4LjI0OTk5OTk4IEwxNC41LDguMjQ5OTk5OTggQzE1LjE5MTQwNjMsOC4yNDk5OTk5OCAxNS43NSw4LjgxMjQ5OTk4IDE1Ljc1LDkuNDk5OTk5OTkgTDE1Ljc1LDEwLjEyNSBaIE0xNS4xMjUsMTcuNjI1IEw4Ljg3NDk5OTk4LDE3LjYyNSBDNy44Mzk4NDM3MywxNy42MjUgNi45OTk5OTk5NywxOC40NjQ4NDM4IDYuOTk5OTk5OTcsMTkuNSBMNi45OTk5OTk5NywyMS42ODc1IEM2Ljk5OTk5OTk3LDIxLjg1OTM3NSA3LjE0MDYyNDk4LDIyLjAwMDAwMDEgNy4zMTI0OTk5OCwyMi4wMDAwMDAxIEw3LjkzNzQ5OTk4LDIyLjAwMDAwMDEgQzguMTA5Mzc0OTgsMjIuMDAwMDAwMSA4LjI0OTk5OTk4LDIxLjg1OTM3NSA4LjI0OTk5OTk4LDIxLjY4NzUgTDguMjQ5OTk5OTgsMTkuNSBDOC4yNDk5OTk5OCwxOS4xNTYyNSA4LjUzMTI0OTk4LDE4Ljg3NSA4Ljg3NDk5OTk4LDE4Ljg3NSBMMTUuMTI1LDE4Ljg3NSBDMTUuNDY4NzUsMTguODc1IDE1Ljc1LDE5LjE1NjI1IDE1Ljc1LDE5LjUgTDE1Ljc1LDIxLjY4NzUgQzE1Ljc1LDIxLjg1OTM3NSAxNS44OTA2MjUsMjIuMDAwMDAwMSAxNi4wNjI1LDIyLjAwMDAwMDEgTDE2LjY4NzUsMjIuMDAwMDAwMSBDMTYuODU5Mzc1LDIyLjAwMDAwMDEgMTcsMjEuODU5Mzc1IDE3LDIxLjY4NzUgTDE3LDE5LjUgQzE3LDE4LjQ2NDg0MzggMTYuMTYwMTU2MywxNy42MjUgMTUuMTI1LDE3LjYyNSBaIE0xMC4xMjUsMTkuNSBDOS43ODEyNDk5OSwxOS41IDkuNDk5OTk5OTksMTkuNzgxMjUgOS40OTk5OTk5OSwyMC4xMjUgTDkuNDk5OTk5OTksMjEuNjg3NSBDOS40OTk5OTk5OSwyMS44NTkzNzUgOS42NDA2MjQ5OSwyMiA5LjgxMjQ5OTk5LDIyIEwxMC40Mzc1LDIyIEMxMC42MDkzNzUsMjIgMTAuNzUsMjEuODU5Mzc1IDEwLjc1LDIxLjY4NzUgTDEwLjc1LDIwLjEyNSBDMTAuNzUsMTkuNzgxMjUgMTAuNDY4NzUsMTkuNSAxMC4xMjUsMTkuNSBaIE0xNy4yODEyNSwxNC44MjQyMTg4IEMxOC4wNzQyMTg4LDE0LjAzOTA2MjUgMTguNjgzNTkzOCwxMy4wNzQyMTg4IDE5LjA2NjQwNjMsMTEuOTk5OTk5OSBMMTkuNSwxMS45OTk5OTk5IEMxOS44NDM3NSwxMS45OTk5OTk5IDIwLjEyNSwxMS43MTg3NSAyMC4xMjUsMTEuMzc1IEwyMC4xMjUsNy42MjQ5OTk5OCBDMjAuMTI1LDcuMjgxMjQ5OTggMTkuODQzNzUsNi45OTk5OTk5NSAxOS41LDYuOTk5OTk5OTUgTDE5LjA2MjUsNi45OTk5OTk5NSBDMTguMDM1MTU2Myw0LjA4OTg0MzcxIDE1LjI2NTYyNSwxLjk5OTk5OTk1IDEyLDEuOTk5OTk5OTUgQzguNzM0Mzc0OTgsMS45OTk5OTk5NSA1Ljk2NDg0MzcyLDQuMDg5ODQzNzEgNC45Mzc0OTk5Niw2Ljk5OTk5OTk1IEw0LjQ5OTk5OTk2LDYuOTk5OTk5OTUgQzQuMTU2MjQ5OTYsNi45OTk5OTk5NSAzLjg3NDk5OTk2LDcuMjgxMjQ5OTggMy44NzQ5OTk5Niw3LjYyNDk5OTk4IEwzLjg3NDk5OTk2LDExLjM3NSBDMy44NzQ5OTk5NiwxMS43MTg3NSA0LjE1NjI0OTk2LDExLjk5OTk5OTkgNC40OTk5OTk5NiwxMS45OTk5OTk5IEw0LjkzNzQ5OTk2LDExLjk5OTk5OTkgQzUuMzE2NDA2MjIsMTMuMDc0MjE4OCA1LjkyOTY4NzQ3LDE0LjAzOTA2MjUgNi43MjI2NTYyMiwxNC44MjQyMTg4IEM0LjY5OTIxODcxLDE1LjU1NDY4NzUgMy4yNDk5OTk5NiwxNy40NzY1NjI1IDMuMjQ5OTk5OTYsMTkuNzUgTDMuMjQ5OTk5OTYsMjEuNjg3NSBDMy4yNDk5OTk5NiwyMS44NTkzNzUgMy4zOTA2MjQ5NiwyMS45OTk5OTk5IDMuNTYyNDk5OTYsMjEuOTk5OTk5OSBMNC4xODc0OTk5NiwyMS45OTk5OTk5IEM0LjM1OTM3NDk2LDIxLjk5OTk5OTkgNC40OTk5OTk5NiwyMS44NTkzNzUgNC40OTk5OTk5NiwyMS42ODc1IEw0LjQ5OTk5OTk2LDE5Ljc1IEM0LjQ5OTk5OTk2LDE3LjczNDM3NSA2LjAwMzkwNjIyLDE2LjA3ODEyNSA3Ljk0OTIxODczLDE1LjgwNDY4NzUgQzkuMTE3MTg3NDksMTYuNTU4NTkzOCAxMC41MDc4MTI1LDE2Ljk5OTk5OTkgMTIsMTYuOTk5OTk5OSBDMTMuNDkyMTg3NSwxNi45OTk5OTk5IDE0Ljg4MjgxMjUsMTYuNTU4NTkzOCAxNi4wNTA3ODEzLDE1LjgwNDY4NzUgQzE3Ljk5NjA5MzgsMTYuMDc0MjE4OCAxOS41LDE3LjczMDQ2ODggMTkuNSwxOS43NSBMMTkuNSwyMS42ODc1IEMxOS41LDIxLjg1OTM3NSAxOS42NDA2MjUsMjEuOTk5OTk5OSAxOS44MTI1LDIxLjk5OTk5OTkgTDIwLjQzNzUsMjEuOTk5OTk5OSBDMjAuNjA5Mzc1LDIxLjk5OTk5OTkgMjAuNzUsMjEuODU5Mzc1IDIwLjc1LDIxLjY4NzUgTDIwLjc1LDE5Ljc1IEMyMC43NSwxNy40NzY1NjI1IDE5LjMwMDc4MTMsMTUuNTU0Njg3NSAxNy4yODEyNSwxNC44MjQyMTg4IFogTTEyLDE1Ljc1IEM4LjU1NDY4NzQ4LDE1Ljc1IDUuNzQ5OTk5OTcsMTIuOTQ1MzEyNSA1Ljc0OTk5OTk3LDkuNDk5OTk5OTkgQzUuNzQ5OTk5OTcsNi4wNTQ2ODc0NyA4LjU1NDY4NzQ4LDMuMjQ5OTk5OTYgMTIsMy4yNDk5OTk5NiBDMTUuNDQ1MzEyNSwzLjI0OTk5OTk2IDE4LjI1LDYuMDU0Njg3NDcgMTguMjUsOS40OTk5OTk5OSBDMTguMjUsMTIuOTQ1MzEyNSAxNS40NDUzMTI1LDE1Ljc1IDEyLDE1Ljc1IFoiIGlkPSJ1c2VyLWFzdHJvbmF1dC1saWdodCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=");


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppCard; });
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




var AppCard =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AppCard, _Component);

  function AppCard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppCard);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AppCard).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          desc = _this$props.desc,
          className = _this$props.className,
          children = _this$props.children,
          isCentered = _this$props.isCentered;
      var cardClass = className ? 'bluehost-card ' + className : 'bluehost-card';
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

  return AppCard;
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
/* harmony import */ var _assets_user_astronaut_light_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/user-astronaut-light.svg */ "./src/app/assets/user-astronaut-light.svg");
/* harmony import */ var _assets_question_circle_regular_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/question-circle-regular.svg */ "./src/app/assets/question-circle-regular.svg");
/* harmony import */ var _assets_credit_card_regular_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/credit-card-regular.svg */ "./src/app/assets/credit-card-regular.svg");
/* harmony import */ var _assets_box_full_regular_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/box-full-regular.svg */ "./src/app/assets/box-full-regular.svg");
/* harmony import */ var _assets_shield_check_regular_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/shield-check-regular.svg */ "./src/app/assets/shield-check-regular.svg");
/* harmony import */ var _assets_id_card_alt_regular_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/id-card-alt-regular.svg */ "./src/app/assets/id-card-alt-regular.svg");
/* harmony import */ var _assets_sign_out_regular_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/sign-out-regular.svg */ "./src/app/assets/sign-out-regular.svg");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



var AppHeader = function AppHeader() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
    id: "bluehost-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "bluehost-logo-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_bluehost_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "bluehost-nav-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://my.bluehost.com/hosting/help"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_question_circle_regular_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_user_astronaut_light_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "bluehost-nav-popup-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "bluehost-nav-popup-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://my.bluehost.com/hosting/app"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon gray"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_user_astronaut_light_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Bluehost Account"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://my.bluehost.com/hosting/account_center#billing"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon blue"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_credit_card_regular_svg__WEBPACK_IMPORTED_MODULE_6__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Billing"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://my.bluehost.com/hosting/account_center#products"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon dark-blue"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_box_full_regular_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Products"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://my.bluehost.com/hosting/account_center#security"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon green"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_shield_check_regular_svg__WEBPACK_IMPORTED_MODULE_8__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Security"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "#"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon orange"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_id_card_alt_regular_svg__WEBPACK_IMPORTED_MODULE_9__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Validation Token"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "#"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-icon red"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_sign_out_regular_svg__WEBPACK_IMPORTED_MODULE_10__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-nav-popup-nav-text"
  }, "Logout")))))))));
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-nav-link/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);




var AppLink = function AppLink(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: {
      pathname: props.to || '',
      state: {
        setFocus: true
      }
    },
    exact: true,
    className: "bluehostTab",
    activeClassName: "bluehostActiveTab"
  }, props.children || '');
};

/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./src/app/components/app-nav-link/style.scss":
/*!****************************************************!*\
  !*** ./src/app/components/app-nav-link/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/app-page/index.js":
/*!**********************************************!*\
  !*** ./src/app/components/app-page/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/app-page/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);








/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



var BluehostPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BluehostPage, _Component);

  function BluehostPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BluehostPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BluehostPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BluehostPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var location = this.props.location;

      if (location.state && location.state.setFocus) {
        this.container.focus({
          preventScroll: true
        });
      }

      this.maybeAssignMenuSelectors(location);
      this.handleWordPressMenuActive(location);
    }
  }, {
    key: "maybeAssignMenuSelectors",
    value: function maybeAssignMenuSelectors(location) {
      if ('object' !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window.bluehost)) {
        window.bluehost = new Object();
      }

      if (this.isEmpty(window.bluehost.activePage)) {
        var menuNodes = document.querySelectorAll('#toplevel_page_bluehost > ul > li');
        var menuItems = Array.from(menuNodes);
        menuItems.splice(0, 2);
        menuItems.forEach(function (li) {
          var slug = li.innerText.toLowerCase();
          li.classList.add('bluehost-wp-menu-item', slug);
        });
      }
    }
    /**
     * Unset Active Class On Menu And Re-Highlight
     * @param object location 
     */

  }, {
    key: "handleWordPressMenuActive",
    value: function handleWordPressMenuActive(location) {
      var pathname = location.pathname || '';
      var activePageSlug = this.trimLocationPathname(pathname);
      var liToActivate = document.querySelector('.bluehost-wp-menu-item.' + activePageSlug);

      if (liToActivate) {
        this.removeActivePageClasses();
        liToActivate.classList.add('current');
        window.bluehost.activePage = activePageSlug;
      }
    }
  }, {
    key: "removeActivePageClasses",
    value: function removeActivePageClasses() {
      var bluehostWpMenuNodes = document.querySelectorAll('#toplevel_page_bluehost .bluehost-wp-menu-item');
      var bluehostWpMenuItems = Array.from(bluehostWpMenuNodes);
      bluehostWpMenuItems.forEach(function (li) {
        li.classList.remove('current');
      });
    }
  }, {
    key: "trimLocationPathname",
    value: function trimLocationPathname(rawPathname) {
      var trimMarketplace = rawPathname.replace('/marketplace', '');
      var trimSlash = trimMarketplace.replace('/', '');
      return trimSlash;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(mixedVar) {
      var undef;
      var key;
      var i;
      var len;
      var emptyValues = [undef, null, false, 0, '', '0'];

      for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i]) {
          return true;
        }
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(mixedVar) === 'object') {
        for (key in mixedVar) {
          if (mixedVar.hasOwnProperty(key)) {
            return false;
          }
        }

        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("section", {
        tabIndex: "-1",
        ref: function ref(container) {
          return _this.container = container;
        },
        className: "app-page"
      }, this.props.children);
    }
  }]);

  return BluehostPage;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(BluehostPage));

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




var AppPrimaryNavigation = function AppPrimaryNavigation() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "app-primary-navigation"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    class: "tabs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/home"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Home', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/marketplace/themes"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Themes', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/marketplace/plugins"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Plugins', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/marketplace/services"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Services', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/tools"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tools', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "tab"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppNavLink"], {
    to: "/settings"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings', 'bluehost-wordpress-plugin')))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppPrimaryNavigation);

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
        className: "bluehost-app-wrap animated fadeIn fast"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        className: "screen-reader-shortcut bluehost-spa-skip",
        href: "#",
        onClick: this.handleNavFocus,
        onKeyPress: this.handleNavFocus
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Skip to Navigation', bluehost_i18n)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        className: "screen-reader-shortcut bluehost-spa-skip",
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
var ThemesRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/pages/marketplace/themes */ "./src/app/pages/marketplace/themes/index.js"));
});
var PluginsRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @/pages/marketplace/plugins */ "./src/app/pages/marketplace/plugins/index.js"));
});
var ServicesRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/pages/marketplace/services */ "./src/app/pages/marketplace/services/index.js"));
});
var ToolsRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @/pages/tools */ "./src/app/pages/tools/index.js"));
});
var SettingsRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @/pages/settings */ "./src/app/pages/settings/index.js"));
});
var HelpRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/pages/help */ "./src/app/pages/help/index.js"));
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
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MktRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/marketplace/themes",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemesRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/marketplace/plugins",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/marketplace/services",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServicesRoute, null);
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
 * @see ../inc/admin/class-page.php
 */

var WP_PAGE_ROOT_ELEMENT = 'bluehost-app';

function bluehostHandleFirstTab(e) {
  if (e.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]) {
    document.body.classList.add('bluehost-admin-keynav');
    window.removeEventListener('keydown', bluehostHandleFirstTab);
  }
}

window.addEventListener('keydown', bluehostHandleFirstTab);
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