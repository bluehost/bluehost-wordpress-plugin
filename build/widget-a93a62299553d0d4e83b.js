window["bluehostPlugin"] = window["bluehostPlugin"] || {}; window["bluehostPlugin"]["widget"] =
(window["webpackJsonp_bluehost_wordpress_plugin"] = window["webpackJsonp_bluehost_wordpress_plugin"] || []).push([["widget"],{

/***/ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "react")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var changedArray = function (a, b) {
    if (a === void 0) {
      a = [];
    }

    if (b === void 0) {
      b = [];
    }

    return a.length !== b.length || a.some(function (item, index) {
      return !Object.is(item, b[index]);
    });
  };

  var initialState = {
    error: null
  };

  var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(ErrorBoundary, _React$Component);

    function ErrorBoundary() {
      var _this;

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
      _this.state = initialState;
      _this.updatedWithError = false;

      _this.resetErrorBoundary = function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);

        _this.reset();
      };

      return _this;
    }

    ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {
      return {
        error: error
      };
    };

    var _proto = ErrorBoundary.prototype;

    _proto.reset = function reset() {
      this.updatedWithError = false;
      this.setState(initialState);
    };

    _proto.componentDidCatch = function componentDidCatch(error, info) {
      var _this$props$onError, _this$props2;

      (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var error = this.state.error;
      var resetKeys = this.props.resetKeys; // There's an edge case where if the thing that triggered the error
      // happens to *also* be in the resetKeys array, we'd end up resetting
      // the error boundary immediately. This would likely trigger a second
      // error to be thrown.
      // So we make sure that we don't check the resetKeys on the first call
      // of cDU after the error is set

      if (error !== null && !this.updatedWithError) {
        this.updatedWithError = true;
        return;
      }

      if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
        var _this$props$onResetKe, _this$props3;

        (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
        this.reset();
      }
    };

    _proto.render = function render() {
      var error = this.state.error; // @ts-expect-error ts(2339) (at least one of these will be defined though, and we check for their existance)

      var _this$props4 = this.props,
          fallbackRender = _this$props4.fallbackRender,
          FallbackComponent = _this$props4.FallbackComponent,
          fallback = _this$props4.fallback;

      if (error !== null) {
        var _props = {
          error: error,
          resetErrorBoundary: this.resetErrorBoundary
        };

        if ( /*#__PURE__*/React.isValidElement(fallback)) {
          return fallback;
        } else if (typeof fallbackRender === 'function') {
          return fallbackRender(_props);
        } else if (FallbackComponent) {
          return /*#__PURE__*/React.createElement(FallbackComponent, _props);
        } else {
          throw new Error('react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop');
        }
      }

      return this.props.children;
    };

    return ErrorBoundary;
  }(React.Component);

  function withErrorBoundary(Component, errorBoundaryProps) {
    var Wrapped = function (props) {
      return /*#__PURE__*/React.createElement(ErrorBoundary, errorBoundaryProps, /*#__PURE__*/React.createElement(Component, props));
    }; // Format for display in DevTools


    var name = Component.displayName || Component.name || 'Unknown';
    Wrapped.displayName = "withErrorBoundary(" + name + ")";
    return Wrapped;
  }

  function useErrorHandler(givenError) {
    var _React$useState = React.useState(null),
        error = _React$useState[0],
        setError = _React$useState[1];

    if (givenError) throw givenError;
    if (error) throw error;
    return setError;
  }
  /*
  eslint
    @typescript-eslint/no-throw-literal: "off",
    @typescript-eslint/prefer-nullish-coalescing: "off"
  */

  exports.ErrorBoundary = ErrorBoundary;
  exports.useErrorHandler = useErrorHandler;
  exports.withErrorBoundary = withErrorBoundary;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-error-boundary.umd.js.map


/***/ }),

/***/ "./src/set-public-path.js":
/*!********************************!*\
  !*** ./src/set-public-path.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Set Webpack Public Path via PHP-written value on the window object.
 * 
 * Usage: Make this the first import in the root file of a JS-powered feature and use wp_localize_script() to provide window object variable.
 * 
 * @see bluehost-wordpress-plugin/inc/
 */
if ('undefined' !== typeof window.bluehostPluginPublicPath) {
  __webpack_require__.p = window.bluehostPluginPublicPath;
}

/***/ }),

/***/ "./src/widget.js":
/*!***********************!*\
  !*** ./src/widget.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _set_public_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-public-path */ "./src/set-public-path.js");
/* harmony import */ var _set_public_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_set_public_path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget/index.js */ "./src/widget/index.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */




/**
 * DOM ID of root element to initialize app
 *
 * @see ../inc/admin/class-page.php
 */

var WIDGET_ROOT_ID = 'bluehost-widget';
/**
 * When DOM is ready, load app on root element, replacing #bwa-centered-loader markup.
 */

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_widget_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById(WIDGET_ROOT_ID));
});

/***/ }),

/***/ "./src/widget/error.js":
/*!*****************************!*\
  !*** ./src/widget/error.js ***!
  \*****************************/
/*! exports provided: Error, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Error = function Error() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Error yo");
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/widget/index.js":
/*!*****************************!*\
  !*** ./src/widget/index.js ***!
  \*****************************/
/*! exports provided: Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/widget/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/widget/error.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__);





var WidgetMain = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! @widget/main */ "./src/widget/main.js"));
});
var Widget = function Widget() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
    FallbackComponent: _error__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading...")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WidgetMain, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./src/widget/style.scss":
/*!*******************************!*\
  !*** ./src/widget/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

},[["./src/widget.js","manifest~widget"]]]);
//# sourceMappingURL=widget-a93a62299553d0d4e83b.js.map