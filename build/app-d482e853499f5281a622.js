window["bluehostPlugin"] = window["bluehostPlugin"] || {}; window["bluehostPlugin"]["app"] =
(window["webpackJsonp_bluehost_wordpress_plugin"] = window["webpackJsonp_bluehost_wordpress_plugin"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/index.js */ "./src/app/index.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/init */ "./src/app/init.js");


/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */
if ('bluehostPluginPublicPath' in window) {
  __webpack_require__.p = window.bluehostPluginPublicPath;
}





/**
 * DOM ID of root element to initialize app
 *
 * @see ../inc/admin/class-page.php
 */

var WP_ADM_PAGE_ROOT_ELEMENT = 'bwa-root';
/**
 * When DOM is ready, load app on root element, replacing #bwa-centered-loader markup.
 */

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  {
    Object(_app_init__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById(WP_ADM_PAGE_ROOT_ELEMENT));
});

/***/ }),

/***/ "./src/app/app-main.scss":
/*!*******************************!*\
  !*** ./src/app/app-main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/assets/index.js":
/*!*********************************!*\
  !*** ./src/app/assets/index.js ***!
  \*********************************/
/*! exports provided: Analytics, Bathtub, BillingIcon, BlogPosts, BluehostLogo, BluerockSpinner, BlueSkyLogo, Call, CallCenter, ChatIcon, CloseIcon, Computer, DownIcon, Ellipsis, ErrorStateImage, Headset, HelpIcon, JetpackLogo, Key, MagnifyingGlass, MenuIcon, Multimedia, NoFavorites, Paint, PaperPlane, ProductsIcon, RadioButtonDisabledIcon, RadioButtonSelectedIcon, RadioButtonUnselectedIcon, Responsive, Rocket, Screenshare, SearchIcon, SecurityIcon, SEO, Shop, SocialShare, StaticPage, SuccessIcon, Telescope, Tractor, UserIcon, ValidationIcon, WarningIcon, WorkingImage, WorkingImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_assets_svg_analytics_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/assets/svg/analytics.svg */ "./src/app/assets/svg/analytics.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Analytics", function() { return _app_assets_svg_analytics_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_bathtub_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/assets/svg/bathtub.svg */ "./src/app/assets/svg/bathtub.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bathtub", function() { return _app_assets_svg_bathtub_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_billing_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/assets/svg/billing.svg */ "./src/app/assets/svg/billing.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BillingIcon", function() { return _app_assets_svg_billing_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_blog_posts_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets/svg/blog-posts.svg */ "./src/app/assets/svg/blog-posts.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogPosts", function() { return _app_assets_svg_blog_posts_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_bluehost_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/assets/svg/bluehost.svg */ "./src/app/assets/svg/bluehost.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BluehostLogo", function() { return _app_assets_svg_bluehost_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_spinner_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/assets/svg/spinner.svg */ "./src/app/assets/svg/spinner.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BluerockSpinner", function() { return _app_assets_svg_spinner_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_blue_sky_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/assets/svg/blue-sky-logo.svg */ "./src/app/assets/svg/blue-sky-logo.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlueSkyLogo", function() { return _app_assets_svg_blue_sky_logo_svg__WEBPACK_IMPORTED_MODULE_6__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_call_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/assets/svg/call.svg */ "./src/app/assets/svg/call.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return _app_assets_svg_call_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_call_center_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/assets/svg/call-center.svg */ "./src/app/assets/svg/call-center.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallCenter", function() { return _app_assets_svg_call_center_svg__WEBPACK_IMPORTED_MODULE_8__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_chat_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/assets/svg/chat.svg */ "./src/app/assets/svg/chat.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatIcon", function() { return _app_assets_svg_chat_svg__WEBPACK_IMPORTED_MODULE_9__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/assets/svg/close.svg */ "./src/app/assets/svg/close.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _app_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_10__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_computer_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/assets/svg/computer.svg */ "./src/app/assets/svg/computer.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Computer", function() { return _app_assets_svg_computer_svg__WEBPACK_IMPORTED_MODULE_11__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_down_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/assets/svg/down.svg */ "./src/app/assets/svg/down.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownIcon", function() { return _app_assets_svg_down_svg__WEBPACK_IMPORTED_MODULE_12__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_ellipsis_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/assets/svg/ellipsis.svg */ "./src/app/assets/svg/ellipsis.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return _app_assets_svg_ellipsis_svg__WEBPACK_IMPORTED_MODULE_13__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_error_state_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/assets/svg/error-state.svg */ "./src/app/assets/svg/error-state.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateImage", function() { return _app_assets_svg_error_state_svg__WEBPACK_IMPORTED_MODULE_14__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_headset_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/assets/svg/headset.svg */ "./src/app/assets/svg/headset.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Headset", function() { return _app_assets_svg_headset_svg__WEBPACK_IMPORTED_MODULE_15__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_help_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/assets/svg/help.svg */ "./src/app/assets/svg/help.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return _app_assets_svg_help_svg__WEBPACK_IMPORTED_MODULE_16__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_jetpack_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/assets/svg/jetpack.svg */ "./src/app/assets/svg/jetpack.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JetpackLogo", function() { return _app_assets_svg_jetpack_svg__WEBPACK_IMPORTED_MODULE_17__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_key_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/assets/svg/key.svg */ "./src/app/assets/svg/key.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return _app_assets_svg_key_svg__WEBPACK_IMPORTED_MODULE_18__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/assets/svg/magnifying-glass.svg */ "./src/app/assets/svg/magnifying-glass.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagnifyingGlass", function() { return _app_assets_svg_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_19__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_menu_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/assets/svg/menu.svg */ "./src/app/assets/svg/menu.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return _app_assets_svg_menu_svg__WEBPACK_IMPORTED_MODULE_20__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_multimedia_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/assets/svg/multimedia.svg */ "./src/app/assets/svg/multimedia.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimedia", function() { return _app_assets_svg_multimedia_svg__WEBPACK_IMPORTED_MODULE_21__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_favorite_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/assets/svg/favorite.svg */ "./src/app/assets/svg/favorite.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFavorites", function() { return _app_assets_svg_favorite_svg__WEBPACK_IMPORTED_MODULE_22__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_paint_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/assets/svg/paint.svg */ "./src/app/assets/svg/paint.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paint", function() { return _app_assets_svg_paint_svg__WEBPACK_IMPORTED_MODULE_23__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_paper_plane_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/assets/svg/paper-plane.svg */ "./src/app/assets/svg/paper-plane.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperPlane", function() { return _app_assets_svg_paper_plane_svg__WEBPACK_IMPORTED_MODULE_24__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_products_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/assets/svg/products.svg */ "./src/app/assets/svg/products.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsIcon", function() { return _app_assets_svg_products_svg__WEBPACK_IMPORTED_MODULE_25__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_radio_button_disabled_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/assets/svg/radio-button-disabled.svg */ "./src/app/assets/svg/radio-button-disabled.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonDisabledIcon", function() { return _app_assets_svg_radio_button_disabled_svg__WEBPACK_IMPORTED_MODULE_26__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_radio_button_selected_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/assets/svg/radio-button-selected.svg */ "./src/app/assets/svg/radio-button-selected.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonSelectedIcon", function() { return _app_assets_svg_radio_button_selected_svg__WEBPACK_IMPORTED_MODULE_27__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_radio_button_unselected_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/assets/svg/radio-button-unselected.svg */ "./src/app/assets/svg/radio-button-unselected.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonUnselectedIcon", function() { return _app_assets_svg_radio_button_unselected_svg__WEBPACK_IMPORTED_MODULE_28__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_responsive_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/assets/svg/responsive.svg */ "./src/app/assets/svg/responsive.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return _app_assets_svg_responsive_svg__WEBPACK_IMPORTED_MODULE_29__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_rocket_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @app/assets/svg/rocket.svg */ "./src/app/assets/svg/rocket.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rocket", function() { return _app_assets_svg_rocket_svg__WEBPACK_IMPORTED_MODULE_30__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_screenshare_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/assets/svg/screenshare.svg */ "./src/app/assets/svg/screenshare.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screenshare", function() { return _app_assets_svg_screenshare_svg__WEBPACK_IMPORTED_MODULE_31__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/assets/svg/search.svg */ "./src/app/assets/svg/search.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _app_assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_32__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_security_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/assets/svg/security.svg */ "./src/app/assets/svg/security.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityIcon", function() { return _app_assets_svg_security_svg__WEBPACK_IMPORTED_MODULE_33__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_seo_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @app/assets/svg/seo.svg */ "./src/app/assets/svg/seo.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return _app_assets_svg_seo_svg__WEBPACK_IMPORTED_MODULE_34__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_shop_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @app/assets/svg/shop.svg */ "./src/app/assets/svg/shop.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return _app_assets_svg_shop_svg__WEBPACK_IMPORTED_MODULE_35__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_social_share_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @app/assets/svg/social-share.svg */ "./src/app/assets/svg/social-share.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return _app_assets_svg_social_share_svg__WEBPACK_IMPORTED_MODULE_36__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_static_page_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/assets/svg/static-page.svg */ "./src/app/assets/svg/static-page.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPage", function() { return _app_assets_svg_static_page_svg__WEBPACK_IMPORTED_MODULE_37__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_success_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @app/assets/svg/success.svg */ "./src/app/assets/svg/success.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessIcon", function() { return _app_assets_svg_success_svg__WEBPACK_IMPORTED_MODULE_38__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_telescope_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @app/assets/svg/telescope.svg */ "./src/app/assets/svg/telescope.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Telescope", function() { return _app_assets_svg_telescope_svg__WEBPACK_IMPORTED_MODULE_39__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_tractor_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @app/assets/svg/tractor.svg */ "./src/app/assets/svg/tractor.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tractor", function() { return _app_assets_svg_tractor_svg__WEBPACK_IMPORTED_MODULE_40__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @app/assets/svg/user.svg */ "./src/app/assets/svg/user.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return _app_assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_41__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_validation_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @app/assets/svg/validation.svg */ "./src/app/assets/svg/validation.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationIcon", function() { return _app_assets_svg_validation_svg__WEBPACK_IMPORTED_MODULE_42__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_warning_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @app/assets/svg/warning.svg */ "./src/app/assets/svg/warning.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarningIcon", function() { return _app_assets_svg_warning_svg__WEBPACK_IMPORTED_MODULE_43__["ReactComponent"]; });

/* harmony import */ var _app_assets_svg_working_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @app/assets/svg/working.svg */ "./src/app/assets/svg/working.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkingImage", function() { return _app_assets_svg_working_svg__WEBPACK_IMPORTED_MODULE_44__["ReactComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkingImageUrl", function() { return _app_assets_svg_working_svg__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/**
 * External dependencies
 */















































/***/ }),

/***/ "./src/app/assets/svg/analytics.svg":
/*!******************************************!*\
  !*** ./src/app/assets/svg/analytics.svg ***!
  \******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAnalytics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "analytics_svg__a",
  d: "M0 0h48v32H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "analytics_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#analytics_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M48 27.509a4.46 4.46 0 01-1.33 3.176A4.549 4.549 0 0143.452 32H4.546C2.03 32 0 29.985 0 27.509h17.619c0 1.412 1.175 2.246 2.606 2.246h7.259c1.235 0 2.896-.445 2.896-2.246H48zm-11.573-14.64c0 .723-.598 1.314-1.33 1.314-.732 0-1.33-.591-1.33-1.314V10.69l-9.06 8.257-5.376-5.245-5.5 5.278a1.398 1.398 0 01-.932.372c-.344 0-.687-.142-.954-.405a1.304 1.304 0 01.033-1.862l7.363-7.064 5.422 5.29 6.93-6.297h-2.484c-.73 0-1.33-.592-1.33-1.315 0-.722.6-1.314 1.33-1.314h5.888c.089 0 .177.011.267.022.165.033.322.099.454.197.033.011.066.044.1.066.055.044.11.087.155.143a.865.865 0 01.188.262c.033.056.056.099.078.153.055.143.088.307.088.471v5.17zM39.776 0H8.22C4.893 0 2.189 2.672 2.189 5.969v19.758h43.619V5.969C45.808 2.672 43.114 0 39.776 0z",
  mask: "url(#analytics_svg__b)"
}));

function SvgAnalytics(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 48,
    height: 32
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzIiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGg0OHYzMkgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik00OCAyNy41MDlhNC40NiA0LjQ2IDAgMDEtMS4zMyAzLjE3NkE0LjU0OSA0LjU0OSAwIDAxNDMuNDUyIDMySDQuNTQ2QzIuMDMgMzIgMCAyOS45ODUgMCAyNy41MDloMTcuNjE5YzAgMS40MTIgMS4xNzUgMi4yNDYgMi42MDYgMi4yNDZoNy4yNTljMS4yMzUgMCAyLjg5Ni0uNDQ1IDIuODk2LTIuMjQ2SDQ4em0tMTEuNTczLTE0LjY0YzAgLjcyMy0uNTk4IDEuMzE0LTEuMzMgMS4zMTQtLjczMiAwLTEuMzMtLjU5MS0xLjMzLTEuMzE0VjEwLjY5bC05LjA2IDguMjU3LTUuMzc2LTUuMjQ1LTUuNSA1LjI3OGMtLjI2Ny4yNDEtLjU5OS4zNzItLjkzMi4zNzItLjM0NCAwLS42ODctLjE0Mi0uOTU0LS40MDVhMS4zMDQgMS4zMDQgMCAwMS4wMzMtMS44NjJsNy4zNjMtNy4wNjQgNS40MjIgNS4yOSA2LjkzLTYuMjk3aC0yLjQ4NGMtLjczIDAtMS4zMy0uNTkyLTEuMzMtMS4zMTUgMC0uNzIyLjYtMS4zMTQgMS4zMy0xLjMxNGg1Ljg4OGMuMDg5IDAgLjE3Ny4wMTEuMjY3LjAyMi4xNjUuMDMzLjMyMi4wOTkuNDU0LjE5Ny4wMzMuMDExLjA2Ni4wNDQuMS4wNjYuMDU1LjA0NC4xMS4wODcuMTU1LjE0M2EuODY1Ljg2NSAwIDAxLjE4OC4yNjJjLjAzMy4wNTYuMDU2LjA5OS4wNzguMTUzLjA1NS4xNDMuMDg4LjMwNy4wODguNDcxdjUuMTd6TTM5Ljc3NiAwSDguMjJDNC44OTMgMCAyLjE4OSAyLjY3MiAyLjE4OSA1Ljk2OXYxOS43NThoNDMuNjE5VjUuOTY5QzQ1LjgwOCAyLjY3MiA0My4xMTQgMCAzOS43NzYgMHoiIG1hc2s9InVybCgjYikiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/bathtub.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/bathtub.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBathtub; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "bathtub_svg__b",
  d: "M37.238 56.587H.557L15.378.212h7.04z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "bathtub_svg__a",
  d: "M25.121 11.82H5.481L.405.085h19.64z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M92.5 185c51.087 0 92.5-41.414 92.5-92.5S143.587 0 92.5 0C41.414 0 0 41.414 0 92.5S41.414 185 92.5 185"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C1DBDB",
  d: "M43.632 94.739h14.277"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#DBDADA",
  strokeLinecap: "round",
  strokeWidth: 4.14,
  d: "M43.632 94.739h14.277"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(41 96)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "bathtub_svg__c",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#bathtub_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  mask: "url(#bathtub_svg__c)",
  xlinkHref: "#bathtub_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#E5E5E4",
  d: "M56.924 95.6h-7.457L49 90h8.391z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#E5E5E4",
  d: "M56.761 89h-6.896a.864.864 0 00-.865.864v1.302h8.626v-1.302a.864.864 0 00-.865-.864"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#CECFCE",
  d: "M49 91.228h8.626V91H49z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F2F2",
  d: "M50.629 93.498h4.133"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#004B74",
  strokeLinecap: "round",
  strokeWidth: 1.242,
  d: "M50.629 93.498h4.133"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#FEFEFE",
  strokeLinecap: "round",
  strokeWidth: 0.828,
  d: "M50 90h.982"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D3D2D3",
  d: "M42 85h1.538v-2H42z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B74",
  d: "M44.081 85h-2.028c-.581 0-1.053.472-1.053 1.053v2.028c0 .581.472 1.053 1.053 1.053h2.028c.581 0 1.053-.472 1.053-1.053v-2.028c0-.581-.472-1.053-1.053-1.053"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M47.88 90.939a4.94 4.94 0 11-9.879.001 4.94 4.94 0 019.879-.001"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M42.09 88.116c.33-.148.684-.25 1.056-.298m-3.283 3.739c0-1.15.514-2.18 1.325-2.87",
  stroke: "#FEFEFE",
  strokeLinecap: "round",
  strokeWidth: 0.828
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B74",
  d: "M45.257 83H41v.661h3.881a.82.82 0 01.75.488l.775.001A1.15 1.15 0 0045.257 83"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#004B74",
  strokeWidth: 2.173,
  d: "M37 97h17.7m6.46 0H55"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(92 57)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "bathtub_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#bathtub_svg__b"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  mask: "url(#bathtub_svg__d)",
  xlinkHref: "#bathtub_svg__b"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#004B75",
  strokeWidth: 4,
  d: "M141.43 131.235V56.214c0-8.403-6.812-15.214-15.215-15.214C117.812 41 111 47.811 111 56.214M106 57h8.626"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M158.631 61.315a3.315 3.315 0 11-6.63.002 3.315 3.315 0 016.63-.002M97.233 21.117a2.116 2.116 0 11-4.233 0 2.116 2.116 0 014.233 0M29.365 75.683a2.683 2.683 0 11-5.365 0 2.683 2.683 0 015.365 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FEFEFE",
  d: "M108.077 87.038a5.039 5.039 0 11-10.078 0 5.039 5.039 0 0110.078 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M76.758 111.879a7.879 7.879 0 11-15.758 0 7.879 7.879 0 0115.758 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M95.51 103.755c0 6.492-5.263 11.755-11.755 11.755-6.492 0-11.755-5.263-11.755-11.755C72 97.263 77.263 92 83.755 92c6.492 0 11.755 5.263 11.755 11.755"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M119.241 102.12c0 8.903-7.218 16.12-16.121 16.12-8.902 0-16.12-7.217-16.12-16.12C87 93.217 94.218 86 103.12 86c8.903 0 16.121 7.217 16.121 16.12"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ECECEC",
  d: "M132.791 92.396a3.396 3.396 0 11-6.792 0 3.396 3.396 0 016.792 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M93.564 74.782a1.783 1.783 0 11-3.566-.002 1.783 1.783 0 013.566.002M72.802 70.4a1.4 1.4 0 11-2.8.001 1.4 1.4 0 012.8-.001m-6.529 27.237a1.637 1.637 0 11-3.274 0 1.637 1.637 0 013.274 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M128.312 111.656c0 5.885-4.771 10.656-10.655 10.656-5.885 0-10.657-4.771-10.657-10.656 0-5.885 4.772-10.656 10.657-10.656 5.884 0 10.655 4.771 10.655 10.656"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M136.628 111.814a8.813 8.813 0 01-8.814 8.813 8.814 8.814 0 110-17.627 8.814 8.814 0 018.814 8.814"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M130.963 146.089H67.145a9.769 9.769 0 01-9.612-8.02l-4.516-24.825a1.056 1.056 0 011.04-1.244h93.646c.658 0 1.156.597 1.038 1.244l-5.964 23.642a12.185 12.185 0 01-11.814 9.203"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M118.058 146.089H46.355a9.767 9.767 0 01-9.611-8.02L32 112h99.077l-4.982 27.383a8.169 8.169 0 01-8.037 6.706"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F2F2",
  d: "M150.638 113.555H29.989A1.989 1.989 0 0128 111.567v-.578A1.99 1.99 0 0129.989 109h120.649c1.098 0 1.988.891 1.988 1.989v.578c0 1.098-.89 1.988-1.988 1.988"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C5D0",
  d: "M151.272 113.555H132c1.082-1.28 1.082-3.274 0-4.555h19.272c1.132 0 2.05 1.02 2.05 2.278 0 1.257-.918 2.277-2.05 2.277"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M79.086 116.56l-11.308 29.529H46.52a9.822 9.822 0 01-9.669-8.087L33 116.56h46.086z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M114.633 134.064H92.081A1.08 1.08 0 0191 132.983v-23.102A2.88 2.88 0 0193.881 107h21.849v25.967c0 .607-.492 1.097-1.097 1.097"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M118.231 109.249h.562a2.248 2.248 0 00-2.249-2.249H113v5.103h2.377a2.854 2.854 0 012.854-2.854"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#004B74",
  strokeLinecap: "round",
  strokeWidth: 1.556,
  d: "M115 132.902v-21.659a3.242 3.242 0 013.242-3.243"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#FEFEFE",
  strokeWidth: 1.038,
  d: "M91 127h23m-23 2h23"
}));

function SvgBathtub(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 185,
    height: 185
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg1IiBoZWlnaHQ9IjE4NSI+PGRlZnM+PHBhdGggaWQ9ImMiIGQ9Ik0zNy4yMzggNTYuNTg3SC41NTdMMTUuMzc4LjIxMmg3LjA0eiIvPjxwYXRoIGlkPSJhIiBkPSJNMjUuMTIxIDExLjgySDUuNDgxTC40MDUuMDg1aDE5LjY0eiIvPjwvZGVmcz48ZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM0Njg2QzYiIGQ9Ik05Mi41IDE4NWM1MS4wODcgMCA5Mi41LTQxLjQxNCA5Mi41LTkyLjVTMTQzLjU4NyAwIDkyLjUgMEM0MS40MTQgMCAwIDQxLjQxNCAwIDkyLjVTNDEuNDE0IDE4NSA5Mi41IDE4NSIvPjxwYXRoIGZpbGw9IiNDMURCREIiIGQ9Ik00My42MzIgOTQuNzM5aDE0LjI3NyIvPjxwYXRoIHN0cm9rZT0iI0RCREFEQSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQuMTQiIGQ9Ik00My42MzIgOTQuNzM5aDE0LjI3NyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxIDk2KSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBtYXNrPSJ1cmwoI2IpIiB4bGluazpocmVmPSIjYSIvPjwvZz48cGF0aCBmaWxsPSIjRTVFNUU0IiBkPSJNNTYuOTI0IDk1LjZoLTcuNDU3TDQ5IDkwaDguMzkxeiIvPjxwYXRoIGZpbGw9IiNFNUU1RTQiIGQ9Ik01Ni43NjEgODloLTYuODk2YS44NjQuODY0IDAgMDAtLjg2NS44NjR2MS4zMDJoOC42MjZ2LTEuMzAyYS44NjQuODY0IDAgMDAtLjg2NS0uODY0Ii8+PHBhdGggZmlsbD0iI0NFQ0ZDRSIgZD0iTTQ5IDkxLjIyOGg4LjYyNlY5MUg0OXoiLz48cGF0aCBmaWxsPSIjRjJGMkYyIiBkPSJNNTAuNjI5IDkzLjQ5OGg0LjEzMyIvPjxwYXRoIHN0cm9rZT0iIzAwNEI3NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjQyIiBkPSJNNTAuNjI5IDkzLjQ5OGg0LjEzMyIvPjxwYXRoIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9Ii44MjgiIGQ9Ik01MCA5MGguOTgyIi8+PHBhdGggZmlsbD0iI0QzRDJEMyIgZD0iTTQyIDg1aDEuNTM4di0ySDQyeiIvPjxwYXRoIGZpbGw9IiMwMDRCNzQiIGQ9Ik00NC4wODEgODVoLTIuMDI4Yy0uNTgxIDAtMS4wNTMuNDcyLTEuMDUzIDEuMDUzdjIuMDI4YzAgLjU4MS40NzIgMS4wNTMgMS4wNTMgMS4wNTNoMi4wMjhjLjU4MSAwIDEuMDUzLS40NzIgMS4wNTMtMS4wNTN2LTIuMDI4YzAtLjU4MS0uNDcyLTEuMDUzLTEuMDUzLTEuMDUzIi8+PHBhdGggZmlsbD0iI0ZCQjIxRiIgZD0iTTQ3Ljg4IDkwLjkzOWE0Ljk0IDQuOTQgMCAxMS05Ljg3OS4wMDEgNC45NCA0Ljk0IDAgMDE5Ljg3OS0uMDAxIi8+PGcgc3Ryb2tlPSIjRkVGRUZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjgyOCI+PHBhdGggZD0iTTQyLjA5IDg4LjExNmMuMzMtLjE0OC42ODQtLjI1IDEuMDU2LS4yOThNMzkuODYzIDkxLjU1N2MwLTEuMTUuNTE0LTIuMTggMS4zMjUtMi44NyIvPjwvZz48cGF0aCBmaWxsPSIjMDA0Qjc0IiBkPSJNNDUuMjU3IDgzSDQxdi42NjFoMy44ODFhLjgyLjgyIDAgMDEuNzUuNDg4bC43NzUuMDAxQTEuMTUgMS4xNSAwIDAwNDUuMjU3IDgzIi8+PHBhdGggc3Ryb2tlPSIjMDA0Qjc0IiBzdHJva2Utd2lkdGg9IjIuMTczIiBkPSJNMzcgOTdoMTcuN002MS4xNiA5N0g1NSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyIDU3KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHVzZSBtYXNrPSJ1cmwoI2QpIiB4bGluazpocmVmPSIjYyIvPjwvZz48cGF0aCBzdHJva2U9IiMwMDRCNzUiIHN0cm9rZS13aWR0aD0iNCIgZD0iTTE0MS40MyAxMzEuMjM1VjU2LjIxNGMwLTguNDAzLTYuODEyLTE1LjIxNC0xNS4yMTUtMTUuMjE0QzExNy44MTIgNDEgMTExIDQ3LjgxMSAxMTEgNTYuMjE0TTEwNiA1N2g4LjYyNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNTguNjMxIDYxLjMxNWEzLjMxNSAzLjMxNSAwIDExLTYuNjMuMDAyIDMuMzE1IDMuMzE1IDAgMDE2LjYzLS4wMDJNOTcuMjMzIDIxLjExN2EyLjExNiAyLjExNiAwIDExLTQuMjMzIDAgMi4xMTYgMi4xMTYgMCAwMTQuMjMzIDBNMjkuMzY1IDc1LjY4M2EyLjY4MyAyLjY4MyAwIDExLTUuMzY1IDAgMi42ODMgMi42ODMgMCAwMTUuMzY1IDAiLz48cGF0aCBmaWxsPSIjRkVGRUZFIiBkPSJNMTA4LjA3NyA4Ny4wMzhhNS4wMzkgNS4wMzkgMCAxMS0xMC4wNzggMCA1LjAzOSA1LjAzOSAwIDAxMTAuMDc4IDAiLz48cGF0aCBmaWxsPSIjNjhDQkU0IiBkPSJNNzYuNzU4IDExMS44NzlhNy44NzkgNy44NzkgMCAxMS0xNS43NTggMCA3Ljg3OSA3Ljg3OSAwIDAxMTUuNzU4IDAiLz48cGF0aCBmaWxsPSIjNjhDQkU0IiBkPSJNOTUuNTEgMTAzLjc1NWMwIDYuNDkyLTUuMjYzIDExLjc1NS0xMS43NTUgMTEuNzU1LTYuNDkyIDAtMTEuNzU1LTUuMjYzLTExLjc1NS0xMS43NTVDNzIgOTcuMjYzIDc3LjI2MyA5MiA4My43NTUgOTJjNi40OTIgMCAxMS43NTUgNS4yNjMgMTEuNzU1IDExLjc1NSIvPjxwYXRoIGZpbGw9IiM2OENCRTQiIGQ9Ik0xMTkuMjQxIDEwMi4xMmMwIDguOTAzLTcuMjE4IDE2LjEyLTE2LjEyMSAxNi4xMi04LjkwMiAwLTE2LjEyLTcuMjE3LTE2LjEyLTE2LjEyQzg3IDkzLjIxNyA5NC4yMTggODYgMTAzLjEyIDg2YzguOTAzIDAgMTYuMTIxIDcuMjE3IDE2LjEyMSAxNi4xMiIvPjxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik0xMzIuNzkxIDkyLjM5NmEzLjM5NiAzLjM5NiAwIDExLTYuNzkyIDAgMy4zOTYgMy4zOTYgMCAwMTYuNzkyIDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTMuNTY0IDc0Ljc4MmExLjc4MyAxLjc4MyAwIDExLTMuNTY2LS4wMDIgMS43ODMgMS43ODMgMCAwMTMuNTY2LjAwMk03Mi44MDIgNzAuNGExLjQgMS40IDAgMTEtMi44LjAwMSAxLjQgMS40IDAgMDEyLjgtLjAwMU02Ni4yNzMgOTcuNjM3YTEuNjM3IDEuNjM3IDAgMTEtMy4yNzQgMCAxLjYzNyAxLjYzNyAwIDAxMy4yNzQgMCIvPjxwYXRoIGZpbGw9IiM2OENCRTQiIGQ9Ik0xMjguMzEyIDExMS42NTZjMCA1Ljg4NS00Ljc3MSAxMC42NTYtMTAuNjU1IDEwLjY1Ni01Ljg4NSAwLTEwLjY1Ny00Ljc3MS0xMC42NTctMTAuNjU2IDAtNS44ODUgNC43NzItMTAuNjU2IDEwLjY1Ny0xMC42NTYgNS44ODQgMCAxMC42NTUgNC43NzEgMTAuNjU1IDEwLjY1NiIvPjxwYXRoIGZpbGw9IiM2OENCRTQiIGQ9Ik0xMzYuNjI4IDExMS44MTRhOC44MTMgOC44MTMgMCAwMS04LjgxNCA4LjgxMyA4LjgxNCA4LjgxNCAwIDExMC0xNy42MjcgOC44MTQgOC44MTQgMCAwMTguODE0IDguODE0Ii8+PHBhdGggZmlsbD0iI0RDRTNFOSIgZD0iTTEzMC45NjMgMTQ2LjA4OUg2Ny4xNDVhOS43NjkgOS43NjkgMCAwMS05LjYxMi04LjAybC00LjUxNi0yNC44MjVhMS4wNTYgMS4wNTYgMCAwMTEuMDQtMS4yNDRoOTMuNjQ2Yy42NTggMCAxLjE1Ni41OTcgMS4wMzggMS4yNDRsLTUuOTY0IDIzLjY0MmExMi4xODUgMTIuMTg1IDAgMDEtMTEuODE0IDkuMjAzIi8+PHBhdGggZmlsbD0iI0RDRTNFOSIgZD0iTTExOC4wNTggMTQ2LjA4OUg0Ni4zNTVhOS43NjcgOS43NjcgMCAwMS05LjYxMS04LjAyTDMyIDExMmg5OS4wNzdsLTQuOTgyIDI3LjM4M2E4LjE2OSA4LjE2OSAwIDAxLTguMDM3IDYuNzA2Ii8+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTE1MC42MzggMTEzLjU1NUgyOS45ODlBMS45ODkgMS45ODkgMCAwMTI4IDExMS41Njd2LS41NzhBMS45OSAxLjk5IDAgMDEyOS45ODkgMTA5aDEyMC42NDljMS4wOTggMCAxLjk4OC44OTEgMS45ODggMS45ODl2LjU3OGMwIDEuMDk4LS44OSAxLjk4OC0xLjk4OCAxLjk4OCIvPjxwYXRoIGZpbGw9IiNCNEM1RDAiIGQ9Ik0xNTEuMjcyIDExMy41NTVIMTMyYzEuMDgyLTEuMjggMS4wODItMy4yNzQgMC00LjU1NWgxOS4yNzJjMS4xMzIgMCAyLjA1IDEuMDIgMi4wNSAyLjI3OCAwIDEuMjU3LS45MTggMi4yNzctMi4wNSAyLjI3NyIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik03OS4wODYgMTE2LjU2bC0xMS4zMDggMjkuNTI5SDQ2LjUyYTkuODIyIDkuODIyIDAgMDEtOS42NjktOC4wODdMMzMgMTE2LjU2aDQ2LjA4NnoiLz48cGF0aCBmaWxsPSIjRkJCMjFGIiBkPSJNMTE0LjYzMyAxMzQuMDY0SDkyLjA4MUExLjA4IDEuMDggMCAwMTkxIDEzMi45ODN2LTIzLjEwMkEyLjg4IDIuODggMCAwMTkzLjg4MSAxMDdoMjEuODQ5djI1Ljk2N2MwIC42MDctLjQ5MiAxLjA5Ny0xLjA5NyAxLjA5NyIvPjxwYXRoIGZpbGw9IiNGQkIyMUYiIGQ9Ik0xMTguMjMxIDEwOS4yNDloLjU2MmEyLjI0OCAyLjI0OCAwIDAwLTIuMjQ5LTIuMjQ5SDExM3Y1LjEwM2gyLjM3N2EyLjg1NCAyLjg1NCAwIDAxMi44NTQtMi44NTQiLz48cGF0aCBzdHJva2U9IiMwMDRCNzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjU1NiIgZD0iTTExNSAxMzIuOTAydi0yMS42NTlhMy4yNDIgMy4yNDIgMCAwMTMuMjQyLTMuMjQzIi8+PHBhdGggc3Ryb2tlPSIjRkVGRUZFIiBzdHJva2Utd2lkdGg9IjEuMDM4IiBkPSJNOTEgMTI3aDIzTTkxIDEyOWgyMyIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/billing.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/billing.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBilling; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M20.33 4.222H3.67A1.67 1.67 0 002 5.89v12.22c0 .92.747 1.667 1.67 1.667h16.66c.923 0 1.67-.747 1.67-1.667V5.89c0-.92-.747-1.667-1.67-1.667zM3.878 5.89h16.244a.21.21 0 01.208.208v1.459H3.67v-1.46a.21.21 0 01.208-.208zm16.244 12.22H3.878a.209.209 0 01-.208-.208V12h16.66v5.903a.209.209 0 01-.208.208zM8.667 14.64v1.389a.418.418 0 01-.417.416h-2.5a.418.418 0 01-.417-.416v-1.39c0-.228.188-.416.417-.416h2.5c.23 0 .417.188.417.417zm6.666 0v1.389a.417.417 0 01-.416.416h-4.723a.418.418 0 01-.416-.416v-1.39c0-.228.187-.416.416-.416h4.723c.229 0 .416.188.416.417z"
});

function SvgBilling(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjMzIDQuMjIySDMuNjdDMi43NDcgNC4yMjIgMiA0Ljk3IDIgNS44OVYxOC4xMWMwIC45Mi43NDcgMS42NjcgMS42NyAxLjY2N2gxNi42NmMuOTIzIDAgMS42Ny0uNzQ3IDEuNjctMS42NjdWNS44OWMwLS45Mi0uNzQ3LTEuNjY3LTEuNjctMS42Njd6TTMuODc4IDUuODloMTYuMjQ0Yy4xMTQgMCAuMjA4LjA5NC4yMDguMjA4djEuNDU5SDMuNjdWNi4wOTdjMC0uMTE0LjA5NC0uMjA4LjIwOC0uMjA4ek0yMC4xMjIgMTguMTFIMy44NzhhLjIwOS4yMDkgMCAwMS0uMjA4LS4yMDhWMTJoMTYuNjZ2NS45MDNhLjIwOS4yMDkgMCAwMS0uMjA4LjIwOHpNOC42NjcgMTQuNjR2MS4zODljMCAuMjI5LS4xODguNDE2LS40MTcuNDE2aC0yLjVhLjQxOC40MTggMCAwMS0uNDE3LS40MTZ2LTEuMzljMC0uMjI4LjE4OC0uNDE2LjQxNy0uNDE2aDIuNWMuMjMgMCAuNDE3LjE4OC40MTcuNDE3em02LjY2NiAwdjEuMzg5YzAgLjIyOS0uMTg3LjQxNi0uNDE2LjQxNmgtNC43MjNhLjQxOC40MTggMCAwMS0uNDE2LS40MTZ2LTEuMzljMC0uMjI4LjE4Ny0uNDE2LjQxNi0uNDE2aDQuNzIzYy4yMjkgMCAuNDE2LjE4OC40MTYuNDE3eiIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/blog-posts.svg":
/*!*******************************************!*\
  !*** ./src/app/assets/svg/blog-posts.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBlogPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "blog-posts_svg__a",
  d: "M0 .001h89.999v69H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "blog-posts_svg__c",
  d: "M-.001.001h15V15h-15z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "blog-posts_svg__e",
  d: "M0 90h98V0H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(0 6)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "blog-posts_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#blog-posts_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#E6E6E6",
  d: "M83.863 69.001H6.136c-3.388 0-6.137-2.728-6.137-6.088V6.089C0 2.727 2.75.001 6.136.001h77.727c3.39 0 6.136 2.726 6.136 6.088v56.824C90 66.273 87.252 69 83.863 69",
  mask: "url(#blog-posts_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(12 75)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "blog-posts_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#blog-posts_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#E6E6E6",
  d: "M14.999.001h-15v15z",
  mask: "url(#blog-posts_svg__d)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "blog-posts_svg__f",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#blog-posts_svg__e"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M13 31h43v-5H13zm0 8h43v-5H13zm0 8h65v-5H13zm0 9h65v-5H13zm0 8h43v-5H13z",
  mask: "url(#blog-posts_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#999",
  d: "M13 23h25v-5H13z",
  mask: "url(#blog-posts_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFC500",
  d: "M85.684 0L59 26.684V39h12.316L98 12.316z",
  mask: "url(#blog-posts_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F35656",
  d: "M86.041 0L81 5.143 92.313 18 98 12.196z",
  mask: "url(#blog-posts_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M79 6.861L81.863 4 94 16.139 91.139 19z",
  mask: "url(#blog-posts_svg__f)"
}));

function SvgBlogPosts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 98,
    height: 90
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTgiIGhlaWdodD0iOTAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgLjAwMWg4OS45OTl2NjlIMHoiLz48cGF0aCBpZD0iYyIgZD0iTS0uMDAxLjAwMWgxNVYxNWgtMTV6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik0wIDkwaDk4VjBIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDYpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRTZFNkU2IiBkPSJNODMuODYzIDY5LjAwMUg2LjEzNmMtMy4zODggMC02LjEzNy0yLjcyOC02LjEzNy02LjA4OFY2LjA4OUMwIDIuNzI3IDIuNzUuMDAxIDYuMTM2LjAwMWg3Ny43MjdjMy4zOSAwIDYuMTM2IDIuNzI2IDYuMTM2IDYuMDg4djU2LjgyNEM5MCA2Ni4yNzMgODcuMjUyIDY5IDgzLjg2MyA2OSIgbWFzaz0idXJsKCNiKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiA3NSkiPjxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNjIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiNFNkU2RTYiIGQ9Ik0xNC45OTkuMDAxaC0xNXYxNXoiIG1hc2s9InVybCgjZCkiLz48L2c+PG1hc2sgaWQ9ImYiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2UiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEzIDMxaDQzdi01SDEzek0xMyAzOWg0M3YtNUgxM3pNMTMgNDdoNjV2LTVIMTN6TTEzIDU2aDY1di01SDEzek0xMyA2NGg0M3YtNUgxM3oiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjOTk5IiBkPSJNMTMgMjNoMjV2LTVIMTN6IiBtYXNrPSJ1cmwoI2YpIi8+PHBhdGggZmlsbD0iI0ZGQzUwMCIgZD0iTTg1LjY4NCAwTDU5IDI2LjY4NFYzOWgxMi4zMTZMOTggMTIuMzE2eiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNGMzU2NTYiIGQ9Ik04Ni4wNDEgMEw4MSA1LjE0MyA5Mi4zMTMgMTggOTggMTIuMTk2eiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiM0Njg3QzciIGQ9Ik03OSA2Ljg2MUw4MS44NjMgNCA5NCAxNi4xMzkgOTEuMTM5IDE5eiIgbWFzaz0idXJsKCNmKSIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/blue-sky-logo.svg":
/*!**********************************************!*\
  !*** ./src/app/assets/svg/blue-sky-logo.svg ***!
  \**********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBlueSkyLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4473B9",
  d: "M95.164 28.255a8.055 8.055 0 015.391-2.083c3.713 0 7.416 2.542 7.445 8.303.029 6.101-4.078 8.505-8.44 8.525a12.85 12.85 0 01-6.445-1.752L93 17h2.111l.053 11.255zm0 2.256l.048 9.695a9.208 9.208 0 004.17.987c3.366 0 6.502-2.038 6.497-6.679 0-4.205-2.65-6.506-5.622-6.491-1.95.1-3.78.996-5.083 2.488h-.01zM111.11 43L111 17.03l1.89-.03.11 25.99zm7.926-6.259c0 2.822 1.7 4.264 3.644 4.254 2.013 0 3.922-1.564 5.298-3.797L127.928 26h2L130 42.71h-1.95l-.063-3.213c-1.367 2.03-3.485 3.493-5.785 3.503-2.546 0-5.138-1.736-5.156-6.091L117 26.086h2l.036 10.655zm28.925-1.489h-12.88c.32 3.63 2.647 5.75 5.977 5.816 1.952.061 3.853-.677 5.317-2.066l1.08 1.66c-1.857 1.562-4.157 2.387-6.513 2.336-5.02-.12-8.099-4.146-7.936-9.046.186-5.08 3.791-8.026 7.834-7.95 3.777.084 7.586 2.845 7.121 9.25zm-2-1.84c.088-2.945-1.86-5.385-5.117-5.5-3.047-.13-5.368 1.855-5.745 5.5h10.862zm21.057-5.779l-1.027 1.693a6.13 6.13 0 00-3.642-1.376c-2.246-.046-3.642 1.21-3.638 2.572 0 1.617 2.05 2.265 4.05 2.828 2.285.668 5.346 1.863 5.236 5.078-.091 3.014-2.855 4.611-5.912 4.571-2.236-.035-4.39-.89-6.085-2.416l1.152-1.658c1.327 1.322 3.077 2.08 4.909 2.125 2.14 0 3.68-1.1 3.671-2.662-.01-1.562-1.66-2.512-3.93-3.2-2.27-.688-5.279-1.607-5.279-4.621 0-2.793 2.61-4.607 5.72-4.566a8.38 8.38 0 014.775 1.632zm6.12 6.26l.037 9.107h-2.062L171 17h2.063l.07 15.932 6.944-6.592h2.903l-7.601 7.093L184 43h-2.819zm18.288 12.956c-1.254 2.78-3.326 4.275-5.958 4.143v-2.034c1.962.046 3.279-1.016 4.157-2.958l1.516-3.376L184 26.066h2.285l5.968 13.97L198.624 26H201l-9.574 20.849z"
});

function SvgBlueSkyLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 201,
    height: 58
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none"
  }, _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#67CBE4",
    d: "M64.178 11l-29.526.152c-4.704.023-9.206 2.047-12.517 5.627-3.31 3.58-5.157 8.423-5.135 13.462.023 5.04 1.913 9.864 5.255 13.41 3.342 3.547 7.863 5.526 12.567 5.502l17.831-.092.033 7.03c0 .776.438 1.474 1.108 1.767.67.293 1.439.124 1.946-.43l7.786-8.422h.822c4.704-.024 9.207-2.05 12.517-5.63 3.31-3.581 5.157-8.424 5.135-13.464-.023-5.04-1.913-9.864-5.255-13.41-3.342-3.547-7.863-5.526-12.567-5.502z",
    style: {
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#67CBE4",
    d: "M43.407 18.867h-.21a18.67 18.67 0 00.173-2.593C43.223 7.97 37.555 1.066 30.102.11 22.65-.844 15.706 4.446 13.851 12.493a8.846 8.846 0 00-4.166-1.037C4.31 11.484-.025 16.33 0 22.28.026 28.229 4.404 33.029 9.779 33l33.68-.13c2.318.086 4.492-1.238 5.668-3.451 1.175-2.213 1.163-4.96-.031-7.16-1.195-2.201-3.381-3.502-5.698-3.392h.01z",
    style: {
      mixBlendMode: "multiply"
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDEiIGhlaWdodD0iNTgiPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGZpbGw9IiM0NDczQjkiIGQ9Ik05NS4xNjQgMjguMjU1YTguMDU1IDguMDU1IDAgMDE1LjM5MS0yLjA4M2MzLjcxMyAwIDcuNDE2IDIuNTQyIDcuNDQ1IDguMzAzLjAyOSA2LjEwMS00LjA3OCA4LjUwNS04LjQ0IDguNTI1YTEyLjg1IDEyLjg1IDAgMDEtNi40NDUtMS43NTJMOTMgMTdoMi4xMTFsLjA1MyAxMS4yNTV6bTAgMi4yNTZsLjA0OCA5LjY5NWE5LjIwOCA5LjIwOCAwIDAwNC4xNy45ODdjMy4zNjYgMCA2LjUwMi0yLjAzOCA2LjQ5Ny02LjY3OSAwLTQuMjA1LTIuNjUtNi41MDYtNS42MjItNi40OTEtMS45NS4xLTMuNzguOTk2LTUuMDgzIDIuNDg4aC0uMDF6TTExMS4xMSA0M0wxMTEgMTcuMDNsMS44OS0uMDMuMTEgMjUuOTl6TTExOS4wMzYgMzYuNzQxYzAgMi44MjIgMS43IDQuMjY0IDMuNjQ0IDQuMjU0IDIuMDEzIDAgMy45MjItMS41NjQgNS4yOTgtMy43OTdMMTI3LjkyOCAyNmgyTDEzMCA0Mi43MWgtMS45NWwtLjA2My0zLjIxM2MtMS4zNjcgMi4wMy0zLjQ4NSAzLjQ5My01Ljc4NSAzLjUwMy0yLjU0NiAwLTUuMTM4LTEuNzM2LTUuMTU2LTYuMDkxTDExNyAyNi4wODZoMmwuMDM2IDEwLjY1NXpNMTQ3Ljk2MSAzNS4yNTJoLTEyLjg4Yy4zMiAzLjYzIDIuNjQ3IDUuNzUgNS45NzcgNS44MTYgMS45NTIuMDYxIDMuODUzLS42NzcgNS4zMTctMi4wNjZsMS4wOCAxLjY2Yy0xLjg1NyAxLjU2Mi00LjE1NyAyLjM4Ny02LjUxMyAyLjMzNi01LjAyLS4xMi04LjA5OS00LjE0Ni03LjkzNi05LjA0Ni4xODYtNS4wOCAzLjc5MS04LjAyNiA3LjgzNC03Ljk1IDMuNzc3LjA4NCA3LjU4NiAyLjg0NSA3LjEyMSA5LjI1em0tMi0xLjg0Yy4wODgtMi45NDUtMS44Ni01LjM4NS01LjExNy01LjUtMy4wNDctLjEzLTUuMzY4IDEuODU1LTUuNzQ1IDUuNWgxMC44NjJ6TTE2Ny4wMTggMjcuNjMzbC0xLjAyNyAxLjY5M2E2LjEzIDYuMTMgMCAwMC0zLjY0Mi0xLjM3NmMtMi4yNDYtLjA0Ni0zLjY0MiAxLjIxLTMuNjM4IDIuNTcyIDAgMS42MTcgMi4wNSAyLjI2NSA0LjA1IDIuODI4IDIuMjg1LjY2OCA1LjM0NiAxLjg2MyA1LjIzNiA1LjA3OC0uMDkxIDMuMDE0LTIuODU1IDQuNjExLTUuOTEyIDQuNTcxLTIuMjM2LS4wMzUtNC4zOS0uODktNi4wODUtMi40MTZsMS4xNTItMS42NThjMS4zMjcgMS4zMjIgMy4wNzcgMi4wOCA0LjkwOSAyLjEyNSAyLjE0IDAgMy42OC0xLjEgMy42NzEtMi42NjItLjAxLTEuNTYyLTEuNjYtMi41MTItMy45My0zLjItMi4yNy0uNjg4LTUuMjc5LTEuNjA3LTUuMjc5LTQuNjIxIDAtMi43OTMgMi42MS00LjYwNyA1LjcyLTQuNTY2YTguMzggOC4zOCAwIDAxNC43NzUgMS42MzJ6TTE3My4xMzggMzMuODkzbC4wMzcgOS4xMDdoLTIuMDYyTDE3MSAxN2gyLjA2M2wuMDcgMTUuOTMyIDYuOTQ0LTYuNTkyaDIuOTAzbC03LjYwMSA3LjA5M0wxODQgNDNoLTIuODE5ek0xOTEuNDI2IDQ2Ljg0OWMtMS4yNTQgMi43OC0zLjMyNiA0LjI3NS01Ljk1OCA0LjE0M3YtMi4wMzRjMS45NjIuMDQ2IDMuMjc5LTEuMDE2IDQuMTU3LTIuOTU4bDEuNTE2LTMuMzc2TDE4NCAyNi4wNjZoMi4yODVsNS45NjggMTMuOTdMMTk4LjYyNCAyNkgyMDFsLTkuNTc0IDIwLjg0OXoiLz48cGF0aCBmaWxsPSIjNjdDQkU0IiBkPSJNNjQuMTc4IDExbC0yOS41MjYuMTUyYy00LjcwNC4wMjMtOS4yMDYgMi4wNDctMTIuNTE3IDUuNjI3LTMuMzEgMy41OC01LjE1NyA4LjQyMy01LjEzNSAxMy40NjIuMDIzIDUuMDQgMS45MTMgOS44NjQgNS4yNTUgMTMuNDEgMy4zNDIgMy41NDcgNy44NjMgNS41MjYgMTIuNTY3IDUuNTAybDE3LjgzMS0uMDkyLjAzMyA3LjAzYzAgLjc3Ni40MzggMS40NzQgMS4xMDggMS43NjcuNjcuMjkzIDEuNDM5LjEyNCAxLjk0Ni0uNDNsNy43ODYtOC40MjJoLjgyMmM0LjcwNC0uMDI0IDkuMjA3LTIuMDUgMTIuNTE3LTUuNjMgMy4zMS0zLjU4MSA1LjE1Ny04LjQyNCA1LjEzNS0xMy40NjQtLjAyMy01LjA0LTEuOTEzLTkuODY0LTUuMjU1LTEzLjQxLTMuMzQyLTMuNTQ3LTcuODYzLTUuNTI2LTEyLjU2Ny01LjUwMnoiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTptdWx0aXBseSIvPjxwYXRoIGZpbGw9IiM2N0NCRTQiIGQ9Ik00My40MDcgMTguODY3aC0uMjFhMTguNjcgMTguNjcgMCAwMC4xNzMtMi41OTNDNDMuMjIzIDcuOTcgMzcuNTU1IDEuMDY2IDMwLjEwMi4xMSAyMi42NS0uODQ0IDE1LjcwNiA0LjQ0NiAxMy44NTEgMTIuNDkzYTguODQ2IDguODQ2IDAgMDAtNC4xNjYtMS4wMzdDNC4zMSAxMS40ODQtLjAyNSAxNi4zMyAwIDIyLjI4LjAyNiAyOC4yMjkgNC40MDQgMzMuMDI5IDkuNzc5IDMzbDMzLjY4LS4xM2MyLjMxOC4wODYgNC40OTItMS4yMzggNS42NjgtMy40NTEgMS4xNzUtMi4yMTMgMS4xNjMtNC45Ni0uMDMxLTcuMTYtMS4xOTUtMi4yMDEtMy4zODEtMy41MDItNS42OTgtMy4zOTJoLjAxeiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ii8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/bluehost.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/bluehost.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBluehost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#3575D3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h5.3v5.3H0zm6.8 0h5.3v5.3H6.8zm6.9 0H19v5.3h-5.3zM0 6.8h5.3v5.3H0zm6.8 0h5.3v5.3H6.8zm6.9 0H19v5.3h-5.3zM0 13.7h5.3V19H0zm6.8 0h5.3V19H6.8zM13.7 13.7H19V19h-5.3zM29.8 8.2c1.1-1 2.5-1.5 4-1.5 2.7 0 5.3 1.8 5.3 6.3s-2.9 6.3-6.1 6.3c-1.6 0-3.2-.4-4.6-1.3V0h1.4zm0 9.1c1 .5 2.1.8 3.2.8 2.5 0 4.8-1.5 4.8-5.1 0-3.2-1.8-5.1-4.1-5.1-1.5.1-2.9.8-3.9 1.9zM41.5 19V0h1.3v19zm5.8-4.7c0 2.9 1.4 3.7 2.8 3.7 1.8-.1 3.3-1.1 4.2-2.7V6.9h1.4v12.2h-1.4v-2.4c-1 1.5-2.8 2.5-4.6 2.5-1.9 0-3.8-1.1-3.8-4.8V6.9h1.4zm21.4 3.9c-1.3.7-2.8 1.1-4.3 1-4.1-.1-6.2-3.4-6.1-6.8 0-3.2 2.5-5.8 5.6-5.8h.4c3.3.1 5.5 2.7 5.1 6.6h-9.8c0 2.6 2.1 4.7 4.7 4.8h.1c1.3 0 2.6-.3 3.8-.9zm-.5-6.1c.1-2.2-1.6-4.1-3.8-4.2h-.2c-2.4-.1-4.4 1.8-4.5 4.2zm5.6-2.9c1-1.6 2.6-2.5 4.5-2.6 2.4 0 3.9 1.8 3.9 4.6V19h-1.3v-7.6c0-2.6-1.4-3.6-2.8-3.6-1.8.2-3.3 1.2-4.2 2.7V19h-1.3V0H74c-.2 0-.2 9.2-.2 9.2zm22.3 3.7c0 4-2.7 6.3-5.9 6.3-3.5 0-5.9-2.8-5.9-6.3-.2-3.3 2.3-6.1 5.6-6.3h.3c3.2.1 5.9 2.4 5.9 6.3zm-10.3 0c0 2.7 1.6 5 4.5 5s4.5-2.4 4.5-5-1.7-5-4.5-5-4.5 2.3-4.5 5zm13.4 4c1 .6 2.1 1 3.2 1 1.3 0 2.9-.5 2.8-1.8 0-1.1-1.2-2-3-2.7-2.1-.8-3.9-1.6-3.9-3.5s1.8-3.3 4.2-3.3c1.2 0 2.3.3 3.4.9l-.5 1.1c-.9-.5-1.8-.7-2.8-.7-2 0-2.9 1-2.9 2 0 1.3 1.5 1.8 3.4 2.6 2.9 1.1 3.6 2.5 3.6 3.6 0 1.9-1.8 3.1-4.2 3.1-1.4 0-2.7-.4-3.9-1.1zm16.4-10V8h-4v6.7c0 2 .8 3.2 2.6 3.3.8 0 1.6-.1 2.3-.5l.4 1.2c-.9.3-1.8.5-2.7.5-2.2 0-3.9-1.3-3.9-4.5V8H108V6.9h2.2V2.8h1.4v4.1z"
}));

function SvgBluehost(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 116.8 19.3",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE2LjggMTkuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9IiMzNTc1RDMiPgogICAgICAgIDxwYXRoIGQ9Im0wIDBoNS4zdjUuM2gtNS4zem02LjggMGg1LjN2NS4zaC01LjN6bTYuOSAwaDUuM3Y1LjNoLTUuM3ptLTEzLjcgNi44aDUuM3Y1LjNoLTUuM3ptNi44IDBoNS4zdjUuM2gtNS4zem02LjkgMGg1LjN2NS4zaC01LjN6bS0xMy43IDYuOWg1LjN2NS4zaC01LjN6bTYuOCAwaDUuM3Y1LjNoLTUuM3oiIC8+CiAgICAgICAgPHBhdGggZD0ibTEzLjcgMTMuN2g1LjN2NS4zaC01LjN6IiAvPgogICAgICAgIDxwYXRoIGQ9Im0yOS44IDguMmMxLjEtMSAyLjUtMS41IDQtMS41IDIuNyAwIDUuMyAxLjggNS4zIDYuM3MtMi45IDYuMy02LjEgNi4zYy0xLjYgMC0zLjItLjQtNC42LTEuM3YtMThoMS40em0wIDkuMWMxIC41IDIuMS44IDMuMi44IDIuNSAwIDQuOC0xLjUgNC44LTUuMSAwLTMuMi0xLjgtNS4xLTQuMS01LjEtMS41LjEtMi45LjgtMy45IDEuOXptMTEuNyAxLjd2LTE5aDEuM3YxOXptNS44LTQuN2MwIDIuOSAxLjQgMy43IDIuOCAzLjcgMS44LS4xIDMuMy0xLjEgNC4yLTIuN3YtOC40aDEuNHYxMi4yaC0xLjR2LTIuNGMtMSAxLjUtMi44IDIuNS00LjYgMi41LTEuOSAwLTMuOC0xLjEtMy44LTQuOHYtNy41aDEuNHptMjEuNCAzLjljLTEuMy43LTIuOCAxLjEtNC4zIDEtNC4xLS4xLTYuMi0zLjQtNi4xLTYuOCAwLTMuMiAyLjUtNS44IDUuNi01LjhoLjRjMy4zLjEgNS41IDIuNyA1LjEgNi42aC05LjhjMCAyLjYgMi4xIDQuNyA0LjcgNC44aC4xYzEuMyAwIDIuNi0uMyAzLjgtLjl6bS0uNS02LjFjLjEtMi4yLTEuNi00LjEtMy44LTQuMmgtLjJjLTIuNC0uMS00LjQgMS44LTQuNSA0LjJ6bTUuNi0yLjljMS0xLjYgMi42LTIuNSA0LjUtMi42IDIuNCAwIDMuOSAxLjggMy45IDQuNnY3LjhoLTEuM3YtNy42YzAtMi42LTEuNC0zLjYtMi44LTMuNi0xLjguMi0zLjMgMS4yLTQuMiAyLjd2OC41aC0xLjN2LTE5aDEuNGMtLjIgMC0uMiA5LjItLjIgOS4yem0yMi4zIDMuN2MwIDQtMi43IDYuMy01LjkgNi4zLTMuNSAwLTUuOS0yLjgtNS45LTYuMy0uMi0zLjMgMi4zLTYuMSA1LjYtNi4zaC4zYzMuMi4xIDUuOSAyLjQgNS45IDYuM3ptLTEwLjMgMGMwIDIuNyAxLjYgNSA0LjUgNXM0LjUtMi40IDQuNS01LTEuNy01LTQuNS01LTQuNSAyLjMtNC41IDV6bTEzLjQgNGMxIC42IDIuMSAxIDMuMiAxIDEuMyAwIDIuOS0uNSAyLjgtMS44IDAtMS4xLTEuMi0yLTMtMi43LTIuMS0uOC0zLjktMS42LTMuOS0zLjVzMS44LTMuMyA0LjItMy4zYzEuMiAwIDIuMy4zIDMuNC45bC0uNSAxLjFjLS45LS41LTEuOC0uNy0yLjgtLjctMiAwLTIuOSAxLTIuOSAyIDAgMS4zIDEuNSAxLjggMy40IDIuNiAyLjkgMS4xIDMuNiAyLjUgMy42IDMuNiAwIDEuOS0xLjggMy4xLTQuMiAzLjEtMS40IDAtMi43LS40LTMuOS0xLjF6bTE2LjQtMTB2MS4xaC00djYuN2MwIDIgLjggMy4yIDIuNiAzLjMuOCAwIDEuNi0uMSAyLjMtLjVsLjQgMS4yYy0uOS4zLTEuOC41LTIuNy41LTIuMiAwLTMuOS0xLjMtMy45LTQuNXYtNi43aC0yLjN2LTEuMWgyLjJ2LTQuMWgxLjR2NC4xeiIgLz4KICAgIDwvZz4KPC9zdmc+");


/***/ }),

/***/ "./src/app/assets/svg/call-center.svg":
/*!********************************************!*\
  !*** ./src/app/assets/svg/call-center.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCallCenter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "call-center_svg__a",
  d: "M.001 0H138v138H.001z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "call-center_svg__c",
  d: "M.898 0h104.623v111H.898z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "call-center_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#call-center_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M69 0c38.108 0 69 30.892 69 69 0 38.107-30.892 69-69 69-38.108 0-69-30.893-69-69C0 30.892 30.893 0 69 0",
  mask: "url(#call-center_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(32 27)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "call-center_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#call-center_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M9.911 10.48L55.608 0l19.299 12.214S99.4 43.708 105.52 49.817C101.461 84.27 72.104 111 36.493 111a71 71 0 01-5.2-.19C18.159 97.904 7.912 81.384.899 74.386c0-30.53 9.013-63.907 9.013-63.907",
  mask: "url(#call-center_svg__d)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M117 69c0 26.51-21.492 48-48 48-26.51 0-48-21.49-48-48s21.49-48 48-48c26.508 0 48 21.49 48 48"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DD8F12",
  d: "M78.158 88.765c-2.156 0-4.256-.234-6.278-.676a3.828 3.828 0 00-3.65 1.147L63 95h24v-3.118c0-1.722-1.413-3.117-3.158-3.117h-5.684zM49.234 59.842c0 2.156.235 4.256.677 6.278a3.83 3.83 0 01-1.146 3.65L43 75V51h3.117c1.722 0 3.117 1.415 3.117 3.16v5.682z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F9B11D",
  d: "M42.801 60H34c0 24.301 19.7 44 44 44v-8.8c-19.44 0-35.199-15.759-35.199-35.2"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D38411",
  d: "M43 59h-8c0-4.417 3.583-8 8-8v8zm36 44v-8h8a8 8 0 01-8 8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M90.758 62.467l-5.887-2.489c-1.288-.546-2.121-1.869-2.121-3.25v-1.77c2.114-1.575 3.5-4.052 3.5-6.867v-3.455c0-4.77-3.916-8.636-8.75-8.636-4.832 0-8.75 3.866-8.75 8.636v3.455c0 2.815 1.386 5.292 3.5 6.868v1.768c0 1.382-.835 2.705-2.121 3.251l-5.885 2.489C61.669 63.555 60 66.053 60 68.818V74h35v-5.182c0-2.765-1.668-5.263-4.242-6.351"
}));

function SvgCallCenter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 138,
    height: 138
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEzOCI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNLjAwMSAwSDEzOHYxMzhILjAwMXoiLz48cGF0aCBpZD0iYyIgZD0iTS44OTggMGgxMDQuNjIzdjExMUguODk4eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiNDMkVCRjUiIGQ9Ik02OSAwYzM4LjEwOCAwIDY5IDMwLjg5MiA2OSA2OSAwIDM4LjEwNy0zMC44OTIgNjktNjkgNjktMzguMTA4IDAtNjktMzAuODkzLTY5LTY5QzAgMzAuODkyIDMwLjg5MyAwIDY5IDAiIG1hc2s9InVybCgjYikiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIgMjcpIj48bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvbWFzaz48cGF0aCBmaWxsPSIjOUVERkVGIiBkPSJNOS45MTEgMTAuNDhMNTUuNjA4IDBsMTkuMjk5IDEyLjIxNFM5OS40IDQzLjcwOCAxMDUuNTIgNDkuODE3QzEwMS40NjEgODQuMjcgNzIuMTA0IDExMSAzNi40OTMgMTExYy0xLjc1IDAtMy40ODQtLjA2NC01LjItLjE5QzE4LjE1OSA5Ny45MDQgNy45MTIgODEuMzg0Ljg5OSA3NC4zODZjMC0zMC41MyA5LjAxMy02My45MDcgOS4wMTMtNjMuOTA3IiBtYXNrPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMTcgNjljMCAyNi41MS0yMS40OTIgNDgtNDggNDgtMjYuNTEgMC00OC0yMS40OS00OC00OHMyMS40OS00OCA0OC00OGMyNi41MDggMCA0OCAyMS40OSA0OCA0OCIvPjxwYXRoIGZpbGw9IiNERDhGMTIiIGQ9Ik03OC4xNTggODguNzY1Yy0yLjE1NiAwLTQuMjU2LS4yMzQtNi4yNzgtLjY3NmEzLjgyOCAzLjgyOCAwIDAwLTMuNjUgMS4xNDdMNjMgOTVoMjR2LTMuMTE4YzAtMS43MjItMS40MTMtMy4xMTctMy4xNTgtMy4xMTdoLTUuNjg0ek00OS4yMzQgNTkuODQyYzAgMi4xNTYuMjM1IDQuMjU2LjY3NyA2LjI3OGEzLjgzIDMuODMgMCAwMS0xLjE0NiAzLjY1TDQzIDc1VjUxaDMuMTE3YzEuNzIyIDAgMy4xMTcgMS40MTUgMy4xMTcgMy4xNnY1LjY4MnoiLz48cGF0aCBmaWxsPSIjRjlCMTFEIiBkPSJNNDIuODAxIDYwSDM0YzAgMjQuMzAxIDE5LjcgNDQgNDQgNDR2LTguOGMtMTkuNDQgMC0zNS4xOTktMTUuNzU5LTM1LjE5OS0zNS4yIi8+PHBhdGggZmlsbD0iI0QzODQxMSIgZD0iTTQzIDU5aC04YzAtNC40MTcgMy41ODMtOCA4LTh2OHpNNzkgMTAzdi04aDhhOCA4IDAgMDEtOCA4Ii8+PHBhdGggZmlsbD0iIzQ2ODdDNyIgZD0iTTkwLjc1OCA2Mi40NjdsLTUuODg3LTIuNDg5Yy0xLjI4OC0uNTQ2LTIuMTIxLTEuODY5LTIuMTIxLTMuMjV2LTEuNzdjMi4xMTQtMS41NzUgMy41LTQuMDUyIDMuNS02Ljg2N3YtMy40NTVjMC00Ljc3LTMuOTE2LTguNjM2LTguNzUtOC42MzYtNC44MzIgMC04Ljc1IDMuODY2LTguNzUgOC42MzZ2My40NTVjMCAyLjgxNSAxLjM4NiA1LjI5MiAzLjUgNi44Njh2MS43NjhjMCAxLjM4Mi0uODM1IDIuNzA1LTIuMTIxIDMuMjUxbC01Ljg4NSAyLjQ4OUM2MS42NjkgNjMuNTU1IDYwIDY2LjA1MyA2MCA2OC44MThWNzRoMzV2LTUuMTgyYzAtMi43NjUtMS42NjgtNS4yNjMtNC4yNDItNi4zNTEiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/call.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/call.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  d: "M24.587 29.997C10.97 29.776 0 18.669 0 5a5 5 0 015-5h1.782c.984 0 1.78.825 1.78 1.843v3.315c0 1.257.135 2.482.387 3.662a2.262 2.262 0 01-.655 2.13l-1.795 1.662A20.068 20.068 0 0017.39 23.5l1.662-1.796a2.264 2.264 0 012.13-.654c1.179.252 2.404.386 3.661.386h3.315c1.018 0 1.843.798 1.843 1.782V25a5 5 0 01-4.783 4.995L25 30z"
});

function SvgCall(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 30 30"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMwIDMwIj48ZGVmcy8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTg3IDI5Ljk5N0MxMC45NyAyOS43NzYgMCAxOC42NjkgMCA1YTUgNSAwIDAxNS01aDEuNzgyYy45ODQgMCAxLjc4LjgyNSAxLjc4IDEuODQzdjMuMzE1YzAgMS4yNTcuMTM1IDIuNDgyLjM4NyAzLjY2MmEyLjI2MiAyLjI2MiAwIDAxLS42NTUgMi4xM2wtMS43OTUgMS42NjJBMjAuMDY4IDIwLjA2OCAwIDAwMTcuMzkgMjMuNWwxLjY2Mi0xLjc5NmEyLjI2NCAyLjI2NCAwIDAxMi4xMy0uNjU0YzEuMTc5LjI1MiAyLjQwNC4zODYgMy42NjEuMzg2aDMuMzE1YzEuMDE4IDAgMS44NDMuNzk4IDEuODQzIDEuNzgyVjI1YTUgNSAwIDAxLTQuNzgzIDQuOTk1TDI1IDMweiIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/chat.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/chat.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgChat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  d: "M26.722 16.186V4.625C26.722 2.074 24.88 0 22.612 0h-18.5C1.843 0 0 2.074 0 4.625v11.56c0 2.552 1.844 4.625 4.111 4.625v3.917c0 .578.585.91.996.563l5.319-4.487H22.61c2.268.007 4.111-2.066 4.111-4.617zm6.167-4.625h-4.111v4.625c0 3.822-2.769 6.937-6.167 6.937H12.333v4.624c0 2.55 1.844 4.625 4.111 4.625h8.075l5.319 4.487c.41.347.995.014.995-.564v-3.923h2.056c2.267 0 4.111-2.074 4.111-4.625V16.186c0-2.55-1.844-4.625-4.111-4.625z"
});

function SvgChat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 37 37"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDM3IDM3Ij48ZGVmcy8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYuNzIyIDE2LjE4NlY0LjYyNUMyNi43MjIgMi4wNzQgMjQuODggMCAyMi42MTIgMGgtMTguNUMxLjg0MyAwIDAgMi4wNzQgMCA0LjYyNXYxMS41NmMwIDIuNTUyIDEuODQ0IDQuNjI1IDQuMTExIDQuNjI1djMuOTE3YzAgLjU3OC41ODUuOTEuOTk2LjU2M2w1LjMxOS00LjQ4N0gyMi42MWMyLjI2OC4wMDcgNC4xMTEtMi4wNjYgNC4xMTEtNC42MTd6bTYuMTY3LTQuNjI1aC00LjExMXY0LjYyNWMwIDMuODIyLTIuNzY5IDYuOTM3LTYuMTY3IDYuOTM3SDEyLjMzM3Y0LjYyNGMwIDIuNTUgMS44NDQgNC42MjUgNC4xMTEgNC42MjVoOC4wNzVsNS4zMTkgNC40ODdjLjQxLjM0Ny45OTUuMDE0Ljk5NS0uNTY0di0zLjkyM2gyLjA1NmMyLjI2NyAwIDQuMTExLTIuMDc0IDQuMTExLTQuNjI1VjE2LjE4NmMwLTIuNTUtMS44NDQtNC42MjUtNC4xMTEtNC42MjV6Ii8+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/close.svg":
/*!**************************************!*\
  !*** ./src/app/assets/svg/close.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgClose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  d: "M14.121 12l6.41-6.41 1.322-1.322a.5.5 0 000-.707L20.44 2.147a.5.5 0 00-.707 0L12 9.879 4.268 2.146a.5.5 0 00-.707 0L2.146 3.561a.5.5 0 000 .707L9.88 12l-7.733 7.732a.5.5 0 000 .707l1.415 1.414a.5.5 0 00.707 0L12 14.121l6.41 6.41 1.322 1.322a.5.5 0 00.707 0l1.414-1.414a.5.5 0 000-.707L14.121 12z"
}));

function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiM1NDU0NTQiIGQ9Ik0xNC4xMjEgMTJsNi40MS02LjQxIDEuMzIyLTEuMzIyYS41LjUgMCAwMDAtLjcwN0wyMC40NCAyLjE0N2EuNS41IDAgMDAtLjcwNyAwTDEyIDkuODc5IDQuMjY4IDIuMTQ2YS41LjUgMCAwMC0uNzA3IDBMMi4xNDYgMy41NjFhLjUuNSAwIDAwMCAuNzA3TDkuODggMTJsLTcuNzMzIDcuNzMyYS41LjUgMCAwMDAgLjcwN2wxLjQxNSAxLjQxNGEuNS41IDAgMDAuNzA3IDBMMTIgMTQuMTIxbDYuNDEgNi40MSAxLjMyMiAxLjMyMmEuNS41IDAgMDAuNzA3IDBsMS40MTQtMS40MTRhLjUuNSAwIDAwMC0uNzA3TDE0LjEyMSAxMnoiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/computer.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/computer.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgComputer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "computer_svg__a",
  d: "M0 .001h139V139H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "computer_svg__c",
  d: "M.574.574H113V104H.574z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "computer_svg__e",
  d: "M0 139h139V0H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "computer_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#computer_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M139 69.5c0 38.384-31.117 69.5-69.5 69.5C31.117 139 0 107.885 0 69.5S31.117 0 69.5 0C107.883 0 139 31.117 139 69.5",
  mask: "url(#computer_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(26 35)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "computer_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#computer_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M113 34.667c0 38.291-31.134 69.334-69.539 69.334-.613 0-1.227 0-2.307-.038-.429-.349-40.56-39.777-40.58-40.122C.574 25.547 46.029.574 84.434.574c.196-.029 27.832 28.188 28.349 28.585.13 1.47.217 3.477.217 5.508",
  mask: "url(#computer_svg__d)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F4F7",
  d: "M81 112H57l2.18-12h19.635z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M81 112l-2.203-12H59l15.826 12z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M88 114H51v-.746c0-.692.504-1.252 1.126-1.254h34.741c.623-.002 1.131.558 1.133 1.248V114zm24-22v5.882c-.009 1.17-.944 2.116-2.097 2.118h-81.82c-1.147-.01-2.074-.953-2.083-2.118V92h86z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#16325B",
  d: "M112 92V37.095A2.103 2.103 0 00109.903 35h-81.82c-1.15.01-2.08.944-2.083 2.095V92h86z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "computer_svg__f",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#computer_svg__e"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M44 87h63V39H44z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M30 87h14V39H30z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M33 83.433h9v-.866h-9zm0-4h9v-.866h-9zm0-3h9v-.866h-9zm0-4h9v-.866h-9zm0-3h9v-.866h-9zm0-4h9v-.866h-9zm0-3h9v-.866h-9zm0-4h9v-.866h-9zm0-3h9v-.866h-9zm0-4h9v-.866h-9zm0-3h9v-.866h-9zm0-4h9v-.866h-9z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F35656",
  d: "M100 83h4v-4h-4z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F9B11D",
  d: "M94 83h4v-4h-4z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CCE5",
  d: "M87 83h4v-4h-4z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F35656",
  d: "M54 75l9.999-18L74 75z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F9B11D",
  d: "M94 66a9 9 0 11-9-9h.002A8.998 8.998 0 0194 65.998V66z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CCE5",
  d: "M71 65h14V51H71z",
  mask: "url(#computer_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M85 57a9 9 0 00-9 9h9v-9z",
  mask: "url(#computer_svg__f)"
}));

function SvgComputer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 139,
    height: 139
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM5IiBoZWlnaHQ9IjEzOSI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAuMDAxaDEzOVYxMzlIMHoiLz48cGF0aCBpZD0iYyIgZD0iTS41NzQuNTc0SDExM1YxMDRILjU3NHoiLz48cGF0aCBpZD0iZSIgZD0iTTAgMTM5aDEzOVYwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0MyRUJGNSIgZD0iTTEzOSA2OS41YzAgMzguMzg0LTMxLjExNyA2OS41LTY5LjUgNjkuNUMzMS4xMTcgMTM5IDAgMTA3Ljg4NSAwIDY5LjVTMzEuMTE3IDAgNjkuNSAwQzEwNy44ODMgMCAxMzkgMzEuMTE3IDEzOSA2OS41IiBtYXNrPSJ1cmwoI2IpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgMzUpIj48bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvbWFzaz48cGF0aCBmaWxsPSIjOUVERkVGIiBkPSJNMTEzIDM0LjY2N2MwIDM4LjI5MS0zMS4xMzQgNjkuMzM0LTY5LjUzOSA2OS4zMzQtLjYxMyAwLTEuMjI3IDAtMi4zMDctLjAzOC0uNDI5LS4zNDktNDAuNTYtMzkuNzc3LTQwLjU4LTQwLjEyMkMuNTc0IDI1LjU0NyA0Ni4wMjkuNTc0IDg0LjQzNC41NzRjLjE5Ni0uMDI5IDI3LjgzMiAyOC4xODggMjguMzQ5IDI4LjU4NS4xMyAxLjQ3LjIxNyAzLjQ3Ny4yMTcgNS41MDgiIG1hc2s9InVybCgjZCkiLz48L2c+PHBhdGggZmlsbD0iI0YyRjRGNyIgZD0iTTgxIDExMkg1N2wyLjE4LTEyaDE5LjYzNXoiLz48cGF0aCBmaWxsPSIjRDdEQkUwIiBkPSJNODEgMTEybC0yLjIwMy0xMkg1OWwxNS44MjYgMTJ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTg4IDExNEg1MXYtLjc0NmMwLS42OTIuNTA0LTEuMjUyIDEuMTI2LTEuMjU0aDM0Ljc0MWMuNjIzLS4wMDIgMS4xMzEuNTU4IDEuMTMzIDEuMjQ4VjExNHpNMTEyIDkydjUuODgyYy0uMDA5IDEuMTctLjk0NCAyLjExNi0yLjA5NyAyLjExOGgtODEuODJjLTEuMTQ3LS4wMS0yLjA3NC0uOTUzLTIuMDgzLTIuMTE4VjkyaDg2eiIvPjxwYXRoIGZpbGw9IiMxNjMyNUIiIGQ9Ik0xMTIgOTJWMzcuMDk1QTIuMTAzIDIuMTAzIDAgMDAxMDkuOTAzIDM1aC04MS44MmMtMS4xNS4wMS0yLjA4Ljk0NC0yLjA4MyAyLjA5NVY5Mmg4NnoiLz48bWFzayBpZD0iZiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjZSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNDQgODdoNjNWMzlINDR6IiBtYXNrPSJ1cmwoI2YpIi8+PHBhdGggZmlsbD0iIzQ2ODdDNyIgZD0iTTMwIDg3aDE0VjM5SDMweiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zMyA4My40MzNoOXYtLjg2NmgtOXpNMzMgNzkuNDMzaDl2LS44NjZoLTl6TTMzIDc2LjQzM2g5di0uODY2aC05ek0zMyA3Mi40MzNoOXYtLjg2NmgtOXpNMzMgNjkuNDMzaDl2LS44NjZoLTl6TTMzIDY1LjQzM2g5di0uODY2aC05ek0zMyA2Mi40MzNoOXYtLjg2NmgtOXpNMzMgNTguNDMzaDl2LS44NjZoLTl6TTMzIDU1LjQzM2g5di0uODY2aC05ek0zMyA1MS40MzNoOXYtLjg2NmgtOXpNMzMgNDguNDMzaDl2LS44NjZoLTl6TTMzIDQ0LjQzM2g5di0uODY2aC05eiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNGMzU2NTYiIGQ9Ik0xMDAgODNoNHYtNGgtNHoiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjRjlCMTFEIiBkPSJNOTQgODNoNHYtNGgtNHoiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjNjhDQ0U1IiBkPSJNODcgODNoNHYtNGgtNHoiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjRjM1NjU2IiBkPSJNNTQgNzVsOS45OTktMThMNzQgNzV6IiBtYXNrPSJ1cmwoI2YpIi8+PHBhdGggZmlsbD0iI0Y5QjExRCIgZD0iTTk0IDY2YTkgOSAwIDExLTktOWguMDAyQTguOTk4IDguOTk4IDAgMDE5NCA2NS45OThWNjZ6IiBtYXNrPSJ1cmwoI2YpIi8+PHBhdGggZmlsbD0iIzY4Q0NFNSIgZD0iTTcxIDY1aDE0VjUxSDcxeiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik04NSA1N2E5IDkgMCAwMC05IDloOXYtOXoiIG1hc2s9InVybCgjZikiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/down.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/down.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  fillRule: "evenodd",
  d: "M7.841 9h8.318c.748 0 1.122.93.594 1.473l-4.159 4.274a.82.82 0 01-1.185 0l-4.162-4.274C6.719 9.93 7.093 9 7.84 9z"
});

function SvgDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGw9IiM1NDU0NTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODQxIDloOC4zMThjLjc0OCAwIDEuMTIyLjkzLjU5NCAxLjQ3M2wtNC4xNTkgNC4yNzRhLjgyLjgyIDAgMDEtMS4xODUgMGwtNC4xNjItNC4yNzRDNi43MTkgOS45MyA3LjA5MyA5IDcuODQgOXoiLz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/ellipsis.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/ellipsis.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgEllipsis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M10 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm0-7c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
});

function SvgEllipsis(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGRlZnMvPjxwYXRoIGQ9Ik0xMCA1Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptMiAxMmMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6bTAtN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6Ii8+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/error-state.svg":
/*!********************************************!*\
  !*** ./src/app/assets/svg/error-state.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgErrorState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "error-state_svg__linear-gradient",
  x1: 519.75,
  x2: 524.93,
  y1: 434.97,
  y2: 281.24,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 0,
  stopColor: "#fff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 1,
  stopColor: "#52c8eb"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "error-state_svg__linear-gradient-2",
  x1: -334.69,
  x2: -475.47,
  y1: -203.12,
  y2: -204.02,
  gradientTransform: "rotate(180 -39.5 147.64)",
  xlinkHref: "#error-state_svg__linear-gradient"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "error-state_svg__linear-gradient-3",
  x1: -496.68,
  x2: -637.46,
  y1: -203.12,
  y2: -204.02,
  gradientTransform: "rotate(180 -39.5 147.64)",
  xlinkHref: "#error-state_svg__linear-gradient"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".error-state_svg__cls-2,.error-state_svg__cls-5{fill:#004d77}.error-state_svg__cls-2{opacity:.15}.error-state_svg__cls-3{fill:#4687c7}.error-state_svg__cls-4{fill:#68cce5}.error-state_svg__cls-6{fill:#fbb11e}"));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "error-state_svg__Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "error-state_svg__Layer_3",
  "data-name": "Layer 3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "url(#error-state_svg__linear-gradient)",
  stroke: "#fff",
  strokeMiterlimit: 10,
  strokeWidth: 0.46,
  d: "M1 510.84c-3.94 0 7.75-3.13 11.54-5.44 8.27-5 16.45-10.71 24.65-16.21 25.93-17.43 44.1-31.75 70.57-44.93 75.34-37.52 151.59-64.58 228.24-86.93 232-67.64 477-8.74 698.1 154.11",
  opacity: 0.38
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M505.39 66.62c-2-2-1.32-9.53-1.27-12 .26-12.18 5.7-27.38 14.67-36 3.37-3.25 7.81-5.35 11.7-7.92 39-25.8 83.63-2.29 87.9 44.37 2 22.14-11.58 41.67-29.4 53.7-5.17 3.49-12.52 9.52-19.26 8.69-18-2.21-32.91-17.43-45.39-29.37-6.27-6-17.42-12.89-20.35-21.48",
  className: "error-state_svg__cls-2"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M502.44 328.25c0-.26.93 1 1 1a36.9 36.9 0 012.07 3.81c1.58 3.35 3 6.78 4.34 10.21 3.86 9.69 7.95 19.37 11.24 29.28 7.89 23.76 11.8 56.32 12.8 81.42.19 4.69.3 9.4 0 14.09-.42 7.06-.1 8 6.72 10.3 1.08.37 4.28 2.15 5.44 1.83 2.15-.59 3.89-9.49 4.28-11 3-11.75 4.54-23.89 5.56-36 3.18-37.44-3.27-85.73-15.36-121.28a276.94 276.94 0 00-11.06-26.39c-.89-1.93-2.4-7.13-4.83-7.92s-6.94 3.19-8.77 4.41a14.7 14.7 0 00-5.62 5.9c-2.12 4.6-2 10.38-2.69 15.32a225.12 225.12 0 01-4.65 23M508 94.81c0-4.11-8.33-8.3-11.23-9.59-12.68-5.63-30-2.51-39.83 7.18-19.61 19.41-29.59 71.06-29.32 97.54 0 2.43.19 4.87 1.7 6.87 2.9 3.85 21.09 16.64 26.84 16 1.92-.2 3.39-2.2 4.42-3.63 18-24.84 20.86-56.07 32.85-83.68 2.85-6.56 13.76-22.92 14.09-29.35",
  className: "error-state_svg__cls-3"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M544.09 112.25c-.51 0 2-1 2.53-1a8.34 8.34 0 016.1 2c4.11 3.71 4.24 10.1 3.44 15.15-3.3 20.76-15.93 41.25-24 60.5-1 2.46-7.26 17.45-10.43 16.84-1.33-.26-.84-4.57-.82-5.4a175.12 175.12 0 011.28-18.17c2.93-23.27 9.84-48.95 21.83-69.33",
  className: "error-state_svg__cls-4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M449.49 266.33c-1.77-1.78-.3-9.33-.16-11.42a348.46 348.46 0 014.75-36c6.95-39.62 15-78.54 37.85-112.56 8.45-12.6 24.52-29.49 41.7-21.7 11.45 5.2 14.63 21.44 12.37 32.35-2.67 13-8.79 25.58-12.27 38.47a279.61 279.61 0 00-9.48 70.36c-.09 12.15-.15 24.24 1.12 36.33.13 1.28 1.71 12.37 1.26 12.85-5.4 5.89-19.4 5.09-26.48 6.2-12.27 1.92-24.72 4.07-37.16 2.39-2.83-.39-10-1-12-3.47-1.32-1.61-1.4-12.75-1.59-15.36",
  className: "error-state_svg__cls-5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M407.85 26.22a14.38 14.38 0 01.81-2.43 36.52 36.52 0 014.87-9c.23-.28.73-1.06 1.19-.91 2.82.94.7 9.13 2.34 11.19 1.8 2.24 9.45 1.09 9.95 4.48.39 2.62-4.87 4-5.19 6.79-.22 1.82 1.71 9.51.42 10.52-1.58 1.24-7.17-5.73-9.44-5.88-2.94-.19-10.52 7.11-11.92 6.41-.82-.41 2-8.26 2.08-9.35.37-4.06-10.21-6.09-7.14-7.51 2.29-1.06 4.89-1.63 7.25-2.54m-78.74 156.76c-.07.13 1-1.28 1.15-1.53.5-.67 4.72-6.71 5.36-5.84 1.31 1.77-1.53 5-.35 6.76.81 1.24 5.69 1.56 5.61 3.11s-4.27 1.33-4.81 2.77.8 6.48-.7 7.19c-.43.21-1.07-.6-1.31-.85-.72-.74-1.42-1.49-2.1-2.27-3.06-3.54-4.64 2.35-7.85 1.54-.7-.17 1.14-4.25 1.07-4.93-.26-2.6-8.6-3.3-2.18-5.7M658 228.57c-.09 0 6.06-8 6.81-6.65 1.07 2-1 4.8-.17 6.87.52 1.28 4.3 2.69 4.12 4s-3.66 1.06-4.28 2.3c-.92 1.84-.16 6-1.82 7.32-.78.6-3.23-4.74-4.66-4.89-3.71-.39-7.71 1.63-7.86 1.26-.44-1.12 2.37-3.84 2.41-5.22 0-2-4.26-3.48-3.79-5.08.29-1 4.26 0 4.91.15",
  className: "error-state_svg__cls-6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M761.45 189.13c-71.69-76.83 51-167.91 108.23-82 42 63-45.57 144.11-108.23 82",
  className: "error-state_svg__cls-4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#f4f4f4",
  stroke: "#36444d",
  strokeMiterlimit: 10,
  strokeWidth: 1.75,
  d: "M537.4 98.87c0 .13.09 0 .17 0a39.57 39.57 0 003.07-3.27c2.2-2.3 8-4.67 10.44-1.93 15.59 17.58 12.2-4.1 21.95-.72 9.31 3.23 6.23-2.1 11.17-8.46 4.3-5.55 10.24-9.23 14.88-14.41 2.39-2.66 7.8-8.14 5.42-12.16-4.46-7.56-13.36-7.31-20.62-9.6-6.83-2.16-16.73-9.33-23.65-8.38C546 41.86 543 62.25 535.18 71.32c-3.31 3.84-10.43 6.89-12.33 11.65-1.3 3.24 11.75 17.81 15 16.66"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M521.16 79.52c0-.11.54-.48.63-.55 3.63-3 6.37-5.75 7.64-10.48 1.78-6.64-.32-14 2.11-20.47 1.64-4.36 8.16-7.32 11.63-14.86s8.74-18.77 18.64-19.16c13.35-.57 11.89 14 21.62 18.87 11 5.49 26.44 6.36 30.79 20.33a14.36 14.36 0 01.51 6.11 8.06 8.06 0 01-4.53 6.25c-10.59 5.3-11.6-6.05-18.43-7.82-4-1-7.94 2.39-12.32.88-2.6-.89-3.38-5.28-5.91-5.6-4.8-.6-7.77 6.17-12.19 5.18-2.83-.63 2.08-12.8-5.45-10.7-4.81 1.34-8.84 14.81-6.31 18.75 2.29 3.57 14.79-1.78 8.09 8.27-3.37 5-8.91-.41-12.86-.71-2-.16-3.89.92-5.76 1.47-3.11.92-17.6 12.23-16.78 4.47",
  className: "error-state_svg__cls-6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M498.47 65c3.47 3.47 5.78 8.76 8.64 12.73a120.59 120.59 0 0016.26 18A114.78 114.78 0 00543.06 110c7.81 4.6 15.72 8.88 23.91 12.76 2.23 1.06 8.48-5.67 8.43-5.82-.23-.68-5.13-1.89-5.82-2.22-5.44-2.62-10.85-5.62-16.05-8.68-14.28-8.41-27-20.15-38.42-32.08a57.84 57.84 0 01-9.22-12.23c-.09-.16-.78-1.75-1-1.72-1.47.21-3.95 4.08-5.7 5",
  className: "error-state_svg__cls-3"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M472.19 289.74c0-7.2-3.32-15.07-4.17-22.29a425.24 425.24 0 01-2.94-55.26 403.92 403.92 0 014.21-51.52c2.26-15.92 5.31-40.9 15.89-53.72 9.87-12 28.33-8.38 29.35 8.19 1 16.41-9.21 32.79-14.38 47.72-8 23-13.75 47.15-15.82 71.46-1.11 13-1.72 26.16-2.06 39.22-.23 8.49 4.32 16.94-5.42 16.09-1.46-.12-3.31.44-4.68 0",
  className: "error-state_svg__cls-4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M358.61 464.49c0-.11 1.07-.32 1.14-.34a57.92 57.92 0 008.32-3.22A103.6 103.6 0 00386.55 450c18-13.48 31.34-32 42.41-51.33 14.23-24.86 24.92-51.52 29.25-80 1.64-10.76 1.53-21.92 2-32.78 0-.61-.78-5.3-.64-5.86 0 0 1.32.27 1.4.28a22.55 22.55 0 005.56-.21c4.54-.44 9.07-.95 13.61-1.41 10.93-1.12 22.09-1.9 32.85-4.21 2.24-.47 10.24-3.66 12.29-2.21s2 9.07 2.17 11.14c1.31 15.69-8.92 32.85-15.58 46.34-19.72 39.92-50.36 76.5-81.33 108.17-12.76 13.05-26.77 25.95-43 34.61-3.28 1.75-6.66 3.22-10.08 4.67-.38.17-4.4 2.41-4.74 2.24-1.52-.76-2.79-5.13-4.14-6.52-3-3.14-7.11-4.11-10.63-6.45",
  className: "error-state_svg__cls-5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M608.45 436c-1.38-.69 9.62-1 10.95-.82 6.67 1 26.65 2.84 28.37 11.59a2 2 0 010 1c-1.66 6.3-39.41 2.13-40.78-6.62M647 378.24a25.35 25.35 0 013.67-.35c5.42-.14 10.85.23 16.25.6 12.73.86 25.37 2.42 38 4.24 40.38 5.83 81.6 13.77 119 30.75 8.13 3.69 33.94 14.49 30.52 27.45-4 15-46.86 11.66-57.53 10.61-45.79-4.54-92-18.22-134.36-36.1-4.85-2.05-61.4-27.14-25.26-31.57m-183.37 69.85c2.45-4.89 34.82-10.5 34.17-2.63-1 12.69-48.27 17.88-36.19 6.75M266 412.18c0-5.58 19.4-12.33 22.83-13.81 11.26-4.84 91-30.69 96.6-16.75 5.13 12.81-73.79 30.93-85.36 33.34-5 1.06-38.51 9-35.12 2.41m28.37 30.78c-.55-.56.61-1.29 1-1.58 2.62-2 18.24-10.18 20.11-4.85 2 5.73-26.23 19.58-23.56 12.64",
  className: "error-state_svg__cls-2"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M443 268.24c-1.07 0 2.06.66 3.1.95 2.38.68 4.7 1.56 7.1 2.17a83.93 83.93 0 0020.67 2.13c12.34 0 24.83-2.88 36.77-5.7a136.62 136.62 0 0015.26-4.18c.61-.22 3.16-1.78 3.79-1.51.86.37 2.11 12.75 1.93 14.66-.38 4-23.62 8.28-27.42 9.05-14.5 3-30.94 2.92-45.65 1.23-3.07-.36-11.13.59-13.51-1.8-1.27-1.26-2.09-13.83-2.45-16.72",
  className: "error-state_svg__cls-4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M461.92 264.18c0-.66.3 1.23.32 1.37.21 1.06.45 2.11.71 3.15.84 3.38 1.61 6.76 2.24 10.18 2 10.83 1.93 13.05 13 14 1.15.09 6.69.86 7.61-.17 1.91-2.11.87-10.88.93-13.6.15-6.78.11-14 1.45-20.63.05-.25.25-.84 0-1.06-1.12-1.12-29.67-.09-26 7.18",
  className: "error-state_svg__cls-3"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M470.76 290.93c0-.22-1.14 2.53-1.38 3.06a9.73 9.73 0 01-4.88 4.89c-3.15 1.39-23.78-.95-15.71 9.36 6.53 8.32 22.94 8.84 29.45.61 2.4-3.05 8-13.92 2.4-17.41-2.55-1.59-7.24-.59-10.15-.88m68.18 194.54a33.86 33.86 0 01-3.88-2.53c-1.84-1.8-7.66-8.82-2.52-10.46s11.66 2.87 16.31 4.42c6.16 2.06 12.22 1.69 18.52 2.55 2.7.37 5.84 1.88 6.08 5 .36 4.61-4.65 6.21-8.29 6.77a37 37 0 01-25.12-4.92m-172.92-21s-2.15-1.16-2.4-1.29a8.28 8.28 0 00-5.35-1.3c-3.36.54-2.63 5.11-1.54 7.25 4.52 8.86 23.75 22.91 33.26 26.14 4.81 1.63 18 1.47 15-7.37-1.68-4.94-10.57-6.33-14.91-7.68-8.42-2.61-18.78-8.37-23.81-15.92",
  className: "error-state_svg__cls-4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M358.82 461.89c-.33-.67 3 2.08 3.37 2.38 2.51 2.19 5 4.42 7.43 6.65 8.2 7.41 11.05 8.73 20.74 2.86.91-.55 5.15-1.85 5.34-3 .57-3.26-7.36-8.72-9.47-10.8s-8.58-10.94-10.62-11.59c-1.32-.42-3.13 2.17-4 2.9-3.19 2.79-10.28 5.75-12.15 9.49",
  className: "error-state_svg__cls-3"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M527.63 465.24c-.54-.33 1.3 3.55 1.52 4.29.33 1.11 0 7 .49 7.64 1.61 1.78 20.09 2.92 22.57 1.75 1.95-.91 1.71-3.72 2-5s2.21-4.91.63-6.06c-1.08-.8-5.74-.36-7.25-.43-6.39-.3-12.52-1.21-18.74-2",
  className: "error-state_svg__cls-5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M759.87 94.49c-6-3.88-93.55-53.22-82-17.38 14.62 45.55 151 111.29 193.09 132 10.13 5 66 33 74.73 17.35 10.78-19.31-61.44-64.77-65.7-62.11-.84.52-3 2.88-2.31 3.9s2.28 1.89 3.35 2.66c13.54 9.59 33.88 21.6 40.91 37.35.75 1.68 1.21 3.73-1 4.34-5.5 1.49-13.28-1.82-18.34-3.55s-9.84-3.66-14.63-5.83C839 181 789.29 156.19 745.52 125c-5.45-3.89-40.17-29.34-32.55-38.44 9.73-11.63 29 12.08 37.91 17.52",
  className: "error-state_svg__cls-2"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "url(#error-state_svg__linear-gradient-2)",
  stroke: "#fff",
  strokeMiterlimit: 10,
  strokeWidth: 0.24,
  d: "M395.22 484.9c1.45 0-2.89-.13-4.34-.18-2.79-.09-5.57-.14-8.36-.25q-13.45-.54-26.92-1.2c-26.22-1.24-52.41-2.69-78.65-3.56l-2.54-.1-2.37-.1c-5.57-.23-11 .06-16.51.06-.43 0-.62.15-.69.61-.47 2.89 4 35.1 4.76 35.79 4.1 3.78 17.51-.5 22.17-1.12 20.56-2.72 40.92-6.18 61.15-10.8 11.06-2.52 22.23-4.7 33.24-7.43 1-.26 18.76-2.26 19.36-3.45",
  opacity: 0.19
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "url(#error-state_svg__linear-gradient-3)",
  stroke: "#fff",
  strokeMiterlimit: 10,
  strokeWidth: 0.24,
  d: "M557.21 484.9c1.45 0-2.89-.13-4.34-.18-2.79-.09-5.57-.14-8.36-.25q-13.46-.54-26.92-1.2c-26.22-1.24-52.41-2.69-78.65-3.56l-2.54-.1-2.37-.1c-5.57-.23-11 .06-16.51.06-.43 0-.62.15-.69.61-.47 2.89 4 35.1 4.76 35.79 4.1 3.78 17.51-.5 22.17-1.12 20.56-2.72 40.92-6.18 61.15-10.8 11.06-2.52 22.23-4.7 33.24-7.43 1-.26 18.76-2.26 19.36-3.45",
  opacity: 0.19
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M218.15 128.35S291.94 54.66 387 36.5m-96.33 63.39c18.21-10.67 32-31.22 96.37-51.69",
  fill: "none",
  stroke: "#004d77",
  strokeWidth: 1.47,
  strokeDasharray: 8.82,
  strokeMiterlimit: 10
})));

function SvgErrorState(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1034.27 517.63"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAzNC4yNyA1MTcuNjMiPjxkZWZzLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjUxOS43NSIgeDI9IjUyNC45MyIgeTE9IjQzNC45NyIgeTI9IjI4MS4yNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUyYzhlYiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgeDE9Ii0zMzQuNjkiIHgyPSItNDc1LjQ3IiB5MT0iLTIwMy4xMiIgeTI9Ii0yMDQuMDIiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMTgwIC0zOS41IDE0Ny42NCkiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iLTQ5Ni42OCIgeDI9Ii02MzcuNDYiIHkxPSItMjAzLjEyIiB5Mj0iLTIwNC4wMiIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxODAgLTM5LjUgMTQ3LjY0KSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxzdHlsZT4uY2xzLTEwe3N0cm9rZS1taXRlcmxpbWl0OjEwfS5jbHMtMiwuY2xzLTV7ZmlsbDojMDA0ZDc3fS5jbHMtMntvcGFjaXR5Oi4xNX0uY2xzLTN7ZmlsbDojNDY4N2M3fS5jbHMtNHtmaWxsOiM2OGNjZTV9LmNscy02e2ZpbGw6I2ZiYjExZX0uY2xzLTEwe2ZpbGw6bm9uZTtzdHJva2U6IzAwNGQ3NztzdHJva2Utd2lkdGg6MS40N3B4O3N0cm9rZS1kYXNoYXJyYXk6OC44Mn08L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj48cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9Ii40NiIgZD0iTTEgNTEwLjg0Yy0zLjk0IDAgNy43NS0zLjEzIDExLjU0LTUuNDQgOC4yNy01IDE2LjQ1LTEwLjcxIDI0LjY1LTE2LjIxIDI1LjkzLTE3LjQzIDQ0LjEtMzEuNzUgNzAuNTctNDQuOTMgNzUuMzQtMzcuNTIgMTUxLjU5LTY0LjU4IDIyOC4yNC04Ni45MyAyMzItNjcuNjQgNDc3LTguNzQgNjk4LjEgMTU0LjExIiBvcGFjaXR5PSIuMzgiLz48cGF0aCBkPSJNNTA1LjM5IDY2LjYyYy0yLTItMS4zMi05LjUzLTEuMjctMTIgLjI2LTEyLjE4IDUuNy0yNy4zOCAxNC42Ny0zNiAzLjM3LTMuMjUgNy44MS01LjM1IDExLjctNy45MiAzOS0yNS44IDgzLjYzLTIuMjkgODcuOSA0NC4zNyAyIDIyLjE0LTExLjU4IDQxLjY3LTI5LjQgNTMuNy01LjE3IDMuNDktMTIuNTIgOS41Mi0xOS4yNiA4LjY5LTE4LTIuMjEtMzIuOTEtMTcuNDMtNDUuMzktMjkuMzctNi4yNy02LTE3LjQyLTEyLjg5LTIwLjM1LTIxLjQ4IiBjbGFzcz0iY2xzLTIiLz48cGF0aCBkPSJNNTAyLjQ0IDMyOC4yNWMwLS4yNi45MyAxIDEgMWEzNi45IDM2LjkgMCAwMTIuMDcgMy44MWMxLjU4IDMuMzUgMyA2Ljc4IDQuMzQgMTAuMjEgMy44NiA5LjY5IDcuOTUgMTkuMzcgMTEuMjQgMjkuMjggNy44OSAyMy43NiAxMS44IDU2LjMyIDEyLjggODEuNDIuMTkgNC42OS4zIDkuNCAwIDE0LjA5LS40MiA3LjA2LS4xIDggNi43MiAxMC4zIDEuMDguMzcgNC4yOCAyLjE1IDUuNDQgMS44MyAyLjE1LS41OSAzLjg5LTkuNDkgNC4yOC0xMSAzLTExLjc1IDQuNTQtMjMuODkgNS41Ni0zNiAzLjE4LTM3LjQ0LTMuMjctODUuNzMtMTUuMzYtMTIxLjI4YTI3Ni45NCAyNzYuOTQgMCAwMC0xMS4wNi0yNi4zOWMtLjg5LTEuOTMtMi40LTcuMTMtNC44My03Ljkycy02Ljk0IDMuMTktOC43NyA0LjQxYTE0LjcgMTQuNyAwIDAwLTUuNjIgNS45Yy0yLjEyIDQuNi0yIDEwLjM4LTIuNjkgMTUuMzJhMjI1LjEyIDIyNS4xMiAwIDAxLTQuNjUgMjNNNTA4IDk0LjgxYzAtNC4xMS04LjMzLTguMy0xMS4yMy05LjU5LTEyLjY4LTUuNjMtMzAtMi41MS0zOS44MyA3LjE4LTE5LjYxIDE5LjQxLTI5LjU5IDcxLjA2LTI5LjMyIDk3LjU0IDAgMi40My4xOSA0Ljg3IDEuNyA2Ljg3IDIuOSAzLjg1IDIxLjA5IDE2LjY0IDI2Ljg0IDE2IDEuOTItLjIgMy4zOS0yLjIgNC40Mi0zLjYzIDE4LTI0Ljg0IDIwLjg2LTU2LjA3IDMyLjg1LTgzLjY4IDIuODUtNi41NiAxMy43Ni0yMi45MiAxNC4wOS0yOS4zNSIgY2xhc3M9ImNscy0zIi8+PHBhdGggZD0iTTU0NC4wOSAxMTIuMjVjLS41MSAwIDItMSAyLjUzLTFhOC4zNCA4LjM0IDAgMDE2LjEgMmM0LjExIDMuNzEgNC4yNCAxMC4xIDMuNDQgMTUuMTUtMy4zIDIwLjc2LTE1LjkzIDQxLjI1LTI0IDYwLjUtMSAyLjQ2LTcuMjYgMTcuNDUtMTAuNDMgMTYuODQtMS4zMy0uMjYtLjg0LTQuNTctLjgyLTUuNGExNzUuMTIgMTc1LjEyIDAgMDExLjI4LTE4LjE3YzIuOTMtMjMuMjcgOS44NC00OC45NSAyMS44My02OS4zMyIgY2xhc3M9ImNscy00Ii8+PHBhdGggZD0iTTQ0OS40OSAyNjYuMzNjLTEuNzctMS43OC0uMy05LjMzLS4xNi0xMS40MmEzNDguNDYgMzQ4LjQ2IDAgMDE0Ljc1LTM2YzYuOTUtMzkuNjIgMTUtNzguNTQgMzcuODUtMTEyLjU2IDguNDUtMTIuNiAyNC41Mi0yOS40OSA0MS43LTIxLjcgMTEuNDUgNS4yIDE0LjYzIDIxLjQ0IDEyLjM3IDMyLjM1LTIuNjcgMTMtOC43OSAyNS41OC0xMi4yNyAzOC40N2EyNzkuNjEgMjc5LjYxIDAgMDAtOS40OCA3MC4zNmMtLjA5IDEyLjE1LS4xNSAyNC4yNCAxLjEyIDM2LjMzLjEzIDEuMjggMS43MSAxMi4zNyAxLjI2IDEyLjg1LTUuNCA1Ljg5LTE5LjQgNS4wOS0yNi40OCA2LjItMTIuMjcgMS45Mi0yNC43MiA0LjA3LTM3LjE2IDIuMzktMi44My0uMzktMTAtMS0xMi0zLjQ3LTEuMzItMS42MS0xLjQtMTIuNzUtMS41OS0xNS4zNiIgY2xhc3M9ImNscy01Ii8+PHBhdGggZD0iTTQwNy44NSAyNi4yMmExNC4zOCAxNC4zOCAwIDAxLjgxLTIuNDMgMzYuNTIgMzYuNTIgMCAwMTQuODctOWMuMjMtLjI4LjczLTEuMDYgMS4xOS0uOTEgMi44Mi45NC43IDkuMTMgMi4zNCAxMS4xOSAxLjggMi4yNCA5LjQ1IDEuMDkgOS45NSA0LjQ4LjM5IDIuNjItNC44NyA0LTUuMTkgNi43OS0uMjIgMS44MiAxLjcxIDkuNTEuNDIgMTAuNTItMS41OCAxLjI0LTcuMTctNS43My05LjQ0LTUuODgtMi45NC0uMTktMTAuNTIgNy4xMS0xMS45MiA2LjQxLS44Mi0uNDEgMi04LjI2IDIuMDgtOS4zNS4zNy00LjA2LTEwLjIxLTYuMDktNy4xNC03LjUxIDIuMjktMS4wNiA0Ljg5LTEuNjMgNy4yNS0yLjU0TTMyNC4zMyAxODQuNzVjLS4wNy4xMyAxLTEuMjggMS4xNS0xLjUzLjUtLjY3IDQuNzItNi43MSA1LjM2LTUuODQgMS4zMSAxLjc3LTEuNTMgNS0uMzUgNi43Ni44MSAxLjI0IDUuNjkgMS41NiA1LjYxIDMuMTFzLTQuMjcgMS4zMy00LjgxIDIuNzcuOCA2LjQ4LS43IDcuMTljLS40My4yMS0xLjA3LS42LTEuMzEtLjg1LS43Mi0uNzQtMS40Mi0xLjQ5LTIuMS0yLjI3LTMuMDYtMy41NC00LjY0IDIuMzUtNy44NSAxLjU0LS43LS4xNyAxLjE0LTQuMjUgMS4wNy00LjkzLS4yNi0yLjYtOC42LTMuMy0yLjE4LTUuN002NTggMjI4LjU3Yy0uMDkgMCA2LjA2LTggNi44MS02LjY1IDEuMDcgMi0xIDQuOC0uMTcgNi44Ny41MiAxLjI4IDQuMyAyLjY5IDQuMTIgNHMtMy42NiAxLjA2LTQuMjggMi4zYy0uOTIgMS44NC0uMTYgNi0xLjgyIDcuMzItLjc4LjYtMy4yMy00Ljc0LTQuNjYtNC44OS0zLjcxLS4zOS03LjcxIDEuNjMtNy44NiAxLjI2LS40NC0xLjEyIDIuMzctMy44NCAyLjQxLTUuMjIgMC0yLTQuMjYtMy40OC0zLjc5LTUuMDguMjktMSA0LjI2IDAgNC45MS4xNSIgY2xhc3M9ImNscy02Ii8+PHBhdGggZD0iTTc2MS40NSAxODkuMTNjLTcxLjY5LTc2LjgzIDUxLTE2Ny45MSAxMDguMjMtODIgNDIgNjMtNDUuNTcgMTQ0LjExLTEwOC4yMyA4MiIgY2xhc3M9ImNscy00Ii8+PHBhdGggZmlsbD0iI2Y0ZjRmNCIgc3Ryb2tlPSIjMzY0NDRkIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS43NSIgZD0iTTUzNy40IDk4Ljg3YzAgLjEzLjA5IDAgLjE3IDBhMzkuNTcgMzkuNTcgMCAwMDMuMDctMy4yN2MyLjItMi4zIDgtNC42NyAxMC40NC0xLjkzIDE1LjU5IDE3LjU4IDEyLjItNC4xIDIxLjk1LS43MiA5LjMxIDMuMjMgNi4yMy0yLjEgMTEuMTctOC40NiA0LjMtNS41NSAxMC4yNC05LjIzIDE0Ljg4LTE0LjQxIDIuMzktMi42NiA3LjgtOC4xNCA1LjQyLTEyLjE2LTQuNDYtNy41Ni0xMy4zNi03LjMxLTIwLjYyLTkuNi02LjgzLTIuMTYtMTYuNzMtOS4zMy0yMy42NS04LjM4QzU0NiA0MS44NiA1NDMgNjIuMjUgNTM1LjE4IDcxLjMyYy0zLjMxIDMuODQtMTAuNDMgNi44OS0xMi4zMyAxMS42NS0xLjMgMy4yNCAxMS43NSAxNy44MSAxNSAxNi42NiIvPjxwYXRoIGQ9Ik01MjEuMTYgNzkuNTJjMC0uMTEuNTQtLjQ4LjYzLS41NSAzLjYzLTMgNi4zNy01Ljc1IDcuNjQtMTAuNDggMS43OC02LjY0LS4zMi0xNCAyLjExLTIwLjQ3IDEuNjQtNC4zNiA4LjE2LTcuMzIgMTEuNjMtMTQuODZzOC43NC0xOC43NyAxOC42NC0xOS4xNmMxMy4zNS0uNTcgMTEuODkgMTQgMjEuNjIgMTguODcgMTEgNS40OSAyNi40NCA2LjM2IDMwLjc5IDIwLjMzYTE0LjM2IDE0LjM2IDAgMDEuNTEgNi4xMSA4LjA2IDguMDYgMCAwMS00LjUzIDYuMjVjLTEwLjU5IDUuMy0xMS42LTYuMDUtMTguNDMtNy44Mi00LTEtNy45NCAyLjM5LTEyLjMyLjg4LTIuNi0uODktMy4zOC01LjI4LTUuOTEtNS42LTQuOC0uNi03Ljc3IDYuMTctMTIuMTkgNS4xOC0yLjgzLS42MyAyLjA4LTEyLjgtNS40NS0xMC43LTQuODEgMS4zNC04Ljg0IDE0LjgxLTYuMzEgMTguNzUgMi4yOSAzLjU3IDE0Ljc5LTEuNzggOC4wOSA4LjI3LTMuMzcgNS04LjkxLS40MS0xMi44Ni0uNzEtMi0uMTYtMy44OS45Mi01Ljc2IDEuNDctMy4xMS45Mi0xNy42IDEyLjIzLTE2Ljc4IDQuNDciIGNsYXNzPSJjbHMtNiIvPjxwYXRoIGQ9Ik00OTguNDcgNjVjMy40NyAzLjQ3IDUuNzggOC43NiA4LjY0IDEyLjczYTEyMC41OSAxMjAuNTkgMCAwMDE2LjI2IDE4QTExNC43OCAxMTQuNzggMCAwMDU0My4wNiAxMTBjNy44MSA0LjYgMTUuNzIgOC44OCAyMy45MSAxMi43NiAyLjIzIDEuMDYgOC40OC01LjY3IDguNDMtNS44Mi0uMjMtLjY4LTUuMTMtMS44OS01LjgyLTIuMjItNS40NC0yLjYyLTEwLjg1LTUuNjItMTYuMDUtOC42OC0xNC4yOC04LjQxLTI3LTIwLjE1LTM4LjQyLTMyLjA4YTU3Ljg0IDU3Ljg0IDAgMDEtOS4yMi0xMi4yM2MtLjA5LS4xNi0uNzgtMS43NS0xLTEuNzItMS40Ny4yMS0zLjk1IDQuMDgtNS43IDUiIGNsYXNzPSJjbHMtMyIvPjxwYXRoIGQ9Ik00NzIuMTkgMjg5Ljc0YzAtNy4yLTMuMzItMTUuMDctNC4xNy0yMi4yOWE0MjUuMjQgNDI1LjI0IDAgMDEtMi45NC01NS4yNiA0MDMuOTIgNDAzLjkyIDAgMDE0LjIxLTUxLjUyYzIuMjYtMTUuOTIgNS4zMS00MC45IDE1Ljg5LTUzLjcyIDkuODctMTIgMjguMzMtOC4zOCAyOS4zNSA4LjE5IDEgMTYuNDEtOS4yMSAzMi43OS0xNC4zOCA0Ny43Mi04IDIzLTEzLjc1IDQ3LjE1LTE1LjgyIDcxLjQ2LTEuMTEgMTMtMS43MiAyNi4xNi0yLjA2IDM5LjIyLS4yMyA4LjQ5IDQuMzIgMTYuOTQtNS40MiAxNi4wOS0xLjQ2LS4xMi0zLjMxLjQ0LTQuNjggMCIgY2xhc3M9ImNscy00Ii8+PHBhdGggZD0iTTM1OC42MSA0NjQuNDljMC0uMTEgMS4wNy0uMzIgMS4xNC0uMzRhNTcuOTIgNTcuOTIgMCAwMDguMzItMy4yMkExMDMuNiAxMDMuNiAwIDAwMzg2LjU1IDQ1MGMxOC0xMy40OCAzMS4zNC0zMiA0Mi40MS01MS4zMyAxNC4yMy0yNC44NiAyNC45Mi01MS41MiAyOS4yNS04MCAxLjY0LTEwLjc2IDEuNTMtMjEuOTIgMi0zMi43OCAwLS42MS0uNzgtNS4zLS42NC01Ljg2IDAgMCAxLjMyLjI3IDEuNC4yOGEyMi41NSAyMi41NSAwIDAwNS41Ni0uMjFjNC41NC0uNDQgOS4wNy0uOTUgMTMuNjEtMS40MSAxMC45My0xLjEyIDIyLjA5LTEuOSAzMi44NS00LjIxIDIuMjQtLjQ3IDEwLjI0LTMuNjYgMTIuMjktMi4yMXMyIDkuMDcgMi4xNyAxMS4xNGMxLjMxIDE1LjY5LTguOTIgMzIuODUtMTUuNTggNDYuMzQtMTkuNzIgMzkuOTItNTAuMzYgNzYuNS04MS4zMyAxMDguMTctMTIuNzYgMTMuMDUtMjYuNzcgMjUuOTUtNDMgMzQuNjEtMy4yOCAxLjc1LTYuNjYgMy4yMi0xMC4wOCA0LjY3LS4zOC4xNy00LjQgMi40MS00Ljc0IDIuMjQtMS41Mi0uNzYtMi43OS01LjEzLTQuMTQtNi41Mi0zLTMuMTQtNy4xMS00LjExLTEwLjYzLTYuNDUiIGNsYXNzPSJjbHMtNSIvPjxwYXRoIGQ9Ik02MDguNDUgNDM2Yy0xLjM4LS42OSA5LjYyLTEgMTAuOTUtLjgyIDYuNjcgMSAyNi42NSAyLjg0IDI4LjM3IDExLjU5YTIgMiAwIDAxMCAxYy0xLjY2IDYuMy0zOS40MSAyLjEzLTQwLjc4LTYuNjJNNjQ3IDM3OC4yNGEyNS4zNSAyNS4zNSAwIDAxMy42Ny0uMzVjNS40Mi0uMTQgMTAuODUuMjMgMTYuMjUuNiAxMi43My44NiAyNS4zNyAyLjQyIDM4IDQuMjQgNDAuMzggNS44MyA4MS42IDEzLjc3IDExOSAzMC43NSA4LjEzIDMuNjkgMzMuOTQgMTQuNDkgMzAuNTIgMjcuNDUtNCAxNS00Ni44NiAxMS42Ni01Ny41MyAxMC42MS00NS43OS00LjU0LTkyLTE4LjIyLTEzNC4zNi0zNi4xLTQuODUtMi4wNS02MS40LTI3LjE0LTI1LjI2LTMxLjU3TTQ1My45MiA0NTMuNzJjMi40NS00Ljg5IDM0LjgyLTEwLjUgMzQuMTctMi42My0xIDEyLjY5LTQ4LjI3IDE3Ljg4LTM2LjE5IDYuNzVNMjY2IDQxMi4xOGMwLTUuNTggMTkuNC0xMi4zMyAyMi44My0xMy44MSAxMS4yNi00Ljg0IDkxLTMwLjY5IDk2LjYtMTYuNzUgNS4xMyAxMi44MS03My43OSAzMC45My04NS4zNiAzMy4zNC01IDEuMDYtMzguNTEgOS0zNS4xMiAyLjQxTTI5My4zMiA0NDguMTVjLS41NS0uNTYuNjEtMS4yOSAxLTEuNTggMi42Mi0yIDE4LjI0LTEwLjE4IDIwLjExLTQuODUgMiA1LjczLTI2LjIzIDE5LjU4LTIzLjU2IDEyLjY0IiBjbGFzcz0iY2xzLTIiLz48cGF0aCBkPSJNNDQzIDI2OC4yNGMtMS4wNyAwIDIuMDYuNjYgMy4xLjk1IDIuMzguNjggNC43IDEuNTYgNy4xIDIuMTdhODMuOTMgODMuOTMgMCAwMDIwLjY3IDIuMTNjMTIuMzQgMCAyNC44My0yLjg4IDM2Ljc3LTUuN2ExMzYuNjIgMTM2LjYyIDAgMDAxNS4yNi00LjE4Yy42MS0uMjIgMy4xNi0xLjc4IDMuNzktMS41MS44Ni4zNyAyLjExIDEyLjc1IDEuOTMgMTQuNjYtLjM4IDQtMjMuNjIgOC4yOC0yNy40MiA5LjA1LTE0LjUgMy0zMC45NCAyLjkyLTQ1LjY1IDEuMjMtMy4wNy0uMzYtMTEuMTMuNTktMTMuNTEtMS44LTEuMjctMS4yNi0yLjA5LTEzLjgzLTIuNDUtMTYuNzIiIGNsYXNzPSJjbHMtNCIvPjxwYXRoIGQ9Ik00NjEuOTIgMjY0LjE4YzAtLjY2LjMgMS4yMy4zMiAxLjM3LjIxIDEuMDYuNDUgMi4xMS43MSAzLjE1Ljg0IDMuMzggMS42MSA2Ljc2IDIuMjQgMTAuMTggMiAxMC44MyAxLjkzIDEzLjA1IDEzIDE0IDEuMTUuMDkgNi42OS44NiA3LjYxLS4xNyAxLjkxLTIuMTEuODctMTAuODguOTMtMTMuNi4xNS02Ljc4LjExLTE0IDEuNDUtMjAuNjMuMDUtLjI1LjI1LS44NCAwLTEuMDYtMS4xMi0xLjEyLTI5LjY3LS4wOS0yNiA3LjE4IiBjbGFzcz0iY2xzLTMiLz48cGF0aCBkPSJNNDcwLjc2IDI5MC45M2MwLS4yMi0xLjE0IDIuNTMtMS4zOCAzLjA2YTkuNzMgOS43MyAwIDAxLTQuODggNC44OWMtMy4xNSAxLjM5LTIzLjc4LS45NS0xNS43MSA5LjM2IDYuNTMgOC4zMiAyMi45NCA4Ljg0IDI5LjQ1LjYxIDIuNC0zLjA1IDgtMTMuOTIgMi40LTE3LjQxLTIuNTUtMS41OS03LjI0LS41OS0xMC4xNS0uODhNNTM4LjY3IDQ4NS4xYTMzLjg2IDMzLjg2IDAgMDEtMy44OC0yLjUzYy0xLjg0LTEuOC03LjY2LTguODItMi41Mi0xMC40NnMxMS42NiAyLjg3IDE2LjMxIDQuNDJjNi4xNiAyLjA2IDEyLjIyIDEuNjkgMTguNTIgMi41NSAyLjcuMzcgNS44NCAxLjg4IDYuMDggNSAuMzYgNC42MS00LjY1IDYuMjEtOC4yOSA2Ljc3YTM3IDM3IDAgMDEtMjUuMTItNC45Mk0zNjYuODUgNDY0Ljkzcy0yLjE1LTEuMTYtMi40LTEuMjlhOC4yOCA4LjI4IDAgMDAtNS4zNS0xLjNjLTMuMzYuNTQtMi42MyA1LjExLTEuNTQgNy4yNSA0LjUyIDguODYgMjMuNzUgMjIuOTEgMzMuMjYgMjYuMTQgNC44MSAxLjYzIDE4IDEuNDcgMTUtNy4zNy0xLjY4LTQuOTQtMTAuNTctNi4zMy0xNC45MS03LjY4LTguNDItMi42MS0xOC43OC04LjM3LTIzLjgxLTE1LjkyIiBjbGFzcz0iY2xzLTQiLz48cGF0aCBkPSJNMzU4LjgyIDQ2MS44OWMtLjMzLS42NyAzIDIuMDggMy4zNyAyLjM4IDIuNTEgMi4xOSA1IDQuNDIgNy40MyA2LjY1IDguMiA3LjQxIDExLjA1IDguNzMgMjAuNzQgMi44Ni45MS0uNTUgNS4xNS0xLjg1IDUuMzQtMyAuNTctMy4yNi03LjM2LTguNzItOS40Ny0xMC44cy04LjU4LTEwLjk0LTEwLjYyLTExLjU5Yy0xLjMyLS40Mi0zLjEzIDIuMTctNCAyLjktMy4xOSAyLjc5LTEwLjI4IDUuNzUtMTIuMTUgOS40OSIgY2xhc3M9ImNscy0zIi8+PHBhdGggZD0iTTUyNy42MyA0NjUuMjRjLS41NC0uMzMgMS4zIDMuNTUgMS41MiA0LjI5LjMzIDEuMTEgMCA3IC40OSA3LjY0IDEuNjEgMS43OCAyMC4wOSAyLjkyIDIyLjU3IDEuNzUgMS45NS0uOTEgMS43MS0zLjcyIDItNXMyLjIxLTQuOTEuNjMtNi4wNmMtMS4wOC0uOC01Ljc0LS4zNi03LjI1LS40My02LjM5LS4zLTEyLjUyLTEuMjEtMTguNzQtMiIgY2xhc3M9ImNscy01Ii8+PHBhdGggZD0iTTc1OS44NyA5NC40OWMtNi0zLjg4LTkzLjU1LTUzLjIyLTgyLTE3LjM4IDE0LjYyIDQ1LjU1IDE1MSAxMTEuMjkgMTkzLjA5IDEzMiAxMC4xMyA1IDY2IDMzIDc0LjczIDE3LjM1IDEwLjc4LTE5LjMxLTYxLjQ0LTY0Ljc3LTY1LjctNjIuMTEtLjg0LjUyLTMgMi44OC0yLjMxIDMuOXMyLjI4IDEuODkgMy4zNSAyLjY2YzEzLjU0IDkuNTkgMzMuODggMjEuNiA0MC45MSAzNy4zNS43NSAxLjY4IDEuMjEgMy43My0xIDQuMzQtNS41IDEuNDktMTMuMjgtMS44Mi0xOC4zNC0zLjU1cy05Ljg0LTMuNjYtMTQuNjMtNS44M0M4MzkgMTgxIDc4OS4yOSAxNTYuMTkgNzQ1LjUyIDEyNWMtNS40NS0zLjg5LTQwLjE3LTI5LjM0LTMyLjU1LTM4LjQ0IDkuNzMtMTEuNjMgMjkgMTIuMDggMzcuOTEgMTcuNTIiIGNsYXNzPSJjbHMtMiIvPjxwYXRoIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTIpIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIuMjQiIGQ9Ik0zOTUuMjIgNDg0LjljMS40NSAwLTIuODktLjEzLTQuMzQtLjE4LTIuNzktLjA5LTUuNTctLjE0LTguMzYtLjI1cS0xMy40NS0uNTQtMjYuOTItMS4yYy0yNi4yMi0xLjI0LTUyLjQxLTIuNjktNzguNjUtMy41NmwtMi41NC0uMS0yLjM3LS4xYy01LjU3LS4yMy0xMSAuMDYtMTYuNTEuMDYtLjQzIDAtLjYyLjE1LS42OS42MS0uNDcgMi44OSA0IDM1LjEgNC43NiAzNS43OSA0LjEgMy43OCAxNy41MS0uNSAyMi4xNy0xLjEyIDIwLjU2LTIuNzIgNDAuOTItNi4xOCA2MS4xNS0xMC44IDExLjA2LTIuNTIgMjIuMjMtNC43IDMzLjI0LTcuNDMgMS0uMjYgMTguNzYtMi4yNiAxOS4zNi0zLjQ1IiBvcGFjaXR5PSIuMTkiLz48cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjI0IiBkPSJNNTU3LjIxIDQ4NC45YzEuNDUgMC0yLjg5LS4xMy00LjM0LS4xOC0yLjc5LS4wOS01LjU3LS4xNC04LjM2LS4yNXEtMTMuNDYtLjU0LTI2LjkyLTEuMmMtMjYuMjItMS4yNC01Mi40MS0yLjY5LTc4LjY1LTMuNTZsLTIuNTQtLjEtMi4zNy0uMWMtNS41Ny0uMjMtMTEgLjA2LTE2LjUxLjA2LS40MyAwLS42Mi4xNS0uNjkuNjEtLjQ3IDIuODkgNCAzNS4xIDQuNzYgMzUuNzkgNC4xIDMuNzggMTcuNTEtLjUgMjIuMTctMS4xMiAyMC41Ni0yLjcyIDQwLjkyLTYuMTggNjEuMTUtMTAuOCAxMS4wNi0yLjUyIDIyLjIzLTQuNyAzMy4yNC03LjQzIDEtLjI2IDE4Ljc2LTIuMjYgMTkuMzYtMy40NSIgb3BhY2l0eT0iLjE5Ii8+PHBhdGggZD0iTTIxOC4xNSAxMjguMzVTMjkxLjk0IDU0LjY2IDM4NyAzNi41TTI5MC42NyA5OS44OWMxOC4yMS0xMC42NyAzMi0zMS4yMiA5Ni4zNy01MS42OSIgY2xhc3M9ImNscy0xMCIvPjwvZz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/favorite.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/favorite.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgFavorite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
  id: "favorite_svg__a",
  width: "111.9%",
  height: "112.8%",
  x: "-6%",
  y: "-6.4%",
  filterUnits: "objectBoundingBox"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMorphology", {
  "in": "SourceAlpha",
  operator: "dilate",
  radius: 0.5,
  result: "shadowSpreadOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  "in": "shadowSpreadOuter1",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  "in": "shadowOffsetOuter1",
  result: "shadowBlurOuter1",
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "shadowBlurOuter1",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
  id: "favorite_svg__c",
  width: "130.1%",
  height: "130.5%",
  x: "-15.1%",
  y: "-15.3%",
  filterUnits: "objectBoundingBox"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  "in": "SourceGraphic",
  stdDeviation: 1
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
  id: "favorite_svg__d",
  width: "142%",
  height: "142.4%",
  x: "-21%",
  y: "-21.2%",
  filterUnits: "objectBoundingBox"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMorphology", {
  "in": "SourceAlpha",
  operator: "dilate",
  radius: 0.5,
  result: "shadowSpreadOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  "in": "shadowSpreadOuter1",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  "in": "shadowOffsetOuter1",
  result: "shadowBlurOuter1",
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "shadowBlurOuter1",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "favorite_svg__f",
  x1: "50%",
  x2: "50%",
  y1: "-26.405%",
  y2: "100%"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: "0%",
  stopColor: "#949494"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: "100%",
  stopColor: "#E2E2E2"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "favorite_svg__b",
  width: 277,
  height: 258,
  x: 0,
  y: 0,
  rx: 3
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "favorite_svg__e",
  d: "M23 14.926L33.589 6.25 64.996 0l22.722 9.065 14.045 12.842 12.19 21.994L116 65.19 104.956 92H23z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(40 11)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#000",
  filter: "url(#favorite_svg__a)",
  xlinkHref: "#favorite_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#FFF",
  xlinkHref: "#favorite_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12.458 221.248h20.519v20.58h-20.52z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#3575D3",
  fillRule: "nonzero",
  d: "M23.083 222.718l-3.053 6.125-6.107.766 4.204 4.716-1.15 6.769 6.106-3.063 6.107 3.063-1.14-6.769 4.193-4.716-6.106-.766-3.054-6.125zm0 2.287l2.382 4.788 4.733.592-3.237 3.634.886 5.258-4.764-2.39-4.763 2.39.886-5.258-3.237-3.634 4.733-.592 2.381-4.788z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 70.142,
  height: 27.835,
  x: 112.511,
  y: 217.524,
  stroke: "#D7DBE0",
  rx: 3
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 77.197,
  height: 28.835,
  x: 187.694,
  y: 217.024,
  fill: "#F2F4F7",
  rx: 3
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F4F7",
  d: "M12.109 171.494h181.639v15.176H12.109zm0 19.73h110.497V206.4H12.109zm217.968-18.212h34.814v27.318h-34.814z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F4F7",
  d: "M43 10h271a3 3 0 013 3v158H40V13a3 3 0 013-3z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  filter: "url(#favorite_svg__c)",
  transform: "translate(1 189)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#000",
  filter: "url(#favorite_svg__d)",
  xlinkHref: "#favorite_svg__e"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#FFF",
  xlinkHref: "#favorite_svg__e"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "url(#favorite_svg__f)",
  stroke: "silver",
  d: "M59 0c32.585 0 59 26.415 59 59s-26.415 59-59 59S0 91.585 0 59 26.415 0 59 0zm0 3.522C28.36 3.522 3.522 28.361 3.522 59c0 30.64 24.839 55.478 55.478 55.478 30.64 0 55.478-24.839 55.478-55.478 0-30.64-24.839-55.478-55.478-55.478z",
  transform: "translate(1 189)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M53 228.137h37V265H53z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFE900",
  fillRule: "nonzero",
  d: "M69.518 218l5.506 10.971 11.012 1.371-7.562 8.448 2.056 12.123-11.012-5.485-11.012 5.485 2.074-12.123-7.58-8.448 11.012-1.371z"
}));

function SvgFavorite(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 328,
    height: 308
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzI4IiBoZWlnaHQ9IjMwOCI+PGRlZnMvPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIxMTEuOSUiIGhlaWdodD0iMTEyLjglIiB4PSItNiUiIHk9Ii02LjQlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZU1vcnBob2xvZ3kgaW49IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iZGlsYXRlIiByYWRpdXM9Ii41IiByZXN1bHQ9InNoYWRvd1NwcmVhZE91dGVyMSIvPjxmZU9mZnNldCBpbj0ic2hhZG93U3ByZWFkT3V0ZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iYyIgd2lkdGg9IjEzMC4xJSIgaGVpZ2h0PSIxMzAuNSUiIHg9Ii0xNS4xJSIgeT0iLTE1LjMlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlR3JhcGhpYyIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZCIgd2lkdGg9IjE0MiUiIGhlaWdodD0iMTQyLjQlIiB4PSItMjElIiB5PSItMjEuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlTW9ycGhvbG9neSBpbj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iLjUiIHJlc3VsdD0ic2hhZG93U3ByZWFkT3V0ZXIxIi8+PGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSI1Ii8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9ImYiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSItMjYuNDA1JSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5NDk0OTQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMkUyRTIiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IGlkPSJiIiB3aWR0aD0iMjc3IiBoZWlnaHQ9IjI1OCIgeD0iMCIgeT0iMCIgcng9IjMiLz48cGF0aCBpZD0iZSIgZD0iTTIzIDE0LjkyNkwzMy41ODkgNi4yNSA2NC45OTYgMGwyMi43MjIgOS4wNjUgMTQuMDQ1IDEyLjg0MiAxMi4xOSAyMS45OTRMMTE2IDY1LjE5IDEwNC45NTYgOTJIMjN6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAgMTEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZD0iTTEyLjQ1OCAyMjEuMjQ4aDIwLjUxOXYyMC41OGgtMjAuNTJ6Ii8+PHBhdGggZmlsbD0iIzM1NzVEMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjMuMDgzIDIyMi43MThsLTMuMDUzIDYuMTI1LTYuMTA3Ljc2NiA0LjIwNCA0LjcxNi0xLjE1IDYuNzY5IDYuMTA2LTMuMDYzIDYuMTA3IDMuMDYzLTEuMTQtNi43NjkgNC4xOTMtNC43MTYtNi4xMDYtLjc2Ni0zLjA1NC02LjEyNXptMCAyLjI4N2wyLjM4MiA0Ljc4OCA0LjczMy41OTItMy4yMzcgMy42MzQuODg2IDUuMjU4LTQuNzY0LTIuMzktNC43NjMgMi4zOS44ODYtNS4yNTgtMy4yMzctMy42MzQgNC43MzMtLjU5MiAyLjM4MS00Ljc4OHoiLz48cmVjdCB3aWR0aD0iNzAuMTQyIiBoZWlnaHQ9IjI3LjgzNSIgeD0iMTEyLjUxMSIgeT0iMjE3LjUyNCIgc3Ryb2tlPSIjRDdEQkUwIiByeD0iMyIvPjxyZWN0IHdpZHRoPSI3Ny4xOTciIGhlaWdodD0iMjguODM1IiB4PSIxODcuNjk0IiB5PSIyMTcuMDI0IiBmaWxsPSIjRjJGNEY3IiByeD0iMyIvPjxwYXRoIGZpbGw9IiNGMkY0RjciIGQ9Ik0xMi4xMDkgMTcxLjQ5NGgxODEuNjM5djE1LjE3NkgxMi4xMDl6TTEyLjEwOSAxOTEuMjI0aDExMC40OTdWMjA2LjRIMTIuMTA5ek0yMzAuMDc3IDE3My4wMTJoMzQuODE0djI3LjMxOGgtMzQuODE0eiIvPjwvZz48cGF0aCBmaWxsPSIjRjJGNEY3IiBkPSJNNDMgMTBoMjcxYTMgMyAwIDAxMyAzdjE1OEg0MFYxM2EzIDMgMCAwMTMtM3oiLz48Zz48ZyBmaWx0ZXI9InVybCgjYykiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMTg5KSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjZCkiIHhsaW5rOmhyZWY9IiNlIi8+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjZSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoI2YpIiBzdHJva2U9InNpbHZlciIgZD0iTTU5IDBjMzIuNTg1IDAgNTkgMjYuNDE1IDU5IDU5cy0yNi40MTUgNTktNTkgNTlTMCA5MS41ODUgMCA1OSAyNi40MTUgMCA1OSAwem0wIDMuNTIyQzI4LjM2IDMuNTIyIDMuNTIyIDI4LjM2MSAzLjUyMiA1OWMwIDMwLjY0IDI0LjgzOSA1NS40NzggNTUuNDc4IDU1LjQ3OCAzMC42NCAwIDU1LjQ3OC0yNC44MzkgNTUuNDc4LTU1LjQ3OCAwLTMwLjY0LTI0LjgzOS01NS40NzgtNTUuNDc4LTU1LjQ3OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMTg5KSIvPjxwYXRoIGQ9Ik01MyAyMjguMTM3aDM3VjI2NUg1M3oiLz48cGF0aCBmaWxsPSIjRkZFOTAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik02OS41MTggMjE4bDUuNTA2IDEwLjk3MSAxMS4wMTIgMS4zNzEtNy41NjIgOC40NDggMi4wNTYgMTIuMTIzLTExLjAxMi01LjQ4NS0xMS4wMTIgNS40ODUgMi4wNzQtMTIuMTIzLTcuNTgtOC40NDggMTEuMDEyLTEuMzcxeiIvPjwvZz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/headset.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/headset.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgHeadset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "headset_svg__a",
  d: "M0 0h49v50H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "headset_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#headset_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M0 23.418c.031-.288.055-.577.095-.864.309-2.215 1.177-4.127 2.902-5.571.203-.17.432-.309.64-.474a.522.522 0 00.176-.24 23.31 23.31 0 011.75-4.379c1.39-2.664 3.212-4.97 5.49-6.899a21.063 21.063 0 017.23-4.026 20.176 20.176 0 014.266-.87A20.44 20.44 0 0132.873 1.79a21.308 21.308 0 015.365 3.45 22.696 22.696 0 014.827 5.964 23.653 23.653 0 012.128 5.088.37.37 0 00.136.194c1.635 1.07 2.668 2.596 3.235 4.468.406 1.34.516 2.715.382 4.11-.168 1.75-.719 3.348-1.784 4.743a7.16 7.16 0 01-1.579 1.517c-.076.054-.12.108-.131.212a22.058 22.058 0 01-1.048 4.896c-.8 2.347-1.971 4.478-3.588 6.341-1.103 1.27-2.34 2.382-3.807 3.203a7.477 7.477 0 01-1.01.474c-.178.067-.388.06-.583.06-1.156.006-2.312.003-3.468.004-.074 0-.142-.018-.183.091-.45 1.196-1.275 2.05-2.368 2.642-1.198.65-2.476.865-3.818.7-1.425-.177-2.683-.73-3.66-1.821-1.185-1.32-1.523-2.845-.862-4.534.404-1.036 1.15-1.787 2.082-2.342 1.202-.715 2.505-.97 3.883-.84 1.203.112 2.294.528 3.245 1.297a4.69 4.69 0 011.488 2.033c.035.094.079.129.18.128 1.098-.003 2.196 0 3.295-.005a.529.529 0 00.22-.059c.89-.433 1.651-1.05 2.362-1.734 2.335-2.245 3.817-4.996 4.601-8.156.11-.44.194-.885.296-1.354-.262.031-.5.065-.74.087-.463.042-.923.055-1.35-.179-.642-.35-.99-.894-1.037-1.636-.006-.084-.003-.17-.003-.254V17.584c0-1.174.335-1.683 1.431-2.139-.3-.633-.582-1.275-.905-1.894a18.574 18.574 0 00-2.486-3.65c-2.605-2.98-5.79-4.961-9.631-5.8a16.27 16.27 0 00-4.695-.324c-3.295.243-6.27 1.38-8.938 3.357-2.333 1.729-4.158 3.913-5.507 6.51-.304.587-.57 1.194-.841 1.765.273.165.534.287.754.463.44.353.66.833.66 1.408.001 4.49.002 8.98 0 13.47 0 1.065-.826 1.923-1.875 1.916-2.761-.02-4.876-1.224-6.299-3.652-.644-1.099-1-2.303-1.154-3.57-.034-.284-.062-.567-.093-.85v-1.176z",
  mask: "url(#headset_svg__b)"
}));

function SvgHeadset(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 49,
    height: 50
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDkiIGhlaWdodD0iNTAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGg0OXY1MEgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0wIDIzLjQxOGMuMDMxLS4yODguMDU1LS41NzcuMDk1LS44NjQuMzA5LTIuMjE1IDEuMTc3LTQuMTI3IDIuOTAyLTUuNTcxLjIwMy0uMTcuNDMyLS4zMDkuNjQtLjQ3NGEuNTIyLjUyMiAwIDAwLjE3Ni0uMjQgMjMuMzEgMjMuMzEgMCAwMTEuNzUtNC4zNzljMS4zOS0yLjY2NCAzLjIxMi00Ljk3IDUuNDktNi44OTlhMjEuMDYzIDIxLjA2MyAwIDAxNy4yMy00LjAyNiAyMC4xNzYgMjAuMTc2IDAgMDE0LjI2Ni0uODdBMjAuNDQgMjAuNDQgMCAwMTMyLjg3MyAxLjc5YTIxLjMwOCAyMS4zMDggMCAwMTUuMzY1IDMuNDUgMjIuNjk2IDIyLjY5NiAwIDAxNC44MjcgNS45NjQgMjMuNjUzIDIzLjY1MyAwIDAxMi4xMjggNS4wODguMzcuMzcgMCAwMC4xMzYuMTk0YzEuNjM1IDEuMDcgMi42NjggMi41OTYgMy4yMzUgNC40NjguNDA2IDEuMzQuNTE2IDIuNzE1LjM4MiA0LjExLS4xNjggMS43NS0uNzE5IDMuMzQ4LTEuNzg0IDQuNzQzYTcuMTYgNy4xNiAwIDAxLTEuNTc5IDEuNTE3Yy0uMDc2LjA1NC0uMTIuMTA4LS4xMzEuMjEyYTIyLjA1OCAyMi4wNTggMCAwMS0xLjA0OCA0Ljg5NmMtLjggMi4zNDctMS45NzEgNC40NzgtMy41ODggNi4zNDEtMS4xMDMgMS4yNy0yLjM0IDIuMzgyLTMuODA3IDMuMjAzYTcuNDc3IDcuNDc3IDAgMDEtMS4wMS40NzRjLS4xNzguMDY3LS4zODguMDYtLjU4My4wNi0xLjE1Ni4wMDYtMi4zMTIuMDAzLTMuNDY4LjAwNC0uMDc0IDAtLjE0Mi0uMDE4LS4xODMuMDkxLS40NSAxLjE5Ni0xLjI3NSAyLjA1LTIuMzY4IDIuNjQyLTEuMTk4LjY1LTIuNDc2Ljg2NS0zLjgxOC43LTEuNDI1LS4xNzctMi42ODMtLjczLTMuNjYtMS44MjEtMS4xODUtMS4zMi0xLjUyMy0yLjg0NS0uODYyLTQuNTM0LjQwNC0xLjAzNiAxLjE1LTEuNzg3IDIuMDgyLTIuMzQyIDEuMjAyLS43MTUgMi41MDUtLjk3IDMuODgzLS44NCAxLjIwMy4xMTIgMi4yOTQuNTI4IDMuMjQ1IDEuMjk3YTQuNjkgNC42OSAwIDAxMS40ODggMi4wMzNjLjAzNS4wOTQuMDc5LjEyOS4xOC4xMjggMS4wOTgtLjAwMyAyLjE5NiAwIDMuMjk1LS4wMDVhLjUyOS41MjkgMCAwMC4yMi0uMDU5Yy44OS0uNDMzIDEuNjUxLTEuMDUgMi4zNjItMS43MzQgMi4zMzUtMi4yNDUgMy44MTctNC45OTYgNC42MDEtOC4xNTYuMTEtLjQ0LjE5NC0uODg1LjI5Ni0xLjM1NC0uMjYyLjAzMS0uNS4wNjUtLjc0LjA4Ny0uNDYzLjA0Mi0uOTIzLjA1NS0xLjM1LS4xNzktLjY0Mi0uMzUtLjk5LS44OTQtMS4wMzctMS42MzYtLjAwNi0uMDg0LS4wMDMtLjE3LS4wMDMtLjI1NFYxNy41ODRjMC0xLjE3NC4zMzUtMS42ODMgMS40MzEtMi4xMzktLjMtLjYzMy0uNTgyLTEuMjc1LS45MDUtMS44OTRhMTguNTc0IDE4LjU3NCAwIDAwLTIuNDg2LTMuNjVjLTIuNjA1LTIuOTgtNS43OS00Ljk2MS05LjYzMS01LjhhMTYuMjcgMTYuMjcgMCAwMC00LjY5NS0uMzI0Yy0zLjI5NS4yNDMtNi4yNyAxLjM4LTguOTM4IDMuMzU3LTIuMzMzIDEuNzI5LTQuMTU4IDMuOTEzLTUuNTA3IDYuNTEtLjMwNC41ODctLjU3IDEuMTk0LS44NDEgMS43NjUuMjczLjE2NS41MzQuMjg3Ljc1NC40NjMuNDQuMzUzLjY2LjgzMy42NiAxLjQwOC4wMDEgNC40OS4wMDIgOC45OCAwIDEzLjQ3IDAgMS4wNjUtLjgyNiAxLjkyMy0xLjg3NSAxLjkxNi0yLjc2MS0uMDItNC44NzYtMS4yMjQtNi4yOTktMy42NTItLjY0NC0xLjA5OS0xLTIuMzAzLTEuMTU0LTMuNTctLjAzNC0uMjg0LS4wNjItLjU2Ny0uMDkzLS44NXYtMS4xNzZ6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/help.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/help.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgHelp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M12 2.312c-5.35 0-9.688 4.34-9.688 9.688A9.687 9.687 0 0012 21.688 9.687 9.687 0 0021.688 12c0-5.348-4.338-9.688-9.688-9.688zm0 17.5A7.808 7.808 0 014.187 12 7.81 7.81 0 0112 4.187 7.81 7.81 0 0119.813 12 7.808 7.808 0 0112 19.813zm4.19-9.968c0 2.619-2.83 2.66-2.83 3.627v.248c0 .259-.21.469-.468.469h-1.784a.469.469 0 01-.468-.47v-.337c0-1.397 1.058-1.955 1.858-2.403.686-.385 1.107-.647 1.107-1.156 0-.674-.86-1.12-1.554-1.12-.906 0-1.324.428-1.912 1.17a.47.47 0 01-.651.083L8.4 9.13a.47.47 0 01-.103-.64c.923-1.355 2.098-2.116 3.928-2.116 1.917 0 3.963 1.496 3.963 3.469zm-2.55 6.531a1.641 1.641 0 01-3.28 0 1.641 1.641 0 013.28 0z"
});

function SvgHelp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIuMzEyYy01LjM1IDAtOS42ODggNC4zNC05LjY4OCA5LjY4OEE5LjY4NyA5LjY4NyAwIDAwMTIgMjEuNjg4IDkuNjg3IDkuNjg3IDAgMDAyMS42ODggMTJjMC01LjM0OC00LjMzOC05LjY4OC05LjY4OC05LjY4OHptMCAxNy41QTcuODA4IDcuODA4IDAgMDE0LjE4NyAxMiA3LjgxIDcuODEgMCAwMTEyIDQuMTg3IDcuODEgNy44MSAwIDAxMTkuODEzIDEyIDcuODA4IDcuODA4IDAgMDExMiAxOS44MTN6bTQuMTktOS45NjhjMCAyLjYxOS0yLjgzIDIuNjYtMi44MyAzLjYyN3YuMjQ4YzAgLjI1OS0uMjEuNDY5LS40NjguNDY5aC0xLjc4NGEuNDY5LjQ2OSAwIDAxLS40NjgtLjQ3di0uMzM3YzAtMS4zOTcgMS4wNTgtMS45NTUgMS44NTgtMi40MDMuNjg2LS4zODUgMS4xMDctLjY0NyAxLjEwNy0xLjE1NiAwLS42NzQtLjg2LTEuMTItMS41NTQtMS4xMi0uOTA2IDAtMS4zMjQuNDI4LTEuOTEyIDEuMTdhLjQ3LjQ3IDAgMDEtLjY1MS4wODNMOC40IDkuMTNhLjQ3LjQ3IDAgMDEtLjEwMy0uNjRjLjkyMy0xLjM1NSAyLjA5OC0yLjExNiAzLjkyOC0yLjExNiAxLjkxNyAwIDMuOTYzIDEuNDk2IDMuOTYzIDMuNDY5em0tMi41NSA2LjUzMWMwIC45MDUtLjczNSAxLjY0LTEuNjQgMS42NC0uOTA1IDAtMS42NC0uNzM1LTEuNjQtMS42NCAwLS45MDUuNzM1LTEuNjQgMS42NC0xLjY0LjkwNSAwIDEuNjQuNzM1IDEuNjQgMS42NHoiLz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/jetpack.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/jetpack.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgJetpack; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  fillRule: "evenodd",
  d: "M124.5 249C55.74 249 0 193.26 0 124.5 0 55.74 55.74 0 124.5 0 193.26 0 249 55.74 249 124.5c0 68.76-55.74 124.5-124.5 124.5zm-68-104h61V27l-61 118zm135.916-40.686h-61v118l61-118z"
});

function SvgJetpack(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 249 249"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0OSAyNDkiPjxkZWZzLz48cGF0aCBmaWxsPSIjNTQ1NDU0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjQuNSAyNDlDNTUuNzQgMjQ5IDAgMTkzLjI2IDAgMTI0LjUgMCA1NS43NCA1NS43NCAwIDEyNC41IDAgMTkzLjI2IDAgMjQ5IDU1Ljc0IDI0OSAxMjQuNWMwIDY4Ljc2LTU1Ljc0IDEyNC41LTEyNC41IDEyNC41em0tNjgtMTA0aDYxVjI3bC02MSAxMTh6bTEzNS45MTYtNDAuNjg2aC02MXYxMThsNjEtMTE4eiIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/key.svg":
/*!************************************!*\
  !*** ./src/app/assets/svg/key.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "key_svg__a",
  d: "M0 0h178v178H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "key_svg__c",
  d: "M0 178h178V0H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "key_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#key_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M178 89c0 49.152-39.847 89-89 89-49.154 0-89-39.848-89-89C0 39.845 39.846 0 89 0c49.153 0 89 39.845 89 89",
  mask: "url(#key_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M114.85 174c31.486-9.723 55.472-36.714 61.15-70.027l-64.629-65.191-.066-.067-1.049-1.058a1.005 1.005 0 01-.068-.07c-3.115-2.85-7.23-4.587-11.766-4.587H79.5C69.845 33 62 40.923 62 50.653c0 4.862 1.961 9.28 5.133 12.475l18.521 18.69v62.729L114.85 174z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "key_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#key_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M86 144h6V68h-6z",
  mask: "url(#key_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M86.004 144h1.992V68h-1.992zM93 140h7v-6h-7zm0-10h7v-6h-7z",
  mask: "url(#key_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M100 144h6v-12h-6z",
  mask: "url(#key_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M93 120h7v-6h-7z",
  mask: "url(#key_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M100 120h6v-12h-6zm-1.523-79.4H79.521c-6.016 0-10.913 4.89-10.913 10.9 0 6.01 4.897 10.9 10.913 10.9h18.956c6.018 0 10.915-4.89 10.915-10.9 0-6.01-4.897-10.9-10.915-10.9M79.521 34h18.956C108.137 34 116 41.849 116 51.5S108.138 69 98.477 69H79.521C69.86 69 62 61.151 62 51.5S69.86 34 79.52 34",
  mask: "url(#key_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M97.939 40.183c5.993 0 10.87 4.852 10.87 10.817s-4.877 10.817-10.87 10.817H79.061c-5.99 0-10.867-4.852-10.867-10.817S73.07 40.183 79.06 40.183h18.878zm0-2.183H79.061C71.859 38 66 43.831 66 51c0 7.166 5.859 13 13.061 13h18.878C105.141 64 111 58.166 111 51c0-7.169-5.859-13-13.061-13z",
  mask: "url(#key_svg__d)"
}));

function SvgKey(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 178,
    height: 178
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTc4IiBoZWlnaHQ9IjE3OCI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDE3OHYxNzhIMHoiLz48cGF0aCBpZD0iYyIgZD0iTTAgMTc4aDE3OFYwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0MyRUJGNSIgZD0iTTE3OCA4OWMwIDQ5LjE1Mi0zOS44NDcgODktODkgODktNDkuMTU0IDAtODktMzkuODQ4LTg5LTg5QzAgMzkuODQ1IDM5Ljg0NiAwIDg5IDBjNDkuMTUzIDAgODkgMzkuODQ1IDg5IDg5IiBtYXNrPSJ1cmwoI2IpIi8+PHBhdGggZmlsbD0iIzlFREZFRiIgZD0iTTExNC44NSAxNzRjMzEuNDg2LTkuNzIzIDU1LjQ3Mi0zNi43MTQgNjEuMTUtNzAuMDI3bC02NC42MjktNjUuMTkxLS4wNjYtLjA2Ny0xLjA0OS0xLjA1OGExLjAwNSAxLjAwNSAwIDAxLS4wNjgtLjA3QzEwNy4wNzMgMzQuNzM3IDEwMi45NTggMzMgOTguNDIyIDMzSDc5LjVDNjkuODQ1IDMzIDYyIDQwLjkyMyA2MiA1MC42NTNjMCA0Ljg2MiAxLjk2MSA5LjI4IDUuMTMzIDEyLjQ3NWwxOC41MjEgMTguNjl2NjIuNzI5TDExNC44NSAxNzR6Ii8+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTg2IDE0NGg2VjY4aC02eiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik04Ni4wMDQgMTQ0aDEuOTkyVjY4aC0xLjk5MnpNOTMgMTQwaDd2LTZoLTd6TTkzIDEzMGg3di02aC03eiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDAgMTQ0aDZ2LTEyaC02eiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik05MyAxMjBoN3YtNmgtN3oiIG1hc2s9InVybCgjZCkiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDEyMGg2di0xMmgtNnpNOTguNDc3IDQwLjZINzkuNTIxYy02LjAxNiAwLTEwLjkxMyA0Ljg5LTEwLjkxMyAxMC45IDAgNi4wMSA0Ljg5NyAxMC45IDEwLjkxMyAxMC45aDE4Ljk1NmM2LjAxOCAwIDEwLjkxNS00Ljg5IDEwLjkxNS0xMC45IDAtNi4wMS00Ljg5Ny0xMC45LTEwLjkxNS0xMC45TTc5LjUyMSAzNGgxOC45NTZDMTA4LjEzNyAzNCAxMTYgNDEuODQ5IDExNiA1MS41UzEwOC4xMzggNjkgOTguNDc3IDY5SDc5LjUyMUM2OS44NiA2OSA2MiA2MS4xNTEgNjIgNTEuNVM2OS44NiAzNCA3OS41MiAzNCIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik05Ny45MzkgNDAuMTgzYzUuOTkzIDAgMTAuODcgNC44NTIgMTAuODcgMTAuODE3cy00Ljg3NyAxMC44MTctMTAuODcgMTAuODE3SDc5LjA2MWMtNS45OSAwLTEwLjg2Ny00Ljg1Mi0xMC44NjctMTAuODE3UzczLjA3IDQwLjE4MyA3OS4wNiA0MC4xODNoMTguODc4em0wLTIuMTgzSDc5LjA2MUM3MS44NTkgMzggNjYgNDMuODMxIDY2IDUxYzAgNy4xNjYgNS44NTkgMTMgMTMuMDYxIDEzaDE4Ljg3OEMxMDUuMTQxIDY0IDExMSA1OC4xNjYgMTExIDUxYzAtNy4xNjktNS44NTktMTMtMTMuMDYxLTEzeiIgbWFzaz0idXJsKCNkKSIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/magnifying-glass.svg":
/*!*************************************************!*\
  !*** ./src/app/assets/svg/magnifying-glass.svg ***!
  \*************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMagnifyingGlass; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "magnifying-glass_svg__a",
  d: "M0 0h177v178H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "magnifying-glass_svg__c",
  d: "M0 178h177V0H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "magnifying-glass_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#magnifying-glass_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M177 89c0 49.152-39.622 89-88.5 89C39.62 178 0 138.152 0 89 0 39.845 39.62 0 88.5 0 137.378 0 177 39.845 177 89",
  mask: "url(#magnifying-glass_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M176 103.644l-63.34-63.878C106.328 34.298 98.117 31 89.14 31c-18.122 0-33.117 13.436-35.734 30.973-.046.312-.08.63-.117.941-.037.283-.08.561-.106.846-.042.419-.068.841-.095 1.262-.013.191-.033.378-.042.57-.03.616-.046 1.235-.046 1.856 0 9.766 3.791 18.61 9.98 25.158.396.414.807.825 1.215 1.228l18.542 18.7c-.285.418-.43.903-.43 1.39v33.105c0 1.654.58 3.183 1.56 4.378.035.033.057.067.092.102l.728.735c.033.035.069.058.102.093L107.256 175c35.026-7.371 62.41-35.68 68.744-71.356"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "magnifying-glass_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#magnifying-glass_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#343B43",
  d: "M86 112h6v-8h-6z",
  mask: "url(#magnifying-glass_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#495057",
  d: "M87.993 98.803c-15.898 0-28.797-12.89-28.797-28.806 0-15.91 12.899-28.8 28.797-28.8 15.91 0 28.813 12.89 28.813 28.8 0 15.915-12.903 28.806-28.813 28.806M87.998 34C68.112 34 52 50.118 52 69.997 52 89.884 68.112 106 87.998 106 107.879 106 124 89.884 124 69.997 124 50.117 107.88 34 87.998 34",
  mask: "url(#magnifying-glass_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M96 116v32.962c0 3.883-2.906 7.038-6.501 7.038-3.59 0-6.499-3.155-6.499-7.038V116h13z",
  mask: "url(#magnifying-glass_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M96 116H83v-1.027c0-.755.227-1.521.678-2.102.454-.58 1.046-.871 1.638-.871h8.368c.592 0 1.184.29 1.638.871.451.58.678 1.347.678 2.102V116zm-5.741-67h-2.524L87 54h4zm-9.91 3L78 53.312 79.289 57 83 54.922zm-8.038 6L71 60.339 73.925 63 76 59.288zM68 66.924v3.155L72 71v-5zm3 9.725L72.311 79 76 77.714 73.925 74zm7 8.037L80.348 86 83 83.076 79.292 81zM87.737 89h2.522L91 84h-4zm8.918-3L99 84.686 97.717 81 94 83.076zm8.035-7l1.31-2.351L103.076 74 101 77.714zm4.31-8.921v-3.155L105 66v5zm-3-9.74L104.69 58 101 59.286 103.076 63zm-7-7.027L96.655 52 94 54.924 97.717 57z",
  mask: "url(#magnifying-glass_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M87.498 74.881a6.38 6.38 0 01-6.377-6.38 6.378 6.378 0 016.377-6.382A6.384 6.384 0 0193.88 68.5c0 3.52-2.86 6.38-6.383 6.38m0-21.881C78.938 53 72 59.939 72 68.501 72 77.068 78.938 84 87.498 84 96.067 84 103 77.068 103 68.501 103 59.94 96.067 53 87.498 53",
  mask: "url(#magnifying-glass_svg__d)"
}));

function SvgMagnifyingGlass(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 177,
    height: 178
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTc3IiBoZWlnaHQ9IjE3OCI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDE3N3YxNzhIMHoiLz48cGF0aCBpZD0iYyIgZD0iTTAgMTc4aDE3N1YwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0MyRUJGNSIgZD0iTTE3NyA4OWMwIDQ5LjE1Mi0zOS42MjIgODktODguNSA4OUMzOS42MiAxNzggMCAxMzguMTUyIDAgODkgMCAzOS44NDUgMzkuNjIgMCA4OC41IDAgMTM3LjM3OCAwIDE3NyAzOS44NDUgMTc3IDg5IiBtYXNrPSJ1cmwoI2IpIi8+PHBhdGggZmlsbD0iIzlFREZFRiIgZD0iTTE3NiAxMDMuNjQ0bC02My4zNC02My44NzhDMTA2LjMyOCAzNC4yOTggOTguMTE3IDMxIDg5LjE0IDMxYy0xOC4xMjIgMC0zMy4xMTcgMTMuNDM2LTM1LjczNCAzMC45NzMtLjA0Ni4zMTItLjA4LjYzLS4xMTcuOTQxLS4wMzcuMjgzLS4wOC41NjEtLjEwNi44NDYtLjA0Mi40MTktLjA2OC44NDEtLjA5NSAxLjI2Mi0uMDEzLjE5MS0uMDMzLjM3OC0uMDQyLjU3LS4wMy42MTYtLjA0NiAxLjIzNS0uMDQ2IDEuODU2IDAgOS43NjYgMy43OTEgMTguNjEgOS45OCAyNS4xNTguMzk2LjQxNC44MDcuODI1IDEuMjE1IDEuMjI4bDE4LjU0MiAxOC43Yy0uMjg1LjQxOC0uNDMuOTAzLS40MyAxLjM5djMzLjEwNWMwIDEuNjU0LjU4IDMuMTgzIDEuNTYgNC4zNzguMDM1LjAzMy4wNTcuMDY3LjA5Mi4xMDJsLjcyOC43MzVjLjAzMy4wMzUuMDY5LjA1OC4xMDIuMDkzTDEwNy4yNTYgMTc1YzM1LjAyNi03LjM3MSA2Mi40MS0zNS42OCA2OC43NDQtNzEuMzU2Ii8+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iIzM0M0I0MyIgZD0iTTg2IDExMmg2di04aC02eiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiM0OTUwNTciIGQ9Ik04Ny45OTMgOTguODAzYy0xNS44OTggMC0yOC43OTctMTIuODktMjguNzk3LTI4LjgwNiAwLTE1LjkxIDEyLjg5OS0yOC44IDI4Ljc5Ny0yOC44IDE1LjkxIDAgMjguODEzIDEyLjg5IDI4LjgxMyAyOC44IDAgMTUuOTE1LTEyLjkwMyAyOC44MDYtMjguODEzIDI4LjgwNk04Ny45OTggMzRDNjguMTEyIDM0IDUyIDUwLjExOCA1MiA2OS45OTcgNTIgODkuODg0IDY4LjExMiAxMDYgODcuOTk4IDEwNiAxMDcuODc5IDEwNiAxMjQgODkuODg0IDEyNCA2OS45OTcgMTI0IDUwLjExNyAxMDcuODggMzQgODcuOTk4IDM0IiBtYXNrPSJ1cmwoI2QpIi8+PHBhdGggZmlsbD0iIzQ2ODdDNyIgZD0iTTk2IDExNnYzMi45NjJjMCAzLjg4My0yLjkwNiA3LjAzOC02LjUwMSA3LjAzOC0zLjU5IDAtNi40OTktMy4xNTUtNi40OTktNy4wMzhWMTE2aDEzeiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik05NiAxMTZIODN2LTEuMDI3YzAtLjc1NS4yMjctMS41MjEuNjc4LTIuMTAyLjQ1NC0uNTggMS4wNDYtLjg3MSAxLjYzOC0uODcxaDguMzY4Yy41OTIgMCAxLjE4NC4yOSAxLjYzOC44NzEuNDUxLjU4LjY3OCAxLjM0Ny42NzggMi4xMDJWMTE2ek05MC4yNTkgNDloLTIuNTI0TDg3IDU0aDR6TTgwLjM0OSA1Mkw3OCA1My4zMTIgNzkuMjg5IDU3IDgzIDU0LjkyMnpNNzIuMzExIDU4TDcxIDYwLjMzOSA3My45MjUgNjMgNzYgNTkuMjg4ek02OCA2Ni45MjR2My4xNTVMNzIgNzF2LTV6TTcxIDc2LjY0OUw3Mi4zMTEgNzkgNzYgNzcuNzE0IDczLjkyNSA3NHpNNzggODQuNjg2TDgwLjM0OCA4NiA4MyA4My4wNzYgNzkuMjkyIDgxek04Ny43MzcgODloMi41MjJMOTEgODRoLTR6TTk2LjY1NSA4Nkw5OSA4NC42ODYgOTcuNzE3IDgxIDk0IDgzLjA3NnpNMTA0LjY5IDc5bDEuMzEtMi4zNTFMMTAzLjA3NiA3NCAxMDEgNzcuNzE0ek0xMDkgNzAuMDc5di0zLjE1NUwxMDUgNjZ2NXpNMTA2IDYwLjMzOUwxMDQuNjkgNTggMTAxIDU5LjI4NiAxMDMuMDc2IDYzek05OSA1My4zMTJMOTYuNjU1IDUyIDk0IDU0LjkyNCA5Ny43MTcgNTd6IiBtYXNrPSJ1cmwoI2QpIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTg3LjQ5OCA3NC44ODFhNi4zOCA2LjM4IDAgMDEtNi4zNzctNi4zOCA2LjM3OCA2LjM3OCAwIDAxNi4zNzctNi4zODJBNi4zODQgNi4zODQgMCAwMTkzLjg4IDY4LjVjMCAzLjUyLTIuODYgNi4zOC02LjM4MyA2LjM4bTAtMjEuODgxQzc4LjkzOCA1MyA3MiA1OS45MzkgNzIgNjguNTAxIDcyIDc3LjA2OCA3OC45MzggODQgODcuNDk4IDg0IDk2LjA2NyA4NCAxMDMgNzcuMDY4IDEwMyA2OC41MDEgMTAzIDU5Ljk0IDk2LjA2NyA1MyA4Ny40OTggNTMiIG1hc2s9InVybCgjZCkiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/menu.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/menu.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  fillRule: "evenodd",
  d: "M20.281 6.844H3.72a.469.469 0 01-.469-.469v-1.25c0-.259.21-.469.469-.469h16.56c.26 0 .469.21.469.469v1.25c0 .259-.21.469-.469.469zm0 6.25H3.72a.469.469 0 01-.469-.469v-1.25c0-.259.21-.469.469-.469h16.56c.26 0 .469.21.469.469v1.25c0 .259-.21.469-.469.469zm0 6.25H3.72a.469.469 0 01-.469-.469v-1.25c0-.259.21-.469.469-.469h16.56c.26 0 .469.21.469.469v1.25c0 .259-.21.469-.469.469z"
});

function SvgMenu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGw9IiM1NDU0NTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjI4MSA2Ljg0NEgzLjcyYS40NjkuNDY5IDAgMDEtLjQ2OS0uNDY5di0xLjI1YzAtLjI1OS4yMS0uNDY5LjQ2OS0uNDY5SDIwLjI4Yy4yNiAwIC40NjkuMjEuNDY5LjQ2OXYxLjI1YzAgLjI1OS0uMjEuNDY5LS40NjkuNDY5em0wIDYuMjVIMy43MmEuNDY5LjQ2OSAwIDAxLS40NjktLjQ2OXYtMS4yNWMwLS4yNTkuMjEtLjQ2OS40NjktLjQ2OUgyMC4yOGMuMjYgMCAuNDY5LjIxLjQ2OS40Njl2MS4yNWMwIC4yNTktLjIxLjQ2OS0uNDY5LjQ2OXptMCA2LjI1SDMuNzJhLjQ2OS40NjkgMCAwMS0uNDY5LS40Njl2LTEuMjVjMC0uMjU5LjIxLS40NjkuNDY5LS40NjlIMjAuMjhjLjI2IDAgLjQ2OS4yMS40NjkuNDY5djEuMjVjMCAuMjU5LS4yMS40NjktLjQ2OS40Njl6Ii8+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/multimedia.svg":
/*!*******************************************!*\
  !*** ./src/app/assets/svg/multimedia.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMultimedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "multimedia_svg__a",
  d: "M.221.142h36.274v31.304H.221z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(26.353 .076)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "multimedia_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#multimedia_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M21.904 16.761l-7.409 3.204a.48.48 0 01-.518-.108.445.445 0 01-.147-.395l.97-8.107c.053-.372.463-.554.759-.33l6.452 4.903a.32.32 0 01.083.085.503.503 0 01.096.3.485.485 0 01-.286.448M33.9 3.793L4.322.163c-1.613-.194-3.078.972-3.267 2.605L.221 9.679h6.167c2.793 0 5.07 2.297 5.07 5.138v14.258l19.143 2.35c1.613.193 3.078-.972 3.278-2.605l2.593-21.704A2.981 2.981 0 0033.9 3.793",
  mask: "url(#multimedia_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M22.125 30.433l-1.158-1.794-2.678-4.187-2.561 3.386 1.781 1.153 1.77-.427 1.076.94 2.72 2.371 1.676-1.09h1.854s-2.276-3.524-2.486-3.663c-.096-.064-.475.534-.875 1.25a64.11 64.11 0 00-1.119 2.061z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M29.78 36.628H10.3c-1.245 0-1.973-1.431-1.245-2.468l8.01-11.29c.623-.874 1.92-.863 2.51.033l2.657 3.962.684-.972a1.19 1.19 0 011.962.032l.199.289.032.054.37.555.04.053 5.25 7.852c.538.81-.02 1.9-.99 1.9M4.47 19.379c0-1.988 1.593-3.6 3.552-3.6 1.972 0 3.553 1.612 3.553 3.6 0 1.986-1.581 3.6-3.553 3.6-1.96 0-3.552-1.614-3.552-3.6m28.272-7.467H2.941c-1.623 0-2.94 1.335-2.94 2.98v21.864c0 1.645 1.317 2.98 2.94 2.98h29.8c1.624 0 2.941-1.335 2.941-2.98V14.892c0-1.645-1.317-2.98-2.94-2.98"
}));

function SvgMultimedia(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 63,
    height: 40
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjMiIGhlaWdodD0iNDAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTS4yMjEuMTQyaDM2LjI3NHYzMS4zMDRILjIyMXoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4zNTMgLjA3NikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0yMS45MDQgMTYuNzYxbC03LjQwOSAzLjIwNGEuNDguNDggMCAwMS0uNTE4LS4xMDguNDQ1LjQ0NSAwIDAxLS4xNDctLjM5NWwuOTctOC4xMDdjLjA1My0uMzcyLjQ2My0uNTU0Ljc1OS0uMzNsNi40NTIgNC45MDNhLjMyLjMyIDAgMDEuMDgzLjA4NS41MDMuNTAzIDAgMDEuMDk2LjMuNDg1LjQ4NSAwIDAxLS4yODYuNDQ4TTMzLjkgMy43OTNMNC4zMjIuMTYzYy0xLjYxMy0uMTk0LTMuMDc4Ljk3Mi0zLjI2NyAyLjYwNUwuMjIxIDkuNjc5aDYuMTY3YzIuNzkzIDAgNS4wNyAyLjI5NyA1LjA3IDUuMTM4djE0LjI1OGwxOS4xNDMgMi4zNWMxLjYxMy4xOTMgMy4wNzgtLjk3MiAzLjI3OC0yLjYwNWwyLjU5My0yMS43MDRBMi45ODEgMi45ODEgMCAwMDMzLjkgMy43OTMiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZmlsbD0iIzQyNzNCOSIgZD0iTTIyLjEyNSAzMC40MzNsLTEuMTU4LTEuNzk0LTIuNjc4LTQuMTg3LTIuNTYxIDMuMzg2IDEuNzgxIDEuMTUzIDEuNzctLjQyNyAxLjA3Ni45NCAyLjcyIDIuMzcxIDEuNjc2LTEuMDloMS44NTRzLTIuMjc2LTMuNTI0LTIuNDg2LTMuNjYzYy0uMDk2LS4wNjQtLjQ3NS41MzQtLjg3NSAxLjI1LS41MzkuOTQtMS4xMTkgMi4wNjEtMS4xMTkgMi4wNjF6Ii8+PHBhdGggZmlsbD0iIzQyNzNCOSIgZD0iTTI5Ljc4IDM2LjYyOEgxMC4zYy0xLjI0NSAwLTEuOTczLTEuNDMxLTEuMjQ1LTIuNDY4bDguMDEtMTEuMjljLjYyMy0uODc0IDEuOTItLjg2MyAyLjUxLjAzM2wyLjY1NyAzLjk2Mi42ODQtLjk3MmExLjE5IDEuMTkgMCAwMTEuOTYyLjAzMmwuMTk5LjI4OS4wMzIuMDU0LjM3LjU1NS4wNC4wNTMgNS4yNSA3Ljg1MmMuNTM4LjgxLS4wMiAxLjktLjk5IDEuOU00LjQ3IDE5LjM3OWMwLTEuOTg4IDEuNTkzLTMuNiAzLjU1Mi0zLjYgMS45NzIgMCAzLjU1MyAxLjYxMiAzLjU1MyAzLjYgMCAxLjk4Ni0xLjU4MSAzLjYtMy41NTMgMy42LTEuOTYgMC0zLjU1Mi0xLjYxNC0zLjU1Mi0zLjZtMjguMjcyLTcuNDY3SDIuOTQxYy0xLjYyMyAwLTIuOTQgMS4zMzUtMi45NCAyLjk4djIxLjg2NGMwIDEuNjQ1IDEuMzE3IDIuOTggMi45NCAyLjk4aDI5LjhjMS42MjQgMCAyLjk0MS0xLjMzNSAyLjk0MS0yLjk4VjE0Ljg5MmMwLTEuNjQ1LTEuMzE3LTIuOTgtMi45NC0yLjk4Ii8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/paint.svg":
/*!**************************************!*\
  !*** ./src/app/assets/svg/paint.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPaint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "paint_svg__a",
  d: "M.999 92.5c0 51.086 41.415 92.501 92.501 92.501 51.086 0 92.5-41.415 92.5-92.501C186 41.415 144.586 0 93.5 0S.999 41.415.999 92.5z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "paint_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#paint_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7D8D8",
  d: "M-4 190h195V-5H-4z",
  mask: "url(#paint_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M93.5 185C42.414 185 1 143.586 1 92.5 1 41.413 42.414 0 93.5 0 144.587 0 186 41.413 186 92.5c0 51.086-41.413 92.5-92.5 92.5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M186 92.5c0-2.625-.115-5.224-.33-7.793-17.052-17.064-44.456-44.48-44.562-44.55-.358-.537-1.057-.825-1.73-.555-4.392 1.755-13.835 5.805-16.434 9.126-2.204 2.816-2.612 5.926-1.634 8.565-.095.013-.188.02-.284.035a8.046 8.046 0 00-1.64.47 9.245 9.245 0 00-2.938 1.914 9.71 9.71 0 00-.624.657c-.047.054-.088.114-.134.17a45.284 45.284 0 00-2.064-1.803c-14.245-11.635-29.033-14.027-32.73-4.24-1.761 4.658 4.458 9.677-1.631 15.984-6.09 6.307-13.48-1.172-22.62 2.392-8.973 3.501-19.136 20.008.11 40.343a49.592 49.592 0 001.599 1.611c.134.133 10.658 10.664 10.75 10.753l-2.125 2.97c-1.238 1.728-1.123 3.934.23 5.088.07.087 28.174 28.186 48.633 48.64C156.134 172.282 186 135.882 186 92.5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F8F8F9",
  d: "M89.456 56.849c2.642-2.641 7.688-1.876 11.273 1.709 3.584 3.584 4.35 8.632 1.708 11.273-2.641 2.64-7.688 1.876-11.273-1.71-3.585-3.583-4.35-8.63-1.708-11.272m-32.701 56.366c19.247 20.334 53.608 22.727 69.376-2.61 12.3-19.765-.01-41.661-12.505-51.868-14.245-11.635-29.033-14.028-32.731-4.242-1.76 4.66 4.458 9.678-1.63 15.986-6.09 6.306-13.48-1.173-22.62 2.39-8.973 3.502-19.136 20.009.11 40.344"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M72.69 87.022a8.109 8.109 0 01-8.109 8.109 8.11 8.11 0 110-16.22 8.11 8.11 0 018.11 8.11"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M70.12 85.736a8.109 8.109 0 01-8.108 8.11 8.11 8.11 0 110-16.219 8.109 8.109 0 018.109 8.11"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M66.31 78.868a8.056 8.056 0 011.241 4.3 8.11 8.11 0 01-8.109 8.108 8.064 8.064 0 01-4.299-1.24 8.097 8.097 0 006.868 3.81 8.11 8.11 0 008.11-8.11c0-2.898-1.525-5.433-3.812-6.868"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M79.515 107.576a8.11 8.11 0 11-16.22 0 8.11 8.11 0 0116.22 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M76.946 106.292a8.109 8.109 0 01-8.109 8.11 8.11 8.11 0 110-16.22 8.11 8.11 0 018.109 8.11"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M73.135 99.424a8.065 8.065 0 011.241 4.299 8.11 8.11 0 01-8.11 8.109 8.063 8.063 0 01-4.298-1.241 8.097 8.097 0 006.868 3.81 8.11 8.11 0 008.11-8.11c0-2.897-1.525-5.432-3.811-6.867"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M79.691 127.161l46.854-52.285a52.277 52.277 0 00-8.377-11.882 9.929 9.929 0 00-1.836 1.855L71.75 124.135a50.29 50.29 0 007.941 3.026"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M67.296 133.72c-1.443-1.13-1.582-3.403-.316-5.172l48.277-67.46c1.43-2 3.543-3.375 5.769-3.76 3.95-.682 7.23 1.886 7.517 5.884.162 2.253-.667 4.635-2.265 6.504l-53.885 63.068c-1.413 1.655-3.655 2.066-5.097.937"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#39687A",
  d: "M128.543 63.212c-.143-1.999-1.035-3.641-2.385-4.697.496.387.533 1.361.007 2.835-.594 1.663-1.83 3.725-3.374 5.636L70.68 131.443c-1.366 1.691-2.855 2.692-3.384 2.278 1.442 1.129 3.684.718 5.097-.937l53.885-63.068c1.598-1.869 2.427-4.251 2.265-6.504"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#5993AE",
  d: "M121.026 57.328c-2.227.385-4.339 1.761-5.77 3.761l-10.045 14.037a42.446 42.446 0 004.65 4.21 42.413 42.413 0 005.204 3.503l11.213-13.123c1.598-1.869 2.427-4.25 2.265-6.504-.287-3.998-3.568-6.567-7.517-5.884"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M121.938 58.042c-1.937.611-3.894 2.11-5.345 4.094L106.28 76.171a42.686 42.686 0 002.613 2.35l10.69-14.046c1.496-1.949 3.104-3.719 4.393-4.837 1.144-.992 1.892-1.35 2.182-1.123-1.022-.8-2.502-1.015-4.22-.473"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#43778C",
  d: "M126.165 61.35c-.594 1.663-1.83 3.726-3.374 5.637l-11.073 13.697c1.132.797 2.258 1.538 3.347 2.155l11.213-13.123c1.598-1.87 2.427-4.251 2.265-6.504-.071-1-.33-1.91-.74-2.702a6.031 6.031 0 00-1.645-1.995c.496.388.533 1.36.007 2.835"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M136.43 59.283c-3.422 4.372-8.574 4.734-12.298 1.82-3.724-2.915-4.61-8.004-1.188-12.376 2.598-3.32 12.042-7.37 16.433-9.126 1.02-.408 2.115.45 1.964 1.538-.649 4.685-2.312 14.824-4.91 18.144"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#5D666C",
  d: "M134.022 55.946c-4.258 3.563-9.372 2.845-12.408-.78a9.34 9.34 0 01-.789-1.113c-.155 2.72 1.051 5.284 3.307 7.05 3.724 2.914 8.876 2.552 12.298-1.82 2.235-2.855 3.776-10.742 4.576-15.878-1.88 4.683-4.572 10.521-6.984 12.541"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M113.694 115.5a8.11 8.11 0 11-16.22 0 8.11 8.11 0 0116.22 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M111.125 114.215a8.109 8.109 0 01-8.11 8.109 8.11 8.11 0 110-16.219 8.11 8.11 0 018.11 8.11"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M107.314 107.347a8.063 8.063 0 011.241 4.298 8.11 8.11 0 01-8.109 8.11 8.065 8.065 0 01-4.299-1.242c1.435 2.286 3.97 3.812 6.868 3.812a8.11 8.11 0 008.11-8.11 8.097 8.097 0 00-3.81-6.868"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B1D7E4",
  d: "M129.512 97.17a8.109 8.109 0 01-8.109 8.109 8.11 8.11 0 110-16.219 8.11 8.11 0 018.11 8.11"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M126.943 95.885a8.11 8.11 0 11-16.22 0 8.11 8.11 0 0116.22 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M123.132 89.017a8.067 8.067 0 011.242 4.299 8.11 8.11 0 01-8.11 8.11c-1.58 0-3.051-.46-4.298-1.242a8.098 8.098 0 006.868 3.812 8.11 8.11 0 008.11-8.111 8.098 8.098 0 00-3.813-6.868"
}));

function SvgPaint(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 186,
    height: 186
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg2IiBoZWlnaHQ9IjE4NiI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNLjk5OSA5Mi41YzAgNTEuMDg2IDQxLjQxNSA5Mi41MDEgOTIuNTAxIDkyLjUwMSA1MS4wODYgMCA5Mi41LTQxLjQxNSA5Mi41LTkyLjUwMUMxODYgNDEuNDE1IDE0NC41ODYgMCA5My41IDBTLjk5OSA0MS40MTUuOTk5IDkyLjV6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGc+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0Q3RDhEOCIgZD0iTS00IDE5MGgxOTVWLTVILTR6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjxwYXRoIGZpbGw9IiM0Njg2QzYiIGQ9Ik05My41IDE4NUM0Mi40MTQgMTg1IDEgMTQzLjU4NiAxIDkyLjUgMSA0MS40MTMgNDIuNDE0IDAgOTMuNSAwIDE0NC41ODcgMCAxODYgNDEuNDEzIDE4NiA5Mi41YzAgNTEuMDg2LTQxLjQxMyA5Mi41LTkyLjUgOTIuNSIvPjxwYXRoIGZpbGw9IiMwMDRCNzUiIGQ9Ik0xODYgOTIuNWMwLTIuNjI1LS4xMTUtNS4yMjQtLjMzLTcuNzkzLTE3LjA1Mi0xNy4wNjQtNDQuNDU2LTQ0LjQ4LTQ0LjU2Mi00NC41NS0uMzU4LS41MzctMS4wNTctLjgyNS0xLjczLS41NTUtNC4zOTIgMS43NTUtMTMuODM1IDUuODA1LTE2LjQzNCA5LjEyNi0yLjIwNCAyLjgxNi0yLjYxMiA1LjkyNi0xLjYzNCA4LjU2NS0uMDk1LjAxMy0uMTg4LjAyLS4yODQuMDM1YTguMDQ2IDguMDQ2IDAgMDAtMS42NC40NyA5LjI0NSA5LjI0NSAwIDAwLTIuOTM4IDEuOTE0IDkuNzEgOS43MSAwIDAwLS42MjQuNjU3Yy0uMDQ3LjA1NC0uMDg4LjExNC0uMTM0LjE3YTQ1LjI4NCA0NS4yODQgMCAwMC0yLjA2NC0xLjgwM2MtMTQuMjQ1LTExLjYzNS0yOS4wMzMtMTQuMDI3LTMyLjczLTQuMjQtMS43NjEgNC42NTggNC40NTggOS42NzctMS42MzEgMTUuOTg0LTYuMDkgNi4zMDctMTMuNDgtMS4xNzItMjIuNjIgMi4zOTItOC45NzMgMy41MDEtMTkuMTM2IDIwLjAwOC4xMSA0MC4zNDNhNDkuNTkyIDQ5LjU5MiAwIDAwMS41OTkgMS42MTFjLjEzNC4xMzMgMTAuNjU4IDEwLjY2NCAxMC43NSAxMC43NTNsLTIuMTI1IDIuOTdjLTEuMjM4IDEuNzI4LTEuMTIzIDMuOTM0LjIzIDUuMDg4LjA3LjA4NyAyOC4xNzQgMjguMTg2IDQ4LjYzMyA0OC42NEMxNTYuMTM0IDE3Mi4yODIgMTg2IDEzNS44ODIgMTg2IDkyLjUiLz48cGF0aCBmaWxsPSIjRjhGOEY5IiBkPSJNODkuNDU2IDU2Ljg0OWMyLjY0Mi0yLjY0MSA3LjY4OC0xLjg3NiAxMS4yNzMgMS43MDkgMy41ODQgMy41ODQgNC4zNSA4LjYzMiAxLjcwOCAxMS4yNzMtMi42NDEgMi42NC03LjY4OCAxLjg3Ni0xMS4yNzMtMS43MS0zLjU4NS0zLjU4My00LjM1LTguNjMtMS43MDgtMTEuMjcybS0zMi43MDEgNTYuMzY2YzE5LjI0NyAyMC4zMzQgNTMuNjA4IDIyLjcyNyA2OS4zNzYtMi42MSAxMi4zLTE5Ljc2NS0uMDEtNDEuNjYxLTEyLjUwNS01MS44NjgtMTQuMjQ1LTExLjYzNS0yOS4wMzMtMTQuMDI4LTMyLjczMS00LjI0Mi0xLjc2IDQuNjYgNC40NTggOS42NzgtMS42MyAxNS45ODYtNi4wOSA2LjMwNi0xMy40OC0xLjE3My0yMi42MiAyLjM5LTguOTczIDMuNTAyLTE5LjEzNiAyMC4wMDkuMTEgNDAuMzQ0Ii8+PHBhdGggZmlsbD0iI0IxRDdFNCIgZD0iTTcyLjY5IDg3LjAyMmE4LjEwOSA4LjEwOSAwIDAxLTguMTA5IDguMTA5IDguMTEgOC4xMSAwIDExMC0xNi4yMiA4LjExIDguMTEgMCAwMTguMTEgOC4xMSIvPjxwYXRoIGZpbGw9IiNGQkIyMUYiIGQ9Ik03MC4xMiA4NS43MzZhOC4xMDkgOC4xMDkgMCAwMS04LjEwOCA4LjExIDguMTEgOC4xMSAwIDExMC0xNi4yMTkgOC4xMDkgOC4xMDkgMCAwMTguMTA5IDguMTEiLz48cGF0aCBmaWxsPSIjNDY4NkM2IiBkPSJNNjYuMzEgNzguODY4YTguMDU2IDguMDU2IDAgMDExLjI0MSA0LjMgOC4xMSA4LjExIDAgMDEtOC4xMDkgOC4xMDggOC4wNjQgOC4wNjQgMCAwMS00LjI5OS0xLjI0IDguMDk3IDguMDk3IDAgMDA2Ljg2OCAzLjgxIDguMTEgOC4xMSAwIDAwOC4xMS04LjExYzAtMi44OTgtMS41MjUtNS40MzMtMy44MTItNi44NjgiLz48cGF0aCBmaWxsPSIjQjFEN0U0IiBkPSJNNzkuNTE1IDEwNy41NzZhOC4xMSA4LjExIDAgMTEtMTYuMjIgMCA4LjExIDguMTEgMCAwMTE2LjIyIDAiLz48cGF0aCBmaWxsPSIjRkJCMjFGIiBkPSJNNzYuOTQ2IDEwNi4yOTJhOC4xMDkgOC4xMDkgMCAwMS04LjEwOSA4LjExIDguMTEgOC4xMSAwIDExMC0xNi4yMiA4LjExIDguMTEgMCAwMTguMTA5IDguMTEiLz48cGF0aCBmaWxsPSIjNDY4NkM2IiBkPSJNNzMuMTM1IDk5LjQyNGE4LjA2NSA4LjA2NSAwIDAxMS4yNDEgNC4yOTkgOC4xMSA4LjExIDAgMDEtOC4xMSA4LjEwOSA4LjA2MyA4LjA2MyAwIDAxLTQuMjk4LTEuMjQxIDguMDk3IDguMDk3IDAgMDA2Ljg2OCAzLjgxIDguMTEgOC4xMSAwIDAwOC4xMS04LjExYzAtMi44OTctMS41MjUtNS40MzItMy44MTEtNi44NjciLz48cGF0aCBmaWxsPSIjQjFEN0U0IiBkPSJNNzkuNjkxIDEyNy4xNjFsNDYuODU0LTUyLjI4NWE1Mi4yNzcgNTIuMjc3IDAgMDAtOC4zNzctMTEuODgyIDkuOTI5IDkuOTI5IDAgMDAtMS44MzYgMS44NTVMNzEuNzUgMTI0LjEzNWE1MC4yOSA1MC4yOSAwIDAwNy45NDEgMy4wMjYiLz48cGF0aCBmaWxsPSIjNjhDQkU0IiBkPSJNNjcuMjk2IDEzMy43MmMtMS40NDMtMS4xMy0xLjU4Mi0zLjQwMy0uMzE2LTUuMTcybDQ4LjI3Ny02Ny40NmMxLjQzLTIgMy41NDMtMy4zNzUgNS43NjktMy43NiAzLjk1LS42ODIgNy4yMyAxLjg4NiA3LjUxNyA1Ljg4NC4xNjIgMi4yNTMtLjY2NyA0LjYzNS0yLjI2NSA2LjUwNGwtNTMuODg1IDYzLjA2OGMtMS40MTMgMS42NTUtMy42NTUgMi4wNjYtNS4wOTcuOTM3Ii8+PHBhdGggZmlsbD0iIzM5Njg3QSIgZD0iTTEyOC41NDMgNjMuMjEyYy0uMTQzLTEuOTk5LTEuMDM1LTMuNjQxLTIuMzg1LTQuNjk3LjQ5Ni4zODcuNTMzIDEuMzYxLjAwNyAyLjgzNS0uNTk0IDEuNjYzLTEuODMgMy43MjUtMy4zNzQgNS42MzZMNzAuNjggMTMxLjQ0M2MtMS4zNjYgMS42OTEtMi44NTUgMi42OTItMy4zODQgMi4yNzggMS40NDIgMS4xMjkgMy42ODQuNzE4IDUuMDk3LS45MzdsNTMuODg1LTYzLjA2OGMxLjU5OC0xLjg2OSAyLjQyNy00LjI1MSAyLjI2NS02LjUwNCIvPjxwYXRoIGZpbGw9IiM1OTkzQUUiIGQ9Ik0xMjEuMDI2IDU3LjMyOGMtMi4yMjcuMzg1LTQuMzM5IDEuNzYxLTUuNzcgMy43NjFsLTEwLjA0NSAxNC4wMzdhNDIuNDQ2IDQyLjQ0NiAwIDAwNC42NSA0LjIxIDQyLjQxMyA0Mi40MTMgMCAwMDUuMjA0IDMuNTAzbDExLjIxMy0xMy4xMjNjMS41OTgtMS44NjkgMi40MjctNC4yNSAyLjI2NS02LjUwNC0uMjg3LTMuOTk4LTMuNTY4LTYuNTY3LTcuNTE3LTUuODg0Ii8+PHBhdGggZmlsbD0iI0IxRDdFNCIgZD0iTTEyMS45MzggNTguMDQyYy0xLjkzNy42MTEtMy44OTQgMi4xMS01LjM0NSA0LjA5NEwxMDYuMjggNzYuMTcxYTQyLjY4NiA0Mi42ODYgMCAwMDIuNjEzIDIuMzVsMTAuNjktMTQuMDQ2YzEuNDk2LTEuOTQ5IDMuMTA0LTMuNzE5IDQuMzkzLTQuODM3IDEuMTQ0LS45OTIgMS44OTItMS4zNSAyLjE4Mi0xLjEyMy0xLjAyMi0uOC0yLjUwMi0xLjAxNS00LjIyLS40NzMiLz48cGF0aCBmaWxsPSIjNDM3NzhDIiBkPSJNMTI2LjE2NSA2MS4zNWMtLjU5NCAxLjY2My0xLjgzIDMuNzI2LTMuMzc0IDUuNjM3bC0xMS4wNzMgMTMuNjk3YzEuMTMyLjc5NyAyLjI1OCAxLjUzOCAzLjM0NyAyLjE1NWwxMS4yMTMtMTMuMTIzYzEuNTk4LTEuODcgMi40MjctNC4yNTEgMi4yNjUtNi41MDQtLjA3MS0xLS4zMy0xLjkxLS43NC0yLjcwMmE2LjAzMSA2LjAzMSAwIDAwLTEuNjQ1LTEuOTk1Yy40OTYuMzg4LjUzMyAxLjM2LjAwNyAyLjgzNSIvPjxwYXRoIGZpbGw9IiNGQkIyMUYiIGQ9Ik0xMzYuNDMgNTkuMjgzYy0zLjQyMiA0LjM3Mi04LjU3NCA0LjczNC0xMi4yOTggMS44Mi0zLjcyNC0yLjkxNS00LjYxLTguMDA0LTEuMTg4LTEyLjM3NiAyLjU5OC0zLjMyIDEyLjA0Mi03LjM3IDE2LjQzMy05LjEyNiAxLjAyLS40MDggMi4xMTUuNDUgMS45NjQgMS41MzgtLjY0OSA0LjY4NS0yLjMxMiAxNC44MjQtNC45MSAxOC4xNDQiLz48cGF0aCBmaWxsPSIjNUQ2NjZDIiBkPSJNMTM0LjAyMiA1NS45NDZjLTQuMjU4IDMuNTYzLTkuMzcyIDIuODQ1LTEyLjQwOC0uNzhhOS4zNCA5LjM0IDAgMDEtLjc4OS0xLjExM2MtLjE1NSAyLjcyIDEuMDUxIDUuMjg0IDMuMzA3IDcuMDUgMy43MjQgMi45MTQgOC44NzYgMi41NTIgMTIuMjk4LTEuODIgMi4yMzUtMi44NTUgMy43NzYtMTAuNzQyIDQuNTc2LTE1Ljg3OC0xLjg4IDQuNjgzLTQuNTcyIDEwLjUyMS02Ljk4NCAxMi41NDEiLz48cGF0aCBmaWxsPSIjQjFEN0U0IiBkPSJNMTEzLjY5NCAxMTUuNWE4LjExIDguMTEgMCAxMS0xNi4yMiAwIDguMTEgOC4xMSAwIDAxMTYuMjIgMCIvPjxwYXRoIGZpbGw9IiNGQkIyMUYiIGQ9Ik0xMTEuMTI1IDExNC4yMTVhOC4xMDkgOC4xMDkgMCAwMS04LjExIDguMTA5IDguMTEgOC4xMSAwIDExMC0xNi4yMTkgOC4xMSA4LjExIDAgMDE4LjExIDguMTEiLz48cGF0aCBmaWxsPSIjNDY4NkM2IiBkPSJNMTA3LjMxNCAxMDcuMzQ3YTguMDYzIDguMDYzIDAgMDExLjI0MSA0LjI5OCA4LjExIDguMTEgMCAwMS04LjEwOSA4LjExIDguMDY1IDguMDY1IDAgMDEtNC4yOTktMS4yNDJjMS40MzUgMi4yODYgMy45NyAzLjgxMiA2Ljg2OCAzLjgxMmE4LjExIDguMTEgMCAwMDguMTEtOC4xMSA4LjA5NyA4LjA5NyAwIDAwLTMuODEtNi44NjgiLz48cGF0aCBmaWxsPSIjQjFEN0U0IiBkPSJNMTI5LjUxMiA5Ny4xN2E4LjEwOSA4LjEwOSAwIDAxLTguMTA5IDguMTA5IDguMTEgOC4xMSAwIDExMC0xNi4yMTkgOC4xMSA4LjExIDAgMDE4LjExIDguMTEiLz48cGF0aCBmaWxsPSIjRkJCMjFGIiBkPSJNMTI2Ljk0MyA5NS44ODVhOC4xMSA4LjExIDAgMTEtMTYuMjIgMCA4LjExIDguMTEgMCAwMTE2LjIyIDAiLz48cGF0aCBmaWxsPSIjNDY4NkM2IiBkPSJNMTIzLjEzMiA4OS4wMTdhOC4wNjcgOC4wNjcgMCAwMTEuMjQyIDQuMjk5IDguMTEgOC4xMSAwIDAxLTguMTEgOC4xMWMtMS41OCAwLTMuMDUxLS40Ni00LjI5OC0xLjI0MmE4LjA5OCA4LjA5OCAwIDAwNi44NjggMy44MTIgOC4xMSA4LjExIDAgMDA4LjExLTguMTExIDguMDk4IDguMDk4IDAgMDAtMy44MTMtNi44NjgiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/paper-plane.svg":
/*!********************************************!*\
  !*** ./src/app/assets/svg/paper-plane.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPaperPlane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "paper-plane_svg__a",
  d: "M0 0h173.999v174H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "paper-plane_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#paper-plane_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M174 87c0 48.048-38.95 87-87 87S0 135.048 0 87C0 38.95 38.95 0 87 0s87 38.95 87 87",
  mask: "url(#paper-plane_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M169 115.889L86.912 34 48 121.31 99.816 173c32.231-4.783 58.676-27.205 69.184-57.111"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M48 122l39-88 39 88z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M79 120.829L87 33v107z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M81.51 93L79 120.812 87 140v-33.792z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M48 122l33-28-2.804 28zm78 0L93 94l2.788 28z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F2F2",
  d: "M96 120.829L87 33v107z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#58B4D9",
  d: "M93.195 93L96 120.812 87 140v-33.792z"
}));

function SvgPaperPlane(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 174,
    height: 174
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTc0IiBoZWlnaHQ9IjE3NCI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDE3My45OTl2MTc0SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGc+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0MyRUJGNSIgZD0iTTE3NCA4N2MwIDQ4LjA0OC0zOC45NSA4Ny04NyA4N1MwIDEzNS4wNDggMCA4N0MwIDM4Ljk1IDM4Ljk1IDAgODcgMHM4NyAzOC45NSA4NyA4NyIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBmaWxsPSIjOUVERkVGIiBkPSJNMTY5IDExNS44ODlMODYuOTEyIDM0IDQ4IDEyMS4zMSA5OS44MTYgMTczYzMyLjIzMS00Ljc4MyA1OC42NzYtMjcuMjA1IDY5LjE4NC01Ny4xMTEiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNDggMTIybDM5LTg4IDM5IDg4eiIvPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik03OSAxMjAuODI5TDg3IDMzdjEwN3oiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBkPSJNODEuNTEgOTNMNzkgMTIwLjgxMiA4NyAxNDB2LTMzLjc5MnoiLz48cGF0aCBmaWxsPSIjQzJFQkY1IiBkPSJNNDggMTIybDMzLTI4LTIuODA0IDI4ek0xMjYgMTIyTDkzIDk0bDIuNzg4IDI4eiIvPjxwYXRoIGZpbGw9IiNGMkYyRjIiIGQ9Ik05NiAxMjAuODI5TDg3IDMzdjEwN3oiLz48cGF0aCBmaWxsPSIjNThCNEQ5IiBkPSJNOTMuMTk1IDkzTDk2IDEyMC44MTIgODcgMTQwdi0zMy43OTJ6Ii8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/products.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/products.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M21.947 11.495L20.34 8.287a.507.507 0 00-.521-.278l-1.582.203.69-1.89c.115-.313.1-.653-.04-.955a1.24 1.24 0 00-.706-.646l-1.732-.634a1.25 1.25 0 00-1.6.746l-.964 2.65a4.486 4.486 0 00-4.365-3.47c-2.35 0-4.256 1.81-4.456 4.106l-.855-.11a.514.514 0 00-.521.278l-1.604 3.208c-.143.287.01.63.315.717l1.63.465v4.596c0 .459.311.858.754.967l6.746 1.688a2 2 0 00.967 0l6.752-1.688a1 1 0 00.755-.967v-4.596l1.626-.465a.51.51 0 00.318-.717zm-5.775-5.913l1.263.459-.867 2.383-1.504.19 1.108-3.032zm-12.216 5.52l.759-1.517 4.83.615-1.286 2.13-4.303-1.229zm7.31 7.216l-5.74-1.435v-3.778l3.051.87a.51.51 0 00.577-.228l2.113-3.5v8.071zm1.205-9.373l-.455.06-5.473-.696A2.991 2.991 0 019.52 5.51a3 3 0 012.995 2.995c0 .15-.022.297-.044.44zm6.034 7.938l-5.74 1.435v-8.072l2.112 3.504c.103.172.33.3.577.228l3.051-.87v3.775zm-2.736-4.552L14.484 10.2l4.833-.615.758 1.516-4.306 1.23z"
});

function SvgProducts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk0NyAxMS40OTVMMjAuMzQgOC4yODdhLjUwNy41MDcgMCAwMC0uNTIxLS4yNzhsLTEuNTgyLjIwMy42OS0xLjg5Yy4xMTUtLjMxMy4xLS42NTMtLjA0LS45NTUtLjE0MS0uMzAzLS4zOS0uNTMtLjcwNi0uNjQ2bC0xLjczMi0uNjM0YTEuMjUgMS4yNSAwIDAwLTEuNi43NDZsLS45NjQgMi42NWE0LjQ4NiA0LjQ4NiAwIDAwLTQuMzY1LTMuNDdjLTIuMzUgMC00LjI1NiAxLjgxLTQuNDU2IDQuMTA2bC0uODU1LS4xMWEuNTE0LjUxNCAwIDAwLS41MjEuMjc4bC0xLjYwNCAzLjIwOGMtLjE0My4yODcuMDEuNjMuMzE1LjcxN2wxLjYzLjQ2NXY0LjU5NmMwIC40NTkuMzExLjg1OC43NTQuOTY3bDYuNzQ2IDEuNjg4Yy40MjQuMTA2Ljc4LjA0Ny45NjcgMGw2Ljc1Mi0xLjY4OGExIDEgMCAwMC43NTUtLjk2N3YtNC41OTZsMS42MjYtLjQ2NWEuNTEuNTEgMCAwMC4zMTgtLjcxN3ptLTUuNzc1LTUuOTEzbDEuMjYzLjQ1OS0uODY3IDIuMzgzLTEuNTA0LjE5IDEuMTA4LTMuMDMyem0tMTIuMjE2IDUuNTJsLjc1OS0xLjUxNyA0LjgzLjYxNS0xLjI4NiAyLjEzLTQuMzAzLTEuMjI5em03LjMxIDcuMjE2bC01Ljc0LTEuNDM1di0zLjc3OGwzLjA1MS44N2EuNTEuNTEgMCAwMC41NzctLjIyOGwyLjExMy0zLjV2OC4wNzF6bTEuMjA1LTkuMzczbC0uNDU1LjA2LTUuNDczLS42OTZDNi42NDkgNi43NDkgNy45MzQgNS41MSA5LjUyIDUuNTFhMyAzIDAgMDEyLjk5NSAyLjk5NWMwIC4xNS0uMDIyLjI5Ny0uMDQ0LjQ0em02LjAzNCA3LjkzOGwtNS43NCAxLjQzNXYtOC4wNzJsMi4xMTIgMy41MDRjLjEwMy4xNzIuMzMuMy41NzcuMjI4bDMuMDUxLS44N3YzLjc3NXptLTIuNzM2LTQuNTUyTDE0LjQ4NCAxMC4ybDQuODMzLS42MTUuNzU4IDEuNTE2LTQuMzA2IDEuMjN6Ii8+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/radio-button-disabled.svg":
/*!******************************************************!*\
  !*** ./src/app/assets/svg/radio-button-disabled.svg ***!
  \******************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRadioButtonDisabled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "radio-button-disabled_svg__a",
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-2 -2)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#999",
  xlinkHref: "#radio-button-disabled_svg__a"
}));

function SvgRadioButtonDisabled(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTEyIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjMgMiAxMiA2LjQ3NyAyIDEyIDJ6bTAgMmE4IDggMCAxMDAgMTYgOCA4IDAgMDAwLTE2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPjx1c2UgZmlsbD0iIzk5OSIgeGxpbms6aHJlZj0iI2EiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/radio-button-selected.svg":
/*!******************************************************!*\
  !*** ./src/app/assets/svg/radio-button-selected.svg ***!
  \******************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRadioButtonSelected; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "radio-button-selected_svg__a",
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 110 10 5 5 0 010-10z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-2 -2)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#3575D3",
  xlinkHref: "#radio-button-selected_svg__a"
}));

function SvgRadioButtonSelected(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTEyIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjMgMiAxMiA2LjQ3NyAyIDEyIDJ6bTAgMmE4IDggMCAxMDAgMTYgOCA4IDAgMDAwLTE2em0wIDNhNSA1IDAgMTEwIDEwIDUgNSAwIDAxMC0xMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz48dXNlIGZpbGw9IiMzNTc1RDMiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/radio-button-unselected.svg":
/*!********************************************************!*\
  !*** ./src/app/assets/svg/radio-button-unselected.svg ***!
  \********************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRadioButtonUnselected; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "radio-button-unselected_svg__a",
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-2 -2)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  fill: "#3575D3",
  xlinkHref: "#radio-button-unselected_svg__a"
}));

function SvgRadioButtonUnselected(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTEyIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjMgMiAxMiA2LjQ3NyAyIDEyIDJ6bTAgMmE4IDggMCAxMDAgMTYgOCA4IDAgMDAwLTE2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPjx1c2UgZmlsbD0iIzM1NzVEMyIgeGxpbms6aHJlZj0iI2EiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/responsive.svg":
/*!*******************************************!*\
  !*** ./src/app/assets/svg/responsive.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgResponsive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#4273B9",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M47.31 11.69V2.37A2.22 2.22 0 0045.087.145H6.812A2.22 2.22 0 004.59 2.37v15.667h2.251c3.106 0 5.633 2.511 5.633 5.611v5.082h12.404v3.512l-6.71.813a1.227 1.227 0 10.295 2.435l7.487-.907 7.489.907a1.228 1.228 0 10.295-2.436l-6.398-.774v-3.55h10.37V17.302c0-3.1 2.516-5.611 5.622-5.611h3.981z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M54.524 14.81H44.017a2.767 2.767 0 00-2.773 2.766v15.02a2.775 2.775 0 002.773 2.776h10.507a2.774 2.774 0 002.772-2.776v-15.02a2.766 2.766 0 00-2.772-2.766M6.841 21.57H2.084C.934 21.57 0 22.502 0 23.65v9.221c0 1.158.934 2.089 2.084 2.089H6.84c1.16 0 2.094-.931 2.094-2.089V23.65c0-1.148-.934-2.08-2.094-2.08"
}));

function SvgResponsive(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 58,
    height: 36
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OCIgaGVpZ2h0PSIzNiI+PGRlZnMvPjxnIGZpbGw9IiM0MjczQjkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTQ3LjMxIDExLjY5VjIuMzdBMi4yMiAyLjIyIDAgMDA0NS4wODcuMTQ1SDYuODEyQTIuMjIgMi4yMiAwIDAwNC41OSAyLjM3djE1LjY2N2gyLjI1MWMzLjEwNiAwIDUuNjMzIDIuNTExIDUuNjMzIDUuNjExdjUuMDgyaDEyLjQwNHYzLjUxMmwtNi43MS44MTNhMS4yMjcgMS4yMjcgMCAxMC4yOTUgMi40MzVsNy40ODctLjkwNyA3LjQ4OS45MDdhMS4yMjggMS4yMjggMCAxMC4yOTUtMi40MzZsLTYuMzk4LS43NzR2LTMuNTVoMTAuMzdWMTcuMzAyYzAtMy4xIDIuNTE2LTUuNjExIDUuNjIyLTUuNjExaDMuOTgxeiIvPjxwYXRoIGQ9Ik01NC41MjQgMTQuODFINDQuMDE3YTIuNzY3IDIuNzY3IDAgMDAtMi43NzMgMi43NjZ2MTUuMDJhMi43NzUgMi43NzUgMCAwMDIuNzczIDIuNzc2aDEwLjUwN2EyLjc3NCAyLjc3NCAwIDAwMi43NzItMi43NzZ2LTE1LjAyYTIuNzY2IDIuNzY2IDAgMDAtMi43NzItMi43NjZNNi44NDEgMjEuNTdIMi4wODRDLjkzNCAyMS41NyAwIDIyLjUwMiAwIDIzLjY1djkuMjIxYzAgMS4xNTguOTM0IDIuMDg5IDIuMDg0IDIuMDg5SDYuODRjMS4xNiAwIDIuMDk0LS45MzEgMi4wOTQtMi4wODlWMjMuNjVjMC0xLjE0OC0uOTM0LTIuMDgtMi4wOTQtMi4wOCIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/rocket.svg":
/*!***************************************!*\
  !*** ./src/app/assets/svg/rocket.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRocket; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "rocket_svg__a",
  d: "M0 0h28.942v44.978H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "rocket_svg__c",
  d: "M0 0h17v19H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "rocket_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#rocket_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M14.471 31.159c-4.003 0-7.247-3.295-7.247-7.36s3.244-7.36 7.247-7.36c4.002 0 7.247 3.295 7.247 7.36s-3.245 7.36-7.247 7.36M15.856.455a2.334 2.334 0 00-2.77 0C8.123 4.097-7.83 18.34 4.693 43.653a2.36 2.36 0 002.111 1.325h15.334a2.36 2.36 0 002.111-1.325C36.772 18.34 20.819 4.097 15.856.455",
  mask: "url(#rocket_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M6 50h17v-3H6z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(7 52)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "rocket_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#rocket_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M.652 0h13.257s6.955 7.021 0 11.253C9.553 13.903 7.994 19 7.994 19s-4.25-4.52 0-8.09c0 0 2.914-2.393 1.525-4.562-1.49-2.325-7.323.438-5.13 4.125 0 0-6.41.395-3.737-10.473",
  mask: "url(#rocket_svg__d)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F8F9FB",
  d: "M14 30h2v11a1 1 0 01-2 0V30z"
}));

function SvgRocket(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 29,
    height: 71
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjkiIGhlaWdodD0iNzEiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGgyOC45NDJ2NDQuOTc4SDB6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0wIDBoMTd2MTlIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjNDI3M0I5IiBkPSJNMTQuNDcxIDMxLjE1OWMtNC4wMDMgMC03LjI0Ny0zLjI5NS03LjI0Ny03LjM2czMuMjQ0LTcuMzYgNy4yNDctNy4zNmM0LjAwMiAwIDcuMjQ3IDMuMjk1IDcuMjQ3IDcuMzZzLTMuMjQ1IDcuMzYtNy4yNDcgNy4zNk0xNS44NTYuNDU1YTIuMzM0IDIuMzM0IDAgMDAtMi43NyAwQzguMTIzIDQuMDk3LTcuODMgMTguMzQgNC42OTMgNDMuNjUzYTIuMzYgMi4zNiAwIDAwMi4xMTEgMS4zMjVoMTUuMzM0YTIuMzYgMi4zNiAwIDAwMi4xMTEtMS4zMjVDMzYuNzcyIDE4LjM0IDIwLjgxOSA0LjA5NyAxNS44NTYuNDU1IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik02IDUwaDE3di0zSDZ6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA1MikiPjxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNjIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0uNjUyIDBoMTMuMjU3czYuOTU1IDcuMDIxIDAgMTEuMjUzQzkuNTUzIDEzLjkwMyA3Ljk5NCAxOSA3Ljk5NCAxOXMtNC4yNS00LjUyIDAtOC4wOWMwIDAgMi45MTQtMi4zOTMgMS41MjUtNC41NjItMS40OS0yLjMyNS03LjMyMy40MzgtNS4xMyA0LjEyNSAwIDAtNi40MS4zOTUtMy43MzctMTAuNDczIiBtYXNrPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGZpbGw9IiNGOEY5RkIiIGQ9Ik0xNCAzMGgydjExYTEgMSAwIDAxLTIgMFYzMHoiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/screenshare.svg":
/*!********************************************!*\
  !*** ./src/app/assets/svg/screenshare.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgScreenshare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "screenshare_svg__a",
  d: "M.338.103h25.607v24.835H.338z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "screenshare_svg__c",
  d: "M0 .266h35.179v29.168H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(27.033)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "screenshare_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#screenshare_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M23.547.103H2.734C1.416.103.338 1.149.338 2.429v13.559h6.247c1.838 0 3.331 1.448 3.331 3.233v.953h1.974v1.71l-1.974.234v2.448l3.1-.365h.01l6.17.727c.052.007.103.01.154.01.625 0 1.167-.453 1.244-1.071.083-.668-.407-1.276-1.095-1.356l-5.107-.602v-1.735h9.155c1.329 0 2.398-1.037 2.398-2.327V2.43c0-1.28-1.07-2.326-2.398-2.326",
  mask: "url(#screenshare_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(0 17.87)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "screenshare_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#screenshare_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M33.02.266H2.168c-1.194 0-2.17.959-2.17 2.155v19.132C0 22.74.975 23.7 2.17 23.7h14.226v2.725l-5.36.646a1.177 1.177 0 00-1.042 1.32 1.188 1.188 0 001.186 1.044c.046 0 .095 0 .143-.01l6.15-.739 6.134.739a1.192 1.192 0 001.33-1.035 1.188 1.188 0 00-1.043-1.321l-5.11-.616V23.7H33.02a2.15 2.15 0 002.16-2.147V2.421A2.152 2.152 0 0033.02.266",
  mask: "url(#screenshare_svg__d)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M15.82 14.611a.27.27 0 00.428 0l2.246-2.934a.273.273 0 00-.213-.44h-.792V7.17h4.023v.8a.27.27 0 00.435.217l2.902-2.272a.275.275 0 000-.432l-2.902-2.272a.27.27 0 00-.435.216v.801h-5.479c-.803 0-1.455.658-1.455 1.47v5.54h-.791a.272.272 0 00-.213.439l2.246 2.934z"
}));

function SvgScreenshare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 53,
    height: 48
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTMiIGhlaWdodD0iNDgiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTS4zMzguMTAzaDI1LjYwN3YyNC44MzVILjMzOHoiLz48cGF0aCBpZD0iYyIgZD0iTTAgLjI2NmgzNS4xNzl2MjkuMTY4SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuMDMzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iIzQyNzNCOSIgZD0iTTIzLjU0Ny4xMDNIMi43MzRDMS40MTYuMTAzLjMzOCAxLjE0OS4zMzggMi40Mjl2MTMuNTU5aDYuMjQ3YzEuODM4IDAgMy4zMzEgMS40NDggMy4zMzEgMy4yMzN2Ljk1M2gxLjk3NHYxLjcxbC0xLjk3NC4yMzR2Mi40NDhsMy4xLS4zNjVoLjAxbDYuMTcuNzI3Yy4wNTIuMDA3LjEwMy4wMS4xNTQuMDEuNjI1IDAgMS4xNjctLjQ1MyAxLjI0NC0xLjA3MS4wODMtLjY2OC0uNDA3LTEuMjc2LTEuMDk1LTEuMzU2bC01LjEwNy0uNjAydi0xLjczNWg5LjE1NWMxLjMyOSAwIDIuMzk4LTEuMDM3IDIuMzk4LTIuMzI3VjIuNDNjMC0xLjI4LTEuMDctMi4zMjYtMi4zOTgtMi4zMjYiIG1hc2s9InVybCgjYikiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNy44NykiPjxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNjIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0zMy4wMi4yNjZIMi4xNjhjLTEuMTk0IDAtMi4xNy45NTktMi4xNyAyLjE1NXYxOS4xMzJDMCAyMi43NC45NzUgMjMuNyAyLjE3IDIzLjdoMTQuMjI2djIuNzI1bC01LjM2LjY0NmExLjE3NyAxLjE3NyAwIDAwLTEuMDQyIDEuMzIgMS4xODggMS4xODggMCAwMDEuMTg2IDEuMDQ0Yy4wNDYgMCAuMDk1IDAgLjE0My0uMDFsNi4xNS0uNzM5IDYuMTM0LjczOWExLjE5MiAxLjE5MiAwIDAwMS4zMy0xLjAzNSAxLjE4OCAxLjE4OCAwIDAwLTEuMDQzLTEuMzIxbC01LjExLS42MTZWMjMuN0gzMy4wMmEyLjE1IDIuMTUgMCAwMDIuMTYtMi4xNDdWMi40MjFhMi4xNTIgMi4xNTIgMCAwMC0yLjE2LTIuMTU1IiBtYXNrPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0xNS44MiAxNC42MTFjLjEwOC4xNDEuMzIuMTQxLjQyOCAwbDIuMjQ2LTIuOTM0YS4yNzMuMjczIDAgMDAtLjIxMy0uNDRoLS43OTJWNy4xN2g0LjAyM3YuOGEuMjcuMjcgMCAwMC40MzUuMjE3bDIuOTAyLTIuMjcyYS4yNzUuMjc1IDAgMDAwLS40MzJsLTIuOTAyLTIuMjcyYS4yNy4yNyAwIDAwLS40MzUuMjE2di44MDFoLTUuNDc5Yy0uODAzIDAtMS40NTUuNjU4LTEuNDU1IDEuNDd2NS41NGgtLjc5MWEuMjcyLjI3MiAwIDAwLS4yMTMuNDM5bDIuMjQ2IDIuOTM0eiIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/search.svg":
/*!***************************************!*\
  !*** ./src/app/assets/svg/search.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  fillRule: "evenodd",
  d: "M21.825 20.28l-4.733-4.732a.463.463 0 00-.332-.137h-.514A8.108 8.108 0 0010.11 2C5.63 2 2 5.63 2 10.11a8.108 8.108 0 0013.411 6.136v.514a.48.48 0 00.137.332l4.733 4.733c.183.183.48.183.662 0l.882-.882a.468.468 0 000-.662zm-11.716-3.933a6.236 6.236 0 01-6.238-6.238 6.236 6.236 0 016.238-6.238 6.236 6.236 0 016.238 6.238 6.236 6.236 0 01-6.238 6.238z"
});

function SvgSearch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGw9IiM1NDU0NTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjgyNSAyMC4yOGwtNC43MzMtNC43MzJhLjQ2My40NjMgMCAwMC0uMzMyLS4xMzdoLS41MTRBOC4xMDggOC4xMDggMCAwMDEwLjExIDJDNS42MyAyIDIgNS42MyAyIDEwLjExYTguMTA4IDguMTA4IDAgMDAxMy40MTEgNi4xMzZ2LjUxNGMwIC4xMjUuMDUxLjI0Mi4xMzcuMzMybDQuNzMzIDQuNzMzYy4xODMuMTgzLjQ4LjE4My42NjIgMGwuODgyLS44ODJhLjQ2OC40NjggMCAwMDAtLjY2MnptLTExLjcxNi0zLjkzM2E2LjIzNiA2LjIzNiAwIDAxLTYuMjM4LTYuMjM4IDYuMjM2IDYuMjM2IDAgMDE2LjIzOC02LjIzOCA2LjIzNiA2LjIzNiAwIDAxNi4yMzggNi4yMzggNi4yMzYgNi4yMzYgMCAwMS02LjIzOCA2LjIzOHoiLz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/security.svg":
/*!*****************************************!*\
  !*** ./src/app/assets/svg/security.svg ***!
  \*****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSecurity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M8.375 11.004A.473.473 0 007.711 11l-.887.879a.473.473 0 00-.004.664l3.547 3.574c.184.184.48.184.664.004l6.742-6.687a.473.473 0 00.004-.664l-.879-.887a.473.473 0 00-.664-.004l-5.523 5.476-2.336-2.351zM20.223 5.27l-7.5-3.125a1.88 1.88 0 00-1.442 0l-7.5 3.125A1.872 1.872 0 002.625 7c0 7.754 4.473 13.113 8.652 14.855.461.192.98.192 1.442 0 3.347-1.394 8.656-6.21 8.656-14.855 0-.758-.457-1.441-1.152-1.73zM12 20.125C8.191 18.539 4.5 13.613 4.5 7L12 3.875 19.5 7c0 6.79-3.844 11.602-7.5 13.125z"
});

function SvgSecurity(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguMzc1IDExLjAwNEEuNDczLjQ3MyAwIDAwNy43MTEgMTFsLS44ODcuODc5YS40NzMuNDczIDAgMDAtLjAwNC42NjRsMy41NDcgMy41NzRjLjE4NC4xODQuNDguMTg0LjY2NC4wMDRsNi43NDItNi42ODdhLjQ3My40NzMgMCAwMC4wMDQtLjY2NGwtLjg3OS0uODg3YS40NzMuNDczIDAgMDAtLjY2NC0uMDA0bC01LjUyMyA1LjQ3Ni0yLjMzNi0yLjM1MXpNMjAuMjIzIDUuMjdsLTcuNS0zLjEyNWExLjg4IDEuODggMCAwMC0xLjQ0MiAwbC03LjUgMy4xMjVjLS42OTkuMjg5LTEuMTU2Ljk3Mi0xLjE1NiAxLjczIDAgNy43NTQgNC40NzMgMTMuMTEzIDguNjUyIDE0Ljg1NS40NjEuMTkyLjk4LjE5MiAxLjQ0MiAwIDMuMzQ3LTEuMzk0IDguNjU2LTYuMjEgOC42NTYtMTQuODU1IDAtLjc1OC0uNDU3LTEuNDQxLTEuMTUyLTEuNzN6TTEyIDIwLjEyNUM4LjE5MSAxOC41MzkgNC41IDEzLjYxMyA0LjUgN0wxMiAzLjg3NSAxOS41IDdjMCA2Ljc5LTMuODQ0IDExLjYwMi03LjUgMTMuMTI1eiIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/seo.svg":
/*!************************************!*\
  !*** ./src/app/assets/svg/seo.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSeo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "seo_svg__a",
  d: "M0 0h137v138H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "seo_svg__c",
  d: "M0 138h137V0H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "seo_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#seo_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#C2EBF5",
  d: "M137 69c0 38.107-30.668 69-68.5 69C30.667 138 0 107.107 0 69 0 30.891 30.667 0 68.5 0 106.332 0 137 30.891 137 69",
  mask: "url(#seo_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#9EDFEF",
  d: "M136 80.501L87.08 30.818C82.187 26.565 75.844 24 68.913 24c-13.997 0-25.579 10.45-27.6 24.09-.036.242-.062.49-.09.732-.03.22-.062.437-.083.658-.032.326-.052.654-.073.982-.01.148-.025.294-.032.443-.024.48-.036.96-.036 1.443 0 7.596 2.928 14.475 7.707 19.567.307.322.624.643.94.956l14.32 14.544c-.22.325-.332.702-.332 1.082v25.748c0 1.286.448 2.475 1.205 3.405.027.026.044.052.071.08l.563.57c.026.028.053.046.078.073L82.905 136c27.053-5.733 48.203-27.751 53.095-55.499"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "seo_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#seo_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#343B43",
  d: "M66 87h5v-6h-5z",
  mask: "url(#seo_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#495057",
  d: "M67.995 76.402c-12.366 0-22.398-10.026-22.398-22.405 0-12.373 10.032-22.4 22.398-22.4 12.374 0 22.41 10.027 22.41 22.4 0 12.38-10.036 22.405-22.41 22.405M67.998 26C52.531 26 40 38.536 40 53.997 40 69.466 52.531 82 67.998 82 83.462 82 96 69.466 96 53.997 96 38.536 83.462 26 67.998 26",
  mask: "url(#seo_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M74 90v25.545c0 3.01-2.236 5.455-5 5.455-2.763 0-5-2.445-5-5.455V90h10z",
  mask: "url(#seo_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M74 90H64v-.77c0-.567.174-1.141.522-1.577.349-.435.804-.653 1.26-.653h6.436c.456 0 .911.218 1.26.653.348.436.522 1.01.522 1.577V90zm-4.556-52h-1.892L67 42h3zm-7.565 2L60 41.05 61.031 44 64 42.338zm-5.83 5L55 46.871 57.34 49 59 46.03zM53 51.739v2.524L56 55v-4zm2 7.38L56.049 61 59 59.971 57.34 57zm5 6.83L61.879 67 64 64.661 61.034 63zM67.553 69h1.891L70 65h-3zm7.571-2L77 65.949 75.974 63 73 64.661zm5.828-6L82 59.119 79.661 57 78 59.971zM84 54.263v-2.524L81 51v4zm-2-7.392L80.952 45 78 46.029 79.661 49zm-5-5.822L75.124 40 73 42.339 75.974 44z",
  mask: "url(#seo_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M67.998 57.94A4.939 4.939 0 0163.062 53a4.938 4.938 0 119.878 0 4.943 4.943 0 01-4.942 4.94m0-16.94C61.371 41 56 46.372 56 53c0 6.633 5.371 12 11.998 12C74.632 65 80 59.633 80 53c0-6.628-5.368-12-12.002-12",
  mask: "url(#seo_svg__d)"
}));

function SvgSeo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 137,
    height: 138
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM3IiBoZWlnaHQ9IjEzOCI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDEzN3YxMzhIMHoiLz48cGF0aCBpZD0iYyIgZD0iTTAgMTM4aDEzN1YwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0MyRUJGNSIgZD0iTTEzNyA2OWMwIDM4LjEwNy0zMC42NjggNjktNjguNSA2OUMzMC42NjcgMTM4IDAgMTA3LjEwNyAwIDY5IDAgMzAuODkxIDMwLjY2NyAwIDY4LjUgMCAxMDYuMzMyIDAgMTM3IDMwLjg5MSAxMzcgNjkiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjOUVERkVGIiBkPSJNMTM2IDgwLjUwMUw4Ny4wOCAzMC44MThDODIuMTg3IDI2LjU2NSA3NS44NDQgMjQgNjguOTEzIDI0Yy0xMy45OTcgMC0yNS41NzkgMTAuNDUtMjcuNiAyNC4wOS0uMDM2LjI0Mi0uMDYyLjQ5LS4wOS43MzItLjAzLjIyLS4wNjIuNDM3LS4wODMuNjU4LS4wMzIuMzI2LS4wNTIuNjU0LS4wNzMuOTgyLS4wMS4xNDgtLjAyNS4yOTQtLjAzMi40NDMtLjAyNC40OC0uMDM2Ljk2LS4wMzYgMS40NDMgMCA3LjU5NiAyLjkyOCAxNC40NzUgNy43MDcgMTkuNTY3LjMwNy4zMjIuNjI0LjY0My45NC45NTZsMTQuMzIgMTQuNTQ0Yy0uMjIuMzI1LS4zMzIuNzAyLS4zMzIgMS4wODJ2MjUuNzQ4YzAgMS4yODYuNDQ4IDIuNDc1IDEuMjA1IDMuNDA1LjAyNy4wMjYuMDQ0LjA1Mi4wNzEuMDhsLjU2My41N2MuMDI2LjAyOC4wNTMuMDQ2LjA3OC4wNzNMODIuOTA1IDEzNmMyNy4wNTMtNS43MzMgNDguMjAzLTI3Ljc1MSA1My4wOTUtNTUuNDk5Ii8+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iIzM0M0I0MyIgZD0iTTY2IDg3aDV2LTZoLTV6IiBtYXNrPSJ1cmwoI2QpIi8+PHBhdGggZmlsbD0iIzQ5NTA1NyIgZD0iTTY3Ljk5NSA3Ni40MDJjLTEyLjM2NiAwLTIyLjM5OC0xMC4wMjYtMjIuMzk4LTIyLjQwNSAwLTEyLjM3MyAxMC4wMzItMjIuNCAyMi4zOTgtMjIuNCAxMi4zNzQgMCAyMi40MSAxMC4wMjcgMjIuNDEgMjIuNCAwIDEyLjM4LTEwLjAzNiAyMi40MDUtMjIuNDEgMjIuNDA1TTY3Ljk5OCAyNkM1Mi41MzEgMjYgNDAgMzguNTM2IDQwIDUzLjk5NyA0MCA2OS40NjYgNTIuNTMxIDgyIDY3Ljk5OCA4MiA4My40NjIgODIgOTYgNjkuNDY2IDk2IDUzLjk5NyA5NiAzOC41MzYgODMuNDYyIDI2IDY3Ljk5OCAyNiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiM0Njg3QzciIGQ9Ik03NCA5MHYyNS41NDVjMCAzLjAxLTIuMjM2IDUuNDU1LTUgNS40NTUtMi43NjMgMC01LTIuNDQ1LTUtNS40NTVWOTBoMTB6IiBtYXNrPSJ1cmwoI2QpIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTc0IDkwSDY0di0uNzdjMC0uNTY3LjE3NC0xLjE0MS41MjItMS41NzcuMzQ5LS40MzUuODA0LS42NTMgMS4yNi0uNjUzaDYuNDM2Yy40NTYgMCAuOTExLjIxOCAxLjI2LjY1My4zNDguNDM2LjUyMiAxLjAxLjUyMiAxLjU3N1Y5MHpNNjkuNDQ0IDM4aC0xLjg5Mkw2NyA0Mmgzek02MS44NzkgNDBMNjAgNDEuMDUgNjEuMDMxIDQ0IDY0IDQyLjMzOHpNNTYuMDQ5IDQ1TDU1IDQ2Ljg3MSA1Ny4zNCA0OSA1OSA0Ni4wM3pNNTMgNTEuNzM5djIuNTI0TDU2IDU1di00ek01NSA1OS4xMTlMNTYuMDQ5IDYxIDU5IDU5Ljk3MSA1Ny4zNCA1N3pNNjAgNjUuOTQ5TDYxLjg3OSA2NyA2NCA2NC42NjEgNjEuMDM0IDYzek02Ny41NTMgNjloMS44OTFMNzAgNjVoLTN6TTc1LjEyNCA2N0w3NyA2NS45NDkgNzUuOTc0IDYzIDczIDY0LjY2MXpNODAuOTUyIDYxTDgyIDU5LjExOSA3OS42NjEgNTcgNzggNTkuOTcxek04NCA1NC4yNjN2LTIuNTI0TDgxIDUxdjR6TTgyIDQ2Ljg3MUw4MC45NTIgNDUgNzggNDYuMDI5IDc5LjY2MSA0OXpNNzcgNDEuMDQ5TDc1LjEyNCA0MCA3MyA0Mi4zMzkgNzUuOTc0IDQ0eiIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik02Ny45OTggNTcuOTRBNC45MzkgNC45MzkgMCAwMTYzLjA2MiA1M2E0LjkzOCA0LjkzOCAwIDExOS44NzggMCA0Ljk0MyA0Ljk0MyAwIDAxLTQuOTQyIDQuOTRtMC0xNi45NEM2MS4zNzEgNDEgNTYgNDYuMzcyIDU2IDUzYzAgNi42MzMgNS4zNzEgMTIgMTEuOTk4IDEyQzc0LjYzMiA2NSA4MCA1OS42MzMgODAgNTNjMC02LjYyOC01LjM2OC0xMi0xMi4wMDItMTIiIG1hc2s9InVybCgjZCkiLz48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/shop.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/shop.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgShop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "shop_svg__a",
  d: "M0 0h49v42H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "shop_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#shop_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M31.684 19.398a1.412 1.412 0 01-1.4 1.283h-9.03c-.718 0-1.312-.547-1.412-1.27a149.46 149.46 0 01-.297-3.216c-.161-1.853-.346-3.961-.47-4.647-.185-1.017-.953-1.13-1.29-1.13H15.31a.845.845 0 01-.841-.865c0-.482.37-.863.84-.863h2.478c1.152 0 2.615.66 2.948 2.553.026.127.05.305.075.507h10.144c.409 0 .794.166 1.066.484.26.304.383.71.347 1.13l-.682 6.034zm-2.502 5.538c-.78 0-1.411-.648-1.411-1.437 0-.799.631-1.447 1.41-1.447.77 0 1.4.648 1.4 1.447 0 .789-.63 1.437-1.4 1.437zm-7.792-1.437c0-.799.62-1.447 1.4-1.447.78 0 1.412.648 1.412 1.447 0 .789-.632 1.437-1.412 1.437-.78 0-1.4-.648-1.4-1.437zM2.81 0C1.263 0 0 1.297 0 2.885v27.932c0 1.588 1.262 2.87 2.81 2.87h20.134v3.847l-7.409.922c-.951.118-1.627 1.005-1.512 1.98.106.9.856 1.564 1.72 1.564.07 0 .139-.005.21-.014l8.546-1.063 8.548 1.063c.071.009.142.014.21.014.866 0 1.614-.663 1.72-1.565.115-.974-.56-1.86-1.512-1.979l-7.052-.878v-3.89h19.775c1.549 0 2.812-1.283 2.812-2.871V2.885C49 1.297 47.737 0 46.188 0H2.811z",
  mask: "url(#shop_svg__b)"
}));

function SvgShop(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 49,
    height: 42
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDkiIGhlaWdodD0iNDIiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGg0OXY0MkgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0zMS42ODQgMTkuMzk4YTEuNDEyIDEuNDEyIDAgMDEtMS40IDEuMjgzaC05LjAzYy0uNzE4IDAtMS4zMTItLjU0Ny0xLjQxMi0xLjI3YTE0OS40NiAxNDkuNDYgMCAwMS0uMjk3LTMuMjE2Yy0uMTYxLTEuODUzLS4zNDYtMy45NjEtLjQ3LTQuNjQ3LS4xODUtMS4wMTctLjk1My0xLjEzLTEuMjktMS4xM0gxNS4zMWEuODQ1Ljg0NSAwIDAxLS44NDEtLjg2NWMwLS40ODIuMzctLjg2My44NC0uODYzaDIuNDc4YzEuMTUyIDAgMi42MTUuNjYgMi45NDggMi41NTMuMDI2LjEyNy4wNS4zMDUuMDc1LjUwN2gxMC4xNDRjLjQwOSAwIC43OTQuMTY2IDEuMDY2LjQ4NC4yNi4zMDQuMzgzLjcxLjM0NyAxLjEzbC0uNjgyIDYuMDM0em0tMi41MDIgNS41MzhjLS43OCAwLTEuNDExLS42NDgtMS40MTEtMS40MzcgMC0uNzk5LjYzMS0xLjQ0NyAxLjQxLTEuNDQ3Ljc3IDAgMS40LjY0OCAxLjQgMS40NDcgMCAuNzg5LS42MyAxLjQzNy0xLjQgMS40Mzd6bS03Ljc5Mi0xLjQzN2MwLS43OTkuNjItMS40NDcgMS40LTEuNDQ3Ljc4IDAgMS40MTIuNjQ4IDEuNDEyIDEuNDQ3IDAgLjc4OS0uNjMyIDEuNDM3LTEuNDEyIDEuNDM3LS43OCAwLTEuNC0uNjQ4LTEuNC0xLjQzN3pNMi44MSAwQzEuMjYzIDAgMCAxLjI5NyAwIDIuODg1djI3LjkzMmMwIDEuNTg4IDEuMjYyIDIuODcgMi44MSAyLjg3aDIwLjEzNHYzLjg0N2wtNy40MDkuOTIyYy0uOTUxLjExOC0xLjYyNyAxLjAwNS0xLjUxMiAxLjk4LjEwNi45Ljg1NiAxLjU2NCAxLjcyIDEuNTY0LjA3IDAgLjEzOS0uMDA1LjIxLS4wMTRsOC41NDYtMS4wNjMgOC41NDggMS4wNjNjLjA3MS4wMDkuMTQyLjAxNC4yMS4wMTQuODY2IDAgMS42MTQtLjY2MyAxLjcyLTEuNTY1LjExNS0uOTc0LS41Ni0xLjg2LTEuNTEyLTEuOTc5bC03LjA1Mi0uODc4di0zLjg5aDE5Ljc3NWMxLjU0OSAwIDIuODEyLTEuMjgzIDIuODEyLTIuODcxVjIuODg1QzQ5IDEuMjk3IDQ3LjczNyAwIDQ2LjE4OCAwSDIuODExeiIgbWFzaz0idXJsKCNiKSIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/social-share.svg":
/*!*********************************************!*\
  !*** ./src/app/assets/svg/social-share.svg ***!
  \*********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSocialShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "social-share_svg__a",
  d: "M0 0h38v41H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "social-share_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#social-share_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M30.737 35.49c-1.173 0-2.132-1.032-2.132-2.3 0-1.26.96-2.29 2.132-2.29 1.179 0 2.138 1.03 2.138 2.29 0 1.268-.959 2.3-2.138 2.3M7.257 23.395c-1.179 0-2.131-1.03-2.131-2.299 0-1.266.952-2.292 2.13-2.292 1.18 0 2.139 1.026 2.139 2.292 0 1.268-.96 2.299-2.139 2.299m23.48-17.886c1.18 0 2.14 1.032 2.14 2.3 0 1.26-.96 2.291-2.14 2.291-1.172 0-2.13-1.031-2.13-2.292 0-1.267.958-2.299 2.13-2.299M25.55 27.742l-11.063-5.894a8.246 8.246 0 00-.146-2.453l11.221-6.12c1.317 1.442 3.154 2.336 5.176 2.336C34.74 15.61 38 12.113 38 7.808S34.741 0 30.737 0c-4.003 0-7.256 3.503-7.256 7.808 0 .137.005.28.01.416l-11.993 6.548a6.851 6.851 0 00-4.242-1.479C3.252 13.293 0 16.791 0 21.096c0 4.306 3.252 7.809 7.256 7.809 1.92 0 3.664-.802 4.958-2.112l11.278 6.001a9.23 9.23 0 00-.01.397c0 4.306 3.252 7.809 7.255 7.809S38 37.497 38 33.19c0-4.304-3.259-7.802-7.263-7.802-2.033 0-3.871.902-5.188 2.354z",
  mask: "url(#social-share_svg__b)"
}));

function SvgSocialShare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 38,
    height: 41
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzgiIGhlaWdodD0iNDEiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGgzOHY0MUgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0MjczQjkiIGQ9Ik0zMC43MzcgMzUuNDljLTEuMTczIDAtMi4xMzItMS4wMzItMi4xMzItMi4zIDAtMS4yNi45Ni0yLjI5IDIuMTMyLTIuMjkgMS4xNzkgMCAyLjEzOCAxLjAzIDIuMTM4IDIuMjkgMCAxLjI2OC0uOTU5IDIuMy0yLjEzOCAyLjNNNy4yNTcgMjMuMzk1Yy0xLjE3OSAwLTIuMTMxLTEuMDMtMi4xMzEtMi4yOTkgMC0xLjI2Ni45NTItMi4yOTIgMi4xMy0yLjI5MiAxLjE4IDAgMi4xMzkgMS4wMjYgMi4xMzkgMi4yOTIgMCAxLjI2OC0uOTYgMi4yOTktMi4xMzkgMi4yOTltMjMuNDgtMTcuODg2YzEuMTggMCAyLjE0IDEuMDMyIDIuMTQgMi4zIDAgMS4yNi0uOTYgMi4yOTEtMi4xNCAyLjI5MS0xLjE3MiAwLTIuMTMtMS4wMzEtMi4xMy0yLjI5MiAwLTEuMjY3Ljk1OC0yLjI5OSAyLjEzLTIuMjk5TTI1LjU1IDI3Ljc0MmwtMTEuMDYzLTUuODk0YTguMjQ2IDguMjQ2IDAgMDAtLjE0Ni0yLjQ1M2wxMS4yMjEtNi4xMmMxLjMxNyAxLjQ0MiAzLjE1NCAyLjMzNiA1LjE3NiAyLjMzNkMzNC43NCAxNS42MSAzOCAxMi4xMTMgMzggNy44MDhTMzQuNzQxIDAgMzAuNzM3IDBjLTQuMDAzIDAtNy4yNTYgMy41MDMtNy4yNTYgNy44MDggMCAuMTM3LjAwNS4yOC4wMS40MTZsLTExLjk5MyA2LjU0OGE2Ljg1MSA2Ljg1MSAwIDAwLTQuMjQyLTEuNDc5QzMuMjUyIDEzLjI5MyAwIDE2Ljc5MSAwIDIxLjA5NmMwIDQuMzA2IDMuMjUyIDcuODA5IDcuMjU2IDcuODA5IDEuOTIgMCAzLjY2NC0uODAyIDQuOTU4LTIuMTEybDExLjI3OCA2LjAwMWE5LjIzIDkuMjMgMCAwMC0uMDEuMzk3YzAgNC4zMDYgMy4yNTIgNy44MDkgNy4yNTUgNy44MDlDMzQuNzQgNDEgMzggMzcuNDk3IDM4IDMzLjE5YzAtNC4zMDQtMy4yNTktNy44MDItNy4yNjMtNy44MDItMi4wMzMgMC0zLjg3MS45MDItNS4xODggMi4zNTR6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/spinner.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/spinner.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "spinner_svg__a",
  x1: "8.042%",
  x2: "65.682%",
  y1: "0%",
  y2: "23.865%"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: "0%",
  stopOpacity: 0
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: "63.146%",
  stopOpacity: 0.631
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: "100%"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  transform: "translate(1 1)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "url(#spinner_svg__a)",
  strokeWidth: 2,
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("animateTransform", {
  attributeName: "transform",
  dur: "0.9s",
  from: "0 18 18",
  repeatCount: "indefinite",
  to: "360 18 18",
  type: "rotate"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 36,
  cy: 18,
  r: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("animateTransform", {
  attributeName: "transform",
  dur: "0.9s",
  from: "0 18 18",
  repeatCount: "indefinite",
  to: "360 18 18",
  type: "rotate"
})));

function SvgSpinner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38 38"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCAzOCI+PGRlZnMvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjguMDQyJSIgeDI9IjY1LjY4MiUiIHkxPSIwJSIgeTI9IjIzLjg2NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iNjMuMTQ2JSIgc3RvcC1vcGFjaXR5PSIuNjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBkdXI9IjAuOXMiIGZyb209IjAgMTggMTgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB0bz0iMzYwIDE4IDE4IiB0eXBlPSJyb3RhdGUiLz48L3BhdGg+PGNpcmNsZSBjeD0iMzYiIGN5PSIxOCIgcj0iMSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBkdXI9IjAuOXMiIGZyb209IjAgMTggMTgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB0bz0iMzYwIDE4IDE4IiB0eXBlPSJyb3RhdGUiLz48L2NpcmNsZT48L2c+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/static-page.svg":
/*!********************************************!*\
  !*** ./src/app/assets/svg/static-page.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgStaticPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "static-page_svg__a",
  d: "M0 .715h93.722V59H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "static-page_svg__c",
  d: "M0 .909h93.722v16.669H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "static-page_svg__e",
  d: "M0 76h94V1H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 100,
  height: 81,
  fill: "#E6E6E6",
  rx: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(3 2)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(0 17)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "static-page_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#static-page_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M93.722 55.684A3.31 3.31 0 0190.419 59H3.309a3.314 3.314 0 01-3.31-3.313V.715h93.723v54.969z",
  mask: "url(#static-page_svg__b)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "static-page_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#static-page_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F2F2F2",
  d: "M93.722 17.578H-.001V4.177C0 2.374 1.478.909 3.304.909h87.111c1.826 0 3.307 1.46 3.307 3.262v13.407z",
  mask: "url(#static-page_svg__d)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "static-page_svg__f",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#static-page_svg__e"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M47 36h41v-3H47z",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M6 45h36V25H6z",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M47 42h26v-3H47zm0-12h41v-3H47zM6 62h41v-3H6z",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F9B11D",
  d: "M52 71h36V51H52z",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#D7DBE0",
  d: "M6 68h26v-3H6zm0-12h41v-3H6z",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#EA6552",
  d: "M8 7a3 3 0 110 6 3 3 0 010-6",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F9B11D",
  d: "M17 7a3 3 0 110 6 3 3 0 010-6",
  mask: "url(#static-page_svg__f)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#70C9E9",
  d: "M25 7a3 3 0 110 6 3 3 0 010-6",
  mask: "url(#static-page_svg__f)"
})));

function SvgStaticPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 100,
    height: 81
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgxIj48ZGVmcy8+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC43MTVoOTMuNzIyVjU5SDB6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0wIC45MDloOTMuNzIydjE2LjY2OUgweiIvPjxwYXRoIGlkPSJlIiBkPSJNMCA3Nmg5NFYxSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSI4MSIgZmlsbD0iI0U2RTZFNiIgcng9IjEiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDIpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE3KSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTkzLjcyMiA1NS42ODRBMy4zMSAzLjMxIDAgMDE5MC40MTkgNTlIMy4zMDlhMy4zMTQgMy4zMTQgMCAwMS0zLjMxLTMuMzEzVi43MTVoOTMuNzIzdjU0Ljk2OXoiIG1hc2s9InVybCgjYikiLz48L2c+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTkzLjcyMiAxNy41NzhILS4wMDFWNC4xNzdDMCAyLjM3NCAxLjQ3OC45MDkgMy4zMDQuOTA5SDkwLjQxNWMxLjgyNiAwIDMuMzA3IDEuNDYgMy4zMDcgMy4yNjJ2MTMuNDA3eiIgbWFzaz0idXJsKCNkKSIvPjxtYXNrIGlkPSJmIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNlIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik00NyAzNmg0MXYtM0g0N3oiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBkPSJNNiA0NWgzNlYyNUg2eiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNEN0RCRTAiIGQ9Ik00NyA0MmgyNnYtM0g0N3pNNDcgMzBoNDF2LTNINDd6TTYgNjJoNDF2LTNINnoiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjRjlCMTFEIiBkPSJNNTIgNzFoMzZWNTFINTJ6IiBtYXNrPSJ1cmwoI2YpIi8+PHBhdGggZmlsbD0iI0Q3REJFMCIgZD0iTTYgNjhoMjZ2LTNINnpNNiA1Nmg0MXYtM0g2eiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiNFQTY1NTIiIGQ9Ik04IDdhMyAzIDAgMTEwIDYgMyAzIDAgMDEwLTYiIG1hc2s9InVybCgjZikiLz48cGF0aCBmaWxsPSIjRjlCMTFEIiBkPSJNMTcgN2EzIDMgMCAxMTAgNiAzIDMgMCAwMTAtNiIgbWFzaz0idXJsKCNmKSIvPjxwYXRoIGZpbGw9IiM3MEM5RTkiIGQ9Ik0yNSA3YTMgMyAwIDExMCA2IDMgMyAwIDAxMC02IiBtYXNrPSJ1cmwoI2YpIi8+PC9nPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/success.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/success.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSuccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#545454",
  d: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 1.935A8.06 8.06 0 0118.065 10 8.06 8.06 0 0110 18.065 8.06 8.06 0 011.935 10 8.06 8.06 0 0110 1.935zm5.653 5.253l-.908-.916a.484.484 0 00-.685-.003l-5.7 5.654-2.41-2.43a.484.484 0 00-.685-.003l-.916.909a.484.484 0 00-.002.684l3.66 3.69c.188.19.495.191.684.003l6.96-6.903a.484.484 0 00.002-.685z"
});

function SvgSuccess(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 20 20"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcy8+PHBhdGggZmlsbD0iIzU0NTQ1NCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAgMEM0LjQ3NyAwIDAgNC40NzcgMCAxMHM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMFMxNS41MjMgMCAxMCAwem0wIDEuOTM1QTguMDYgOC4wNiAwIDAxMTguMDY1IDEwIDguMDYgOC4wNiAwIDAxMTAgMTguMDY1IDguMDYgOC4wNiAwIDAxMS45MzUgMTAgOC4wNiA4LjA2IDAgMDExMCAxLjkzNXptNS42NTMgNS4yNTNsLS45MDgtLjkxNmEuNDg0LjQ4NCAwIDAwLS42ODUtLjAwM2wtNS43IDUuNjU0LTIuNDEtMi40M2EuNDg0LjQ4NCAwIDAwLS42ODUtLjAwM2wtLjkxNi45MDlhLjQ4NC40ODQgMCAwMC0uMDAyLjY4NGwzLjY2IDMuNjljLjE4OC4xOS40OTUuMTkxLjY4NC4wMDNsNi45Ni02LjkwM2EuNDg0LjQ4NCAwIDAwLjAwMi0uNjg1eiIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./src/app/assets/svg/telescope.svg":
/*!******************************************!*\
  !*** ./src/app/assets/svg/telescope.svg ***!
  \******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgTelescope; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "telescope_svg__a",
  d: "M0 0h67.997v59.997H0z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4273B9",
  d: "M1 3h65v55H1z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "telescope_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#telescope_svg__a"
}));

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M62.186 22.912l-2.073.877a.802.802 0 01-1.053-.43L51.788 6.007a.81.81 0 01.428-1.057l2.074-.878a.802.802 0 011.052.431l7.273 17.351a.809.809 0 01-.429 1.058zm-7.573.336l-12.25 5.184c-1.552-3.702-5.797-5.439-9.48-3.88-3.685 1.56-5.413 5.824-3.862 9.526l-.914.387a2.614 2.614 0 01-3.43-1.404l-3.9-9.305a2.636 2.636 0 011.397-3.446L48.681 9.094a2.614 2.614 0 013.43 1.403l3.9 9.305a2.636 2.636 0 01-1.398 3.446zm-9.011 31.5a1.337 1.337 0 01-1.746-.739l-7.168-17.678a5.03 5.03 0 01-1.765.07l-7.14 17.608a1.337 1.337 0 01-1.745.739 1.348 1.348 0 01-.735-1.754l7.15-17.633a5.128 5.128 0 01-1.578-2.068c-1.1-2.624.126-5.647 2.737-6.753a5.122 5.122 0 016.721 2.75 5.175 5.175 0 01-1.256 5.799l7.26 17.905a1.348 1.348 0 01-.735 1.754zM21.738 32.33l-8.963 3.793a.893.893 0 01-1.171-.479l-1.857-4.428a.9.9 0 01.477-1.177l8.964-3.794a.893.893 0 011.171.48l1.857 4.428a.9.9 0 01-.478 1.177zm-11.083 6.871l-1.605.679a.771.771 0 01-1.011-.414l-3.67-8.755a.777.777 0 01.412-1.017l1.604-.678a.771.771 0 011.012.414l3.67 8.755a.777.777 0 01-.412 1.016zM0 59.997h67.997V0H0v59.997z",
  mask: "url(#telescope_svg__b)"
});

function SvgTelescope(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 68,
    height: 60
  }, props), _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    style: {
      mixBlendMode: "multiply"
    }
  }, _ref2, _ref3, _ref4));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjgiIGhlaWdodD0iNjAiPjxkZWZzLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGg2Ny45OTd2NTkuOTk3SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij48cGF0aCBmaWxsPSIjNDI3M0I5IiBkPSJNMSAzaDY1djU1SDF6Ii8+PGc+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYyLjE4NiAyMi45MTJsLTIuMDczLjg3N2EuODAyLjgwMiAwIDAxLTEuMDUzLS40M0w1MS43ODggNi4wMDdhLjgxLjgxIDAgMDEuNDI4LTEuMDU3bDIuMDc0LS44NzhhLjgwMi44MDIgMCAwMTEuMDUyLjQzMWw3LjI3MyAxNy4zNTFhLjgwOS44MDkgMCAwMS0uNDI5IDEuMDU4em0tNy41NzMuMzM2bC0xMi4yNSA1LjE4NGMtMS41NTItMy43MDItNS43OTctNS40MzktOS40OC0zLjg4LTMuNjg1IDEuNTYtNS40MTMgNS44MjQtMy44NjIgOS41MjZsLS45MTQuMzg3YTIuNjE0IDIuNjE0IDAgMDEtMy40My0xLjQwNGwtMy45LTkuMzA1YTIuNjM2IDIuNjM2IDAgMDExLjM5Ny0zLjQ0Nkw0OC42ODEgOS4wOTRhMi42MTQgMi42MTQgMCAwMTMuNDMgMS40MDNsMy45IDkuMzA1YTIuNjM2IDIuNjM2IDAgMDEtMS4zOTggMy40NDZ6bS05LjAxMSAzMS41YTEuMzM3IDEuMzM3IDAgMDEtMS43NDYtLjczOWwtNy4xNjgtMTcuNjc4Yy0uNTkuMTI5LTEuMTg3LjE1LTEuNzY1LjA3bC03LjE0IDE3LjYwOGExLjMzNyAxLjMzNyAwIDAxLTEuNzQ1LjczOSAxLjM0OCAxLjM0OCAwIDAxLS43MzUtMS43NTRsNy4xNS0xNy42MzNhNS4xMjggNS4xMjggMCAwMS0xLjU3OC0yLjA2OGMtMS4xLTIuNjI0LjEyNi01LjY0NyAyLjczNy02Ljc1M2E1LjEyMiA1LjEyMiAwIDAxNi43MjEgMi43NSA1LjE3NSA1LjE3NSAwIDAxLTEuMjU2IDUuNzk5bDcuMjYgMTcuOTA1YTEuMzQ4IDEuMzQ4IDAgMDEtLjczNSAxLjc1NHpNMjEuNzM4IDMyLjMzbC04Ljk2MyAzLjc5M2EuODkzLjg5MyAwIDAxLTEuMTcxLS40NzlsLTEuODU3LTQuNDI4YS45LjkgMCAwMS40NzctMS4xNzdsOC45NjQtMy43OTRhLjg5My44OTMgMCAwMTEuMTcxLjQ4bDEuODU3IDQuNDI4YS45LjkgMCAwMS0uNDc4IDEuMTc3em0tMTEuMDgzIDYuODcxbC0xLjYwNS42NzlhLjc3MS43NzEgMCAwMS0xLjAxMS0uNDE0bC0zLjY3LTguNzU1YS43NzcuNzc3IDAgMDEuNDEyLTEuMDE3bDEuNjA0LS42NzhhLjc3MS43NzEgMCAwMTEuMDEyLjQxNGwzLjY3IDguNzU1YS43NzcuNzc3IDAgMDEtLjQxMiAxLjAxNnpNMCA1OS45OTdoNjcuOTk3VjBIMHY1OS45OTd6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/tractor.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/tractor.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgTractor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "tractor_svg__a",
  d: "M0 92.5c0 51.086 41.414 92.501 92.501 92.501 51.085 0 92.499-41.415 92.499-92.501C185 41.415 143.586 0 92.501 0 41.414 0 0 41.415 0 92.5z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#49C0B7",
  d: "M92.5 185c51.086 0 92.5-41.414 92.5-92.5S143.586 0 92.5 0 0 41.414 0 92.5 41.414 185 92.5 185"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
  id: "tractor_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  xlinkHref: "#tractor_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4686C6",
  d: "M-5 190h195V-5H-5z",
  mask: "url(#tractor_svg__b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M107.771 126.684a1.897 1.897 0 01-1.884 1.889 1.888 1.888 0 01-1.887-1.889V87.887c0-1.044.838-1.887 1.887-1.887a1.89 1.89 0 011.884 1.887v38.797z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M121.306 61.795c-2.613-23.221-14.702-48.269-14.946-48.771V13l-.007.019-.01-.019v.024c-.234.502-12.33 25.55-14.947 48.771-3.276 29.084 14.83 28.372 14.957 28.357.124.015 18.23.727 14.953-28.357"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M121.041 61.795c-2.613-23.221-14.702-48.269-14.946-48.771V13l-.007.019-.011-.019v.024c-.011.017-.037.084-.077.166v76.962h.088c.124.015 18.229.727 14.953-28.357"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M85.455 127.383c0 .957-.77 1.73-1.723 1.73a1.725 1.725 0 01-1.732-1.73v-35.65c0-.963.768-1.733 1.732-1.733.953 0 1.723.77 1.723 1.733v35.65z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M96.839 67.823C94.432 46.5 83.333 23.483 83.108 23.021V23l-.006.008-.007-.008v.021c-.226.462-11.33 23.479-13.731 44.802-3.008 26.729 13.622 26.07 13.738 26.057.117.013 16.743.672 13.737-26.057"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M96.813 67.823C94.406 46.5 83.307 23.483 83.082 23.021V23l-.006.008-.007-.008v.021c-.01.013-.036.077-.069.154V93.88h.069c.124.013 16.75.672 13.744-26.057"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#7AAB4C",
  d: "M75.203 80.968a.979.979 0 01-.979.984h-2.252a.974.974 0 01-.972-.984.97.97 0 01.972-.968h2.252c.542 0 .979.437.979.968"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M145.51 131.062c0 .689-.566 1.257-1.254 1.257a1.258 1.258 0 01-1.256-1.257v-25.808a1.256 1.256 0 012.51 0v25.808z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBB21F",
  d: "M154.158 87.459c-1.736-15.446-9.779-32.109-9.942-32.444V55l-.003.013-.007-.013v.015c-.156.335-8.203 16.998-9.942 32.444-2.182 19.347 9.864 18.873 9.95 18.863.081.01 12.124.484 9.944-18.863"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M154.004 87.459c-1.736-15.446-9.779-32.109-9.942-32.444V55l-.003.013-.007-.013v.015c-.008.012-.024.057-.052.111v51.196h.059c.082.01 12.125.484 9.945-18.863"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M112.957 107.224a2.928 2.928 0 01-3.829 1.564l-.337-.144a2.923 2.923 0 01-1.563-3.826l4.21-10.026a2.92 2.92 0 013.826-1.563l.338.141a2.922 2.922 0 011.562 3.828l-4.207 10.026zm-56.293-2.408l.002-7.988c0-1.449-.813-2.695-2-3.347l.002-5.65 4.375.001 1.198-3.83L52.753 84a1.912 1.912 0 00-1.917 1.916l-.002 7.655a3.825 3.825 0 00-1.831 3.256L49 104.814l7.664.002z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M49.001 103L49 104.616l7.664.002.001-1.616z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#68CBE4",
  d: "M88.119 104.448l11.807-27.683 21.182.005 3.924 27.686-36.913-.008zm41.34-1.132L124.135 73l-26.319.325-14.502 30.815-26.484-.005v-.011l-7.663-.002v.01l-2.834-.001s-1.998.664-2.166 5.331c-.166 4.666-.167 12.66-.167 12.66l.082 3.022A17.333 17.333 0 0154 122.045c7.822.001 14.441 5.15 16.649 12.242l20.465.006a23.797 23.797 0 01-.089-1.987c.002-13.26 10.754-24.007 24.015-24.004 9.056.003 16.935 5.02 21.024 12.426-.319-5.191-1.976-11.324-6.605-17.412z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M70 133c.155.395.3.791.425 1.194l20.466.006a26.159 26.159 0 01-.07-1.195L70 133z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M69.336 133.672l-6.82 3.165-15.472-5.853L44 124.526s4.996-4.138 14.253-1.822c9.259 2.317 10.354 8.286 11.083 10.968m22.261-.626l3.897.001 27.168.006 12.492-12.486s-4.326-10.417-12.854-12.002c-8.525-1.586-22.291-.248-27.776 9.374-5.488 9.625-2.927 15.107-2.927 15.107"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#DCE3E9",
  d: "M65.138 111.725l-17.777-.004a1.36 1.36 0 110-2.721l17.777.003a1.361 1.361 0 010 2.722m11.288 5.086c-.422.238-.895.192-1.063-.1l-4.305-7.6c-.166-.292.038-.721.458-.957.418-.239.89-.195 1.056.099l4.309 7.601c.164.293-.04.722-.455.957m4.997.003c-.418.233-.89.19-1.06-.104l-4.305-7.6c-.166-.293.039-.722.456-.959.418-.237.893-.19 1.057.101l4.309 7.6c.167.294-.04.723-.457.962m4.998 0c-.415.234-.89.19-1.056-.104l-4.308-7.6c-.165-.293.037-.722.458-.958.418-.237.891-.191 1.057.1l4.308 7.6c.165.294-.039.723-.459.962"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ECECEC",
  d: "M69.115 134.464c-1.67-6.795-6.511-9.431-8.578-10.553l-.141-.077c-9.328-4.473-16.673 1.56-16.98 1.819L42 123.98c.349-.3 8.703-7.22 19.395-2.1l.193.104c2.118 1.152 7.755 4.22 9.657 11.958l-2.13.52zm20.167.929c-.036-.17-3.398-17.165 14.078-26.712l.067-.032c8.311-4.003 17.316-3.454 25.344 1.543l.351.246c2.566 1.81 4.42 3.114 8.543 10.174l-2.524 1.475c-3.804-6.509-5.356-7.605-7.704-9.26l-.247-.174c-7.23-4.488-14.997-4.967-22.464-1.386-15.483 8.48-12.709 22.913-12.58 23.523l-2.864.603z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M66.89 146.878s1.88-2.295 1.628-4.67l-2.505-2.141c.036-.607.026-1.208-.032-1.803l2.563-2.231s-.218-2.962-2.042-4.503l-3.306.177c-.35-.41-.731-.798-1.14-1.155l.244-3.527s-2.247-1.936-4.63-1.737l-2.122 2.367a11.647 11.647 0 00-2.433-.02L50.713 125s-2.951.293-4.452 2.15l.255 3.303a12.05 12.05 0 00-1.38 1.405l-3.484-.156s-1.883 2.294-1.628 4.671l2.444 2.091c-.057.7-.047 1.405.023 2.094l-2.442 2.122s.222 2.958 2.045 4.504l3.136-.171c.465.544.977 1.052 1.54 1.511l-.238 3.373s2.25 1.935 4.634 1.738l2.228-2.481a11.4 11.4 0 002.179-.05l2.257 2.474s2.953-.289 4.452-2.151l-.248-3.188c.52-.457 1.003-.966 1.44-1.52l3.417.159z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ECECEC",
  d: "M51.348 145.67a7.11 7.11 0 01-3.784-9.321 7.118 7.118 0 019.326-3.786 7.115 7.115 0 01-5.542 13.107"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#939597",
  d: "M55.299 140.387a1.718 1.718 0 01-3.164-1.337 1.72 1.72 0 012.252-.915 1.72 1.72 0 01.912 2.252"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004B75",
  d: "M133.509 143.74s2.841-3.335 2.53-6.85l-3.637-3.23c.068-.891.069-1.782.002-2.662l3.848-3.226s-.244-4.371-2.895-6.704l-4.886.176a17.826 17.826 0 00-1.649-1.742l.457-5.196s-3.265-2.92-6.787-2.695l-3.202 3.442a17.151 17.151 0 00-3.591-.101l-3.47-3.952s-4.367.347-6.636 3.054l.291 4.877a17.506 17.506 0 00-2.077 2.045l-5.141-.333s-2.838 3.333-2.528 6.853l3.547 3.149a17.423 17.423 0 00-.027 3.097L94 136.806s.242 4.374 2.894 6.705l4.638-.167c.666.819 1.41 1.58 2.231 2.274l-.443 4.974s3.265 2.921 6.789 2.691l3.354-3.602c1.078.098 2.159.093 3.224-.012l3.262 3.715s4.366-.347 6.633-3.054l-.28-4.711a17.32 17.32 0 002.168-2.205l5.039.326z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ECECEC",
  d: "M110.24 142.109c-5.302-2.358-7.689-8.566-5.33-13.868 2.356-5.302 8.566-7.69 13.868-5.332 5.3 2.357 7.69 8.568 5.33 13.871-2.357 5.301-8.568 7.683-13.868 5.329"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#939597",
  d: "M116.855 133.566a2.538 2.538 0 01-4.636-2.06 2.538 2.538 0 014.636 2.06"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ECECEC",
  d: "M91.758 60.93a5.93 5.93 0 01-5.929 5.927l-7.905-.003A5.926 5.926 0 0172 60.925 5.925 5.925 0 0177.927 55l7.906.002a5.928 5.928 0 015.925 5.928M76.067 78.715a4.71 4.71 0 01-4.71 4.71l-3.649-.001A4.712 4.712 0 0167.711 74l3.648.002a4.71 4.71 0 014.708 4.713"
}));

function SvgTractor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 185,
    height: 186
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg1IiBoZWlnaHQ9IjE4NiI+PGRlZnMvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCA5Mi41YzAgNTEuMDg2IDQxLjQxNCA5Mi41MDEgOTIuNTAxIDkyLjUwMSA1MS4wODUgMCA5Mi40OTktNDEuNDE1IDkyLjQ5OS05Mi41MDFDMTg1IDQxLjQxNSAxNDMuNTg2IDAgOTIuNTAxIDAgNDEuNDE0IDAgMCA0MS40MTUgMCA5Mi41eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM0OUMwQjciIGQ9Ik05Mi41IDE4NWM1MS4wODYgMCA5Mi41LTQxLjQxNCA5Mi41LTkyLjVTMTQzLjU4NiAwIDkyLjUgMCAwIDQxLjQxNCAwIDkyLjUgNDEuNDE0IDE4NSA5Mi41IDE4NSIvPjxnPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiM0Njg2QzYiIGQ9Ik0tNSAxOTBoMTk1Vi01SC01eiIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBmaWxsPSIjMDA0Qjc1IiBkPSJNMTA3Ljc3MSAxMjYuNjg0YTEuODk3IDEuODk3IDAgMDEtMS44ODQgMS44ODkgMS44ODggMS44ODggMCAwMS0xLjg4Ny0xLjg4OVY4Ny44ODdjMC0xLjA0NC44MzgtMS44ODcgMS44ODctMS44ODdhMS44OSAxLjg5IDAgMDExLjg4NCAxLjg4N3YzOC43OTd6Ii8+PHBhdGggZmlsbD0iI0ZCQjIxRiIgZD0iTTEyMS4zMDYgNjEuNzk1Yy0yLjYxMy0yMy4yMjEtMTQuNzAyLTQ4LjI2OS0xNC45NDYtNDguNzcxVjEzbC0uMDA3LjAxOS0uMDEtLjAxOXYuMDI0Yy0uMjM0LjUwMi0xMi4zMyAyNS41NS0xNC45NDcgNDguNzcxLTMuMjc2IDI5LjA4NCAxNC44MyAyOC4zNzIgMTQuOTU3IDI4LjM1Ny4xMjQuMDE1IDE4LjIzLjcyNyAxNC45NTMtMjguMzU3Ii8+PHBhdGggZmlsbD0iI0RDRTNFOSIgZD0iTTEyMS4wNDEgNjEuNzk1Yy0yLjYxMy0yMy4yMjEtMTQuNzAyLTQ4LjI2OS0xNC45NDYtNDguNzcxVjEzbC0uMDA3LjAxOS0uMDExLS4wMTl2LjAyNGMtLjAxMS4wMTctLjAzNy4wODQtLjA3Ny4xNjZ2NzYuOTYyaC4wODhjLjEyNC4wMTUgMTguMjI5LjcyNyAxNC45NTMtMjguMzU3Ii8+PHBhdGggZmlsbD0iIzAwNEI3NSIgZD0iTTg1LjQ1NSAxMjcuMzgzYzAgLjk1Ny0uNzcgMS43My0xLjcyMyAxLjczYTEuNzI1IDEuNzI1IDAgMDEtMS43MzItMS43M3YtMzUuNjVjMC0uOTYzLjc2OC0xLjczMyAxLjczMi0xLjczMy45NTMgMCAxLjcyMy43NyAxLjcyMyAxLjczM3YzNS42NXoiLz48cGF0aCBmaWxsPSIjRkJCMjFGIiBkPSJNOTYuODM5IDY3LjgyM0M5NC40MzIgNDYuNSA4My4zMzMgMjMuNDgzIDgzLjEwOCAyMy4wMjFWMjNsLS4wMDYuMDA4LS4wMDctLjAwOHYuMDIxYy0uMjI2LjQ2Mi0xMS4zMyAyMy40NzktMTMuNzMxIDQ0LjgwMi0zLjAwOCAyNi43MjkgMTMuNjIyIDI2LjA3IDEzLjczOCAyNi4wNTcuMTE3LjAxMyAxNi43NDMuNjcyIDEzLjczNy0yNi4wNTciLz48cGF0aCBmaWxsPSIjRENFM0U5IiBkPSJNOTYuODEzIDY3LjgyM0M5NC40MDYgNDYuNSA4My4zMDcgMjMuNDgzIDgzLjA4MiAyMy4wMjFWMjNsLS4wMDYuMDA4LS4wMDctLjAwOHYuMDIxYy0uMDEuMDEzLS4wMzYuMDc3LS4wNjkuMTU0VjkzLjg4aC4wNjljLjEyNC4wMTMgMTYuNzUuNjcyIDEzLjc0NC0yNi4wNTciLz48cGF0aCBmaWxsPSIjN0FBQjRDIiBkPSJNNzUuMjAzIDgwLjk2OGEuOTc5Ljk3OSAwIDAxLS45NzkuOTg0aC0yLjI1MmEuOTc0Ljk3NCAwIDAxLS45NzItLjk4NC45Ny45NyAwIDAxLjk3Mi0uOTY4aDIuMjUyYy41NDIgMCAuOTc5LjQzNy45NzkuOTY4Ii8+PHBhdGggZmlsbD0iIzAwNEI3NSIgZD0iTTE0NS41MSAxMzEuMDYyYzAgLjY4OS0uNTY2IDEuMjU3LTEuMjU0IDEuMjU3YTEuMjU4IDEuMjU4IDAgMDEtMS4yNTYtMS4yNTd2LTI1LjgwOGExLjI1NiAxLjI1NiAwIDAxMi41MSAwdjI1LjgwOHoiLz48cGF0aCBmaWxsPSIjRkJCMjFGIiBkPSJNMTU0LjE1OCA4Ny40NTljLTEuNzM2LTE1LjQ0Ni05Ljc3OS0zMi4xMDktOS45NDItMzIuNDQ0VjU1bC0uMDAzLjAxMy0uMDA3LS4wMTN2LjAxNWMtLjE1Ni4zMzUtOC4yMDMgMTYuOTk4LTkuOTQyIDMyLjQ0NC0yLjE4MiAxOS4zNDcgOS44NjQgMTguODczIDkuOTUgMTguODYzLjA4MS4wMSAxMi4xMjQuNDg0IDkuOTQ0LTE4Ljg2MyIvPjxwYXRoIGZpbGw9IiNEQ0UzRTkiIGQ9Ik0xNTQuMDA0IDg3LjQ1OWMtMS43MzYtMTUuNDQ2LTkuNzc5LTMyLjEwOS05Ljk0Mi0zMi40NDRWNTVsLS4wMDMuMDEzLS4wMDctLjAxM3YuMDE1Yy0uMDA4LjAxMi0uMDI0LjA1Ny0uMDUyLjExMXY1MS4xOTZoLjA1OWMuMDgyLjAxIDEyLjEyNS40ODQgOS45NDUtMTguODYzIi8+PHBhdGggZmlsbD0iIzAwNEI3NSIgZD0iTTExMi45NTcgMTA3LjIyNGEyLjkyOCAyLjkyOCAwIDAxLTMuODI5IDEuNTY0bC0uMzM3LS4xNDRhMi45MjMgMi45MjMgMCAwMS0xLjU2My0zLjgyNmw0LjIxLTEwLjAyNmEyLjkyIDIuOTIgMCAwMTMuODI2LTEuNTYzbC4zMzguMTQxYTIuOTIyIDIuOTIyIDAgMDExLjU2MiAzLjgyOGwtNC4yMDcgMTAuMDI2ek01Ni42NjQgMTA0LjgxNmwuMDAyLTcuOTg4YzAtMS40NDktLjgxMy0yLjY5NS0yLTMuMzQ3bC4wMDItNS42NSA0LjM3NS4wMDEgMS4xOTgtMy44M0w1Mi43NTMgODRhMS45MTIgMS45MTIgMCAwMC0xLjkxNyAxLjkxNmwtLjAwMiA3LjY1NWEzLjgyNSAzLjgyNSAwIDAwLTEuODMxIDMuMjU2TDQ5IDEwNC44MTRsNy42NjQuMDAyeiIvPjxwYXRoIGZpbGw9IiNEQ0UzRTkiIGQ9Ik00OS4wMDEgMTAzTDQ5IDEwNC42MTZsNy42NjQuMDAyLjAwMS0xLjYxNnoiLz48cGF0aCBmaWxsPSIjNjhDQkU0IiBkPSJNODguMTE5IDEwNC40NDhsMTEuODA3LTI3LjY4MyAyMS4xODIuMDA1IDMuOTI0IDI3LjY4Ni0zNi45MTMtLjAwOHptNDEuMzQtMS4xMzJMMTI0LjEzNSA3M2wtMjYuMzE5LjMyNS0xNC41MDIgMzAuODE1LTI2LjQ4NC0uMDA1di0uMDExbC03LjY2My0uMDAydi4wMWwtMi44MzQtLjAwMXMtMS45OTguNjY0LTIuMTY2IDUuMzMxYy0uMTY2IDQuNjY2LS4xNjcgMTIuNjYtLjE2NyAxMi42NmwuMDgyIDMuMDIyQTE3LjMzMyAxNy4zMzMgMCAwMTU0IDEyMi4wNDVjNy44MjIuMDAxIDE0LjQ0MSA1LjE1IDE2LjY0OSAxMi4yNDJsMjAuNDY1LjAwNmEyMy43OTcgMjMuNzk3IDAgMDEtLjA4OS0xLjk4N2MuMDAyLTEzLjI2IDEwLjc1NC0yNC4wMDcgMjQuMDE1LTI0LjAwNCA5LjA1Ni4wMDMgMTYuOTM1IDUuMDIgMjEuMDI0IDEyLjQyNi0uMzE5LTUuMTkxLTEuOTc2LTExLjMyNC02LjYwNS0xNy40MTJ6Ii8+PHBhdGggZmlsbD0iI0RDRTNFOSIgZD0iTTcwIDEzM2MuMTU1LjM5NS4zLjc5MS40MjUgMS4xOTRsMjAuNDY2LjAwNmEyNi4xNTkgMjYuMTU5IDAgMDEtLjA3LTEuMTk1TDcwIDEzM3oiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNjkuMzM2IDEzMy42NzJsLTYuODIgMy4xNjUtMTUuNDcyLTUuODUzTDQ0IDEyNC41MjZzNC45OTYtNC4xMzggMTQuMjUzLTEuODIyYzkuMjU5IDIuMzE3IDEwLjM1NCA4LjI4NiAxMS4wODMgMTAuOTY4TTkxLjU5NyAxMzMuMDQ2bDMuODk3LjAwMSAyNy4xNjguMDA2IDEyLjQ5Mi0xMi40ODZzLTQuMzI2LTEwLjQxNy0xMi44NTQtMTIuMDAyYy04LjUyNS0xLjU4Ni0yMi4yOTEtLjI0OC0yNy43NzYgOS4zNzQtNS40ODggOS42MjUtMi45MjcgMTUuMTA3LTIuOTI3IDE1LjEwNyIvPjxwYXRoIGZpbGw9IiNEQ0UzRTkiIGQ9Ik02NS4xMzggMTExLjcyNWwtMTcuNzc3LS4wMDRhMS4zNiAxLjM2IDAgMTEwLTIuNzIxbDE3Ljc3Ny4wMDNhMS4zNjEgMS4zNjEgMCAwMTAgMi43MjJNNzYuNDI2IDExNi44MTFjLS40MjIuMjM4LS44OTUuMTkyLTEuMDYzLS4xbC00LjMwNS03LjZjLS4xNjYtLjI5Mi4wMzgtLjcyMS40NTgtLjk1Ny40MTgtLjIzOS44OS0uMTk1IDEuMDU2LjA5OWw0LjMwOSA3LjYwMWMuMTY0LjI5My0uMDQuNzIyLS40NTUuOTU3TTgxLjQyMyAxMTYuODE0Yy0uNDE4LjIzMy0uODkuMTktMS4wNi0uMTA0bC00LjMwNS03LjZjLS4xNjYtLjI5My4wMzktLjcyMi40NTYtLjk1OS40MTgtLjIzNy44OTMtLjE5IDEuMDU3LjEwMWw0LjMwOSA3LjZjLjE2Ny4yOTQtLjA0LjcyMy0uNDU3Ljk2Mk04Ni40MjEgMTE2LjgxNGMtLjQxNS4yMzQtLjg5LjE5LTEuMDU2LS4xMDRsLTQuMzA4LTcuNmMtLjE2NS0uMjkzLjAzNy0uNzIyLjQ1OC0uOTU4LjQxOC0uMjM3Ljg5MS0uMTkxIDEuMDU3LjFsNC4zMDggNy42Yy4xNjUuMjk0LS4wMzkuNzIzLS40NTkuOTYyIi8+PHBhdGggZmlsbD0iI0VDRUNFQyIgZD0iTTY5LjExNSAxMzQuNDY0Yy0xLjY3LTYuNzk1LTYuNTExLTkuNDMxLTguNTc4LTEwLjU1M2wtLjE0MS0uMDc3Yy05LjMyOC00LjQ3My0xNi42NzMgMS41Ni0xNi45OCAxLjgxOUw0MiAxMjMuOThjLjM0OS0uMyA4LjcwMy03LjIyIDE5LjM5NS0yLjFsLjE5My4xMDRjMi4xMTggMS4xNTIgNy43NTUgNC4yMiA5LjY1NyAxMS45NThsLTIuMTMuNTJ6TTg5LjI4MiAxMzUuMzkzYy0uMDM2LS4xNy0zLjM5OC0xNy4xNjUgMTQuMDc4LTI2LjcxMmwuMDY3LS4wMzJjOC4zMTEtNC4wMDMgMTcuMzE2LTMuNDU0IDI1LjM0NCAxLjU0M2wuMzUxLjI0NmMyLjU2NiAxLjgxIDQuNDIgMy4xMTQgOC41NDMgMTAuMTc0bC0yLjUyNCAxLjQ3NWMtMy44MDQtNi41MDktNS4zNTYtNy42MDUtNy43MDQtOS4yNmwtLjI0Ny0uMTc0Yy03LjIzLTQuNDg4LTE0Ljk5Ny00Ljk2Ny0yMi40NjQtMS4zODYtMTUuNDgzIDguNDgtMTIuNzA5IDIyLjkxMy0xMi41OCAyMy41MjNsLTIuODY0LjYwM3oiLz48cGF0aCBmaWxsPSIjMDA0Qjc1IiBkPSJNNjYuODkgMTQ2Ljg3OHMxLjg4LTIuMjk1IDEuNjI4LTQuNjdsLTIuNTA1LTIuMTQxYy4wMzYtLjYwNy4wMjYtMS4yMDgtLjAzMi0xLjgwM2wyLjU2My0yLjIzMXMtLjIxOC0yLjk2Mi0yLjA0Mi00LjUwM2wtMy4zMDYuMTc3Yy0uMzUtLjQxLS43MzEtLjc5OC0xLjE0LTEuMTU1bC4yNDQtMy41MjdzLTIuMjQ3LTEuOTM2LTQuNjMtMS43MzdsLTIuMTIyIDIuMzY3YTExLjY0NyAxMS42NDcgMCAwMC0yLjQzMy0uMDJMNTAuNzEzIDEyNXMtMi45NTEuMjkzLTQuNDUyIDIuMTVsLjI1NSAzLjMwM2ExMi4wNSAxMi4wNSAwIDAwLTEuMzggMS40MDVsLTMuNDg0LS4xNTZzLTEuODgzIDIuMjk0LTEuNjI4IDQuNjcxbDIuNDQ0IDIuMDkxYy0uMDU3LjctLjA0NyAxLjQwNS4wMjMgMi4wOTRsLTIuNDQyIDIuMTIycy4yMjIgMi45NTggMi4wNDUgNC41MDRsMy4xMzYtLjE3MWMuNDY1LjU0NC45NzcgMS4wNTIgMS41NCAxLjUxMWwtLjIzOCAzLjM3M3MyLjI1IDEuOTM1IDQuNjM0IDEuNzM4bDIuMjI4LTIuNDgxYTExLjQgMTEuNCAwIDAwMi4xNzktLjA1bDIuMjU3IDIuNDc0czIuOTUzLS4yODkgNC40NTItMi4xNTFsLS4yNDgtMy4xODhjLjUyLS40NTcgMS4wMDMtLjk2NiAxLjQ0LTEuNTJsMy40MTcuMTU5eiIvPjxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik01MS4zNDggMTQ1LjY3YTcuMTEgNy4xMSAwIDAxLTMuNzg0LTkuMzIxIDcuMTE4IDcuMTE4IDAgMDE5LjMyNi0zLjc4NiA3LjExNSA3LjExNSAwIDAxLTUuNTQyIDEzLjEwNyIvPjxwYXRoIGZpbGw9IiM5Mzk1OTciIGQ9Ik01NS4yOTkgMTQwLjM4N2ExLjcxOCAxLjcxOCAwIDAxLTMuMTY0LTEuMzM3IDEuNzIgMS43MiAwIDAxMi4yNTItLjkxNSAxLjcyIDEuNzIgMCAwMS45MTIgMi4yNTIiLz48cGF0aCBmaWxsPSIjMDA0Qjc1IiBkPSJNMTMzLjUwOSAxNDMuNzRzMi44NDEtMy4zMzUgMi41My02Ljg1bC0zLjYzNy0zLjIzYy4wNjgtLjg5MS4wNjktMS43ODIuMDAyLTIuNjYybDMuODQ4LTMuMjI2cy0uMjQ0LTQuMzcxLTIuODk1LTYuNzA0bC00Ljg4Ni4xNzZhMTcuODI2IDE3LjgyNiAwIDAwLTEuNjQ5LTEuNzQybC40NTctNS4xOTZzLTMuMjY1LTIuOTItNi43ODctMi42OTVsLTMuMjAyIDMuNDQyYTE3LjE1MSAxNy4xNTEgMCAwMC0zLjU5MS0uMTAxbC0zLjQ3LTMuOTUycy00LjM2Ny4zNDctNi42MzYgMy4wNTRsLjI5MSA0Ljg3N2ExNy41MDYgMTcuNTA2IDAgMDAtMi4wNzcgMi4wNDVsLTUuMTQxLS4zMzNzLTIuODM4IDMuMzMzLTIuNTI4IDYuODUzbDMuNTQ3IDMuMTQ5YTE3LjQyMyAxNy40MjMgMCAwMC0uMDI3IDMuMDk3TDk0IDEzNi44MDZzLjI0MiA0LjM3NCAyLjg5NCA2LjcwNWw0LjYzOC0uMTY3Yy42NjYuODE5IDEuNDEgMS41OCAyLjIzMSAyLjI3NGwtLjQ0MyA0Ljk3NHMzLjI2NSAyLjkyMSA2Ljc4OSAyLjY5MWwzLjM1NC0zLjYwMmMxLjA3OC4wOTggMi4xNTkuMDkzIDMuMjI0LS4wMTJsMy4yNjIgMy43MTVzNC4zNjYtLjM0NyA2LjYzMy0zLjA1NGwtLjI4LTQuNzExYTE3LjMyIDE3LjMyIDAgMDAyLjE2OC0yLjIwNWw1LjAzOS4zMjZ6Ii8+PHBhdGggZmlsbD0iI0VDRUNFQyIgZD0iTTExMC4yNCAxNDIuMTA5Yy01LjMwMi0yLjM1OC03LjY4OS04LjU2Ni01LjMzLTEzLjg2OCAyLjM1Ni01LjMwMiA4LjU2Ni03LjY5IDEzLjg2OC01LjMzMiA1LjMgMi4zNTcgNy42OSA4LjU2OCA1LjMzIDEzLjg3MS0yLjM1NyA1LjMwMS04LjU2OCA3LjY4My0xMy44NjggNS4zMjkiLz48cGF0aCBmaWxsPSIjOTM5NTk3IiBkPSJNMTE2Ljg1NSAxMzMuNTY2YTIuNTM4IDIuNTM4IDAgMDEtNC42MzYtMi4wNiAyLjUzOCAyLjUzOCAwIDAxNC42MzYgMi4wNiIvPjxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik05MS43NTggNjAuOTNhNS45MyA1LjkzIDAgMDEtNS45MjkgNS45MjdsLTcuOTA1LS4wMDNBNS45MjYgNS45MjYgMCAwMTcyIDYwLjkyNSA1LjkyNSA1LjkyNSAwIDAxNzcuOTI3IDU1bDcuOTA2LjAwMmE1LjkyOCA1LjkyOCAwIDAxNS45MjUgNS45MjhNNzYuMDY3IDc4LjcxNWE0LjcxIDQuNzEgMCAwMS00LjcxIDQuNzFsLTMuNjQ5LS4wMDFBNC43MTIgNC43MTIgMCAwMTY3LjcxMSA3NGwzLjY0OC4wMDJhNC43MSA0LjcxIDAgMDE0LjcwOCA0LjcxMyIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/user.svg":
/*!*************************************!*\
  !*** ./src/app/assets/svg/user.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M14.5 7h-5A2.502 2.502 0 007 9.5v.625a4.378 4.378 0 004.375 4.375h1.25A4.378 4.378 0 0017 10.125V9.5C17 8.121 15.879 7 14.5 7zm1.25 3.125a3.13 3.13 0 01-3.125 3.125h-1.25a3.13 3.13 0 01-3.125-3.125V9.5c0-.688.559-1.25 1.25-1.25h5c.691 0 1.25.562 1.25 1.25v.625zm-.625 7.5h-6.25C7.84 17.625 7 18.465 7 19.5v2.188c0 .171.14.312.312.312h.625c.172 0 .313-.14.313-.313V19.5c0-.344.281-.625.625-.625h6.25c.344 0 .625.281.625.625v2.188c0 .171.14.312.313.312h.625c.171 0 .312-.14.312-.313V19.5c0-1.035-.84-1.875-1.875-1.875zm-5 1.875a.627.627 0 00-.625.625v1.563c0 .171.14.312.312.312h.626c.171 0 .312-.14.312-.313v-1.562a.627.627 0 00-.625-.625zm7.156-4.676A7.519 7.519 0 0019.066 12h.434a.627.627 0 00.625-.625v-3.75A.627.627 0 0019.5 7h-.438A7.49 7.49 0 0012 2a7.49 7.49 0 00-7.063 5H4.5a.627.627 0 00-.625.625v3.75c0 .344.281.625.625.625h.437a7.47 7.47 0 001.786 2.824A5.238 5.238 0 003.25 19.75v1.938c0 .171.14.312.312.312h.625c.172 0 .313-.14.313-.313V19.75c0-2.016 1.504-3.672 3.45-3.945A7.448 7.448 0 0012 17a7.448 7.448 0 004.05-1.195c1.946.27 3.45 1.925 3.45 3.945v1.938c0 .171.14.312.313.312h.625c.171 0 .312-.14.312-.313V19.75a5.24 5.24 0 00-3.469-4.926zM12 15.75A6.258 6.258 0 015.75 9.5 6.258 6.258 0 0112 3.25a6.258 6.258 0 016.25 6.25A6.258 6.258 0 0112 15.75z"
});

function SvgUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjUgN2gtNUEyLjUwMiAyLjUwMiAwIDAwNyA5LjV2LjYyNWE0LjM3OCA0LjM3OCAwIDAwNC4zNzUgNC4zNzVoMS4yNUE0LjM3OCA0LjM3OCAwIDAwMTcgMTAuMTI1VjkuNUMxNyA4LjEyMSAxNS44NzkgNyAxNC41IDd6bTEuMjUgMy4xMjVhMy4xMyAzLjEzIDAgMDEtMy4xMjUgMy4xMjVoLTEuMjVhMy4xMyAzLjEzIDAgMDEtMy4xMjUtMy4xMjVWOS41YzAtLjY4OC41NTktMS4yNSAxLjI1LTEuMjVoNWMuNjkxIDAgMS4yNS41NjIgMS4yNSAxLjI1di42MjV6bS0uNjI1IDcuNWgtNi4yNUM3Ljg0IDE3LjYyNSA3IDE4LjQ2NSA3IDE5LjV2Mi4xODhjMCAuMTcxLjE0LjMxMi4zMTIuMzEyaC42MjVjLjE3MiAwIC4zMTMtLjE0LjMxMy0uMzEzVjE5LjVjMC0uMzQ0LjI4MS0uNjI1LjYyNS0uNjI1aDYuMjVjLjM0NCAwIC42MjUuMjgxLjYyNS42MjV2Mi4xODhjMCAuMTcxLjE0LjMxMi4zMTMuMzEyaC42MjVjLjE3MSAwIC4zMTItLjE0LjMxMi0uMzEzVjE5LjVjMC0xLjAzNS0uODQtMS44NzUtMS44NzUtMS44NzV6bS01IDEuODc1YS42MjcuNjI3IDAgMDAtLjYyNS42MjV2MS41NjNjMCAuMTcxLjE0LjMxMi4zMTIuMzEyaC42MjZjLjE3MSAwIC4zMTItLjE0LjMxMi0uMzEzdi0xLjU2MmEuNjI3LjYyNyAwIDAwLS42MjUtLjYyNXptNy4xNTYtNC42NzZBNy41MTkgNy41MTkgMCAwMDE5LjA2NiAxMmguNDM0YS42MjcuNjI3IDAgMDAuNjI1LS42MjV2LTMuNzVBLjYyNy42MjcgMCAwMDE5LjUgN2gtLjQzOEE3LjQ5IDcuNDkgMCAwMDEyIDJhNy40OSA3LjQ5IDAgMDAtNy4wNjMgNUg0LjVhLjYyNy42MjcgMCAwMC0uNjI1LjYyNXYzLjc1YzAgLjM0NC4yODEuNjI1LjYyNS42MjVoLjQzN2E3LjQ3IDcuNDcgMCAwMDEuNzg2IDIuODI0QTUuMjM4IDUuMjM4IDAgMDAzLjI1IDE5Ljc1djEuOTM4YzAgLjE3MS4xNC4zMTIuMzEyLjMxMmguNjI1Yy4xNzIgMCAuMzEzLS4xNC4zMTMtLjMxM1YxOS43NWMwLTIuMDE2IDEuNTA0LTMuNjcyIDMuNDUtMy45NDVBNy40NDggNy40NDggMCAwMDEyIDE3YTcuNDQ4IDcuNDQ4IDAgMDA0LjA1LTEuMTk1YzEuOTQ2LjI3IDMuNDUgMS45MjUgMy40NSAzLjk0NXYxLjkzOGMwIC4xNzEuMTQuMzEyLjMxMy4zMTJoLjYyNWMuMTcxIDAgLjMxMi0uMTQuMzEyLS4zMTNWMTkuNzVhNS4yNCA1LjI0IDAgMDAtMy40NjktNC45MjZ6TTEyIDE1Ljc1QTYuMjU4IDYuMjU4IDAgMDE1Ljc1IDkuNSA2LjI1OCA2LjI1OCAwIDAxMTIgMy4yNWE2LjI1OCA2LjI1OCAwIDAxNi4yNSA2LjI1QTYuMjU4IDYuMjU4IDAgMDExMiAxNS43NXoiLz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/validation.svg":
/*!*******************************************!*\
  !*** ./src/app/assets/svg/validation.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgValidation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M19.778 5.333h-5v-1.11a1.11 1.11 0 00-1.111-1.112h-3.334a1.11 1.11 0 00-1.11 1.111v1.111h-5A2.224 2.224 0 002 7.556v11.11c0 1.226.997 2.223 2.222 2.223h15.556A2.224 2.224 0 0022 18.667V7.556a2.224 2.224 0 00-2.222-2.223zm-8.89-.555h2.223V7H10.89V4.778zm9.445 13.889c0 .305-.25.555-.555.555H15.86c.007-.038.028-.073.028-.11v-.668c0-1.104-1.045-2-2.333-2-.375 0-.65.278-1.556.278-.934 0-1.16-.278-1.556-.278-1.288 0-2.333.896-2.333 2v.667c0 .038.017.073.028.111H4.222a.557.557 0 01-.555-.555V7.556c0-.306.25-.556.555-.556h5v1.667h5.556V7h5c.305 0 .555.25.555.556v11.11zM12 10.889a2.224 2.224 0 00-2.222 2.222c0 1.226.996 2.222 2.222 2.222a2.224 2.224 0 002.222-2.222A2.224 2.224 0 0012 10.89z"
});

function SvgValidation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5Ljc3OCA1LjMzM2gtNXYtMS4xMWExLjExIDEuMTEgMCAwMC0xLjExMS0xLjExMmgtMy4zMzRhMS4xMSAxLjExIDAgMDAtMS4xMSAxLjExMXYxLjExMWgtNUEyLjIyNCAyLjIyNCAwIDAwMiA3LjU1NnYxMS4xMWMwIDEuMjI2Ljk5NyAyLjIyMyAyLjIyMiAyLjIyM2gxNS41NTZBMi4yMjQgMi4yMjQgMCAwMDIyIDE4LjY2N1Y3LjU1NmEyLjIyNCAyLjIyNCAwIDAwLTIuMjIyLTIuMjIzem0tOC44OS0uNTU1aDIuMjIzVjdIMTAuODlWNC43Nzh6bTkuNDQ1IDEzLjg4OWMwIC4zMDUtLjI1LjU1NS0uNTU1LjU1NUgxNS44NmMuMDA3LS4wMzguMDI4LS4wNzMuMDI4LS4xMXYtLjY2OGMwLTEuMTA0LTEuMDQ1LTItMi4zMzMtMi0uMzc1IDAtLjY1LjI3OC0xLjU1Ni4yNzgtLjkzNCAwLTEuMTYtLjI3OC0xLjU1Ni0uMjc4LTEuMjg4IDAtMi4zMzMuODk2LTIuMzMzIDJ2LjY2N2MwIC4wMzguMDE3LjA3My4wMjguMTExSDQuMjIyYS41NTcuNTU3IDAgMDEtLjU1NS0uNTU1VjcuNTU2YzAtLjMwNi4yNS0uNTU2LjU1NS0uNTU2aDV2MS42NjdoNS41NTZWN2g1Yy4zMDUgMCAuNTU1LjI1LjU1NS41NTZ2MTEuMTF6TTEyIDEwLjg4OWEyLjIyNCAyLjIyNCAwIDAwLTIuMjIyIDIuMjIyYzAgMS4yMjYuOTk2IDIuMjIyIDIuMjIyIDIuMjIyYTIuMjI0IDIuMjI0IDAgMDAyLjIyMi0yLjIyMkEyLjIyNCAyLjIyNCAwIDAwMTIgMTAuODl6Ii8+PC9zdmc+Cg==");


/***/ }),

/***/ "./src/app/assets/svg/warning.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/warning.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgWarning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  d: "M10.637 10.219l.229 3.889c.013.22.195.392.416.392h1.436c.22 0 .403-.172.416-.392l.229-3.89a.417.417 0 00-.416-.44h-1.894c-.24 0-.43.202-.416.44zm2.821 6.225a1.458 1.458 0 11-2.916 0 1.458 1.458 0 012.916 0zm-.014-12.5c-.64-1.11-2.246-1.112-2.888 0L2.225 18.389c-.64 1.11.161 2.5 1.444 2.5H20.33c1.28 0 2.085-1.389 1.444-2.5l-8.33-14.445zM3.847 18.91L11.82 5.09a.208.208 0 01.36 0l7.973 13.82a.208.208 0 01-.18.312H4.027a.208.208 0 01-.18-.312z"
});

function SvgWarning(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnMvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjYzNyAxMC4yMTlsLjIyOSAzLjg4OWMuMDEzLjIyLjE5NS4zOTIuNDE2LjM5MmgxLjQzNmMuMjIgMCAuNDAzLS4xNzIuNDE2LS4zOTJsLjIyOS0zLjg5YS40MTcuNDE3IDAgMDAtLjQxNi0uNDRoLTEuODk0Yy0uMjQgMC0uNDMuMjAyLS40MTYuNDR6bTIuODIxIDYuMjI1YTEuNDU4IDEuNDU4IDAgMTEtMi45MTYgMCAxLjQ1OCAxLjQ1OCAwIDAxMi45MTYgMHptLS4wMTQtMTIuNWMtLjY0LTEuMTEtMi4yNDYtMS4xMTItMi44ODggMEwyLjIyNSAxOC4zODljLS42NCAxLjExLjE2MSAyLjUgMS40NDQgMi41SDIwLjMzYzEuMjggMCAyLjA4NS0xLjM4OSAxLjQ0NC0yLjVMMTMuNDQ0IDMuOTQ0ek0zLjg0NyAxOC45MUwxMS44MiA1LjA5YS4yMDguMjA4IDAgMDEuMzYgMGw3Ljk3MyAxMy44MmEuMjA4LjIwOCAwIDAxLS4xOC4zMTJINC4wMjdhLjIwOC4yMDggMCAwMS0uMTgtLjMxMnoiLz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/assets/svg/working.svg":
/*!****************************************!*\
  !*** ./src/app/assets/svg/working.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgWorking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#67CCE6",
  fillRule: "nonzero",
  d: "M427.395 174.308c-1.665-10.17 15-14.153 19.328-7.958-1.388-9.713 6.457-22.447 19.904-23.542 25.395-2.378 18 16.5 30.24 16.762 11.145-.21 2.835-16.327 28.193-8.25 6.075 1.808 9.15 8.588 13.44 16.972 8.685-9.554 14.018-3.33 15.607 6a449.925 449.925 0 01-126.712.016z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#045388",
  fillRule: "nonzero",
  d: "M449.527 296.76c-.99 7.725 3.226 17.213 18.548 19.095 17.558.3 24.06-10.703 23.535-19.095h-42.083z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBAC1D",
  fillRule: "nonzero",
  d: "M490.777 292.837l-2.25-145.612-38.279-.007v145.619z"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FCD5CA",
  fillRule: "nonzero",
  d: "M487.418 147.45l-16.906-37.71-20.654 37.71z"
});

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M479.137 147.705h1.538v145.132h-1.538zm-18.787 0h1.538v145.132h-1.538z"
});

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FBAC1D",
  fillRule: "nonzero",
  d: "M448.59 291.345h43.852v5.76H448.59z"
});

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#67CCE6",
  fillRule: "nonzero",
  d: "M74.933 230.048l-10.328 22.327 25.95 28.163 23.16-8.49a109.8 109.8 0 0027.127 12.48c2.825 7.734 5.653 15.447 8.483 23.137l38.25 1.56c3.45-7.46 6.925-14.923 10.425-22.388a110.865 110.865 0 0028.05-10.32c7.43 3.44 14.873 6.883 22.327 10.328l28.156-25.943c-2.843-7.724-5.656-15.442-8.513-23.152a110.198 110.198 0 0012.48-27.143c7.705-2.82 15.41-5.65 23.115-8.49l1.553-38.25c-7.47-3.47-14.933-6.93-22.388-10.38a110.843 110.843 0 00-10.32-28.057c3.465-7.425 6.885-14.873 10.343-22.32l-25.958-28.17-23.145 8.505a110.797 110.797 0 00-27.12-12.502l-8.498-23.1-38.25-1.568a19334.2 19334.2 0 00-10.38 22.402 110.175 110.175 0 00-28.05 10.305L99.076 68.64 70.92 94.605c2.835 7.705 5.665 15.42 8.49 23.145a111.12 111.12 0 00-12.51 27.143l-23.115 8.482-1.56 38.25 22.41 10.373a110.7 110.7 0 0010.297 28.05zm48.36-5.798c-18.796-20.392-23.457-50.098-11.81-75.267 11.648-25.168 37.31-40.841 65.02-39.711 27.71 1.13 52.01 18.842 61.568 44.876 9.56 26.034 2.494 55.262-17.901 74.054a68.55 68.55 0 01-96.877-3.952z"
});

var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M173.7 258.75c-44.735 0-81-36.265-81-81s36.265-81 81-81 81 36.265 81 81c-.037 44.72-36.28 80.963-81 81zm0-160.418c-32.133 0-61.1 19.358-73.395 49.045-12.295 29.688-5.494 63.858 17.23 86.576 22.725 22.718 56.897 29.509 86.581 17.206 29.684-12.303 49.033-41.276 49.024-73.409-.033-43.86-35.58-79.407-79.44-79.44v.022z"
});

var _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#67CCE6",
  fillRule: "nonzero",
  d: "M73.32 87.915c.443-3.57-3.945-4.965-5.085-2.79.368-3.405-1.703-7.868-5.25-8.25-6.682-.825-4.748 5.782-7.957 5.88-2.94-.075-.75-5.722-7.425-2.887-1.598.63-2.408 3-3.54 5.947-2.25-3.352-6.068 1.987-3.518 2.88 11.07 2.093 33.578 1.785 32.775-.78z"
});

var _ref10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#045388",
  d: "M30.315 282.608c0 .412 2.355 5.692 2.385 6.112h11.55c-.045-.42 1.74-5.7 1.695-6.12l-15.63.007z"
});

var _ref11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M23.422 246.472c1.163 2.918 2.25 17.348 3.285 20.303h24.518c1.133-3 2.317-17.407 3.585-20.325 2.79-4.027 15.63-18.975 19.987-33 5.865-17.572-10.56-42.382-36-42.42-25.372-.225-43.267 22.868-37.417 40.5 4.373 14.64 16.62 28.387 22.043 34.942z",
  opacity: 0.15
});

var _ref12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M43.432 264.885c-1.867-10.215-.96-31.702 2.76-47.167a4.252 4.252 0 01-1.5-.113c-2.325-.623-4.027-3.262-5.25-6.278-1.747 3.953-3.885 6.128-6.39 6.48a5.625 5.625 0 01-2.924-.397c2.205 14.782 4.582 36.248 3.982 47.378l-1.5-.083c.578-10.545-1.77-32.707-4.125-48.217-2.497-1.726-4.688-4.845-6.195-7.92-1.598-3.248-2.94-7.546-1.5-9l.098-.083c1.274-.878 2.467-1.095 3.547-.653 2.617 1.08 3.495 5.716 3.968 8.206v.105c.434 2.25.922 5.152 1.425 8.43a4.657 4.657 0 003 .704c1.71-.24 3.877-1.83 5.842-7.094a46.665 46.665 0 01-1.305-5.108c-.983-4.905.352-8.722 2.175-9.968a1.912 1.912 0 012.175-.135c1.132.75 1.5 2.738.96 5.633a60.353 60.353 0 01-2.385 9.645c1.335 3.952 3 6.442 4.785 6.915a2.715 2.715 0 001.5-.052 45.345 45.345 0 014.26-11.206l.285-.487c.945-1.642 1.838-3.195 3.083-3.067 1.064.097 1.5 1.38 1.65 1.8 1.207 3.51-3.548 9.975-4.89 11.512a10.605 10.605 0 01-3.068 2.55c-3.75 15.172-4.86 37.185-3 47.422l-1.463.248zm10.636-62.025a9.315 9.315 0 00-1.605 2.25l-.293.502a40.08 40.08 0 00-3.668 9.323c.479-.41.925-.857 1.335-1.335 2.07-2.377 5.378-7.755 4.605-10.02a2.25 2.25 0 00-.374-.72zm-32.25-2.145c-.39.517-.128 3.255 1.807 7.185a23.033 23.033 0 004.5 6.368c-.398-2.52-.795-4.823-1.17-6.818v-.112c-.36-1.883-1.2-6.308-3.052-7.073a2.16 2.16 0 00-2.07.45h-.015zm18.96-5.475a.75.75 0 00-.375.15c-1.178.795-2.438 3.938-1.545 8.408a48.76 48.76 0 00.66 2.864 69.607 69.607 0 001.672-7.305c.488-2.76 0-3.877-.292-4.087a.217.217 0 00-.106-.03h-.014z"
});

var _ref13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  d: "M22.5 263.498l3 3.232c-2.782-.263-2.918 4.17.578 4.38-3.57-.135-3.713 4.433-.226 4.5-3.487-.188-3.63 4.957-.345 5.25l-2.197 2.385c4.5 2.115 29.46 1.98 30-.225l-1.988-2.362c3.503-.308 2.573-4.943-.345-4.733 3.916-.428 2.423-5.07 0-4.755 3.293-.608 2.288-3.96.413-4.373l2.4-3.277-31.29-.022z"
});

var _ref14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M265.44 2.565c-.165 0 0 .42 0 .42-7.373-3-58.148-4.98-59.767 6.24-2.61 18.112-5.25 30.75 8.497 36.157 8.835 3.495 28.245 2.573 40.748 1.41l10.02 7.448-.24-8.58c.532-.075.952-.142 1.237-.195 13.657-2.603 21.397-43.215-.495-42.9z",
  opacity: 0.15
});

var _ref15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  fillRule: "nonzero",
  d: "M177.06 317.647c-6.168 0-11.167-5-11.167-11.167V163.725a11.16 11.16 0 0111.167-11.16h238.657c6.161.004 11.153 5 11.153 11.16V306.48c0 6.162-4.99 11.16-11.153 11.167H177.06z"
});

var _ref16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  fillRule: "nonzero",
  d: "M164.82 306.48V163.725c.012-6.752 5.488-12.22 12.24-12.225h238.657c6.752.008 12.221 5.481 12.226 12.232V306.48a12.24 12.24 0 01-12.226 12.27H177.06a12.248 12.248 0 01-12.24-12.27zm261-142.755c-.004-5.567-4.513-10.08-10.08-10.088H177.06c-5.569.009-10.083 4.519-10.095 10.088V306.48c.008 5.572 4.523 10.087 10.095 10.095h238.657c5.568-.012 10.076-4.527 10.08-10.095l.023-142.755z"
});

var _ref17 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M414.397 163.493v-.728H178.155v8.617h.21v132.21h236.243V163.493z"
});

var _ref18 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  d: "M447.975 308.445H144.787v9c3.6 5.363 12.353 9.188 16.845 9.188H431.19c4.455 0 13.155-3.788 16.785-9.113v-9.075z"
});

var _ref19 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  d: "M144.952 317.715c3.75 5.25 12.24 8.918 16.658 8.918h269.558c4.402 0 12.937-3.698 16.642-8.918H144.952z"
});

var _ref20 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  fillRule: "nonzero",
  d: "M270.84 308.678a6.75 6.75 0 006.75 6.202h37.62a6.75 6.75 0 006.75-6.202h-51.12z"
});

var _ref21 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M243.787 237.96h14.43v1.538h-14.43zm-15.539-35.04h17.76v1.538h-17.76zm92.685 0h14.43v1.538h-14.43zm23.31 0h14.43v1.538h-14.43zm-93.241 0h60.495v1.538h-60.495zm-31.634-15.158h14.43v1.538h-14.43zm0 71.093h14.43v1.538h-14.43zm39.959-13.313H359.79v1.538H259.327zm0 7.583h26.085v1.538h-26.085zm32.745 0h26.085v1.538h-26.085zm32.745 0h26.085v1.538h-26.085zm-107.669-57.787h27.75v1.538h-27.75zm32.745 0h57.72v1.538h-57.72zm-32.745 71.1h14.43v1.538h-14.43zm101.01 0h36.075v1.538h-36.075zm-77.146 0h66.6v1.538h-66.6zm-3.885 7.582H339.81v1.538H237.127zm0 7.575h21.525v1.538h-21.525zm31.695 0h72.847v1.538h-72.847zm-24.479-71.093h57.72v1.538h-57.72zm69.374 0h27.75v1.538h-27.75zm-96.569 12.301h27.75v1.538h-27.75zm36.63 0h54.945v1.538h-54.945zm-36.63 7.582h27.75v1.538h-27.75zm36.63 0h82.14v1.538h-82.14zm-53.13-46.462h1.538v103.05h-1.538z"
});

var _ref22 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  d: "M505.62 64.552c-11.805-2.032-76.83-6-78.968 8.798-3.45 23.925-6.93 40.598 11.25 47.782 11.67 4.613 37.32 3.39 53.836 1.853l13.245 9.84-.323-11.325a35.214 35.214 0 001.635-.27c18.03-3.435 28.26-57.105-.675-56.678z",
  opacity: 0.15
});

var _ref23 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#FFF",
  strokeDasharray: 6.615,
  strokeWidth: 1.103,
  d: "M465.48 104.078c.006-32.37-20.156-61.316-50.52-72.53-30.366-11.215-64.502-2.324-85.537 22.28-15.393-36.849-57.314-54.756-94.579-40.4-37.264 14.354-56.338 55.758-43.031 93.41a67.643 67.643 0 00-38.183 114.75"
});

var _ref24 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  d: "M315 67.5h37.5V21H315z"
});

var _ref25 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FCB21F",
  d: "M318.578 31.649h25.843v-4.575h-25.843v4.575zm0 8.133h25.843v-4.575h-25.843v4.575zm0 8.136h25.843v-4.575h-25.843v4.575zm0 8.133h25.843v-4.575h-25.843v4.575zM312.69 12c-2.038 0-3.691 1.084-3.691 2.422v65.656c0 1.337 1.653 2.422 3.69 2.422h37.618c2.04 0 3.692-1.085 3.692-2.422V14.422c0-1.338-1.653-2.422-3.692-2.422H312.69z"
});

var _ref26 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.5,
  d: "M404.415 141.143s-11.25 18.81-25.088 29.062l24.87 14.152c.346-5.655 3-18.3 3-18.3l13.98-3.232c-.285-4.672 10.44-27.915 10.155-26.25l-16.964-7.365-9.953 11.933z"
});

var _ref27 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M453.63 382.223c-3.645 7.5-8.295 14.482-12.863 21.532-2.204-1.44-4.537-4.5-6.93-5.49-.75-.3 4.5-8.933 10.808-22.5 3.105 2.033 6.105 4.2 8.985 6.458z"
});

var _ref28 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M434.52 394.065l5.475 3.66c.038 0 3.75 2.377 3.75 2.407 1.988 4.148 5.775 7.38 8.64 10.298s4.148 3.84 7.335 7.185a1.335 1.335 0 010 1.972c-2.153 1.966-5.783-.427-8.018-1.77-2.235-1.342-6.577-4.792-8.722-6.367-4.845-3.532-6.998-6.525-7.965-5.647-.637.57-5.618-3.36-4.995-4.748 1.598-3.555 3.788-5.055 4.5-6.99z"
});

var _ref29 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4378A5",
  fillRule: "nonzero",
  d: "M478.815 307.283c-1.32-2.82-6.127-26.64-17.16-35.423h-47.25c2.25 4.23 4.5 7.59 6.465 9.202 47.363 21.09-23.438-5.287-1.433 3.863 5.873 2.445 45.938 29.947 16.163 107.73 7.545 3.135 5.52 1.718 12.472 3.525 28.988-43.778 31.418-85.358 30.743-88.897z"
});

var _ref30 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M487.027 376.035c1.2 8.25 1.313 16.635 1.5 25.035-2.632.06-6.277-1.155-8.82-.615-.75.158-1.327-9.922-3.75-24.667 3.706-.083 7.388.03 11.07.247z"
});

var _ref31 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M446.295 308.438c5.475-.135 17.55 27.84 29.662 87.06l13.358-3.48c-1.163-19.403.473-115.088-18.18-113.018-6.308-1.035-29.077-6.99-62.94-15.998-38.715-22.387-43.342-5.25-48.36-3.12 0 0 2.91 39.255 20.25 48.578 23.415 5.993 42.683.593 66.21-.022z"
});

var _ref32 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  d: "M499.26 235.275c-.217-.157-1.71-1.2-1.845-1.725L469.5 273.615c0 .18-.067.157-.082.053l-2.13-3.57-48.668-10.688c-.082.225-3.442 10.927-3.465 11.197-.142 1.403.75 2.033 1.883 2.145l49.98 4.988a1.927 1.927 0 001.987-.832v.18c1.14.825 2.16.344 2.887-.66l27.593-38.206c.765-.997.923-2.122-.225-2.947z"
});

var _ref33 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M477.63 398.827l6.855.976c1.005.202 4.26-.653 4.305-.645 3.697 2.827 8.58 3.817 12.487 5.017 3.908 1.2 5.476 1.38 9.878 2.813a1.41 1.41 0 01.923 1.837c-1.02 3-5.37 2.7-7.988 2.648-2.617-.053-8.092-.976-10.74-1.29-5.963-.75-9.278-2.37-9.75-1.036-.308.893-6.585-.127-6.668-1.77-.21-4.214 1.35-2.04.698-8.55z"
});

var _ref34 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M404.873 254.595c2.79 1.5 5.407 3.203 8.19 4.732a136.905 136.905 0 0115.322 3.3c1.065-2.25 2.085-4.117 1.762-4.192-7.402-1.808-16.5-22.808-21.63-33.488-13.334-27.787-22.5-12.405-24.982-29.61-1.785-8.467-7.785-21.457-10.343-5.587-.907 10.305-3.495 24.472-4.995 32.34 7.343 6.472 15.413 12.037 22.56 18.75 4.8 4.463 9.443 9.127 14.115 13.755z"
});

var _ref35 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4378A5",
  fillRule: "nonzero",
  d: "M405.652 266.632c0-25.635 2.033-89.565-.854-90.75-.338-.135-5.596 4.32-5.596 4.32s-10.207-9.345-11.527-10.237a12.248 12.248 0 01-2.085-1.433c-5.01-4.117-24.09 7.86-26.64 27 0 0-8.722 40.065-2.58 50.43.067 1.163.142 2.31.217 3.443-2.954 7.38 3.293 30.037 10.755 30.93 13.133 7.215 38.31-4.125 38.31-13.702z"
});

var _ref36 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M425.707 263.738c-7.41-1.8-21.75-6.93-26.812-18.946-25.837-16.807-12.907-32.25-15.36-49.454-1.785-8.468-7.785-21.458-10.343-5.588-1.32 15-6.172 38.04-6.105 38.25 11.963 31.613 39.383 42.863 59.25 40.642.36-3.794-.037-4.755-.63-4.904z"
});

var _ref37 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M442.08 258c-.778.316-1.574.584-2.385.803-9.27 2.512-14.692 1.26-17.25 1.394-.952.046-1.845.106-2.722.143.382 2.423.75 4.83 1.154 7.245 7.065.788 18.113 3.442 22.275 3.75 5.43.473 6.06-.097 6.06-.097-.502-1.718-5.354-2.468-7.912-3.248a23.918 23.918 0 01-4.598-.863c-.75-.75 3-1.32 5.82-.442 2.896.293 8.596 4.538 9.12 4.905 1.088.75 7.328 2.13 8.25 1.95 1.913.502-14.992-13.808-17.812-15.54z"
});

var _ref38 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M428.25 262.567c-13.973-7.635-17.79-11.002-25.2-23.542-10.403-17.588-15-39.21-21.413-57.653-3.832-9-20.557-4.845-20.175 12.998-1.695 19.095 12.818 47.055 22.08 54.998 11.033 11.73 32.16 20.204 43.898 20.385l.81-7.185z"
});

var _ref39 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M410.385 266.723c-11.1-4.05-21.075-10.208-27.36-16.883-8.835-7.583-24-35.655-22.267-55.537-.158-7.088 2.452-12.998 7.155-16.133 3.09-2.063 6.75-2.632 9.75-1.537a7.957 7.957 0 014.695 4.5c1.83 5.25 3.457 10.612 5.19 16.274 4.305 14.13 8.76 28.74 16.185 41.288 7.245 12.27 10.74 15.532 24.907 23.25l.428.225-.923 8.287h-.645c-4.65-.075-10.717-1.394-17.115-3.734zm-33.233-88.778c-2.557-.93-5.692-.412-8.377 1.388-4.305 2.872-6.69 8.347-6.547 15.037-1.733 19.553 13.132 47.01 21.832 54.48 6.098 6.472 16.11 12.638 26.835 16.56 5.933 2.167 11.55 3.442 15.915 3.607l.683-6.067c-13.973-7.672-17.783-11.25-25.05-23.587-7.5-12.706-12-27.383-16.32-41.595-1.718-5.648-3.353-10.988-5.153-16.185a6.517 6.517 0 00-3.818-3.638z"
});

var _ref40 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FCB21F",
  fillRule: "nonzero",
  d: "M399.637 134.925c.75-1.215 9.368-22.8 15.255-21.308 5.888 1.493 6.135 4.755 6.135 4.755s1.065 3.75 9.893 5.528c8.827 1.777 8.527 1.05 9.577 1.132 1.05.083 9.233 1.103 9.998 5.956.765 4.852-7.995 14.992-12.495 13.252-4.5-1.74-20.137-12.907-23.033-8.963-2.894 3.946-3.674 7.703-7.582 8.123a9.24 9.24 0 00-6.142 2.933c-.458.457-7.26 3.547-8.138-2.655-.877-6.203 6.532-8.753 6.532-8.753zm7.411 14.325s-8.25 9.9.592 16.83c0 0 8.655 6.982 15.105-1.073 6.45-8.055-7.192-4.837-7.868-5.25-.675-.412-6.562-2.812-4.717-7.755 1.845-4.942-3.113-2.752-3.113-2.752z"
});

var _ref41 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.5,
  d: "M183.75 141.143s11.25 18.81 25.088 29.062l-24.863 14.152c-.352-5.655-3-18.3-3-18.3l-13.972-3.232c.285-4.672-10.448-27.915-10.163-26.25l16.965-7.365 9.945 11.933z"
});

var _ref42 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M134.512 382.223c3.653 7.5 8.296 14.482 12.863 21.532 2.205-1.44 4.537-4.5 6.93-5.49.75-.3-4.5-8.933-10.8-22.5-3.09 2.033-6.067 4.2-8.993 6.458z"
});

var _ref43 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M153.63 394.065l-5.475 3.66c-.045 0-3.75 2.377-3.75 2.407-1.995 4.148-5.782 7.38-8.648 10.298-2.864 2.918-4.14 3.84-7.334 7.185a1.343 1.343 0 000 1.972c2.16 1.966 5.79-.427 8.017-1.77 2.227-1.342 6.578-4.792 8.722-6.367 4.845-3.532 6.998-6.525 7.965-5.647.645.57 5.625-3.36 4.995-4.748-1.597-3.555-3.787-5.055-4.492-6.99z"
});

var _ref44 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4378A5",
  fillRule: "nonzero",
  d: "M109.328 307.283c1.32-2.82 6.135-26.64 17.167-35.423h47.25c-2.25 4.23-4.537 7.59-6.458 9.202-47.37 21.09 23.43-5.287 1.425 3.863-5.864 2.445-45.937 29.947-16.154 107.73-7.553 3.135-5.528 1.718-12.48 3.525-28.988-43.778-31.425-85.358-30.75-88.897z"
});

var _ref45 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M101.123 376.035c-1.208 8.25-1.32 16.635-1.5 25.035 2.624.06 6.277-1.155 8.812-.615.75.158 1.335-9.922 3.75-24.667-3.698-.083-7.38.03-11.063.247z"
});

var _ref46 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M141.847 308.438c-5.475-.135-17.55 27.84-29.662 87.06l-13.358-3.48c1.17-19.403-.465-115.088 18.18-113.018 6.308-1.035 29.085-6.99 62.94-15.998 38.723-22.387 43.343-5.25 48.368-3.12 0 0-2.917 39.255-20.25 48.578-23.385 5.993-42.683.593-66.218-.022z"
});

var _ref47 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#B4C6D0",
  d: "M88.882 235.275c.218-.157 1.71-1.2 1.853-1.725l27.892 40.065c0 .18.068.157.09.053l2.123-3.57 48.66-10.688c.083.225 3.442 10.927 3.465 11.197.142 1.403-.75 2.033-1.882 2.145l-49.98 4.988a1.92 1.92 0 01-1.98-.832.248.248 0 01-.046.18c-1.14.825-2.16.344-2.88-.66l-27.6-38.206c-.704-.997-.847-2.122.285-2.947z"
});

var _ref48 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M110.52 398.827l-6.862.976c-1.005.202-4.26-.653-4.298-.645-3.705 2.827-8.58 3.817-12.487 5.017-3.908 1.2-5.483 1.38-9.886 2.813a1.41 1.41 0 00-.922 1.837c1.028 3 5.377 2.7 7.987 2.648 2.61-.053 8.1-.976 10.74-1.29 6-.75 9.278-2.37 9.75-1.036.308.893 6.578-.127 6.66-1.77.225-4.214-1.334-2.04-.682-8.55z"
});

var _ref49 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M183.27 254.595c-2.79 1.5-5.407 3.203-8.19 4.732a137.25 137.25 0 00-15.323 3.3c-1.057-2.25-2.084-4.117-1.762-4.192 7.41-1.808 16.5-22.808 21.63-33.488 13.335-27.787 22.5-12.405 24.99-29.61 1.792-8.467 7.77-21.457 10.335-5.617.915 10.305 3.495 24.472 4.995 32.34-7.343 6.472-15.412 12.037-22.56 18.75-4.8 4.493-9.435 9.157-14.115 13.785z"
});

var _ref50 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4378A5",
  fillRule: "nonzero",
  d: "M182.49 266.632c0-25.635-2.032-89.565.855-90.75.338-.135 5.595 4.32 5.595 4.32s10.208-9.345 11.535-10.237c.74-.404 1.436-.884 2.078-1.433 5.01-4.117 24.09 7.86 26.647 27 0 0 8.723 40.065 2.58 50.43a321.92 321.92 0 01-.225 3.443c2.955 7.38-3.293 30.037-10.748 30.93-13.14 7.215-38.317-4.125-38.317-13.702z"
});

var _ref51 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4687C7",
  fillRule: "nonzero",
  d: "M162.442 263.738c7.41-1.8 21.75-6.93 26.805-18.946 25.838-16.807 12.908-32.25 15.368-49.454 1.792-8.468 7.77-21.458 10.335-5.618 1.32 15 6.173 38.04 6.105 38.25-11.955 31.612-39.375 42.862-59.25 40.643-.36-3.765.045-4.726.637-4.875z"
});

var _ref52 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FFF",
  fillRule: "nonzero",
  stroke: "#36434C",
  strokeWidth: 1.005,
  d: "M146.07 258c.775.315 1.57.583 2.377.803 9.27 2.512 14.693 1.26 17.25 1.394.96.046 1.853.106 2.73.143-.39 2.423-.75 4.83-1.162 7.245-7.065.788-18.105 3.442-22.275 3.75-5.43.473-6.06-.097-6.06-.097.51-1.718 5.362-2.468 7.912-3.248a23.918 23.918 0 004.598-.863c.75-.75-3-1.32-5.813-.442-2.902.293-8.602 4.538-9.127 4.905-1.08.75-7.327 2.13-8.25 1.95-1.912.502 15-13.808 17.82-15.54z"
});

var _ref53 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M159.87 262.567c13.965-7.635 17.782-11.002 25.192-23.542 10.41-17.588 15-39.21 21.413-57.653 3.833-9 20.565-4.845 20.183 12.998 1.687 19.095-12.825 47.055-22.08 54.998-11.04 11.73-32.168 20.204-43.905 20.385l-.803-7.185z"
});

var _ref54 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#004C75",
  fillRule: "nonzero",
  d: "M160.673 270.465h-.66l-.93-8.287.427-.226c14.168-7.747 17.663-11.01 24.915-23.25 7.425-12.547 11.873-27.157 16.185-41.287 1.725-5.662 3.36-11.017 5.182-16.275a7.972 7.972 0 014.696-4.5 10.995 10.995 0 019.75 1.538c4.71 3.135 7.312 9.044 7.162 16.132 1.762 19.882-13.433 47.955-22.275 55.537-6.285 6.675-16.26 12.833-27.36 16.883-6.405 2.332-12.472 3.652-17.092 3.735zm46.5-88.882c-1.808 5.197-3.435 10.537-5.16 16.185-4.328 14.212-8.805 28.89-16.313 41.595-7.267 12.307-11.085 15.915-25.057 23.587l.682 6.067c4.365-.164 9.983-1.44 15.923-3.607 10.725-3.923 20.737-10.088 26.835-16.56 8.7-7.5 23.557-34.927 21.832-54.48.143-6.69-2.25-12.165-6.547-15.037-2.693-1.8-5.82-2.318-8.378-1.388a6.518 6.518 0 00-3.81 3.638h-.007z"
});

var _ref55 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#FCB21F",
  fillRule: "nonzero",
  d: "M188.512 134.925c-.75-1.215-9.375-22.8-15.255-21.308-5.88 1.493-6.142 4.755-6.142 4.755s-1.065 3.75-9.885 5.528c-8.82 1.777-8.528 1.05-9.585 1.132-1.058.083-9.225 1.103-9.998 5.956-.772 4.852 8.018 15 12.473 13.252 4.455-1.748 20.137-12.907 23.04-8.963 2.903 3.946 3.667 7.703 7.583 8.123a9.21 9.21 0 016.135 2.933c.457.457 7.267 3.547 8.137-2.655.87-6.203-6.502-8.753-6.502-8.753zm-7.41 14.325s8.25 9.9-.6 16.83c0 0-8.647 6.982-15.097-1.073-6.45-8.055 7.192-4.837 7.868-5.25.674-.412 6.562-2.812 4.717-7.755-1.845-4.942 3.112-2.752 3.112-2.752z"
});

function SvgWorking(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 555 421"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _ref, _ref2, _ref3, _ref4, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#045388",
    fillRule: "nonzero",
    d: "M476.94 124.08l-6.428-14.34-7.852 14.34z",
    style: {
      mixBlendMode: "multiply"
    }
  }), _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref39, _ref40, _ref41, _ref42, _ref43, _ref44, _ref45, _ref46, _ref47, _ref48, _ref49, _ref50, _ref51, _ref52, _ref53, _ref54, _ref55));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NTUgNDIxIj48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNjdDQ0U2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00MjcuMzk1IDE3NC4zMDhjLTEuNjY1LTEwLjE3IDE1LTE0LjE1MyAxOS4zMjgtNy45NTgtMS4zODgtOS43MTMgNi40NTctMjIuNDQ3IDE5LjkwNC0yMy41NDIgMjUuMzk1LTIuMzc4IDE4IDE2LjUgMzAuMjQgMTYuNzYyIDExLjE0NS0uMjEgMi44MzUtMTYuMzI3IDI4LjE5My04LjI1IDYuMDc1IDEuODA4IDkuMTUgOC41ODggMTMuNDQgMTYuOTcyIDguNjg1LTkuNTU0IDE0LjAxOC0zLjMzIDE1LjYwNyA2YTQ0OS45MjUgNDQ5LjkyNSAwIDAxLTEyNi43MTIuMDE2eiIvPjxwYXRoIGZpbGw9IiMwNDUzODgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQ0OS41MjcgMjk2Ljc2Yy0uOTkgNy43MjUgMy4yMjYgMTcuMjEzIDE4LjU0OCAxOS4wOTUgMTcuNTU4LjMgMjQuMDYtMTAuNzAzIDIzLjUzNS0xOS4wOTVoLTQyLjA4M3oiLz48cGF0aCBmaWxsPSIjRkJBQzFEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00OTAuNzc3IDI5Mi44MzdsLTIuMjUtMTQ1LjYxMi0zOC4yNzktLjAwN3YxNDUuNjE5eiIvPjxwYXRoIGZpbGw9IiNGQ0Q1Q0EiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQ4Ny40MTggMTQ3LjQ1bC0xNi45MDYtMzcuNzEtMjAuNjU0IDM3LjcxeiIvPjxwYXRoIGZpbGw9IiMwNDUzODgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQ3Ni45NCAxMjQuMDhsLTYuNDI4LTE0LjM0LTcuODUyIDE0LjM0eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDc5LjEzNyAxNDcuNzA1aDEuNTM4djE0NS4xMzJoLTEuNTM4ek00NjAuMzUgMTQ3LjcwNWgxLjUzOHYxNDUuMTMyaC0xLjUzOHoiLz48cGF0aCBmaWxsPSIjRkJBQzFEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00NDguNTkgMjkxLjM0NWg0My44NTJ2NS43Nkg0NDguNTl6Ii8+PHBhdGggZmlsbD0iIzY3Q0NFNiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzQuOTMzIDIzMC4wNDhsLTEwLjMyOCAyMi4zMjcgMjUuOTUgMjguMTYzIDIzLjE2LTguNDlhMTA5LjggMTA5LjggMCAwMDI3LjEyNyAxMi40OGMyLjgyNSA3LjczNCA1LjY1MyAxNS40NDcgOC40ODMgMjMuMTM3bDM4LjI1IDEuNTZjMy40NS03LjQ2IDYuOTI1LTE0LjkyMyAxMC40MjUtMjIuMzg4YTExMC44NjUgMTEwLjg2NSAwIDAwMjguMDUtMTAuMzJjNy40MyAzLjQ0IDE0Ljg3MyA2Ljg4MyAyMi4zMjcgMTAuMzI4bDI4LjE1Ni0yNS45NDNjLTIuODQzLTcuNzI0LTUuNjU2LTE1LjQ0Mi04LjUxMy0yMy4xNTJhMTEwLjE5OCAxMTAuMTk4IDAgMDAxMi40OC0yNy4xNDNjNy43MDUtMi44MiAxNS40MS01LjY1IDIzLjExNS04LjQ5bDEuNTUzLTM4LjI1Yy03LjQ3LTMuNDctMTQuOTMzLTYuOTMtMjIuMzg4LTEwLjM4YTExMC44NDMgMTEwLjg0MyAwIDAwLTEwLjMyLTI4LjA1N2MzLjQ2NS03LjQyNSA2Ljg4NS0xNC44NzMgMTAuMzQzLTIyLjMybC0yNS45NTgtMjguMTctMjMuMTQ1IDguNTA1YTExMC43OTcgMTEwLjc5NyAwIDAwLTI3LjEyLTEyLjUwMmwtOC40OTgtMjMuMS0zOC4yNS0xLjU2OGExOTMzNC4yIDE5MzM0LjIgMCAwMC0xMC4zOCAyMi40MDIgMTEwLjE3NSAxMTAuMTc1IDAgMDAtMjguMDUgMTAuMzA1TDk5LjA3NiA2OC42NCA3MC45MiA5NC42MDVjMi44MzUgNy43MDUgNS42NjUgMTUuNDIgOC40OSAyMy4xNDVhMTExLjEyIDExMS4xMiAwIDAwLTEyLjUxIDI3LjE0M2wtMjMuMTE1IDguNDgyLTEuNTYgMzguMjUgMjIuNDEgMTAuMzczYTExMC43IDExMC43IDAgMDAxMC4yOTcgMjguMDV6bTQ4LjM2LTUuNzk4Yy0xOC43OTYtMjAuMzkyLTIzLjQ1Ny01MC4wOTgtMTEuODEtNzUuMjY3IDExLjY0OC0yNS4xNjggMzcuMzEtNDAuODQxIDY1LjAyLTM5LjcxMSAyNy43MSAxLjEzIDUyLjAxIDE4Ljg0MiA2MS41NjggNDQuODc2IDkuNTYgMjYuMDM0IDIuNDk0IDU1LjI2Mi0xNy45MDEgNzQuMDU0YTY4LjU1IDY4LjU1IDAgMDEtOTYuODc3LTMuOTUyeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE3My43IDI1OC43NWMtNDQuNzM1IDAtODEtMzYuMjY1LTgxLTgxczM2LjI2NS04MSA4MS04MSA4MSAzNi4yNjUgODEgODFjLS4wMzcgNDQuNzItMzYuMjggODAuOTYzLTgxIDgxem0wLTE2MC40MThjLTMyLjEzMyAwLTYxLjEgMTkuMzU4LTczLjM5NSA0OS4wNDUtMTIuMjk1IDI5LjY4OC01LjQ5NCA2My44NTggMTcuMjMgODYuNTc2IDIyLjcyNSAyMi43MTggNTYuODk3IDI5LjUwOSA4Ni41ODEgMTcuMjA2IDI5LjY4NC0xMi4zMDMgNDkuMDMzLTQxLjI3NiA0OS4wMjQtNzMuNDA5LS4wMzMtNDMuODYtMzUuNTgtNzkuNDA3LTc5LjQ0LTc5LjQ0di4wMjJ6Ii8+PHBhdGggZmlsbD0iIzY3Q0NFNiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzMuMzIgODcuOTE1Yy40NDMtMy41Ny0zLjk0NS00Ljk2NS01LjA4NS0yLjc5LjM2OC0zLjQwNS0xLjcwMy03Ljg2OC01LjI1LTguMjUtNi42ODItLjgyNS00Ljc0OCA1Ljc4Mi03Ljk1NyA1Ljg4LTIuOTQtLjA3NS0uNzUtNS43MjItNy40MjUtMi44ODctMS41OTguNjMtMi40MDggMy0zLjU0IDUuOTQ3LTIuMjUtMy4zNTItNi4wNjggMS45ODctMy41MTggMi44OCAxMS4wNyAyLjA5MyAzMy41NzggMS43ODUgMzIuNzc1LS43OHoiLz48cGF0aCBmaWxsPSIjMDQ1Mzg4IiBkPSJNMzAuMzE1IDI4Mi42MDhjMCAuNDEyIDIuMzU1IDUuNjkyIDIuMzg1IDYuMTEyaDExLjU1Yy0uMDQ1LS40MiAxLjc0LTUuNyAxLjY5NS02LjEybC0xNS42My4wMDd6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIzLjQyMiAyNDYuNDcyYzEuMTYzIDIuOTE4IDIuMjUgMTcuMzQ4IDMuMjg1IDIwLjMwM2gyNC41MThjMS4xMzMtMyAyLjMxNy0xNy40MDcgMy41ODUtMjAuMzI1IDIuNzktNC4wMjcgMTUuNjMtMTguOTc1IDE5Ljk4Ny0zMyA1Ljg2NS0xNy41NzItMTAuNTYtNDIuMzgyLTM2LTQyLjQyLTI1LjM3Mi0uMjI1LTQzLjI2NyAyMi44NjgtMzcuNDE3IDQwLjUgNC4zNzMgMTQuNjQgMTYuNjIgMjguMzg3IDIyLjA0MyAzNC45NDJ6IiBvcGFjaXR5PSIuMTUiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00My40MzIgMjY0Ljg4NWMtMS44NjctMTAuMjE1LS45Ni0zMS43MDIgMi43Ni00Ny4xNjdhNC4yNTIgNC4yNTIgMCAwMS0xLjUtLjExM2MtMi4zMjUtLjYyMy00LjAyNy0zLjI2Mi01LjI1LTYuMjc4LTEuNzQ3IDMuOTUzLTMuODg1IDYuMTI4LTYuMzkgNi40OGE1LjYyNSA1LjYyNSAwIDAxLTIuOTI0LS4zOTdjMi4yMDUgMTQuNzgyIDQuNTgyIDM2LjI0OCAzLjk4MiA0Ny4zNzhsLTEuNS0uMDgzYy41NzgtMTAuNTQ1LTEuNzctMzIuNzA3LTQuMTI1LTQ4LjIxNy0yLjQ5Ny0xLjcyNi00LjY4OC00Ljg0NS02LjE5NS03LjkyLTEuNTk4LTMuMjQ4LTIuOTQtNy41NDYtMS41LTlsLjA5OC0uMDgzYzEuMjc0LS44NzggMi40NjctMS4wOTUgMy41NDctLjY1MyAyLjYxNyAxLjA4IDMuNDk1IDUuNzE2IDMuOTY4IDguMjA2di4xMDVjLjQzNCAyLjI1LjkyMiA1LjE1MiAxLjQyNSA4LjQzYTQuNjU3IDQuNjU3IDAgMDAzIC43MDRjMS43MS0uMjQgMy44NzctMS44MyA1Ljg0Mi03LjA5NGE0Ni42NjUgNDYuNjY1IDAgMDEtMS4zMDUtNS4xMDhjLS45ODMtNC45MDUuMzUyLTguNzIyIDIuMTc1LTkuOTY4YTEuOTEyIDEuOTEyIDAgMDEyLjE3NS0uMTM1YzEuMTMyLjc1IDEuNSAyLjczOC45NiA1LjYzM2E2MC4zNTMgNjAuMzUzIDAgMDEtMi4zODUgOS42NDVjMS4zMzUgMy45NTIgMyA2LjQ0MiA0Ljc4NSA2LjkxNWEyLjcxNSAyLjcxNSAwIDAwMS41LS4wNTIgNDUuMzQ1IDQ1LjM0NSAwIDAxNC4yNi0xMS4yMDZsLjI4NS0uNDg3Yy45NDUtMS42NDIgMS44MzgtMy4xOTUgMy4wODMtMy4wNjcgMS4wNjQuMDk3IDEuNSAxLjM4IDEuNjUgMS44IDEuMjA3IDMuNTEtMy41NDggOS45NzUtNC44OSAxMS41MTJhMTAuNjA1IDEwLjYwNSAwIDAxLTMuMDY4IDIuNTVjLTMuNzUgMTUuMTcyLTQuODYgMzcuMTg1LTMgNDcuNDIybC0xLjQ2My4yNDh6bTEwLjYzNi02Mi4wMjVhOS4zMTUgOS4zMTUgMCAwMC0xLjYwNSAyLjI1bC0uMjkzLjUwMmE0MC4wOCA0MC4wOCAwIDAwLTMuNjY4IDkuMzIzYy40NzktLjQxLjkyNS0uODU3IDEuMzM1LTEuMzM1IDIuMDctMi4zNzcgNS4zNzgtNy43NTUgNC42MDUtMTAuMDJhMi4yNSAyLjI1IDAgMDAtLjM3NC0uNzJ6bS0zMi4yNS0yLjE0NWMtLjM5LjUxNy0uMTI4IDMuMjU1IDEuODA3IDcuMTg1YTIzLjAzMyAyMy4wMzMgMCAwMDQuNSA2LjM2OGMtLjM5OC0yLjUyLS43OTUtNC44MjMtMS4xNy02LjgxOHYtLjExMmMtLjM2LTEuODgzLTEuMi02LjMwOC0zLjA1Mi03LjA3M2EyLjE2IDIuMTYgMCAwMC0yLjA3LjQ1aC0uMDE1em0xOC45Ni01LjQ3NWEuNzUuNzUgMCAwMC0uMzc1LjE1Yy0xLjE3OC43OTUtMi40MzggMy45MzgtMS41NDUgOC40MDguMjAyIDEuMDA1LjQyIDEuOTU3LjY2IDIuODY0YTY5LjYwNyA2OS42MDcgMCAwMDEuNjcyLTcuMzA1Yy40ODgtMi43NiAwLTMuODc3LS4yOTItNC4wODdhLjIxNy4yMTcgMCAwMC0uMTA2LS4wM2gtLjAxNHoiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBkPSJNMjIuNSAyNjMuNDk4bDMgMy4yMzJjLTIuNzgyLS4yNjMtMi45MTggNC4xNy41NzggNC4zOC0zLjU3LS4xMzUtMy43MTMgNC40MzMtLjIyNiA0LjUtMy40ODctLjE4OC0zLjYzIDQuOTU3LS4zNDUgNS4yNWwtMi4xOTcgMi4zODVjNC41IDIuMTE1IDI5LjQ2IDEuOTggMzAtLjIyNWwtMS45ODgtMi4zNjJjMy41MDMtLjMwOCAyLjU3My00Ljk0My0uMzQ1LTQuNzMzIDMuOTE2LS40MjggMi40MjMtNS4wNyAwLTQuNzU1IDMuMjkzLS42MDggMi4yODgtMy45Ni40MTMtNC4zNzNsMi40LTMuMjc3LTMxLjI5LS4wMjJ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjY1LjQ0IDIuNTY1Yy0uMTY1IDAgMCAuNDIgMCAuNDItNy4zNzMtMy01OC4xNDgtNC45OC01OS43NjcgNi4yNC0yLjYxIDE4LjExMi01LjI1IDMwLjc1IDguNDk3IDM2LjE1NyA4LjgzNSAzLjQ5NSAyOC4yNDUgMi41NzMgNDAuNzQ4IDEuNDFsMTAuMDIgNy40NDgtLjI0LTguNThjLjUzMi0uMDc1Ljk1Mi0uMTQyIDEuMjM3LS4xOTUgMTMuNjU3LTIuNjAzIDIxLjM5Ny00My4yMTUtLjQ5NS00Mi45eiIgb3BhY2l0eT0iLjE1Ii8+PHBhdGggZmlsbD0iI0I0QzZEMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTc3LjA2IDMxNy42NDdjLTYuMTY4IDAtMTEuMTY3LTUtMTEuMTY3LTExLjE2N1YxNjMuNzI1YTExLjE2IDExLjE2IDAgMDExMS4xNjctMTEuMTZoMjM4LjY1N2M2LjE2MS4wMDQgMTEuMTUzIDUgMTEuMTUzIDExLjE2VjMwNi40OGMwIDYuMTYyLTQuOTkgMTEuMTYtMTEuMTUzIDExLjE2N0gxNzcuMDZ6Ii8+PHBhdGggZmlsbD0iI0I0QzZEMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTY0LjgyIDMwNi40OFYxNjMuNzI1Yy4wMTItNi43NTIgNS40ODgtMTIuMjIgMTIuMjQtMTIuMjI1aDIzOC42NTdjNi43NTIuMDA4IDEyLjIyMSA1LjQ4MSAxMi4yMjYgMTIuMjMyVjMwNi40OGExMi4yNCAxMi4yNCAwIDAxLTEyLjIyNiAxMi4yN0gxNzcuMDZhMTIuMjQ4IDEyLjI0OCAwIDAxLTEyLjI0LTEyLjI3em0yNjEtMTQyLjc1NWMtLjAwNC01LjU2Ny00LjUxMy0xMC4wOC0xMC4wOC0xMC4wODhIMTc3LjA2Yy01LjU2OS4wMDktMTAuMDgzIDQuNTE5LTEwLjA5NSAxMC4wODhWMzA2LjQ4Yy4wMDggNS41NzIgNC41MjMgMTAuMDg3IDEwLjA5NSAxMC4wOTVoMjM4LjY1N2M1LjU2OC0uMDEyIDEwLjA3Ni00LjUyNyAxMC4wOC0xMC4wOTVsLjAyMy0xNDIuNzU1eiIvPjxwYXRoIGZpbGw9IiMwMDRDNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQxNC4zOTcgMTYzLjQ5M3YtLjcyOEgxNzguMTU1djguNjE3aC4yMXYxMzIuMjFoMjM2LjI0M1YxNjMuNDkzeiIvPjxwYXRoIGZpbGw9IiNCNEM2RDAiIGQ9Ik00NDcuOTc1IDMwOC40NDVIMTQ0Ljc4N3Y5YzMuNiA1LjM2MyAxMi4zNTMgOS4xODggMTYuODQ1IDkuMTg4SDQzMS4xOWM0LjQ1NSAwIDEzLjE1NS0zLjc4OCAxNi43ODUtOS4xMTN2LTkuMDc1eiIvPjxwYXRoIGZpbGw9IiNCNEM2RDAiIGQ9Ik0xNDQuOTUyIDMxNy43MTVjMy43NSA1LjI1IDEyLjI0IDguOTE4IDE2LjY1OCA4LjkxOGgyNjkuNTU4YzQuNDAyIDAgMTIuOTM3LTMuNjk4IDE2LjY0Mi04LjkxOEgxNDQuOTUyeiIvPjxwYXRoIGZpbGw9IiNCNEM2RDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI3MC44NCAzMDguNjc4YTYuNzUgNi43NSAwIDAwNi43NSA2LjIwMmgzNy42MmE2Ljc1IDYuNzUgMCAwMDYuNzUtNi4yMDJoLTUxLjEyeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0My43ODcgMjM3Ljk2aDE0LjQzdjEuNTM4aC0xNC40M3pNMjI4LjI0OCAyMDIuOTJoMTcuNzZ2MS41MzhoLTE3Ljc2ek0zMjAuOTMzIDIwMi45MmgxNC40M3YxLjUzOGgtMTQuNDN6TTM0NC4yNDMgMjAyLjkyaDE0LjQzdjEuNTM4aC0xNC40M3pNMjUxLjAwMiAyMDIuOTJoNjAuNDk1djEuNTM4aC02MC40OTV6TTIxOS4zNjggMTg3Ljc2MmgxNC40M3YxLjUzOGgtMTQuNDN6TTIxOS4zNjggMjU4Ljg1NWgxNC40M3YxLjUzOGgtMTQuNDN6TTI1OS4zMjcgMjQ1LjU0MkgzNTkuNzl2MS41MzhIMjU5LjMyN3pNMjU5LjMyNyAyNTMuMTI1aDI2LjA4NXYxLjUzOGgtMjYuMDg1ek0yOTIuMDcyIDI1My4xMjVoMjYuMDg1djEuNTM4aC0yNi4wODV6TTMyNC44MTcgMjUzLjEyNWgyNi4wODV2MS41MzhoLTI2LjA4NXpNMjE3LjE0OCAxOTUuMzM4aDI3Ljc1djEuNTM4aC0yNy43NXpNMjQ5Ljg5MyAxOTUuMzM4aDU3LjcydjEuNTM4aC01Ny43MnpNMjE3LjE0OCAyNjYuNDM4aDE0LjQzdjEuNTM4aC0xNC40M3pNMzE4LjE1OCAyNjYuNDM4aDM2LjA3NXYxLjUzOGgtMzYuMDc1ek0yNDEuMDEyIDI2Ni40MzhoNjYuNnYxLjUzOGgtNjYuNnpNMjM3LjEyNyAyNzQuMDJIMzM5LjgxdjEuNTM4SDIzNy4xMjd6TTIzNy4xMjcgMjgxLjU5NWgyMS41MjV2MS41MzhoLTIxLjUyNXpNMjY4LjgyMiAyODEuNTk1aDcyLjg0N3YxLjUzOGgtNzIuODQ3ek0yNDQuMzQzIDIxMC41MDJoNTcuNzJ2MS41MzhoLTU3Ljcyek0zMTMuNzE3IDIxMC41MDJoMjcuNzV2MS41MzhoLTI3Ljc1ek0yMTcuMTQ4IDIyMi44MDNoMjcuNzV2MS41MzhoLTI3Ljc1ek0yNTMuNzc4IDIyMi44MDNoNTQuOTQ1djEuNTM4aC01NC45NDV6TTIxNy4xNDggMjMwLjM4NWgyNy43NXYxLjUzOGgtMjcuNzV6TTI1My43NzggMjMwLjM4NWg4Mi4xNHYxLjUzOGgtODIuMTR6TTIwMC42NDggMTgzLjkyM2gxLjUzOHYxMDMuMDVoLTEuNTM4eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTUwNS42MiA2NC41NTJjLTExLjgwNS0yLjAzMi03Ni44My02LTc4Ljk2OCA4Ljc5OC0zLjQ1IDIzLjkyNS02LjkzIDQwLjU5OCAxMS4yNSA0Ny43ODIgMTEuNjcgNC42MTMgMzcuMzIgMy4zOSA1My44MzYgMS44NTNsMTMuMjQ1IDkuODQtLjMyMy0xMS4zMjVhMzUuMjE0IDM1LjIxNCAwIDAwMS42MzUtLjI3YzE4LjAzLTMuNDM1IDI4LjI2LTU3LjEwNS0uNjc1LTU2LjY3OHoiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWRhc2hhcnJheT0iNi42MTUiIHN0cm9rZS13aWR0aD0iMS4xMDMiIGQ9Ik00NjUuNDggMTA0LjA3OGMuMDA2LTMyLjM3LTIwLjE1Ni02MS4zMTYtNTAuNTItNzIuNTMtMzAuMzY2LTExLjIxNS02NC41MDItMi4zMjQtODUuNTM3IDIyLjI4LTE1LjM5My0zNi44NDktNTcuMzE0LTU0Ljc1Ni05NC41NzktNDAuNC0zNy4yNjQgMTQuMzU0LTU2LjMzOCA1NS43NTgtNDMuMDMxIDkzLjQxYTY3LjY0MyA2Ny42NDMgMCAwMC0zOC4xODMgMTE0Ljc1Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMxNSA2Ny41aDM3LjVWMjFIMzE1eiIvPjxwYXRoIGZpbGw9IiNGQ0IyMUYiIGQ9Ik0zMTguNTc4IDMxLjY0OWgyNS44NDN2LTQuNTc1aC0yNS44NDN2NC41NzV6bTAgOC4xMzNoMjUuODQzdi00LjU3NWgtMjUuODQzdjQuNTc1em0wIDguMTM2aDI1Ljg0M3YtNC41NzVoLTI1Ljg0M3Y0LjU3NXptMCA4LjEzM2gyNS44NDN2LTQuNTc1aC0yNS44NDN2NC41NzV6TTMxMi42OSAxMmMtMi4wMzggMC0zLjY5MSAxLjA4NC0zLjY5MSAyLjQyMnY2NS42NTZjMCAxLjMzNyAxLjY1MyAyLjQyMiAzLjY5IDIuNDIyaDM3LjYxOGMyLjA0IDAgMy42OTItMS4wODUgMy42OTItMi40MjJWMTQuNDIyYzAtMS4zMzgtMS42NTMtMi40MjItMy42OTItMi40MjJoLTM3LjYxN3oiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzM2NDM0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik00MDQuNDE1IDE0MS4xNDNzLTExLjI1IDE4LjgxLTI1LjA4OCAyOS4wNjJsMjQuODcgMTQuMTUyYy4zNDYtNS42NTUgMy0xOC4zIDMtMTguM2wxMy45OC0zLjIzMmMtLjI4NS00LjY3MiAxMC40NC0yNy45MTUgMTAuMTU1LTI2LjI1bC0xNi45NjQtNy4zNjUtOS45NTMgMTEuOTMzeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMzY0MzRDIiBzdHJva2Utd2lkdGg9IjEuMDA1IiBkPSJNNDUzLjYzIDM4Mi4yMjNjLTMuNjQ1IDcuNS04LjI5NSAxNC40ODItMTIuODYzIDIxLjUzMi0yLjIwNC0xLjQ0LTQuNTM3LTQuNS02LjkzLTUuNDktLjc1LS4zIDQuNS04LjkzMyAxMC44MDgtMjIuNSAzLjEwNSAyLjAzMyA2LjEwNSA0LjIgOC45ODUgNi40NTh6Ii8+PHBhdGggZmlsbD0iIzAwNEM3NSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDM0LjUyIDM5NC4wNjVsNS40NzUgMy42NmMuMDM4IDAgMy43NSAyLjM3NyAzLjc1IDIuNDA3IDEuOTg4IDQuMTQ4IDUuNzc1IDcuMzggOC42NCAxMC4yOThzNC4xNDggMy44NCA3LjMzNSA3LjE4NWExLjMzNSAxLjMzNSAwIDAxMCAxLjk3MmMtMi4xNTMgMS45NjYtNS43ODMtLjQyNy04LjAxOC0xLjc3LTIuMjM1LTEuMzQyLTYuNTc3LTQuNzkyLTguNzIyLTYuMzY3LTQuODQ1LTMuNTMyLTYuOTk4LTYuNTI1LTcuOTY1LTUuNjQ3LS42MzcuNTctNS42MTgtMy4zNi00Ljk5NS00Ljc0OCAxLjU5OC0zLjU1NSAzLjc4OC01LjA1NSA0LjUtNi45OXoiLz48cGF0aCBmaWxsPSIjNDM3OEE1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00NzguODE1IDMwNy4yODNjLTEuMzItMi44Mi02LjEyNy0yNi42NC0xNy4xNi0zNS40MjNoLTQ3LjI1YzIuMjUgNC4yMyA0LjUgNy41OSA2LjQ2NSA5LjIwMiA0Ny4zNjMgMjEuMDktMjMuNDM4LTUuMjg3LTEuNDMzIDMuODYzIDUuODczIDIuNDQ1IDQ1LjkzOCAyOS45NDcgMTYuMTYzIDEwNy43MyA3LjU0NSAzLjEzNSA1LjUyIDEuNzE4IDEyLjQ3MiAzLjUyNSAyOC45ODgtNDMuNzc4IDMxLjQxOC04NS4zNTggMzAuNzQzLTg4Ljg5N3oiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzM2NDM0QyIgc3Ryb2tlLXdpZHRoPSIxLjAwNSIgZD0iTTQ4Ny4wMjcgMzc2LjAzNWMxLjIgOC4yNSAxLjMxMyAxNi42MzUgMS41IDI1LjAzNS0yLjYzMi4wNi02LjI3Ny0xLjE1NS04LjgyLS42MTUtLjc1LjE1OC0xLjMyNy05LjkyMi0zLjc1LTI0LjY2NyAzLjcwNi0uMDgzIDcuMzg4LjAzIDExLjA3LjI0N3oiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00NDYuMjk1IDMwOC40MzhjNS40NzUtLjEzNSAxNy41NSAyNy44NCAyOS42NjIgODcuMDZsMTMuMzU4LTMuNDhjLTEuMTYzLTE5LjQwMy40NzMtMTE1LjA4OC0xOC4xOC0xMTMuMDE4LTYuMzA4LTEuMDM1LTI5LjA3Ny02Ljk5LTYyLjk0LTE1Ljk5OC0zOC43MTUtMjIuMzg3LTQzLjM0Mi01LjI1LTQ4LjM2LTMuMTIgMCAwIDIuOTEgMzkuMjU1IDIwLjI1IDQ4LjU3OCAyMy40MTUgNS45OTMgNDIuNjgzLjU5MyA2Ni4yMS0uMDIyeiIvPjxwYXRoIGZpbGw9IiNCNEM2RDAiIGQ9Ik00OTkuMjYgMjM1LjI3NWMtLjIxNy0uMTU3LTEuNzEtMS4yLTEuODQ1LTEuNzI1TDQ2OS41IDI3My42MTVjMCAuMTgtLjA2Ny4xNTctLjA4Mi4wNTNsLTIuMTMtMy41Ny00OC42NjgtMTAuNjg4Yy0uMDgyLjIyNS0zLjQ0MiAxMC45MjctMy40NjUgMTEuMTk3LS4xNDIgMS40MDMuNzUgMi4wMzMgMS44ODMgMi4xNDVsNDkuOTggNC45ODhhMS45MjcgMS45MjcgMCAwMDEuOTg3LS44MzJ2LjE4YzEuMTQuODI1IDIuMTYuMzQ0IDIuODg3LS42NmwyNy41OTMtMzguMjA2Yy43NjUtLjk5Ny45MjMtMi4xMjItLjIyNS0yLjk0N3oiLz48cGF0aCBmaWxsPSIjMDA0Qzc1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00NzcuNjMgMzk4LjgyN2w2Ljg1NS45NzZjMS4wMDUuMjAyIDQuMjYtLjY1MyA0LjMwNS0uNjQ1IDMuNjk3IDIuODI3IDguNTggMy44MTcgMTIuNDg3IDUuMDE3IDMuOTA4IDEuMiA1LjQ3NiAxLjM4IDkuODc4IDIuODEzYTEuNDEgMS40MSAwIDAxLjkyMyAxLjgzN2MtMS4wMiAzLTUuMzcgMi43LTcuOTg4IDIuNjQ4LTIuNjE3LS4wNTMtOC4wOTItLjk3Ni0xMC43NC0xLjI5LTUuOTYzLS43NS05LjI3OC0yLjM3LTkuNzUtMS4wMzYtLjMwOC44OTMtNi41ODUtLjEyNy02LjY2OC0xLjc3LS4yMS00LjIxNCAxLjM1LTIuMDQuNjk4LTguNTV6Ii8+PHBhdGggZmlsbD0iIzQ2ODdDNyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDA0Ljg3MyAyNTQuNTk1YzIuNzkgMS41IDUuNDA3IDMuMjAzIDguMTkgNC43MzJhMTM2LjkwNSAxMzYuOTA1IDAgMDExNS4zMjIgMy4zYzEuMDY1LTIuMjUgMi4wODUtNC4xMTcgMS43NjItNC4xOTItNy40MDItMS44MDgtMTYuNS0yMi44MDgtMjEuNjMtMzMuNDg4LTEzLjMzNC0yNy43ODctMjIuNS0xMi40MDUtMjQuOTgyLTI5LjYxLTEuNzg1LTguNDY3LTcuNzg1LTIxLjQ1Ny0xMC4zNDMtNS41ODctLjkwNyAxMC4zMDUtMy40OTUgMjQuNDcyLTQuOTk1IDMyLjM0IDcuMzQzIDYuNDcyIDE1LjQxMyAxMi4wMzcgMjIuNTYgMTguNzUgNC44IDQuNDYzIDkuNDQzIDkuMTI3IDE0LjExNSAxMy43NTV6Ii8+PHBhdGggZmlsbD0iIzQzNzhBNSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDA1LjY1MiAyNjYuNjMyYzAtMjUuNjM1IDIuMDMzLTg5LjU2NS0uODU0LTkwLjc1LS4zMzgtLjEzNS01LjU5NiA0LjMyLTUuNTk2IDQuMzJzLTEwLjIwNy05LjM0NS0xMS41MjctMTAuMjM3YTEyLjI0OCAxMi4yNDggMCAwMS0yLjA4NS0xLjQzM2MtNS4wMS00LjExNy0yNC4wOSA3Ljg2LTI2LjY0IDI3IDAgMC04LjcyMiA0MC4wNjUtMi41OCA1MC40My4wNjcgMS4xNjMuMTQyIDIuMzEuMjE3IDMuNDQzLTIuOTU0IDcuMzggMy4yOTMgMzAuMDM3IDEwLjc1NSAzMC45MyAxMy4xMzMgNy4yMTUgMzguMzEtNC4xMjUgMzguMzEtMTMuNzAyeiIvPjxwYXRoIGZpbGw9IiM0Njg3QzciIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQyNS43MDcgMjYzLjczOGMtNy40MS0xLjgtMjEuNzUtNi45My0yNi44MTItMTguOTQ2LTI1LjgzNy0xNi44MDctMTIuOTA3LTMyLjI1LTE1LjM2LTQ5LjQ1NC0xLjc4NS04LjQ2OC03Ljc4NS0yMS40NTgtMTAuMzQzLTUuNTg4LTEuMzIgMTUtNi4xNzIgMzguMDQtNi4xMDUgMzguMjUgMTEuOTYzIDMxLjYxMyAzOS4zODMgNDIuODYzIDU5LjI1IDQwLjY0Mi4zNi0zLjc5NC0uMDM3LTQuNzU1LS42My00LjkwNHoiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzM2NDM0QyIgc3Ryb2tlLXdpZHRoPSIxLjAwNSIgZD0iTTQ0Mi4wOCAyNThjLS43NzguMzE2LTEuNTc0LjU4NC0yLjM4NS44MDMtOS4yNyAyLjUxMi0xNC42OTIgMS4yNi0xNy4yNSAxLjM5NC0uOTUyLjA0Ni0xLjg0NS4xMDYtMi43MjIuMTQzLjM4MiAyLjQyMy43NSA0LjgzIDEuMTU0IDcuMjQ1IDcuMDY1Ljc4OCAxOC4xMTMgMy40NDIgMjIuMjc1IDMuNzUgNS40My40NzMgNi4wNi0uMDk3IDYuMDYtLjA5Ny0uNTAyLTEuNzE4LTUuMzU0LTIuNDY4LTcuOTEyLTMuMjQ4YTIzLjkxOCAyMy45MTggMCAwMS00LjU5OC0uODYzYy0uNzUtLjc1IDMtMS4zMiA1LjgyLS40NDIgMi44OTYuMjkzIDguNTk2IDQuNTM4IDkuMTIgNC45MDUgMS4wODguNzUgNy4zMjggMi4xMyA4LjI1IDEuOTUgMS45MTMuNTAyLTE0Ljk5Mi0xMy44MDgtMTcuODEyLTE1LjU0eiIvPjxwYXRoIGZpbGw9IiMwMDRDNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQyOC4yNSAyNjIuNTY3Yy0xMy45NzMtNy42MzUtMTcuNzktMTEuMDAyLTI1LjItMjMuNTQyLTEwLjQwMy0xNy41ODgtMTUtMzkuMjEtMjEuNDEzLTU3LjY1My0zLjgzMi05LTIwLjU1Ny00Ljg0NS0yMC4xNzUgMTIuOTk4LTEuNjk1IDE5LjA5NSAxMi44MTggNDcuMDU1IDIyLjA4IDU0Ljk5OCAxMS4wMzMgMTEuNzMgMzIuMTYgMjAuMjA0IDQzLjg5OCAyMC4zODVsLjgxLTcuMTg1eiIvPjxwYXRoIGZpbGw9IiMwMDRDNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQxMC4zODUgMjY2LjcyM2MtMTEuMS00LjA1LTIxLjA3NS0xMC4yMDgtMjcuMzYtMTYuODgzLTguODM1LTcuNTgzLTI0LTM1LjY1NS0yMi4yNjctNTUuNTM3LS4xNTgtNy4wODggMi40NTItMTIuOTk4IDcuMTU1LTE2LjEzMyAzLjA5LTIuMDYzIDYuNzUtMi42MzIgOS43NS0xLjUzN2E3Ljk1NyA3Ljk1NyAwIDAxNC42OTUgNC41YzEuODMgNS4yNSAzLjQ1NyAxMC42MTIgNS4xOSAxNi4yNzQgNC4zMDUgMTQuMTMgOC43NiAyOC43NCAxNi4xODUgNDEuMjg4IDcuMjQ1IDEyLjI3IDEwLjc0IDE1LjUzMiAyNC45MDcgMjMuMjVsLjQyOC4yMjUtLjkyMyA4LjI4N2gtLjY0NWMtNC42NS0uMDc1LTEwLjcxNy0xLjM5NC0xNy4xMTUtMy43MzR6bS0zMy4yMzMtODguNzc4Yy0yLjU1Ny0uOTMtNS42OTItLjQxMi04LjM3NyAxLjM4OC00LjMwNSAyLjg3Mi02LjY5IDguMzQ3LTYuNTQ3IDE1LjAzNy0xLjczMyAxOS41NTMgMTMuMTMyIDQ3LjAxIDIxLjgzMiA1NC40OCA2LjA5OCA2LjQ3MiAxNi4xMSAxMi42MzggMjYuODM1IDE2LjU2IDUuOTMzIDIuMTY3IDExLjU1IDMuNDQyIDE1LjkxNSAzLjYwN2wuNjgzLTYuMDY3Yy0xMy45NzMtNy42NzItMTcuNzgzLTExLjI1LTI1LjA1LTIzLjU4Ny03LjUtMTIuNzA2LTEyLTI3LjM4My0xNi4zMi00MS41OTUtMS43MTgtNS42NDgtMy4zNTMtMTAuOTg4LTUuMTUzLTE2LjE4NWE2LjUxNyA2LjUxNyAwIDAwLTMuODE4LTMuNjM4eiIvPjxwYXRoIGZpbGw9IiNGQ0IyMUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTM5OS42MzcgMTM0LjkyNWMuNzUtMS4yMTUgOS4zNjgtMjIuOCAxNS4yNTUtMjEuMzA4IDUuODg4IDEuNDkzIDYuMTM1IDQuNzU1IDYuMTM1IDQuNzU1czEuMDY1IDMuNzUgOS44OTMgNS41MjhjOC44MjcgMS43NzcgOC41MjcgMS4wNSA5LjU3NyAxLjEzMiAxLjA1LjA4MyA5LjIzMyAxLjEwMyA5Ljk5OCA1Ljk1Ni43NjUgNC44NTItNy45OTUgMTQuOTkyLTEyLjQ5NSAxMy4yNTItNC41LTEuNzQtMjAuMTM3LTEyLjkwNy0yMy4wMzMtOC45NjMtMi44OTQgMy45NDYtMy42NzQgNy43MDMtNy41ODIgOC4xMjNhOS4yNCA5LjI0IDAgMDAtNi4xNDIgMi45MzNjLS40NTguNDU3LTcuMjYgMy41NDctOC4xMzgtMi42NTUtLjg3Ny02LjIwMyA2LjUzMi04Ljc1MyA2LjUzMi04Ljc1M3pNNDA3LjA0OCAxNDkuMjVzLTguMjUgOS45LjU5MiAxNi44M2MwIDAgOC42NTUgNi45ODIgMTUuMTA1LTEuMDczIDYuNDUtOC4wNTUtNy4xOTItNC44MzctNy44NjgtNS4yNS0uNjc1LS40MTItNi41NjItMi44MTItNC43MTctNy43NTUgMS44NDUtNC45NDItMy4xMTMtMi43NTItMy4xMTMtMi43NTJ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMzNjQzNEMiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTgzLjc1IDE0MS4xNDNzMTEuMjUgMTguODEgMjUuMDg4IDI5LjA2MmwtMjQuODYzIDE0LjE1MmMtLjM1Mi01LjY1NS0zLTE4LjMtMy0xOC4zbC0xMy45NzItMy4yMzJjLjI4NS00LjY3Mi0xMC40NDgtMjcuOTE1LTEwLjE2My0yNi4yNWwxNi45NjUtNy4zNjUgOS45NDUgMTEuOTMzeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMzY0MzRDIiBzdHJva2Utd2lkdGg9IjEuMDA1IiBkPSJNMTM0LjUxMiAzODIuMjIzYzMuNjUzIDcuNSA4LjI5NiAxNC40ODIgMTIuODYzIDIxLjUzMiAyLjIwNS0xLjQ0IDQuNTM3LTQuNSA2LjkzLTUuNDkuNzUtLjMtNC41LTguOTMzLTEwLjgtMjIuNS0zLjA5IDIuMDMzLTYuMDY3IDQuMi04Ljk5MyA2LjQ1OHoiLz48cGF0aCBmaWxsPSIjMDA0Qzc1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNTMuNjMgMzk0LjA2NWwtNS40NzUgMy42NmMtLjA0NSAwLTMuNzUgMi4zNzctMy43NSAyLjQwNy0xLjk5NSA0LjE0OC01Ljc4MiA3LjM4LTguNjQ4IDEwLjI5OC0yLjg2NCAyLjkxOC00LjE0IDMuODQtNy4zMzQgNy4xODVhMS4zNDMgMS4zNDMgMCAwMDAgMS45NzJjMi4xNiAxLjk2NiA1Ljc5LS40MjcgOC4wMTctMS43NyAyLjIyNy0xLjM0MiA2LjU3OC00Ljc5MiA4LjcyMi02LjM2NyA0Ljg0NS0zLjUzMiA2Ljk5OC02LjUyNSA3Ljk2NS01LjY0Ny42NDUuNTcgNS42MjUtMy4zNiA0Ljk5NS00Ljc0OC0xLjU5Ny0zLjU1NS0zLjc4Ny01LjA1NS00LjQ5Mi02Ljk5eiIvPjxwYXRoIGZpbGw9IiM0Mzc4QTUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEwOS4zMjggMzA3LjI4M2MxLjMyLTIuODIgNi4xMzUtMjYuNjQgMTcuMTY3LTM1LjQyM2g0Ny4yNWMtMi4yNSA0LjIzLTQuNTM3IDcuNTktNi40NTggOS4yMDItNDcuMzcgMjEuMDkgMjMuNDMtNS4yODcgMS40MjUgMy44NjMtNS44NjQgMi40NDUtNDUuOTM3IDI5Ljk0Ny0xNi4xNTQgMTA3LjczLTcuNTUzIDMuMTM1LTUuNTI4IDEuNzE4LTEyLjQ4IDMuNTI1LTI4Ljk4OC00My43NzgtMzEuNDI1LTg1LjM1OC0zMC43NS04OC44OTd6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMzNjQzNEMiIHN0cm9rZS13aWR0aD0iMS4wMDUiIGQ9Ik0xMDEuMTIzIDM3Ni4wMzVjLTEuMjA4IDguMjUtMS4zMiAxNi42MzUtMS41IDI1LjAzNSAyLjYyNC4wNiA2LjI3Ny0xLjE1NSA4LjgxMi0uNjE1Ljc1LjE1OCAxLjMzNS05LjkyMiAzLjc1LTI0LjY2Ny0zLjY5OC0uMDgzLTcuMzguMDMtMTEuMDYzLjI0N3oiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNDEuODQ3IDMwOC40MzhjLTUuNDc1LS4xMzUtMTcuNTUgMjcuODQtMjkuNjYyIDg3LjA2bC0xMy4zNTgtMy40OGMxLjE3LTE5LjQwMy0uNDY1LTExNS4wODggMTguMTgtMTEzLjAxOCA2LjMwOC0xLjAzNSAyOS4wODUtNi45OSA2Mi45NC0xNS45OTggMzguNzIzLTIyLjM4NyA0My4zNDMtNS4yNSA0OC4zNjgtMy4xMiAwIDAtMi45MTcgMzkuMjU1LTIwLjI1IDQ4LjU3OC0yMy4zODUgNS45OTMtNDIuNjgzLjU5My02Ni4yMTgtLjAyMnoiLz48cGF0aCBmaWxsPSIjQjRDNkQwIiBkPSJNODguODgyIDIzNS4yNzVjLjIxOC0uMTU3IDEuNzEtMS4yIDEuODUzLTEuNzI1bDI3Ljg5MiA0MC4wNjVjMCAuMTguMDY4LjE1Ny4wOS4wNTNsMi4xMjMtMy41NyA0OC42Ni0xMC42ODhjLjA4My4yMjUgMy40NDIgMTAuOTI3IDMuNDY1IDExLjE5Ny4xNDIgMS40MDMtLjc1IDIuMDMzLTEuODgyIDIuMTQ1bC00OS45OCA0Ljk4OGExLjkyIDEuOTIgMCAwMS0xLjk4LS44MzIuMjQ4LjI0OCAwIDAxLS4wNDYuMThjLTEuMTQuODI1LTIuMTYuMzQ0LTIuODgtLjY2bC0yNy42LTM4LjIwNmMtLjcwNC0uOTk3LS44NDctMi4xMjIuMjg1LTIuOTQ3eiIvPjxwYXRoIGZpbGw9IiMwMDRDNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTExMC41MiAzOTguODI3bC02Ljg2Mi45NzZjLTEuMDA1LjIwMi00LjI2LS42NTMtNC4yOTgtLjY0NS0zLjcwNSAyLjgyNy04LjU4IDMuODE3LTEyLjQ4NyA1LjAxNy0zLjkwOCAxLjItNS40ODMgMS4zOC05Ljg4NiAyLjgxM2ExLjQxIDEuNDEgMCAwMC0uOTIyIDEuODM3YzEuMDI4IDMgNS4zNzcgMi43IDcuOTg3IDIuNjQ4IDIuNjEtLjA1MyA4LjEtLjk3NiAxMC43NC0xLjI5IDYtLjc1IDkuMjc4LTIuMzcgOS43NS0xLjAzNi4zMDguODkzIDYuNTc4LS4xMjcgNi42Ni0xLjc3LjIyNS00LjIxNC0xLjMzNC0yLjA0LS42ODItOC41NXoiLz48cGF0aCBmaWxsPSIjNDY4N0M3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xODMuMjcgMjU0LjU5NWMtMi43OSAxLjUtNS40MDcgMy4yMDMtOC4xOSA0LjczMmExMzcuMjUgMTM3LjI1IDAgMDAtMTUuMzIzIDMuM2MtMS4wNTctMi4yNS0yLjA4NC00LjExNy0xLjc2Mi00LjE5MiA3LjQxLTEuODA4IDE2LjUtMjIuODA4IDIxLjYzLTMzLjQ4OCAxMy4zMzUtMjcuNzg3IDIyLjUtMTIuNDA1IDI0Ljk5LTI5LjYxIDEuNzkyLTguNDY3IDcuNzctMjEuNDU3IDEwLjMzNS01LjYxNy45MTUgMTAuMzA1IDMuNDk1IDI0LjQ3MiA0Ljk5NSAzMi4zNC03LjM0MyA2LjQ3Mi0xNS40MTIgMTIuMDM3LTIyLjU2IDE4Ljc1LTQuOCA0LjQ5My05LjQzNSA5LjE1Ny0xNC4xMTUgMTMuNzg1eiIvPjxwYXRoIGZpbGw9IiM0Mzc4QTUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4Mi40OSAyNjYuNjMyYzAtMjUuNjM1LTIuMDMyLTg5LjU2NS44NTUtOTAuNzUuMzM4LS4xMzUgNS41OTUgNC4zMiA1LjU5NSA0LjMyczEwLjIwOC05LjM0NSAxMS41MzUtMTAuMjM3Yy43NC0uNDA0IDEuNDM2LS44ODQgMi4wNzgtMS40MzMgNS4wMS00LjExNyAyNC4wOSA3Ljg2IDI2LjY0NyAyNyAwIDAgOC43MjMgNDAuMDY1IDIuNTggNTAuNDMtLjA3IDEuMTY2LS4xNDUgMi4zMTMtLjIyNSAzLjQ0MyAyLjk1NSA3LjM4LTMuMjkzIDMwLjAzNy0xMC43NDggMzAuOTMtMTMuMTQgNy4yMTUtMzguMzE3LTQuMTI1LTM4LjMxNy0xMy43MDJ6Ii8+PHBhdGggZmlsbD0iIzQ2ODdDNyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYyLjQ0MiAyNjMuNzM4YzcuNDEtMS44IDIxLjc1LTYuOTMgMjYuODA1LTE4Ljk0NiAyNS44MzgtMTYuODA3IDEyLjkwOC0zMi4yNSAxNS4zNjgtNDkuNDU0IDEuNzkyLTguNDY4IDcuNzctMjEuNDU4IDEwLjMzNS01LjYxOCAxLjMyIDE1IDYuMTczIDM4LjA0IDYuMTA1IDM4LjI1LTExLjk1NSAzMS42MTItMzkuMzc1IDQyLjg2Mi01OS4yNSA0MC42NDMtLjM2LTMuNzY1LjA0NS00LjcyNi42MzctNC44NzV6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMzNjQzNEMiIHN0cm9rZS13aWR0aD0iMS4wMDUiIGQ9Ik0xNDYuMDcgMjU4Yy43NzUuMzE1IDEuNTcuNTgzIDIuMzc3LjgwMyA5LjI3IDIuNTEyIDE0LjY5MyAxLjI2IDE3LjI1IDEuMzk0Ljk2LjA0NiAxLjg1My4xMDYgMi43My4xNDMtLjM5IDIuNDIzLS43NSA0LjgzLTEuMTYyIDcuMjQ1LTcuMDY1Ljc4OC0xOC4xMDUgMy40NDItMjIuMjc1IDMuNzUtNS40My40NzMtNi4wNi0uMDk3LTYuMDYtLjA5Ny41MS0xLjcxOCA1LjM2Mi0yLjQ2OCA3LjkxMi0zLjI0OGEyMy45MTggMjMuOTE4IDAgMDA0LjU5OC0uODYzYy43NS0uNzUtMy0xLjMyLTUuODEzLS40NDItMi45MDIuMjkzLTguNjAyIDQuNTM4LTkuMTI3IDQuOTA1LTEuMDguNzUtNy4zMjcgMi4xMy04LjI1IDEuOTUtMS45MTIuNTAyIDE1LTEzLjgwOCAxNy44Mi0xNS41NHoiLz48cGF0aCBmaWxsPSIjMDA0Qzc1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNTkuODcgMjYyLjU2N2MxMy45NjUtNy42MzUgMTcuNzgyLTExLjAwMiAyNS4xOTItMjMuNTQyIDEwLjQxLTE3LjU4OCAxNS0zOS4yMSAyMS40MTMtNTcuNjUzIDMuODMzLTkgMjAuNTY1LTQuODQ1IDIwLjE4MyAxMi45OTggMS42ODcgMTkuMDk1LTEyLjgyNSA0Ny4wNTUtMjIuMDggNTQuOTk4LTExLjA0IDExLjczLTMyLjE2OCAyMC4yMDQtNDMuOTA1IDIwLjM4NWwtLjgwMy03LjE4NXoiLz48cGF0aCBmaWxsPSIjMDA0Qzc1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNjAuNjczIDI3MC40NjVoLS42NmwtLjkzLTguMjg3LjQyNy0uMjI2YzE0LjE2OC03Ljc0NyAxNy42NjMtMTEuMDEgMjQuOTE1LTIzLjI1IDcuNDI1LTEyLjU0NyAxMS44NzMtMjcuMTU3IDE2LjE4NS00MS4yODcgMS43MjUtNS42NjIgMy4zNi0xMS4wMTcgNS4xODItMTYuMjc1YTcuOTcyIDcuOTcyIDAgMDE0LjY5Ni00LjUgMTAuOTk1IDEwLjk5NSAwIDAxOS43NSAxLjUzOGM0LjcxIDMuMTM1IDcuMzEyIDkuMDQ0IDcuMTYyIDE2LjEzMiAxLjc2MiAxOS44ODItMTMuNDMzIDQ3Ljk1NS0yMi4yNzUgNTUuNTM3LTYuMjg1IDYuNjc1LTE2LjI2IDEyLjgzMy0yNy4zNiAxNi44ODMtNi40MDUgMi4zMzItMTIuNDcyIDMuNjUyLTE3LjA5MiAzLjczNXptNDYuNS04OC44ODJjLTEuODA4IDUuMTk3LTMuNDM1IDEwLjUzNy01LjE2IDE2LjE4NS00LjMyOCAxNC4yMTItOC44MDUgMjguODktMTYuMzEzIDQxLjU5NS03LjI2NyAxMi4zMDctMTEuMDg1IDE1LjkxNS0yNS4wNTcgMjMuNTg3bC42ODIgNi4wNjdjNC4zNjUtLjE2NCA5Ljk4My0xLjQ0IDE1LjkyMy0zLjYwNyAxMC43MjUtMy45MjMgMjAuNzM3LTEwLjA4OCAyNi44MzUtMTYuNTYgOC43LTcuNSAyMy41NTctMzQuOTI3IDIxLjgzMi01NC40OC4xNDMtNi42OS0yLjI1LTEyLjE2NS02LjU0Ny0xNS4wMzctMi42OTMtMS44LTUuODItMi4zMTgtOC4zNzgtMS4zODhhNi41MTggNi41MTggMCAwMC0zLjgxIDMuNjM4aC0uMDA3eiIvPjxwYXRoIGZpbGw9IiNGQ0IyMUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4OC41MTIgMTM0LjkyNWMtLjc1LTEuMjE1LTkuMzc1LTIyLjgtMTUuMjU1LTIxLjMwOC01Ljg4IDEuNDkzLTYuMTQyIDQuNzU1LTYuMTQyIDQuNzU1cy0xLjA2NSAzLjc1LTkuODg1IDUuNTI4Yy04LjgyIDEuNzc3LTguNTI4IDEuMDUtOS41ODUgMS4xMzItMS4wNTguMDgzLTkuMjI1IDEuMTAzLTkuOTk4IDUuOTU2LS43NzIgNC44NTIgOC4wMTggMTUgMTIuNDczIDEzLjI1MiA0LjQ1NS0xLjc0OCAyMC4xMzctMTIuOTA3IDIzLjA0LTguOTYzIDIuOTAzIDMuOTQ2IDMuNjY3IDcuNzAzIDcuNTgzIDguMTIzYTkuMjEgOS4yMSAwIDAxNi4xMzUgMi45MzNjLjQ1Ny40NTcgNy4yNjcgMy41NDcgOC4xMzctMi42NTUuODctNi4yMDMtNi41MDItOC43NTMtNi41MDItOC43NTN6TTE4MS4xMDIgMTQ5LjI1czguMjUgOS45LS42IDE2LjgzYzAgMC04LjY0NyA2Ljk4Mi0xNS4wOTctMS4wNzMtNi40NS04LjA1NSA3LjE5Mi00LjgzNyA3Ljg2OC01LjI1LjY3NC0uNDEyIDYuNTYyLTIuODEyIDQuNzE3LTcuNzU1LTEuODQ1LTQuOTQyIDMuMTEyLTIuNzUyIDMuMTEyLTIuNzUyeiIvPjwvZz48L3N2Zz4K");


/***/ }),

/***/ "./src/app/components/atoms/bwa-button/index.js":
/*!******************************************************!*\
  !*** ./src/app/components/atoms/bwa-button/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);










var BWAButton = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      href = props.href,
      rel = props.rel,
      target = props.target; // If link is external...

  if (Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["isExternalUrl"])(href)) {
    // Add class
    className += ' is-external'; // Automatically add UTM params, if the URL doesn't already contain them

    if (!href.includes('utm_')) {
      var anchorText = typeof props.children === 'string' ? props.children : '';
      href = Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["addUtmParams"])(href, {
        utm_term: Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["get"])(['utmTerm'], props, anchorText),
        utm_content: Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["get"])(['utmContent'], props, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["snakeCase"])(anchorText)),
        utm_campaign: Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["get"])(['utmCampaign'], props)
      });
    } // Ensure that rel attribute is set


    if (!rel) {
      rel = 'noreferrer noopener';
    }

    if (!target) {
      target = '_blank';
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["omit"])(props, ['utmCampaign', 'utmContent', 'utmTerm']), {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      bluehost: true
    }, className, className.length)),
    href: href,
    ref: ref,
    rel: rel,
    target: target
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (BWAButton);

/***/ }),

/***/ "./src/app/components/atoms/bwa-button/style.scss":
/*!********************************************************!*\
  !*** ./src/app/components/atoms/bwa-button/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-dropdown/index.js":
/*!********************************************************!*\
  !*** ./src/app/components/atoms/bwa-dropdown/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-dropdown/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







function Dropdown(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      value = _ref.value,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width;

  if (!id) {
    console.error('All dropdowns must have an ID attribute for accessibility purposes!');
    return null;
  }

  var button = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var component = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      active = _useState6[0],
      setActive = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(options, ['value', value])),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(options[0].label),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      selectedItemLabel = _useState10[0],
      setSelectedItemLabel = _useState10[1];

  var handleKeyDown = function handleKeyDown(e) {
    var index = active;
    var increment = true;
    var ESCAPE = 27;
    var SPACE = 32;
    var UP_ARROW = 38;
    var DOWN_ARROW = 40;

    switch (e.keyCode) {
      case ESCAPE:
        button.current.blur();
        setOpen(false);
        return;

      case SPACE:
        e.preventDefault();
        setSelected(active);
        return;

      case UP_ARROW:
        e.preventDefault();
        index--;
        increment = false;
        break;

      case DOWN_ARROW:
        e.preventDefault();
        index++;
        break;
    }

    while (index < 0 || index >= options.length || index === selected) {
      if (index < 0) {
        index = options.length - 1;
      }

      if (index >= options.length) {
        index = 0;
      }

      if (index === selected) {
        increment ? index++ : index--;
      }
    }

    setActive(index);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onChange(options[selected].value);
    setSelectedItemLabel(options[selected].label);
    setOpen(false);
  }, [selected]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!hasFocus) {
      setOpen(false);
    }
  }, [hasFocus]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSelected(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(options, ['value', value]));
  }, [value]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      dropdown: true,
      '--is-open': open
    }, className, className.length)),
    ref: component
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dropdown__label",
    id: "".concat(id, "-label")
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dropdown__field",
    style: {
      width: width
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    "aria-expanded": open ? 'true' : 'false',
    "aria-haspopup": "listbox",
    "aria-labelledby": "".concat(id, "-label ").concat(id, "-value"),
    className: "dropdown__trigger",
    onClick: function onClick() {
      return setOpen(!open);
    },
    onFocus: function onFocus() {
      return setHasFocus(true);
    },
    onBlur: function onBlur() {
      return setHasFocus(false);
    },
    onKeyDown: handleKeyDown,
    ref: button,
    tabIndex: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dropdown__value",
    id: "".concat(id, "-value")
  }, selectedItemLabel)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    "aria-activedescendant": "".concat(id, "-").concat(options[active].value),
    "aria-hidden": !open,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      dropdown__list: true,
      '--is-visible': open
    }),
    id: "".concat(id, "-list"),
    role: "listbox",
    tabIndex: "-1"
  }, options.map(function (_ref2, index) {
    var itemLabel = _ref2.label,
        itemValue = _ref2.value;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
      "aria-selected": index === active ? 'true' : 'false',
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        dropdown__item: true,
        '--selected': value === itemValue,
        '--active': index === active
      }),
      "data-value": itemValue,
      id: "".concat(id, "-").concat(itemValue),
      key: index,
      onMouseDown: function onMouseDown() {
        return setSelected(index);
      },
      onMouseEnter: function onMouseEnter() {
        return setActive(index);
      },
      onTouchStart: function onTouchStart() {
        return setSelected(index);
      },
      role: "option"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "dropdown__item-label"
    }, itemLabel));
  }))));
}

/***/ }),

/***/ "./src/app/components/atoms/bwa-dropdown/style.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/atoms/bwa-dropdown/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-heading/index.js":
/*!*******************************************************!*\
  !*** ./src/app/components/atoms/bwa-heading/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-heading/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);






var validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
var validSizes = [0, 1, 2, 3, 4, 'welcome', 'product', 'setting', ''];

var BWAHeading = function BWAHeading(_ref) {
  var level = _ref.level,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["level", "size", "className", "children"]);

  var levelElement = level ? level.toLowerCase() : '';
  var HTMLHeading = validLevels.includes(levelElement) ? levelElement : 'p';
  var sizeClass = validSizes.includes(size) ? 'is-title-' + size.toString() : 'is-size-3';

  if ('' === size) {
    sizeClass = null;
  }

  className = classnames__WEBPACK_IMPORTED_MODULE_5___default()('app-heading', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, sizeClass, sizeClass.length), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, className, className.length));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(HTMLHeading, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: className
  }, props), children);
};

/* harmony default export */ __webpack_exports__["default"] = (BWAHeading);

/***/ }),

/***/ "./src/app/components/atoms/bwa-heading/style.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/atoms/bwa-heading/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-nav-link/index.js":
/*!********************************************************!*\
  !*** ./src/app/components/atoms/bwa-nav-link/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-nav-link/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Internal navigation link (from React Router) that also handles focus management.
 *
 * TIP: import { BWANavLink as NavLink } for easier swap with NavLink in ReactRouterDOM.
 *
 * @param {*} props
 */

var BWANavLink = function BWANavLink(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: {
      pathname: props.to || '',
      state: {
        setFocus: true
      }
    },
    className: props.className || 'bluehostTab',
    activeClassName: props.activeClassName || 'bluehostActiveTab'
  }, props.children || '');
};

/* harmony default export */ __webpack_exports__["default"] = (BWANavLink);

/***/ }),

/***/ "./src/app/components/atoms/bwa-nav-link/style.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/atoms/bwa-nav-link/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-notice/index.js":
/*!******************************************************!*\
  !*** ./src/app/components/atoms/bwa-notice/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");








var BWANotice = function BWANotice(_ref) {
  var id = _ref.id,
      content = _ref.content,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["id", "content"]);

  var onClose = function onClose(event) {
    event.preventDefault();

    if (event.keycode && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"] !== event.keycode) {
      return;
    }

    var noticeContainer = document.querySelector('[data-id="' + id + '"]');

    if (noticeContainer) {
      noticeContainer.remove();
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('bluehost/plugin').dismissNotification(id);
    }
  };

  var onButtonNavigate = function onButtonNavigate(event) {
    if (event.keycode && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"] !== event.keycode) {
      return;
    }

    Object(_app_functions__WEBPACK_IMPORTED_MODULE_5__["sendEvent"])({
      action: 'bluehost-notification-click',
      data: {
        element: 'button',
        label: event.target.innerText,
        notificationId: id
      }
    });
  };

  var onAnchorNavigate = function onAnchorNavigate(event) {
    if (event.keycode && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"] !== event.keycode) {
      return;
    }

    Object(_app_functions__WEBPACK_IMPORTED_MODULE_5__["sendEvent"])({
      action: 'bluehost-notification-click',
      data: {
        element: 'a',
        href: event.target.getAttribute('href'),
        label: event.target.innerText,
        notificationId: id
      }
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var noticeContainer = document.querySelector('[data-id="' + id + '"]');
    var noticeCloser = noticeContainer.querySelector('[data-action="close"]');
    var noticeButtons = Array.from(noticeContainer.querySelectorAll('button'));
    var noticeAnchors = Array.from(noticeContainer.querySelectorAll('a'));

    if (noticeButtons.length) {
      noticeButtons.forEach(function (button) {
        if (button.getAttribute('data-action') !== 'close') {
          button.addEventListener('click', onButtonNavigate);
          button.addEventListener('onkeydown', onButtonNavigate);
        }
      });
    }

    if (noticeAnchors.length) {
      noticeAnchors.forEach(function (link) {
        if (link.getAttribute('data-action') !== 'close') {
          link.addEventListener('click', onAnchorNavigate);
          link.addEventListener('onkeydown', onAnchorNavigate);
        }
      });
    }

    if (noticeCloser) {
      noticeCloser.addEventListener('click', onClose);
      noticeCloser.addEventListener('onkeydown', onClose);
    }

    return function () {
      if (noticeButtons.length) {
        noticeButtons.forEach(function (button) {
          if (button.getAttribute('data-action') !== 'close') {
            button.removeEventListener('click', onButtonNavigate);
            button.removeEventListener('onkeydown', onButtonNavigate);
          }
        });
      }

      if (noticeAnchors.length) {
        noticeAnchors.forEach(function (link) {
          if (link.getAttribute('data-action') !== 'close') {
            link.removeEventListener('click', onAnchorNavigate);
            link.removeEventListener('onkeydown', onAnchorNavigate);
          }
        });
      }

      if (noticeCloser) {
        noticeCloser.removeEventListener('click', onClose);
        noticeCloser.removeEventListener('onkeydown', onClose);
      }
    };
  }, [id]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: 'notice-' + id,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['bwa-notice', 'bluehost-notice', props.className]),
    "data-id": id,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BWANotice);

/***/ }),

/***/ "./src/app/components/atoms/bwa-pagination/index.js":
/*!**********************************************************!*\
  !*** ./src/app/components/atoms/bwa-pagination/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-pagination/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





function Pagination(_ref) {
  var callback = _ref.callback,
      _ref$currentPage = _ref.currentPage,
      currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
      pageCount = _ref.pageCount,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 2 : _ref$padding;

  if (pageCount <= 1) {
    return null;
  }

  var pages = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["range"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["max"])([currentPage - padding, 2]), Object(lodash__WEBPACK_IMPORTED_MODULE_3__["min"])([currentPage + padding + 1, pageCount]))));
  var previous = currentPage - 1;
  var next = currentPage + 1;
  var hasPrevious = previous >= 1;
  var hasNext = next <= pageCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
    className: "pagination"
  }, hasPrevious ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "First",
    className: "pagination__link",
    onClick: function onClick() {
      return callback(1);
    },
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\xAB"))) : null, hasPrevious ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "Previous",
    className: "pagination__link",
    onClick: function onClick() {
      return callback(previous);
    },
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\u2039"))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      pagination__link: true,
      '--is-active': currentPage === 1
    }),
    type: "button",
    onClick: function onClick() {
      return callback(1);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "1"))), currentPage - padding > 2 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "More",
    className: "pagination__link",
    disabled: true,
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\u2026"))) : null, pages.map(function (page) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      key: page,
      className: "pagination__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        pagination__link: true,
        '--is-active': currentPage === page
      }),
      type: "button",
      onClick: function onClick() {
        return callback(page);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, page)));
  }), currentPage + padding < pageCount - 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "More",
    className: "pagination__link",
    disabled: true,
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\u2026"))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      pagination__link: true,
      '--is-active': currentPage === pageCount
    }),
    onClick: function onClick() {
      return callback(pageCount);
    },
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, pageCount))), hasNext ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "Next",
    className: "pagination__link",
    onClick: function onClick() {
      return callback(next);
    },
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\u203A"))) : null, hasNext ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "pagination__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    "aria-label": "Last",
    className: "pagination__link",
    type: "button",
    onClick: function onClick() {
      return callback(pageCount);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "\xBB"))) : null);
}

/***/ }),

/***/ "./src/app/components/atoms/bwa-pagination/style.scss":
/*!************************************************************!*\
  !*** ./src/app/components/atoms/bwa-pagination/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-redirect.js":
/*!**************************************************!*\
  !*** ./src/app/components/atoms/bwa-redirect.js ***!
  \**************************************************/
/*! exports provided: BWARedirect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BWARedirect", function() { return BWARedirect; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




var BWARedirect = function BWARedirect(_ref) {
  var to = _ref.to,
      currentLocation = _ref.currentLocation,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["to", "currentLocation"]);

  var toObject = 'object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(to) ? to : {
    pathname: to
  };

  if ('undefined' !== typeof currentLocation.state && 'undefined' === typeof toObject.state) {
    toObject.state = currentLocation.state;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: toObject
  });
};
/* harmony default export */ __webpack_exports__["default"] = (BWARedirect);

/***/ }),

/***/ "./src/app/components/atoms/bwa-spinner/index.js":
/*!*******************************************************!*\
  !*** ./src/app/components/atoms/bwa-spinner/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-spinner/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Internal dependencies
 */

var sizeClass = 'normal';

var BWASpinner = function BWASpinner(props) {
  if (props.micro) {
    sizeClass = 'micro';
  }

  if (props.small) {
    sizeClass = 'small';
  }

  if (props.large) {
    sizeClass = 'large';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "app-spinner__wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'bwa-loader ' + sizeClass
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BWASpinner);

/***/ }),

/***/ "./src/app/components/atoms/bwa-spinner/style.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/atoms/bwa-spinner/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-toggle/index.js":
/*!******************************************************!*\
  !*** ./src/app/components/atoms/bwa-toggle/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/atoms/bwa-toggle/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




function BWAToggle(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      onChange = _ref.onChange;
  var id = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])('onoffswitch');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "onoffswitch"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    "aria-checked": checked,
    "aria-label": label,
    checked: checked,
    className: "onoffswitch__checkbox",
    id: id,
    name: "onoffswitch",
    onChange: onChange,
    type: "checkbox",
    value: "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "onoffswitch__label",
    htmlFor: id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "onoffswitch__inner"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "onoffswitch__switch"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BWAToggle);

/***/ }),

/***/ "./src/app/components/atoms/bwa-toggle/style.scss":
/*!********************************************************!*\
  !*** ./src/app/components/atoms/bwa-toggle/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/atoms/bwa-tooltip/index.js":
/*!*******************************************************!*\
  !*** ./src/app/components/atoms/bwa-tooltip/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Tooltip() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Tooltip");
}

/***/ }),

/***/ "./src/app/components/atoms/index.js":
/*!*******************************************!*\
  !*** ./src/app/components/atoms/index.js ***!
  \*******************************************/
/*! exports provided: BWAButton, BWAHeading, BWANavLink, BWANotice, BWASpinner, BWAToggle, BWADropdown, BWAPagination, BWATooltip, BWARedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bwa_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bwa-button */ "./src/app/components/atoms/bwa-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAButton", function() { return _bwa_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bwa_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bwa-heading */ "./src/app/components/atoms/bwa-heading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAHeading", function() { return _bwa_heading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bwa_nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bwa-nav-link */ "./src/app/components/atoms/bwa-nav-link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWANavLink", function() { return _bwa_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _bwa_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bwa-notice */ "./src/app/components/atoms/bwa-notice/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWANotice", function() { return _bwa_notice__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _bwa_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bwa-spinner */ "./src/app/components/atoms/bwa-spinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWASpinner", function() { return _bwa_spinner__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _bwa_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bwa-toggle */ "./src/app/components/atoms/bwa-toggle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAToggle", function() { return _bwa_toggle__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _bwa_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bwa-dropdown */ "./src/app/components/atoms/bwa-dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWADropdown", function() { return _bwa_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _bwa_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bwa-pagination */ "./src/app/components/atoms/bwa-pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAPagination", function() { return _bwa_pagination__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _bwa_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bwa-tooltip */ "./src/app/components/atoms/bwa-tooltip/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWATooltip", function() { return _bwa_tooltip__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _bwa_redirect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bwa-redirect */ "./src/app/components/atoms/bwa-redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWARedirect", function() { return _bwa_redirect__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./src/app/components/molecules/bwa-content-list-row/index.js":
/*!********************************************************************!*\
  !*** ./src/app/components/molecules/bwa-content-list-row/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-content-list-row/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var RowIcon = function RowIcon(_ref) {
  var icon = _ref.icon,
      iconSize = _ref.iconSize;

  if ('string' === typeof icon) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
      icon: icon ? icon : '',
      size: iconSize
    });
  }

  return icon;
};

var BWABWAContentListRow = function BWABWAContentListRow(_ref2) {
  var icon = _ref2.icon,
      iconSize = _ref2.iconSize,
      title = _ref2.title,
      desc = _ref2.desc,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["icon", "iconSize", "title", "desc", "className", "children"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'content-list-row': true,
      'pure-g': true
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, className, className.length))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-2 content-list-row__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "content-list-row__top"
  }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RowIcon, {
    icon: icon,
    iconSize: iconSize
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__["BWAHeading"], {
    level: "h3",
    size: 4,
    className: "content-list-row__title"
  }, title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, desc)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 pure-u-lg-1-2 content-list-row__action"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (BWABWAContentListRow);

/***/ }),

/***/ "./src/app/components/molecules/bwa-content-list-row/style.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/molecules/bwa-content-list-row/style.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-content-list/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-content-list/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-content-list/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







var BWAContentList = function BWAContentList(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["title", "className", "children"]);

  if (!children) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: 'content-list ' + className
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__["BWAHeading"], {
    level: "h2",
    size: 1
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("content-list__box", className)
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAContentList);

/***/ }),

/***/ "./src/app/components/molecules/bwa-content-list/style.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-content-list/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-dropdown-button/index.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-dropdown-button/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWADropdownButton; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-dropdown-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");











/**
 * Display a button with a dropdown menu.
 *
 * @param {string} className An additional class name to add for styling purposes.
 * @param {number} defaultOptionIndex The default option index. Used to look up the appropriate action when button is clicked.
 * @param {boolean} disabled Whether or not the button is disabled.
 * @param {string} label The label, which is hidden and only used for screen readers.
 * @param {Array} options Each option object must have a `title` and `callback` property (where `callback` is a function). A `description` property is optional.
 * @param {boolean} triggerOnSelect Whether or not to immediately trigger a callback after selecting an item from the dropdown. Defaults to true.
 * @param {number} width The width of the list.
 * @return {string}
 */

function BWADropdownButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$defaultOptionInd = _ref.defaultOptionIndex,
      defaultOptionIndex = _ref$defaultOptionInd === void 0 ? 0 : _ref$defaultOptionInd,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      label = _ref.label,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$triggerOnSelect = _ref.triggerOnSelect,
      triggerOnSelect = _ref$triggerOnSelect === void 0 ? true : _ref$triggerOnSelect,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width;
  var component = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var toggle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var id = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["uniqueId"])('dropdown-button-');

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      activeDescendant = _useState4[0],
      setActiveDescendant = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultOptionIndex),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([selected, 'title'], options)),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      actionName = _useState12[0],
      setActionName = _useState12[1];

  var labelId = id.replace('dropdown-button-', 'dropdown-button-label-');
  var listId = id.replace('dropdown-button-', 'dropdown-button-list-');

  var handleKeyDown = function handleKeyDown(e) {
    var index = active;
    var increment = true;
    var ESCAPE = 27;
    var SPACE = 32;
    var UP_ARROW = 38;
    var DOWN_ARROW = 40;

    switch (e.keyCode) {
      case ESCAPE:
        toggle.current.blur();
        setIsOpen(false);
        return;

      case SPACE:
        e.preventDefault();
        setSelected(active);
        return;

      case UP_ARROW:
        e.preventDefault();
        index--;
        increment = false;
        break;

      case DOWN_ARROW:
        e.preventDefault();
        index++;
        break;
    }

    while (index < 0 || index >= options.length || index === selected) {
      if (index < 0) {
        index = options.length - 1;
      }

      if (index >= options.length) {
        index = 0;
      }

      if (index === selected) {
        increment ? index++ : index--;
      }
    }

    setActive(index);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setActiveDescendant("".concat(id, "-").concat(Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([active, 'label'], options)));
  }, [active]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setActionName(Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([selected, 'title'], options));

    if (hasFocus && triggerOnSelect) {
      var callback = Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([selected, 'callback'], options);

      if (typeof callback === 'function') {
        callback(options[selected]);
      }
    }
  }, [selected]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!hasFocus) {
      setIsOpen(false);
    }
  }, [hasFocus]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!isOpen) {
      setActive(0);
    }
  }, [isOpen]);

  var triggerCallback = function triggerCallback(selected) {
    var callback = Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([selected, 'callback'], options);

    if (typeof callback === 'function') {
      callback(options[selected]);
    }
  };

  var maybeTriggerCallback = function maybeTriggerCallback(index) {
    if (triggerOnSelect && selected === index) {
      triggerCallback(selected);
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'dropdown-button': true,
      '--is-open': isOpen
    }, className, className.length)),
    ref: component
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dropdown-button__label",
    id: labelId
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dropdown-button__button-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_5__["BWAButton"], {
    className: "dropdown-button__action",
    disabled: disabled,
    isSecondary: true,
    onClick: function onClick() {
      var callback = Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["get"])([selected, 'callback'], options);

      if (typeof callback === 'function') {
        callback(options[selected]);
      }
    }
  }, actionName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_5__["BWAButton"], {
    "aria-expanded": isOpen ? 'true' : 'false',
    "aria-haspopup": "listbox",
    "aria-labelledby": labelId,
    className: "dropdown-button__toggle components-button bluehost is-button is-default",
    disabled: disabled,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    onFocus: function onFocus() {
      return setHasFocus(true);
    },
    onBlur: function onBlur() {
      return setHasFocus(false);
    },
    onKeyDown: handleKeyDown,
    ref: toggle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_6__["DownIcon"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "sr-only"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Select', 'bluehost-wordpress-plugin')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    "aria-activedescendant": activeDescendant,
    "aria-hidden": !isOpen,
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
      'dropdown-button__list': true,
      '--is-visible': isOpen
    }),
    id: listId,
    role: "listbox",
    style: {
      width: width
    },
    tabIndex: "-1"
  }, options.map(function (_ref2, index) {
    var itemCallback = _ref2.callback,
        itemTitle = _ref2.title,
        itemDescription = _ref2.description;
    var itemId = "".concat(id.replace('dropdown-button-', 'dropdown-button-list-item-'), "-").concat(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["kebabCase"])(itemTitle));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
      "aria-selected": index === active ? 'true' : 'false',
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        'dropdown-button__list-item': true,
        '--is-active': index === active
      }),
      id: itemId,
      key: index,
      onMouseDown: function onMouseDown() {
        setSelected(index);
        maybeTriggerCallback(index);
      },
      onMouseEnter: function onMouseEnter() {
        return setActive(index);
      },
      onTouchStart: function onTouchStart() {
        setSelected(index);
        maybeTriggerCallback(index);
      },
      role: "option"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "dropdown-button__list-item-title"
    }, itemTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "dropdown-button__list-item-description"
    }, itemDescription));
  })));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-dropdown-button/style.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/molecules/bwa-dropdown-button/style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-environment-card/index.js":
/*!********************************************************************!*\
  !*** ./src/app/components/molecules/bwa-environment-card/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAEnvironmentCard; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-environment-card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


function BWAEnvironmentCard(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'green' : _ref$color,
      deploymentActionsComponent = _ref.deploymentActionsComponent,
      description = _ref.description,
      environmentActionsComponent = _ref.environmentActionsComponent,
      environmentName = _ref.environmentName,
      radioButtonComponent = _ref.radioButtonComponent,
      screenshotUrl = _ref.screenshotUrl,
      title = _ref.title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card"
  }, radioButtonComponent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__selector"
  }, radioButtonComponent), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__container"
  }, screenshotUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__screenshot",
    style: {
      background: "url(".concat(screenshotUrl, ")")
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "environment-card__title"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__description"
  }, description), environmentName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__badge --".concat(color)
  }, environmentName)), deploymentActionsComponent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__deployment-actions"
  }, deploymentActionsComponent), environmentActionsComponent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "environment-card__environment-actions"
  }, environmentActionsComponent)));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-environment-card/style.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/molecules/bwa-environment-card/style.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-error/index.js":
/*!*********************************************************!*\
  !*** ./src/app/components/molecules/bwa-error/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-error/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/replace */ "./node_modules/lodash/replace.js");
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_replace__WEBPACK_IMPORTED_MODULE_8__);











var resolvePageUrl = function resolvePageUrl() {
  if ('undefined' !== typeof window.bluehostWpAdminUrl) {
    return window.bluehostWpAdminUrl + 'admin.php?page=bluehost';
  } else {
    var url = window.location.href;
    return lodash_replace__WEBPACK_IMPORTED_MODULE_8___default()(url, Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["getFragment"])(url), ''); // nix fragment
  }
};

var ReportingUI = function ReportingUI(_ref) {
  var status = _ref.status;

  if (true === status) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        color: '#17b212'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "dashicons dashicons-yes"
    }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Error report sent.', 'bluehost-wordpress-plugin'));
  } else if (false === status) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        color: '#d0021b'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "dashicons dashicons-no"
    }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Failed to send error report.', 'bluehost-wordpress-plugin'));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        transform: 'scale(0.25)',
        maxHeight: '40px',
        display: 'inline-flex',
        verticalAlign: 'middle',
        marginRight: '-1rem'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWASpinner"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("em", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Sending error report...', 'bluehost-wordpress-plugin')));
  }
};

var hideWPSubmenu = function hideWPSubmenu() {
  try {
    var elem = window.document.querySelector('#toplevel_page_bluehost ul.wp-submenu');
    elem.style = 'display: none;';
  } catch (e) {
    console.log('Couldn\'t find Bluehost Menu Element to swap href.');
  }
};

var restoreWPMenuDefaultURI = function restoreWPMenuDefaultURI() {
  try {
    var elem = window.document.querySelector('a.toplevel_page_bluehost');
    elem.href = lodash_replace__WEBPACK_IMPORTED_MODULE_8___default()(elem.href, Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["getFragment"])(elem.href), '');
  } catch (e) {
    console.log('Couldn\'t restore Bluehost Menu default URI.');
  }
};

var BWAError = function BWAError(_ref2) {
  var error = _ref2.error,
      resetErrorBoundary = _ref2.resetErrorBoundary;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showDetails = _useState2[0],
      toggleDetailsDisplay = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      errorLogged = _useState4[0],
      errorSentSuccessfully = _useState4[1];

  hideWPSubmenu();
  restoreWPMenuDefaultURI();
  var errorPayload = {
    message: error.message,
    stack: error.stack,
    date: new Date(),
    user: window.userSettings ? window.userSettings.uid : 'Unknown',
    vendor: navigator.vendor ? navigator.vendor : 'Unknown',
    agent: navigator.userAgent ? navigator.userAgent : 'Unknown',
    url: window.location.href
  };

  if (null === errorLogged) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: '/bluehost/v1/error/track',
      method: 'POST',
      data: errorPayload
    }).then(function (response) {
      return errorSentSuccessfully(true);
    }).catch(function (error) {
      return errorSentSuccessfully(false);
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "app-error"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "warning-icon-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_4__["WarningIcon"], {
    className: "animated heartBeat"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
    className: "animated fadeIn"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('There was a problem loading the Bluehost Plugin.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "animated fadeIn"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Get in touch and we\'ll sort out the issue for you.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "animated fadeIn",
    style: {
      textAlign: 'center',
      margin: '1rem auto 80px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], {
    href: "https://bluehost.com/support",
    utmContent: "button_contact_support",
    isPrimary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Contact Support', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], {
    href: resolvePageUrl(),
    isSecondary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Try Refresh', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], {
    onClick: function onClick() {
      return toggleDetailsDisplay(!showDetails);
    },
    isLink: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Details', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), showDetails && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("pre", {
    style: {
      textAlign: 'left',
      maxWidth: '750px',
      margin: '0.33rem auto'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("code", {
    dangerouslySetInnerHTML: {
      __html: '<strong>' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Error Message: ') + error.message + '</strong><br /><br />' + error.stack
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ReportingUI, {
    status: errorLogged
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "error-illustration-wrap animated fadeIn"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_4__["ErrorStateImage"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAError);

/***/ }),

/***/ "./src/app/components/molecules/bwa-error/style.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/molecules/bwa-error/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-modal/index.js":
/*!*********************************************************!*\
  !*** ./src/app/components/molecules/bwa-modal/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-modal/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var BWAModal = function BWAModal(_ref) {
  var actionsComponent = _ref.actionsComponent,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["actionsComponent", "children", "className"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      'bluehost-modal': true
    }, className, className.length)),
    shouldCloseOnClickOutside: false
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-modal__content"
  }, children), actionsComponent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-modal__actions"
  }, actionsComponent));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAModal);

/***/ }),

/***/ "./src/app/components/molecules/bwa-modal/style.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/molecules/bwa-modal/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-no-results/index.js":
/*!**************************************************************!*\
  !*** ./src/app/components/molecules/bwa-no-results/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWANoResults; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-no-results/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function BWANoResults() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bluehost-no-results"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["ErrorStateImage"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No results found', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('It seems we can\'t find any results based on your search. Try again.', 'bluehost-wordpress-plugin')));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-no-results/style.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-no-results/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-notice/index.js":
/*!**********************************************************!*\
  !*** ./src/app/components/molecules/bwa-notice/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-notice/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var BWANotice = function BWANotice(_ref) {
  var _classNames;

  var status = _ref.status,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["status", "className"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Notice"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames = {
      bluehost: true,
      'bordered-box': true
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, className.length), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, 'is-warning', 'warning' === status), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, 'is-success', 'success' === status), _classNames))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BWANotice);

/***/ }),

/***/ "./src/app/components/molecules/bwa-notice/style.scss":
/*!************************************************************!*\
  !*** ./src/app/components/molecules/bwa-notice/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-options-menu/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-options-menu/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAOptionsMenu; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-options-menu/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");









/**
 * Display an options menu.
 *
 * @param {string} className An additional class name to add for styling purposes.
 * @param {string} label The label, which is hidden and only used for screen readers.
 * @param {Array} options Each option object must have a `label` and `callback` property (where `callback` is a function).
 * @param {number} width The width of the list.
 * @return {string}
 */

function BWAOptionsMenu(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      label = _ref.label,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width;
  var component = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var toggle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var id = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["uniqueId"])('options-menu-');

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      activeDescendant = _useState4[0],
      setActiveDescendant = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1];

  var labelId = id.replace('options-menu-', 'options-menu-label-');
  var listId = id.replace('options-menu-', 'options-menu-list-');

  var handleKeyDown = function handleKeyDown(e) {
    var index = active;
    var increment = true;
    var ESCAPE = 27;
    var SPACE = 32;
    var UP_ARROW = 38;
    var DOWN_ARROW = 40;

    switch (e.keyCode) {
      case ESCAPE:
        toggle.current.blur();
        setIsOpen(false);
        return;

      case SPACE:
        e.preventDefault();
        setSelected(active);
        return;

      case UP_ARROW:
        e.preventDefault();
        index--;
        increment = false;
        break;

      case DOWN_ARROW:
        e.preventDefault();
        index++;
        break;
    }

    while (index < 0 || index >= options.length || index === selected) {
      if (index < 0) {
        index = options.length - 1;
      }

      if (index >= options.length) {
        index = 0;
      }

      if (index === selected) {
        increment ? index++ : index--;
      }
    }

    setActive(index);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setActiveDescendant("".concat(id, "-").concat(Object(_app_functions__WEBPACK_IMPORTED_MODULE_7__["get"])([active, 'label'], options)));
  }, [active]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var callback = Object(_app_functions__WEBPACK_IMPORTED_MODULE_7__["get"])([selected, 'callback'], options);

    if (callback) {
      callback(options[selected]);
    }

    setIsOpen(false);
  }, [selected]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!hasFocus) {
      setIsOpen(false);
    }
  }, [hasFocus]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!isOpen) {
      setActive(null);
      setSelected(null);
    }
  }, [isOpen]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'options-menu': true,
      '--is-open': isOpen
    }, className, className.length)),
    ref: component
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "options-menu__label",
    id: labelId
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    "aria-expanded": isOpen ? 'true' : 'false',
    "aria-haspopup": "listbox",
    "aria-labelledby": labelId,
    className: "options-menu__toggle",
    disabled: disabled,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    onFocus: function onFocus() {
      return setHasFocus(true);
    },
    onBlur: function onBlur() {
      return setHasFocus(false);
    },
    onKeyDown: handleKeyDown,
    ref: toggle,
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_5__["Ellipsis"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    "aria-activedescendant": activeDescendant,
    "aria-hidden": !isOpen,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'options-menu__list': true,
      '--is-visible': isOpen
    }),
    id: listId,
    role: "listbox",
    style: {
      width: width
    },
    tabIndex: "-1"
  }, options.map(function (_ref2, index) {
    var itemLabel = _ref2.label;
    var itemId = "".concat(id.replace('options-menu-', 'options-menu-list-item-'), "-").concat(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["kebabCase"])(itemLabel));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
      "aria-selected": index === active ? 'true' : 'false',
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'options-menu__list-item': true,
        '--is-active': index === active
      }),
      id: itemId,
      key: index,
      onMouseDown: function onMouseDown() {
        return setSelected(index);
      },
      onMouseEnter: function onMouseEnter() {
        return setActive(index);
      },
      onTouchStart: function onTouchStart() {
        return setSelected(index);
      },
      role: "option"
    }, itemLabel);
  })));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-options-menu/style.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-options-menu/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-overlay/index.js":
/*!***********************************************************!*\
  !*** ./src/app/components/molecules/bwa-overlay/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAOverlay; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-overlay/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);



function BWAOverlay(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createPortal"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bluehost-overlay"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bluehost-overlay__contents ".concat(className)
  }, children)), document.body);
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-overlay/style.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/molecules/bwa-overlay/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-page-notices/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-page-notices/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);









var BWAPageNotices = function BWAPageNotices() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      pageNotices = _useState2[0],
      setPageNotices = _useState2[1];

  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();
  var hashedPath = '#' + location.pathname;
  var allPluginNotices = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(function (select) {
    return select('bluehost/plugin').getNotifications();
  }, [hashedPath]); // TODO: Implement deny-list logic

  var allNoticeDenyPaths = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(function (select) {
    var state = select('bluehost/plugin').getBluehostData();
    return state.app.noticesPathsDenyList;
  }, [hashedPath]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var noticesForLocation = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["filter"])(allPluginNotices, function (notice) {
      var displayNotice = false;
      var context = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["filter"])(notice.locations, ['context', 'bluehost-plugin'])[0];

      if ('string' === typeof context.pages && 'all' === context.pages) {
        displayNotice = true; // display on all pages
      }

      if (Array.isArray(context.pages)) {
        if (context.pages.includes(hashedPath)) {
          displayNotice = true; // display top-page path exact match
        }

        context.pages.forEach(function (page) {
          if ('string' === typeof page && hashedPath.includes(page)) {
            displayNotice = true; // display sub-page partial path match
          }
        });
      }

      return displayNotice;
    });

    if (noticesForLocation.length > 0) {
      setPageNotices(noticesForLocation);
    }
  }, [hashedPath]);

  if (null === pageNotices) {
    return false;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, pageNotices.map(function (notice) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWANotice"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, notice, {
      key: notice.id
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAPageNotices);

/***/ }),

/***/ "./src/app/components/molecules/bwa-page-spinner/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-page-spinner/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-page-spinner/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");




var BWAPageSpinner = function BWAPageSpinner() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "app-page-spinner__wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWASpinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAPageSpinner);

/***/ }),

/***/ "./src/app/components/molecules/bwa-page-spinner/style.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-page-spinner/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-card-placeholder/index.js":
/*!****************************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-card-placeholder/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAProductCardPlaceholder; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-product-card-placeholder/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/molecules */ "./src/app/components/molecules/index.js");



function BWAProductCardPlaceholder() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_2__["BWAProductCard"], {
    className: "--placeholder"
  });
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-card-placeholder/style.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-card-placeholder/style.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-card/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-card/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAProductCard; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-product-card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__);







function BWAProductCard(_ref) {
  var _ref$buttonPrimary = _ref.buttonPrimary,
      buttonPrimary = _ref$buttonPrimary === void 0 ? {
    children: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Buy Now', 'bluehost-wordpress-plugin')
  } : _ref$buttonPrimary,
      _ref$buttonSecondary = _ref.buttonSecondary,
      buttonSecondary = _ref$buttonSecondary === void 0 ? {
    children: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('View Details', 'bluehost-wordpress-plugin')
  } : _ref$buttonSecondary,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      imageUrl = _ref.imageUrl,
      _ref$isFavorite = _ref.isFavorite,
      isFavorite = _ref$isFavorite === void 0 ? false : _ref$isFavorite,
      price = _ref.price,
      title = _ref.title,
      toggleFavorite = _ref.toggleFavorite;
  var style = imageUrl ? {
    backgroundImage: "url(".concat(imageUrl, ")")
  } : {};
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card ".concat(className)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__image",
    style: style
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAHeading"], {
    level: "h3",
    size: 4,
    className: "product-card__title"
  }, Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__["decodeEntities"])(title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__price"
  }, price)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__action-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'product-card__favorite': true,
      dashicons: true,
      'dashicons-star-empty': !isFavorite,
      'dashicons-star-filled': isFavorite,
      '--is-favorite': isFavorite
    }),
    onClick: toggleFavorite
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "product-card__button-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    children: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('View Details', 'bluehost-wordpress-plugin')
  }, buttonSecondary, {
    className: "product-card__button-secondary",
    isSecondary: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    children: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Buy Now', 'bluehost-wordpress-plugin'),
    target: "_blank"
  }, buttonPrimary, {
    className: "product-card__button-primary",
    isPrimary: true
  }))))));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-card/style.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-card/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-grid/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-grid/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAProductGrid; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-product-grid/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);



function BWAProductGrid(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "grid ".concat(className)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pure-g"
  }, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "pure-u-1 pure-u-md-1-2 pure-u-xl-1-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "grid__item"
    }, item));
  })));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-product-grid/style.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/molecules/bwa-product-grid/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-search/index.js":
/*!**********************************************************!*\
  !*** ./src/app/components/molecules/bwa-search/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWASearch; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-search/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






function BWASearch(_ref) {
  var onChange = _ref.onChange,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", {
    className: "search-box",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      onChange(e.target.querySelector('.search-box__input').value);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"], {
    className: "search-box__icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "search-box__label sr-only"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Search', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    className: "search-box__input",
    type: "search",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Search', 'bluehost-wordpress-plugin'),
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    }
  })));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-search/style.scss":
/*!************************************************************!*\
  !*** ./src/app/components/molecules/bwa-search/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-slider/index.js":
/*!**********************************************************!*\
  !*** ./src/app/components/molecules/bwa-slider/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWASlider; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);




function BWASlider(_ref) {
  var children = _ref.children,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, item);
  }));
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-slider/style.scss":
/*!************************************************************!*\
  !*** ./src/app/components/molecules/bwa-slider/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-snackbar/index.js":
/*!************************************************************!*\
  !*** ./src/app/components/molecules/bwa-snackbar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-snackbar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);










var BWASnackbar = function BWASnackbar(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$isDismissible = _ref.isDismissible,
      isDismissible = _ref$isDismissible === void 0 ? false : _ref$isDismissible,
      onRemove = _ref.onRemove,
      status = _ref.status,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["children", "className", "isDismissible", "onRemove", "status", "title"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Notice"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      'bluehost-snackbar': true
    }, className, className.length))
  }, props, {
    status: status,
    onRemove: onRemove,
    isDismissible: false
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-snackbar__icon"
  }, function () {
    switch (status) {
      case 'error':
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_5__["WarningIcon"], null);

      case 'success':
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_5__["SuccessIcon"], null);
    }
  }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-snackbar__content"
  }, title && title.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-snackbar__title"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "bluehost-snackbar__message"
  }, children)), isDismissible && onRemove && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("button", {
    className: "bluehost-snackbar__close",
    onClick: onRemove
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_5__["CloseIcon"], null))), document.body);
};

/* harmony default export */ __webpack_exports__["default"] = (BWASnackbar);

/***/ }),

/***/ "./src/app/components/molecules/bwa-snackbar/style.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/molecules/bwa-snackbar/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/bwa-warning/index.js":
/*!***********************************************************!*\
  !*** ./src/app/components/molecules/bwa-warning/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BWAWarning; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/molecules/bwa-warning/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");



function BWAWarning(_ref) {
  var children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "bluehost-warning"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["WarningIcon"], null), " ", children);
}

/***/ }),

/***/ "./src/app/components/molecules/bwa-warning/style.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/molecules/bwa-warning/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/molecules/index.js":
/*!***********************************************!*\
  !*** ./src/app/components/molecules/index.js ***!
  \***********************************************/
/*! exports provided: BWAError, BWAModal, BWANotice, BWAPageSpinner, BWAPageNotices, BWASnackbar, BWAContentList, BWAContentListRow, BWADropdownButton, BWAEnvironmentCard, BWAProductGrid, BWANoResults, BWAOptionsMenu, BWAOverlay, BWAProductCard, BWAProductCardPlaceholder, BWASearch, BWASlider, BWAWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bwa_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bwa-error */ "./src/app/components/molecules/bwa-error/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAError", function() { return _bwa_error__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bwa_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bwa-modal */ "./src/app/components/molecules/bwa-modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAModal", function() { return _bwa_modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bwa_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bwa-notice */ "./src/app/components/molecules/bwa-notice/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWANotice", function() { return _bwa_notice__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _bwa_page_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bwa-page-spinner */ "./src/app/components/molecules/bwa-page-spinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAPageSpinner", function() { return _bwa_page_spinner__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _bwa_page_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bwa-page-notices */ "./src/app/components/molecules/bwa-page-notices/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAPageNotices", function() { return _bwa_page_notices__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _bwa_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bwa-snackbar */ "./src/app/components/molecules/bwa-snackbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWASnackbar", function() { return _bwa_snackbar__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _bwa_content_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bwa-content-list */ "./src/app/components/molecules/bwa-content-list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAContentList", function() { return _bwa_content_list__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _bwa_content_list_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bwa-content-list-row */ "./src/app/components/molecules/bwa-content-list-row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAContentListRow", function() { return _bwa_content_list_row__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _bwa_dropdown_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bwa-dropdown-button */ "./src/app/components/molecules/bwa-dropdown-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWADropdownButton", function() { return _bwa_dropdown_button__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _bwa_environment_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bwa-environment-card */ "./src/app/components/molecules/bwa-environment-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAEnvironmentCard", function() { return _bwa_environment_card__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _bwa_product_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bwa-product-grid */ "./src/app/components/molecules/bwa-product-grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAProductGrid", function() { return _bwa_product_grid__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _bwa_no_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bwa-no-results */ "./src/app/components/molecules/bwa-no-results/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWANoResults", function() { return _bwa_no_results__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _bwa_options_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bwa-options-menu */ "./src/app/components/molecules/bwa-options-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAOptionsMenu", function() { return _bwa_options_menu__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _bwa_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bwa-overlay */ "./src/app/components/molecules/bwa-overlay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAOverlay", function() { return _bwa_overlay__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _bwa_product_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bwa-product-card */ "./src/app/components/molecules/bwa-product-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAProductCard", function() { return _bwa_product_card__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _bwa_product_card_placeholder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bwa-product-card-placeholder */ "./src/app/components/molecules/bwa-product-card-placeholder/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAProductCardPlaceholder", function() { return _bwa_product_card_placeholder__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _bwa_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bwa-search */ "./src/app/components/molecules/bwa-search/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWASearch", function() { return _bwa_search__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _bwa_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bwa-slider */ "./src/app/components/molecules/bwa-slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWASlider", function() { return _bwa_slider__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _bwa_warning__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bwa-warning */ "./src/app/components/molecules/bwa-warning/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAWarning", function() { return _bwa_warning__WEBPACK_IMPORTED_MODULE_18__["default"]; });





















/***/ }),

/***/ "./src/app/components/organisms/bwa-common-footer/index.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-footer/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var BWACommonFooter = function BWACommonFooter(_ref) {
  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("footer", {
    tabIndex: "-1",
    style: {
      position: 'absolute',
      bottom: '5px',
      marginTop: '4rem',
      width: '100%'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BWACommonFooter);

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/desktop-dropdown/index.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/desktop-dropdown/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/organisms/bwa-common-header/desktop-dropdown/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _user_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-menu */ "./src/app/components/organisms/bwa-common-header/user-menu.js");






var DesktopDropdown = function DesktopDropdown() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "bluehost-nav-wrap-element user-menu",
    contentClassName: "bluehost-nav-popup",
    position: "120px 24px",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["UserIcon"], {
        onClick: onToggle,
        "aria-expanded": isOpen,
        "data-testid": "desktop-dropdown-toggle"
      });
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        id: "bluehost-nav-popup-wrap",
        "data-testid": "desktop-dropdown-content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        id: "bluehost-nav-popup-inner"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, _user_menu__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
          key: item.href
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
          href: item.href
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
          className: ['bluehost-nav-popup-nav-icon']
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
          className: ['menu-item-icon is-svg-' + item.color]
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(item.icon, null)), " ", item.label)));
      }))));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopDropdown);

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/desktop-dropdown/style.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/desktop-dropdown/style.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/desktop-tabs/index.js":
/*!******************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/desktop-tabs/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/organisms/bwa-common-header/desktop-tabs/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);








var DesktopTab = function DesktopTab(_ref) {
  var item = _ref.item,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["item"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: 'bwa-desktop-nav__item ' + item.slug,
    key: item.slug
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__["BWANavLink"], {
    to: item.path,
    className: "bwa-desktop-nav__link",
    activeClassName: "active"
  }, item.label));
};

var DesktopTabs = function DesktopTabs() {
  var topLevelPages = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(function (select) {
    return select('bluehost/plugin').getTopLevelPages();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("nav", {
    className: "bwa-desktop-nav__inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    className: "bwa-desktop-nav__items"
  }, topLevelPages.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(DesktopTab, {
      item: item,
      key: item.slug
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopTabs);

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/desktop-tabs/style.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/desktop-tabs/style.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/index.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/organisms/bwa-common-header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _desktop_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desktop-dropdown */ "./src/app/components/organisms/bwa-common-header/desktop-dropdown/index.js");
/* harmony import */ var _desktop_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desktop-tabs */ "./src/app/components/organisms/bwa-common-header/desktop-tabs/index.js");
/* harmony import */ var _mobile_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-sidebar */ "./src/app/components/organisms/bwa-common-header/mobile-sidebar/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");











var HeaderLogo = function HeaderLogo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "bluehost-logo-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["addUtmParams"])('https://my.bluehost.com/hosting/app', {
      utm_content: 'bluehost_header_logo',
      utm_term: 'Bluehost Logo linking to the Bluehost Control Panel'
    }),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Bluehost Logo linking to the Bluehost Control Panel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__["BWAHeading"], {
    level: "h1",
    size: 0
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Bluehost', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["BluehostLogo"], {
    title: "Bluehost Logo"
  })));
};

var HeaderIcons = function HeaderIcons() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "bluehost-nav-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "bluehost-nav-wrap-element help"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    "aria-label": "Help",
    "data-testid": "help-icon",
    href: "#/help",
    rel: "noreferrer noopener"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["HelpIcon"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_desktop_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_mobile_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

var BWACommonHeader = function BWACommonHeader(_ref) {
  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("header", {
    tabIndex: "-1",
    className: "bwa-common-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "bwa-common-header__brand"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(HeaderLogo, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(HeaderIcons, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "bwa-desktop-nav",
    tabIndex: "-1",
    "data-testid": "desktop-nav"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_desktop_tabs__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (BWACommonHeader);

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/mobile-sidebar/index.js":
/*!********************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/mobile-sidebar/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/organisms/bwa-common-header/mobile-sidebar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");
/* harmony import */ var _user_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-menu */ "./src/app/components/organisms/bwa-common-header/user-menu.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);










var PrimaryMenu = function PrimaryMenu() {
  var topLevelPages = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('bluehost/plugin').getTopLevelPages();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "main"
  }, topLevelPages.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: ['tab ' + item.slug],
      key: item.slug
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWANavLink"], {
      to: item.path,
      activeClassName: "is-active"
    }, item.label));
  }));
};

var UserMenu = function UserMenu() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "user"
  }, _user_menu__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: ['tab'],
      key: item.href
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: item.href,
      className: "is-active"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: ['menu-item-icon is-svg-' + item.color]
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(item.icon, null)), item.label));
  }));
}; // const {
// 	openMobileSidebar
// } = useDispatch('bluehost/plugin');


var MobileSidebar = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["withState"])({
  isVisible: false,
  userMenu: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
      userMenu = _ref.userMenu,
      setState = _ref.setState;

  var toggleSidebarVisible = function toggleSidebarVisible() {
    isVisible ? Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('bluehost/plugin').closeMobileSidebar() : Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('bluehost/plugin').openMobileSidebar();
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };

  var toggleMenuShown = function toggleMenuShown() {
    setState(function (state) {
      return {
        userMenu: !state.userMenu
      };
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bluehost-nav-wrap-element mobile-toggle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__["BWAButton"], {
    className: "mobile-toggle",
    onClick: toggleSidebarVisible
  }, !isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["MenuIcon"], null) || Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], null)), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Popover"], {
    className: "bluehost-mobile-menu",
    position: "middle top",
    noArrow: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "slideout-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "slideout-logo-wrap",
    onClick: toggleSidebarVisible
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["BluehostLogo"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "slideout-icons-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "help"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_6__["addUtmParams"])('https://my.bluehost.com/hosting/help', {
      utm_content: 'mobile_help_link',
      utm_term: 'Help'
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["HelpIcon"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "user-menu"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["UserIcon"], {
    onClick: toggleMenuShown
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "slideout-menu-wrap",
    onClick: toggleSidebarVisible
  }, userMenu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(UserMenu, null) || Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PrimaryMenu, null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (MobileSidebar);

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/mobile-sidebar/style.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/mobile-sidebar/style.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/style.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/organisms/bwa-common-header/user-menu.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/organisms/bwa-common-header/user-menu.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");
/**
 * WordPress dependencies
 */

/**
 * Project dependencies
 */



/**
 * Component Defaults
 */

var url = 'https://my.bluehost.com/hosting/';
/* harmony default export */ __webpack_exports__["default"] = ([{
  icon: _app_assets__WEBPACK_IMPORTED_MODULE_1__["UserIcon"],
  href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["addUtmParams"])(url + 'app', {
    utm_content: 'header_account_link',
    utm_term: 'Bluehost Account'
  }),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bluehost Account', 'bluehost-wordpress-plugin'),
  color: 'gray'
}, {
  icon: _app_assets__WEBPACK_IMPORTED_MODULE_1__["BillingIcon"],
  href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["addUtmParams"])(url + 'account_center#billing', {
    utm_content: 'header_billing_link',
    utm_term: 'Billing'
  }),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Billing', 'bluehost-wordpress-plugin'),
  color: 'blue'
}, {
  icon: _app_assets__WEBPACK_IMPORTED_MODULE_1__["ProductsIcon"],
  href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["addUtmParams"])(url + 'account_center#products', {
    utm_content: 'header_products_link',
    utm_term: 'Products'
  }),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Products', 'bluehost-wordpress-plugin'),
  color: 'dark-blue'
}, {
  icon: _app_assets__WEBPACK_IMPORTED_MODULE_1__["SecurityIcon"],
  href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["addUtmParams"])(url + 'account_center#security', {
    utm_content: 'header_security_link',
    utm_term: 'Security'
  }),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Security', 'bluehost-wordpress-plugin'),
  color: 'green'
}, {
  icon: _app_assets__WEBPACK_IMPORTED_MODULE_1__["ValidationIcon"],
  href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["addUtmParams"])('https://my.bluehost.com/cgi/token', {
    utm_content: 'header_validation_token_link',
    utm_term: 'Validation Token'
  }),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Validation Token', 'bluehost-wordpress-plugin'),
  color: 'orange'
}]);

/***/ }),

/***/ "./src/app/components/organisms/bwa-notification/index.js":
/*!****************************************************************!*\
  !*** ./src/app/components/organisms/bwa-notification/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Notice = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notice);

    _this = _super.call(this, props); // Set component ref

    _this.component = null;

    _this.setComponentRef = function (element) {
      _this.component = element;
    }; // Close handler


    _this.onClose = function (e) {
      e.preventDefault();

      _this.props.onDismiss(_this.props.id);
    }; // Button handler


    _this.onButtonClick = function (e) {
      Object(_app_functions__WEBPACK_IMPORTED_MODULE_10__["sendEvent"])({
        action: 'bluehost-notification-click',
        data: {
          element: 'button',
          label: e.target.innerText,
          notificationId: props.id
        }
      });
    }; // Link handler


    _this.onLinkClick = function (e) {
      Object(_app_functions__WEBPACK_IMPORTED_MODULE_10__["sendEvent"])({
        action: 'bluehost-notification-click',
        data: {
          element: 'a',
          href: e.target.getAttribute('href'),
          label: e.target.innerText,
          notificationId: props.id
        }
      });
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.component) {
        // Handle close action
        var closeButton = this.component.querySelector('[data-action="close"]');

        if (closeButton) {
          closeButton.addEventListener('click', this.onClose);
        } // Handle button clicks


        var buttons = Array.from(this.component.querySelectorAll('button'));

        if (buttons.length) {
          buttons.forEach(function (button) {
            if (button.getAttribute('data-action') !== 'close') {
              button.addEventListener('click', _this2.onButtonClick);
            }
          });
        } // Handle links clicks


        var links = Array.from(this.component.querySelectorAll('a'));

        if (links.length) {
          links.forEach(function (link) {
            if (link.getAttribute('data-action') !== 'close') {
              link.addEventListener('click', _this2.onLinkClick);
            }
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.component) {
        // Remove close handler
        var closeButton = this.component.querySelector('[data-action="close"]');

        if (closeButton) {
          closeButton.removeEventListener('click', this.onClose);
        } // Remove button handlers


        var buttons = Array.from(this.component.querySelectorAll('button'));

        if (buttons.length) {
          buttons.forEach(function (button) {
            if (button.getAttribute('data-action') !== 'close') {
              button.removeEventListener('click', _this3.onButtonClick);
            }
          });
        } // Remove link handlers


        var links = Array.from(this.component.querySelectorAll('a'));

        if (links.length) {
          links.forEach(function (link) {
            if (link.getAttribute('data-action') !== 'close') {
              link.removeEventListener('click', _this3.onLinkClick);
            }
          });
        }
      }
    }
  }, {
    key: "filterLocations",
    value: function filterLocations(locations) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["filter"])(locations, function (_ref) {
        var context = _ref.context,
            pages = _ref.pages;
        return context === 'bluehost-plugin' && (typeof pages === 'string' || Array.isArray(pages) && pages.includes(window.location.hash));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          content = _this$props.content;
      var locations = this.filterLocations(this.props.locations); // If there are no applicable locations, don't render anything.

      if (!locations || !locations.length) {
        return false;
      } // If the current context is valid, render the notice.


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "bluehost-notice",
        dangerouslySetInnerHTML: {
          __html: content
        },
        key: id,
        ref: this.setComponentRef
      });
    }
  }]);

  return Notice;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var Notification = function Notification(_ref2) {
  var notifications = _ref2.notifications,
      onDismiss = _ref2.onDismiss;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, notifications.map(function (notification) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Notice, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, notification, {
      key: notification.id,
      onDismiss: onDismiss
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  return {
    notifications: select('bluehost/plugin').getNotifications()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withDispatch"])(function (dispatch) {
  return {
    onDismiss: dispatch('bluehost/plugin').dismissNotification
  };
}))(Notification));

/***/ }),

/***/ "./src/app/components/organisms/bwa-route-contents/index.js":
/*!******************************************************************!*\
  !*** ./src/app/components/organisms/bwa-route-contents/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/organisms/bwa-route-contents/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/molecules */ "./src/app/components/molecules/index.js");






var HomeRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! @app/pages/home */ "./src/app/pages/home/index.js"));
});
var OnboardingRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! @app/pages/home/onboarding */ "./src/app/pages/home/onboarding/index.js"));
});
var ThemesRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! @app/pages/marketplace/themes */ "./src/app/pages/marketplace/themes/index.js"));
});
var PluginsRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @app/pages/marketplace/plugins */ "./src/app/pages/marketplace/plugins/index.js"));
});
var ProductRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! @app/pages/marketplace/product-details */ "./src/app/pages/marketplace/product-details/index.js"));
});
var ServicesRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! @app/pages/marketplace/services */ "./src/app/pages/marketplace/services/index.js"));
});
var ToolsRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! @app/pages/tools */ "./src/app/pages/tools/index.js"));
});
var StagingRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! @app/pages/tools/staging */ "./src/app/pages/tools/staging/index.js"));
});
var SettingsRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @app/pages/settings */ "./src/app/pages/settings/index.js"));
});
var HelpRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! @app/pages/help */ "./src/app/pages/help/index.js"));
});
var BlueSkyRoute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! @app/pages/blue-sky */ "./src/app/pages/blue-sky/index.js"));
});
/**
 * !!! Analytics only happen automatically when @app/templates/base-template is used !!!
 * Implement sendPageviewEvent in @app/functions if you're getting fancy!
 */

var BWARouteContents = function BWARouteContents(_ref) {
  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
    tabIndex: "-1",
    className: "bwa-route-contents"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_4__["BWAPageSpinner"], null)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/home",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(HomeRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/home/onboarding",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OnboardingRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/themes",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemesRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/themes/:id",
    exact: true,
    render: function render(_ref2) {
      var id = _ref2.match.params.id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ProductRoute, {
        id: id
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/plugins",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PluginsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/plugins/:id",
    exact: true,
    render: function render(_ref3) {
      var id = _ref3.match.params.id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ProductRoute, {
        id: id
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/services",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ServicesRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/services/blue-sky",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlueSkyRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/services/:id",
    exact: true,
    render: function render(_ref4) {
      var id = _ref4.match.params.id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ProductRoute, {
        id: id
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/marketplace/product/:id",
    exact: true,
    render: function render(_ref5) {
      var id = _ref5.match.params.id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ProductRoute, {
        id: id,
        redirect: true
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/tools",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/tools/staging",
    exact: true,
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(StagingRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/settings",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SettingsRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/help",
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(HelpRoute, null);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    from: "/staging",
    to: {
      pathname: "/tools/staging",
      state: {
        redirect: 'shortlink-staging'
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    from: "/blue-sky",
    to: {
      pathname: "/marketplace/services/blue-sky",
      state: {
        redirect: 'shortlink-blue-sky'
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    exact: true,
    from: "/",
    to: {
      pathname: "/home",
      state: {
        redirect: 'unspecified-or-root'
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: {
      pathname: "/home",
      state: {
        redirect: 'invalid-route'
      }
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BWARouteContents);

/***/ }),

/***/ "./src/app/components/organisms/bwa-route-contents/style.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/organisms/bwa-route-contents/style.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/organisms/index.js":
/*!***********************************************!*\
  !*** ./src/app/components/organisms/index.js ***!
  \***********************************************/
/*! exports provided: BWACommonHeader, BWARouteContents, BWACommonFooter, BWANotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bwa_common_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bwa-common-header */ "./src/app/components/organisms/bwa-common-header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWACommonHeader", function() { return _bwa_common_header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bwa_route_contents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bwa-route-contents */ "./src/app/components/organisms/bwa-route-contents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWARouteContents", function() { return _bwa_route_contents__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bwa_common_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bwa-common-footer */ "./src/app/components/organisms/bwa-common-footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWACommonFooter", function() { return _bwa_common_footer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _bwa_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bwa-notification */ "./src/app/components/organisms/bwa-notification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWANotification", function() { return _bwa_notification__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/app/functions/augmentWPMenu.js":
/*!********************************************!*\
  !*** ./src/app/functions/augmentWPMenu.js ***!
  \********************************************/
/*! exports provided: handleWPMenuAugmentation, augmentWPMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWPMenuAugmentation", function() { return handleWPMenuAugmentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentWPMenu", function() { return augmentWPMenu; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var menuItemClass = 'bluehost-wp-menu-item';
var topLevelPage = 'toplevel_page_bluehost'; // wordpress-generated DOM ID

var handleWPMenuAugmentation = function handleWPMenuAugmentation(topLevelPages) {
  var primaryNode = window.document.querySelector('#' + topLevelPage);

  if ('undefined' !== typeof primaryNode.dataset && primaryNode.dataset.augmented) {
    return; // if data-augmented="1", don't re-augment
  }

  augmentWPMenu(topLevelPages);
  primaryNode.setAttribute('data-augmented', 1);
};
var augmentWPMenu = function augmentWPMenu(topLevelPages) {
  var topLevelPagesByPath = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"])(topLevelPages, 'path');
  var menuItems = Array.from(window.document.querySelectorAll('#' + topLevelPage + ' > ul > li'));
  menuItems.splice(0, 2); // skip first two line items to only include submenu line items

  menuItems.forEach(function (li) {
    var anchor = li.querySelector('a');
    var anchorPath = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["getFragment"])(anchor.href).substring(1); // nix hash prefix from fragment

    var itemData = topLevelPagesByPath[anchorPath]; // use path to tap into page data from store

    li.classList.add(menuItemClass, itemData.slug);
    li.setAttribute('data-' + menuItemClass, itemData.slug);
    li.setAttribute('data-' + menuItemClass + '-path', anchorPath);
  });

  try {
    // find top-level page item in menu, append
    var elem = window.document.querySelector('a.' + topLevelPage);

    if (!elem.href.includes('#/home')) {
      elem.href = elem.href + '#/home';
    }
  } catch (e) {
    console.log('Couldn\'t find Bluehost Menu Element to swap href');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (handleWPMenuAugmentation);

/***/ }),

/***/ "./src/app/functions/highlightTopLevel.js":
/*!************************************************!*\
  !*** ./src/app/functions/highlightTopLevel.js ***!
  \************************************************/
/*! exports provided: removeWPMenuActiveHighlight, handleWPMenuActiveHighlight, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWPMenuActiveHighlight", function() { return removeWPMenuActiveHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWPMenuActiveHighlight", function() { return handleWPMenuActiveHighlight; });
var topLevelPage = 'toplevel_page_bluehost'; // wordpress-generated DOM ID

var menuItemClass = 'bluehost-wp-menu-item'; // special classname for handling highlights

/**
 * Loop over all .bluehost-wp-menu-item, remove .current
 */

var removeWPMenuActiveHighlight = function removeWPMenuActiveHighlight() {
  var bluehostWpMenuItems = Array.from(document.querySelectorAll('#' + topLevelPage + ' .' + menuItemClass));
  bluehostWpMenuItems.forEach(function (menuItem) {
    menuItem.classList.remove('current');
  });
};
/**
 * Based on 'slug' defined in Bluehost_Admin_App_Assets::get_top_level_pages(), highlight a top-level page.
 * @param {string} topLevelSlug 
 */

var handleWPMenuActiveHighlight = function handleWPMenuActiveHighlight(topLevelSlug) {
  removeWPMenuActiveHighlight();

  try {
    var liToActivate = document.querySelector('[data-' + menuItemClass + '="' + topLevelSlug + '"]');
    var bluehostWpSubMenuNode = document.querySelector('#' + topLevelPage + ' ul');

    if (liToActivate && bluehostWpSubMenuNode) {
      liToActivate.classList.add('current');
      bluehostWpSubMenuNode.style = 'display: block;';
    }
  } catch (e) {// 
  }
};
/* harmony default export */ __webpack_exports__["default"] = (handleWPMenuActiveHighlight);

/***/ }),

/***/ "./src/app/functions/index.js":
/*!************************************!*\
  !*** ./src/app/functions/index.js ***!
  \************************************/
/*! exports provided: addUtmParams, get, isExternalUrl, sendEvent, sendPageviewEvent, handleWPMenuAugmentation, handleWPMenuActiveHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUtmParams", function() { return addUtmParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternalUrl", function() { return isExternalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEvent", function() { return sendEvent; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _highlightTopLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlightTopLevel */ "./src/app/functions/highlightTopLevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleWPMenuActiveHighlight", function() { return _highlightTopLevel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _augmentWPMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./augmentWPMenu */ "./src/app/functions/augmentWPMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleWPMenuAugmentation", function() { return _augmentWPMenu__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _sendPageviewEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendPageviewEvent */ "./src/app/functions/sendPageviewEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendPageviewEvent", function() { return _sendPageviewEvent__WEBPACK_IMPORTED_MODULE_4__["default"]; });






/**
 * Decorates an external link URL with UTM params.
 *
 * The utm_term, if passed, should be the link anchor text.
 * The utm_content should be the unique identifier for the link.
 * The utm_campaign is optional and reserved for special occasions.
 *
 * @param {string} url The original URL.
 * @param {Object} params The URL parameters to add.
 *
 * @return {string} The new URL.
 */

function addUtmParams(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  params.utm_source = "wp-admin/admin.php?page=bluehost".concat(window.location.hash);
  params.utm_medium = 'bluehost_plugin';
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(url, params);
}
/**
 * Get a (potentially) nested value from an object.
 *
 * Example usage: get(['a', 'b'], {a: {b: 'c'}}, 'd');
 *
 * @param {Array} props An array containing the property names to fetch from each level.
 * @param {Object} object The object to fetch from.
 * @param {*} fallback What to return if no match is found (defaults to null).
 *
 * @return {*} The found value or the fallback value.
 */

function get(props, object) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return props.reduce(function (accumulator, currentValue) {
    return accumulator && accumulator[currentValue] ? accumulator[currentValue] : fallback;
  }, object);
}
/**
 * Check if a URL is an external URL.
 *
 * @param {string} url The URL to check.
 *
 * @return {boolean} True if URL is external, false otherwise.
 */

function isExternalUrl(url) {
  return url && typeof url === 'string' && url.includes('http') && !url.includes(window.location.origin);
}
/**
 * Send events to the WP REST API
 *
 * @param {Object} event The event data to be tracked.
 */

function sendEvent(event) {
  event.data = event.data || {};
  event.data.page = window.location.href;
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: "/bluehost/v1/data/events/",
    method: 'POST',
    data: event
  });
}


/***/ }),

/***/ "./src/app/functions/sendPageviewEvent.js":
/*!************************************************!*\
  !*** ./src/app/functions/sendPageviewEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

/**
 * You must provide ReactRouterDOM location object (or equivalent) from a React function component where you can useLocation.
 * 
 * @param {object} location - ReactRouterDOM location object 
 */

var sendPageviewEvent = function sendPageviewEvent(location) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var payload = {
    category: 'Admin',
    // to mirror Endurance\WP\Module\Data\Listeners\Admin()
    action: 'pageview',
    data: {}
  };
  payload.data.page = window.bluehostWpAdminUrl + '?page=bluehost#' + location.pathname; // full url

  if (title) {
    payload.data['page_title'] = title;
  }

  if ('undefined' !== typeof location.state && 'undefined' !== typeof location.state.redirect) {
    payload.data.redirect = location.state.redirect;
  }

  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: "/bluehost/v1/data/events/",
    method: 'POST',
    data: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sendPageviewEvent);

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/app/store/index.js");
/* harmony import */ var _app_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-main.scss */ "./src/app/app-main.scss");
/* harmony import */ var _app_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/organisms */ "./src/app/components/organisms/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_molecules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/molecules */ "./src/app/components/molecules/index.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);















var AppBody = function AppBody(props) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isAppBooted = _useState2[0],
      setAppBooted = _useState2[1];

  if (!isAppBooted) {
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["dispatch"])('bluehost/plugin').fetchWindowData();
    setAppBooted(true);
  }

  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();
  var kebabRoute = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["kebabCase"])(location.pathname);

  var handleNavFocus = function handleNavFocus(event) {
    event.preventDefault();

    if (event.keycode && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"] !== event.keycode) {
      return;
    }

    var desktopTabs = document.querySelector('.bwa-desktop-nav__items');

    if (desktopTabs) {
      desktopTabs.focus({
        preventScroll: true
      });
    }
  };

  var handleContentFocus = function handleContentFocus(event) {
    event.preventDefault();

    if (event.keycode && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"] !== event.keycode) {
      return;
    }

    var routeContents = document.querySelector('.bwa-route-contents');

    if (routeContents) {
      routeContents.focus({
        preventScroll: true
      });
    }
  };

  var SkipLink = function SkipLink(_ref) {
    var _ref$href = _ref.href,
        href = _ref$href === void 0 ? '#' : _ref$href,
        onClick = _ref.onClick,
        onKeyDown = _ref.onKeyDown,
        children = _ref.children;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "screen-reader-shortcut bwa-skip-link",
      href: href,
      onClick: onClick,
      onKeyDown: onKeyDown
    }, children);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("main", {
    id: "bwa-app",
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('bwa-page-' + kebabRoute, props.className),
    "data-bwa-app-route": location.pathname,
    "data-pewpewpewz": true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SkipLink, {
    onClick: handleNavFocus,
    onKeyDown: handleNavFocus
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Skip to Navigation', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SkipLink, {
    onClick: handleContentFocus,
    onKeyDown: handleContentFocus
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Skip to Content', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_organisms__WEBPACK_IMPORTED_MODULE_4__["BWACommonHeader"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_organisms__WEBPACK_IMPORTED_MODULE_4__["BWARouteContents"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_organisms__WEBPACK_IMPORTED_MODULE_4__["BWACommonFooter"], null));
};

var App = function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__["ErrorBoundary"], {
    FallbackComponent: _app_components_molecules__WEBPACK_IMPORTED_MODULE_6__["BWAError"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["HashRouter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AppBody, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app/init.js":
/*!*************************!*\
  !*** ./src/app/init.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Add <body> class for a11y styles
 */

var bwaDetectTabNavigating = function bwaDetectTabNavigating() {
  var bwaHandleFirstTab = function bwaHandleFirstTab(event) {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"]) {
      document.body.classList.add('bwa-is-tab-navigating');
      window.removeEventListener('keydown', bwaHandleFirstTab);
    }
  };

  window.addEventListener('keydown', bwaHandleFirstTab);
};

var Init = function Init() {
  bwaDetectTabNavigating();
};

/* harmony default export */ __webpack_exports__["default"] = (Init);

/***/ }),

/***/ "./src/app/store/actions.js":
/*!**********************************!*\
  !*** ./src/app/store/actions.js ***!
  \**********************************/
/*! exports provided: openMobileSidebar, closeMobileSidebar, setActivePage, augmentWPAdminMenu, fetchWindowData, toggleSetting, updateSetting, dismissNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMobileSidebar", function() { return openMobileSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMobileSidebar", function() { return closeMobileSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActivePage", function() { return setActivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentWPAdminMenu", function() { return augmentWPAdminMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWindowData", function() { return fetchWindowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSetting", function() { return toggleSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSetting", function() { return updateSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissNotification", function() { return dismissNotification; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/app/store/constants.js");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls.js */ "./src/app/store/controls.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toggleSetting),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateSetting),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(dismissNotification);

/**
 * Internal Dependencies
 */


/**
 * WordPress Dependencies
 */


function openMobileSidebar() {
  return {
    type: 'MOBILE_SIDEBAR_ACTIVE'
  };
}
function closeMobileSidebar() {
  return {
    type: 'MOBILE_SIDEBAR_INACTIVE'
  };
}
function setActivePage(activePage, isTopLevel) {
  return {
    type: 'SET_ACTIVE_PAGE',
    activePage: activePage,
    isTopLevel: isTopLevel
  };
}
function augmentWPAdminMenu() {
  return {
    type: 'AUGMENT_WP_ADMIN_MENU'
  };
}
function fetchWindowData() {
  var data = {
    type: 'FETCH_WINDOW_DATA',
    bluehost: window.bluehost,
    adminColors: window._wpColorScheme.icons,
    userId: window.userSettings.uid
  };
  window.bluehost = {
    movedToStore: true
  };
  return data;
}
function toggleSetting(setting) {
  var oldValue, newValue;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toggleSetting$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])(_constants_js__WEBPACK_IMPORTED_MODULE_1__["STORE_KEY"]).getSetting(setting);

        case 2:
          oldValue = _context.sent;
          newValue = !Boolean(oldValue);
          _context.next = 6;
          return updateSetting(setting, newValue);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function updateSetting(setting, newValue) {
  var settings;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateSetting$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          settings = {};
          settings[setting] = newValue;
          _context2.next = 4;
          return Object(_controls_js__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: _constants_js__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_ENDPOINT"],
            method: 'POST',
            data: settings
          });

        case 4:
          return _context2.abrupt("return", {
            type: 'UPDATE_SETTING',
            setting: setting,
            newValue: newValue
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function dismissNotification(id) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function dismissNotification$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_controls_js__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: "/bluehost/v1/notifications/".concat(id),
            method: 'DELETE'
          });

        case 2:
          return _context3.abrupt("return", {
            type: 'DISMISS_NOTIFICATION',
            id: id
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ }),

/***/ "./src/app/store/constants.js":
/*!************************************!*\
  !*** ./src/app/store/constants.js ***!
  \************************************/
/*! exports provided: STORE_KEY, API_NAMESPACE, SETTINGS_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NAMESPACE", function() { return API_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_ENDPOINT", function() { return SETTINGS_ENDPOINT; });
var STORE_KEY = 'bluehost/plugin';
var API_NAMESPACE = '/bluehost/v1';
var SETTINGS_ENDPOINT = API_NAMESPACE + '/settings';

/***/ }),

/***/ "./src/app/store/controls.js":
/*!***********************************!*\
  !*** ./src/app/store/controls.js ***!
  \***********************************/
/*! exports provided: apiFetch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiFetch", function() { return apiFetch; });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
 * @return {Object} control descriptor.
 */

function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
}
var controls = {
  API_FETCH: function API_FETCH(_ref) {
    var request = _ref.request;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(request);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (controls);

/***/ }),

/***/ "./src/app/store/index.js":
/*!********************************!*\
  !*** ./src/app/store/index.js ***!
  \********************************/
/*! exports provided: storeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeConfig", function() { return storeConfig; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ "./src/app/store/actions.js");
/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors.js */ "./src/app/store/selectors.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/app/store/constants.js");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls.js */ "./src/app/store/controls.js");
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer.js */ "./src/app/store/reducer.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


var storeConfig = {
  reducer: _reducer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  selectors: _selectors_js__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions_js__WEBPACK_IMPORTED_MODULE_1__,
  controls: _controls_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  persist: ['preferences']
};
var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["registerStore"])(_constants_js__WEBPACK_IMPORTED_MODULE_3__["STORE_KEY"], _objectSpread(_objectSpread({}, storeConfig), {}, {
  persist: ['preferences']
}));

if (global.Cypress) {
  global.store = store;
}

/* harmony default export */ __webpack_exports__["default"] = (store);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/store/reducer.js":
/*!**********************************!*\
  !*** ./src/app/store/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 *
 * @param {*} state
 * @param {*} action
 */
// import DEFAULT_STATE from '@app/store/defaults'

var DEFAULT_STATE = {
  app: {},
  env: {},
  notifications: [],
  settings: {},
  wp: {}
};

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE.app;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_WINDOW_DATA':
      return _objectSpread(_objectSpread(_objectSpread({}, state.app), action.bluehost.app), {}, {
        colors: _objectSpread({}, action.adminColors)
      });
  }

  return state;
};

var env = function env() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE.env;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_WINDOW_DATA':
      return _objectSpread(_objectSpread({}, state.env), action.bluehost.env);
  }

  return state;
};

var notifications = function notifications() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE.notifications;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_WINDOW_DATA':
      return action.bluehost.notifications;

    case 'DISMISS_NOTIFICATION':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(state, function (_ref) {
        var id = _ref.id;
        return id !== action.id;
      });
  }

  return state.notifications;
};

var settings = function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE.settings;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_WINDOW_DATA':
      return _objectSpread({}, action.bluehost.settings);

    case 'UPDATE_SETTING':
      var newState = _objectSpread({}, state);

      newState[action.setting] = action.newValue;
      return newState;
  }

  return state.settings;
};

var wp = function wp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE.wp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_WINDOW_DATA':
      return _objectSpread(_objectSpread({}, action.bluehost.wordpress), {}, {
        userId: action.userId
      });
  }

  return state.wp;
};
/**
 * Export store state.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  app: app,
  env: env,
  notifications: notifications,
  settings: settings,
  wp: wp
}));

/***/ }),

/***/ "./src/app/store/selectors.js":
/*!************************************!*\
  !*** ./src/app/store/selectors.js ***!
  \************************************/
/*! exports provided: getActivePage, getTopLevelPages, isMenuAugmented, isSidebarOpen, isTopLevel, getAllSettings, getSetting, isWooActive, isJetpackActive, getWP, getBluehostData, getAdminUrl, getBluehostPluginDaysSinceInstall, getNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivePage", function() { return getActivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopLevelPages", function() { return getTopLevelPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMenuAugmented", function() { return isMenuAugmented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSidebarOpen", function() { return isSidebarOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopLevel", function() { return isTopLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSettings", function() { return getAllSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWooActive", function() { return isWooActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJetpackActive", function() { return isJetpackActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWP", function() { return getWP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluehostData", function() { return getBluehostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUrl", function() { return getAdminUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluehostPluginDaysSinceInstall", function() { return getBluehostPluginDaysSinceInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/**
 * Returns whether or not tips are globally enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether tips are globally enabled.
 */
function getActivePage(state) {
  return state.app.activePage;
}
function getTopLevelPages(state) {
  return state.app.pages;
}
function isMenuAugmented(state) {
  return state.app.isWPMenuAugmented;
}
function isSidebarOpen(state) {
  return state.app.isSidebarOpen;
}
function isTopLevel(state) {
  return state.app.isTopLevel;
}
function getAllSettings(state) {
  return state.settings;
}
function getSetting(state, setting) {
  return state.settings[setting];
}
function isWooActive(state) {
  return state.wp.isWooActive;
}
function isJetpackActive(state) {
  return state.wp.isJetpackActive;
}
function getWP(state) {
  return state.wp;
}
function getBluehostData(state) {
  return state;
}
function getAdminUrl(state) {
  return state.app.adminUrl;
}
function getBluehostPluginDaysSinceInstall(state) {
  return state.wp.bluehostPluginDaysSinceInstall;
}
function getNotifications(state) {
  return state.notifications;
}

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

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

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactRouterDOM"]; }());

/***/ })

},[["./src/app.js","manifest~app","vendors~app"]]]);
//# sourceMappingURL=app-d482e853499f5281a622.js.map