(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/pages/home/content/index.js":
/*!*********************************************!*\
  !*** ./src/app/pages/home/content/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var baseUrl = location.origin + '/wp-admin/';
var i18nSpace = 'endurance-wp-module-admin-app';

var PostsCard = function PostsCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "admin-post",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blog Posts', i18nSpace),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add blog posts to your site. You can also organize them into categories.', i18nSpace)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'edit-tags.php?taxonomy=category',
    isDefault: true
  }, "Manage Categories"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'post-new.php',
    isPrimary: true
  }, "New Post")));
};

var PagesCard = function PagesCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "admin-page",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pages', i18nSpace),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you are looking to adjust or control your navigation of your website simply click manage below and rearrange your menus.', i18nSpace)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'post-new.php?post_type=page',
    isPrimary: true
  }, "New Page")));
};

var MenusCard = function MenusCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "menu",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigation Menus', i18nSpace),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add pages to your website easily by clicking add new page.', i18nSpace)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php?autofocus[panel]=nav_menus',
    isDefault: true
  }, "Manage Menus")));
};

var ProductsCard = function ProductsCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "cart",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sell Products', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Are you are looking to sell products on your WordPress website? If so, we recommend that you install and setup WooCommerce.', i18nSpace)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php?autofocus[panel]=nav_menus',
    isDefault: true
  }, "Install WooCommerce")));
};

var ContentSection = function ContentSection() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    id: "content",
    className: 'pure-g'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PostsCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PagesCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MenusCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProductsCard, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentSection);

/***/ }),

/***/ "./src/app/pages/home/design-build/index.js":
/*!**************************************************!*\
  !*** ./src/app/pages/home/design-build/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */



var baseUrl = location.origin + '/wp-admin/';

var CustomizerCard = function CustomizerCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "admin-customizer",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Customizer', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Customize your theme from the front end and view your changes before updating them.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php',
    isPrimary: true
  }, "Customize Theme")));
};

var ThemesCard = function ThemesCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "admin-appearance",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WordPress Themes', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Easily browse and find a theme that inspires you!', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'themes.php',
    isPrimary: true
  }, "Premium Themes"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'themes.php',
    isDefault: true
  }, "Free Themes")));
};

var StagingCard = function StagingCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    isCentered: true,
    icon: "screenoptions",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Staging', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Staging allows you to create a seperate copy of your site that only you can see. You can test new ideas there before going live.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'themes.php',
    isDefault: true
  }, "Get Started")));
};

var DesignBuildSection = function DesignBuildSection(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    id: "content",
    className: 'pure-g'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Design & Build', 'endurance-wp-module-admin-app'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CustomizerCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemesCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StagingCard, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignBuildSection);

/***/ }),

/***/ "./src/app/pages/home/hosting/index.js":
/*!*********************************************!*\
  !*** ./src/app/pages/home/hosting/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */



var baseUrl = location.origin + '/wp-admin/';

var ManageMySitesCard = function ManageMySitesCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "desktop",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Manage My Sites', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Manage your site from Bluehost\'s control panel. You can take backups, keep things secure, and improve performance.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php',
    isDefault: true
  }, "Manage")));
};

var EmailCard = function EmailCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "email",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Create accounts, compose, send, and recieve all your email in your Bluehost control panel.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php',
    isDefault: true
  }, "Manage")));
};

var DomainsCard = function DomainsCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "admin-site",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Domains', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Find a new domain and assign it to your site, or start a new site with a new domain.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php',
    isDefault: true
  }, "Find a Domain")));
};

var HelpCard = function HelpCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    icon: "editor-help",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Help', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Need help from the folks at Bluehost? We have 24/7 US-based phone and chat support waiting to help.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'customize.php',
    isDefault: true
  }, "Help Me")));
};

var HostingSection = function HostingSection(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    id: "content",
    className: 'pure-g'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hosting', 'endurance-wp-module-admin-app'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ManageMySitesCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmailCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DomainsCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HelpCard, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (HostingSection);

/***/ }),

/***/ "./src/app/pages/home/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/app-page */ "./src/app/components/app-page/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/app/pages/home/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/ */ "./src/app/pages/home/content/index.js");
/* harmony import */ var _design_build___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design-build/ */ "./src/app/pages/home/design-build/index.js");
/* harmony import */ var _hosting___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hosting/ */ "./src/app/pages/home/hosting/index.js");
/* harmony import */ var _performance___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./performance/ */ "./src/app/pages/home/performance/index.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






var HomePage = function HomePage() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_app_page__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    class: "welcome-title"
  }, "Welcome to Your WordPress Site!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content___WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_design_build___WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_performance___WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_hosting___WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/app/pages/home/performance/index.js":
/*!*************************************************!*\
  !*** ./src/app/pages/home/performance/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./src/app/components/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var baseUrl = location.origin + '/wp-admin/';

var CacheCard = function CacheCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    isCentered: true,
    icon: "performance",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Page Cache', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Page caching allows your server to keep a copy of a page for a short time to dramatically improve speed.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'themes.php',
    isDefault: true
  }, "Configure")));
};

var PhotonCard = function PhotonCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
    isCentered: true,
    icon: "visibility",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Photon', 'endurance-wp-module-admin-app'),
    desc: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Photon is an image acceleration service that will resize your images and serve them from a CDN.', 'endurance-wp-module-admin-app')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["AppButton"], {
    href: baseUrl + 'themes.php',
    isDefault: true
  }, "Install Jetpack")));
};

var PerformanceSection = function PerformanceSection(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    id: "content",
    className: 'pure-g'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Performance', 'endurance-wp-module-admin-app'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CacheCard, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'pure-u-1 pure-u-sm-1-2'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PhotonCard, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (PerformanceSection);

/***/ }),

/***/ "./src/app/pages/home/style.scss":
/*!***************************************!*\
  !*** ./src/app/pages/home/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=0.js.map