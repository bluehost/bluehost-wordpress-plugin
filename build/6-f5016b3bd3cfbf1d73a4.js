(window["webpackJsonp_bluehost_wordpress_plugin"] = window["webpackJsonp_bluehost_wordpress_plugin"] || []).push([[6],{

/***/ "./src/app/assets/blue-sky-group.png":
/*!*******************************************!*\
  !*** ./src/app/assets/blue-sky-group.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/blue-sky-group.55b18632.png");

/***/ }),

/***/ "./src/app/components/templates/bwa-base/index.js":
/*!********************************************************!*\
  !*** ./src/app/components/templates/bwa-base/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");
/* harmony import */ var _app_components_molecules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/molecules */ "./src/app/components/molecules/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);












var BWABaseTemplate = function BWABaseTemplate(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "base" : _ref$type,
      _ref$descriptivePageT = _ref.descriptivePageTitle,
      descriptivePageTitle = _ref$descriptivePageT === void 0 ? false : _ref$descriptivePageT,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["type", "descriptivePageTitle"]);

  var pageContainer = document.querySelector('.bwa-route-contents');
  var routerLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useLocation"])();
  var topLevelPages = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["useSelect"])(function (select) {
    return select('bluehost/plugin').getTopLevelPages();
  }, []);

  if (null === topLevelPages || 'undefined' === typeof topLevelPages) {
    return false;
  }
  /**
   * Use router location to figure out top-level page to highlight, if any.
   */


  var getTopLevelActiveHighlightSlug = function getTopLevelActiveHighlightSlug() {
    var slug = false;
    var currentPath = routerLocation.pathname;
    var topLevelPaths = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["keyBy"])(topLevelPages, 'path');

    if (topLevelPaths[currentPath]) {
      slug = topLevelPaths[currentPath].slug;
    } else {
      topLevelPages.forEach(function (pageData) {
        if (currentPath.includes(pageData.path)) {
          slug = pageData.slug;
        }
      });
    }

    return slug;
  };
  /**
   * Determine short, unique title used for analytics and a11y announcements.
   */


  var getDescriptivePageTitle = function getDescriptivePageTitle() {
    var defaultTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bluehost WordPress Plugin', 'bluehost-wordpress-plugin');

    var pageTitle = document.querySelector('h2');

    if (false !== descriptivePageTitle) {
      return descriptivePageTitle;
    } else if (null !== pageTitle) {
      return pageTitle.innerText;
    } else {
      return defaultTitle;
    }
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["handleWPMenuAugmentation"])(topLevelPages);
    Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["handleWPMenuActiveHighlight"])(getTopLevelActiveHighlightSlug());
    pageContainer.focus({
      preventScroll: true
    });

    if (routerLocation.state && routerLocation.state.redirect !== 'unspecified-or-root') {
      Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__["speak"])(getDescriptivePageTitle(), 'assertive');
    }

    Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["sendPageviewEvent"])(routerLocation, getDescriptivePageTitle());
  }, [routerLocation.pathname]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(['component-template-' + type, 'base-template', 'animated', 'fadeIn', 'page-fade-speed', props.className ? props.className : null])
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_3__["BWAPageNotices"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (BWABaseTemplate);

/***/ }),

/***/ "./src/app/components/templates/bwa-common/index.js":
/*!**********************************************************!*\
  !*** ./src/app/components/templates/bwa-common/index.js ***!
  \**********************************************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/templates/bwa-common/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/templates */ "./src/app/components/templates/index.js");






var BWACommonTemplate = function BWACommonTemplate(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'common' : _ref$type,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["type", "children"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_app_components_templates__WEBPACK_IMPORTED_MODULE_4__["BWABaseTemplate"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: type
  }, props), children);
};

/* harmony default export */ __webpack_exports__["default"] = (BWACommonTemplate);

/***/ }),

/***/ "./src/app/components/templates/bwa-common/style.scss":
/*!************************************************************!*\
  !*** ./src/app/components/templates/bwa-common/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/templates/bwa-marketplace/index.js":
/*!***************************************************************!*\
  !*** ./src/app/components/templates/bwa-marketplace/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/templates/bwa-marketplace/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _app_components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/molecules */ "./src/app/components/molecules/index.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks */ "./src/app/hooks/index.js");
/* harmony import */ var _app_components_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/templates */ "./src/app/components/templates/index.js");
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);















var marketplacePageTitle = function marketplacePageTitle(marketplaceType) {
  switch (marketplaceType) {
    case 'plugins':
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Premium Plugins', 'bluehost-wordpress-plugin');

    case 'services':
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Premium Services', 'bluehost-wordpress-plugin');

    default:
      // Themes
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Premium Themes', 'bluehost-wordpress-plugin');
  }
};

var sortByOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Popular', 'bluehost-wordpress-plugin'),
  value: 'sort-sales-desc'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Price (High to Low)', 'bluehost-wordpress-plugin'),
  value: 'sort-price-desc'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Price (Low to High)', 'bluehost-wordpress-plugin'),
  value: 'sort-price-asc'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Date Added', 'bluehost-wordpress-plugin'),
  value: 'sort-date-desc'
} // {
// 	label: __( 'Favorites', 'bluehost-wordpress-plugin' ),
// 	value: 'filter-favorites',
// },
];

var BWAMarketplaceTemplate = function BWAMarketplaceTemplate(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'marketplace' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isLoading = _ref.isLoading,
      payload = _ref.payload,
      render = _ref.render,
      _ref$marketplaceType = _ref.marketplaceType,
      marketplaceType = _ref$marketplaceType === void 0 ? 'themes' : _ref$marketplaceType,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["type", "className", "isLoading", "payload", "render", "marketplaceType"]);

  var _useFavorites = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["useFavorites"])(),
      _useFavorites2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useFavorites, 2),
      favorites = _useFavorites2[0].favorites,
      _useFavorites2$ = _useFavorites2[1],
      hasFavorite = _useFavorites2$.hasFavorite,
      toggleFavorite = _useFavorites2$.toggleFavorite;

  var _useMojoFilter = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["useMojoFilter"])(favorites),
      _useMojoFilter2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useMojoFilter, 1),
      filterBy = _useMojoFilter2[0];

  var _usePaginator = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["usePaginator"])(),
      _usePaginator2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_usePaginator, 2),
      _usePaginator2$ = _usePaginator2[0],
      items = _usePaginator2$.items,
      itemsPerPage = _usePaginator2$.itemsPerPage,
      pageCount = _usePaginator2$.pageCount,
      pageNumber = _usePaginator2$.pageNumber,
      _usePaginator2$2 = _usePaginator2[1],
      setCollection = _usePaginator2$2.setCollection,
      setPageNumber = _usePaginator2$2.setPageNumber;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])('sort-sales-desc'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var _useMojoSort = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["useMojoSort"])(),
      _useMojoSort2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useMojoSort, 1),
      sortBy = _useMojoSort2[0];

  var _useMojoSearch = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["useMojoSearch"])(),
      _useMojoSearch2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useMojoSearch, 2),
      query = _useMojoSearch2[0].query,
      _useMojoSearch2$ = _useMojoSearch2[1],
      search = _useMojoSearch2$.search,
      setQuery = _useMojoSearch2$.setQuery;

  className = classnames__WEBPACK_IMPORTED_MODULE_12___default()('bluehost-marketplace', className);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Fetch items
    var results = payload.items || []; // Determine sort/filter method

    var _sort$split = sort.split('-'),
        _sort$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_sort$split, 3),
        marketplaceType = _sort$split2[0],
        method = _sort$split2[1],
        order = _sort$split2[2]; // Sort/filter


    results = 'filter' === marketplaceType ? filterBy(sortBy(results, 'sales'), method) : sortBy(results, method, order); // Handle search

    results = search(results, query); // Split results up into pages

    setCollection(results);
    setPageNumber(1);
  }, [payload, sort, query]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Scroll to top of page when changing pages
    window.scrollTo(0, 0);
  }, [pageNumber]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_templates__WEBPACK_IMPORTED_MODULE_9__["BWACommonTemplate"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: type,
    className: className,
    marketplaceType: marketplaceType
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("section", {
    className: "".concat(className, "__header")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: "".concat(className, "__header-primary")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_6__["BWAHeading"], {
    level: "h2",
    size: 1,
    className: "marketplace-page-title"
  }, marketplacePageTitle(marketplaceType)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: "".concat(className, "__pagination-container")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_6__["BWAPagination"], {
    callback: setPageNumber,
    currentPage: pageNumber,
    pageCount: pageCount
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: "".concat(className, "__header-secondary")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_7__["BWASearch"], {
    value: query,
    onChange: setQuery
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_6__["BWADropdown"], {
    id: "sort-filter",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Sort By', 'bluehost-wordpress-plugin'),
    onChange: function onChange(value) {
      return setSort(value);
    },
    options: sortByOptions,
    value: sort,
    width: 178
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: "".concat(className, "__content")
  }, function () {
    if (isLoading) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_7__["BWAProductGrid"], null, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(itemsPerPage).keys()).map(function (i) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_7__["BWAProductCardPlaceholder"], {
          key: i
        });
      }));
    }

    if (!items || !items.length) {
      // Filtering by favorites, but with no results
      if (sort === 'filter-favorites') {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
          className: "bluehost-no-results"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_10__["NoFavorites"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('You don\'t have any favorites yet.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add favorites by starring items you like.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
          href: "#",
          onClick: function onClick(e) {
            e.preventDefault();
            setSort('sort-sales-desc');
          }
        }, function () {
          switch (marketplaceType) {
            case 'plugins':
              return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('View Plugins', 'bluehost-wordpress-plugin');

            case 'services':
              return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('View Services', 'bluehost-wordpress-plugin');

            default:
              // Themes
              return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('View Themes', 'bluehost-wordpress-plugin');
          }
        }()));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_7__["BWANoResults"], null);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_molecules__WEBPACK_IMPORTED_MODULE_7__["BWAProductGrid"], null, items.map(function (item) {
      return render({
        item: item,
        hasFavorite: hasFavorite,
        toggleFavorite: toggleFavorite
      });
    }));
  }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("footer", {
    className: "".concat(className, "__footer")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: "".concat(className, "__ad")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_6__["BWAPagination"], {
    callback: setPageNumber,
    currentPage: pageNumber,
    pageCount: pageCount
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BWAMarketplaceTemplate);

/***/ }),

/***/ "./src/app/components/templates/bwa-marketplace/style.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/templates/bwa-marketplace/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/templates/index.js":
/*!***********************************************!*\
  !*** ./src/app/components/templates/index.js ***!
  \***********************************************/
/*! exports provided: BWABaseTemplate, BWACommonTemplate, BWAMarketplaceTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bwa_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bwa-base */ "./src/app/components/templates/bwa-base/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWABaseTemplate", function() { return _bwa_base__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bwa_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bwa-common */ "./src/app/components/templates/bwa-common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWACommonTemplate", function() { return _bwa_common__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bwa_marketplace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bwa-marketplace */ "./src/app/components/templates/bwa-marketplace/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BWAMarketplaceTemplate", function() { return _bwa_marketplace__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/app/hooks/favorites.js":
/*!************************************!*\
  !*** ./src/app/hooks/favorites.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFavorites; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Favorites functionality hook
 *
 * @param {Array} initialFavorites
 * @return {Array}
 */

function useFavorites() {
  var initialFavorites = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialFavorites),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      favorites = _useState2[0],
      setFavorites = _useState2[1];
  /**
   * Add a favorite by ID.
   *
   * @param {string} id
   */


  function addFavorite(id) {
    setFavorites([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(favorites), [id]));
  }
  /**
   * Check if favorite exists by ID.
   *
   * @param {string} id
   * @return {boolean}
   */


  function hasFavorite(id) {
    return favorites.includes(id);
  }
  /**
   * Remove a favorite by ID.
   *
   * @param {string} id
   */


  function removeFavorite(id) {
    setFavorites(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["without"])(favorites, id));
  }
  /**
   * Toggle a favorite by ID.
   *
   * @param {string} id
   */


  function toggleFavorite(id) {
    hasFavorite(id) ? removeFavorite(id) : addFavorite(id);
  }

  return [{
    favorites: favorites
  }, {
    addFavorite: addFavorite,
    hasFavorite: hasFavorite,
    removeFavorite: removeFavorite,
    setFavorites: setFavorites,
    toggleFavorite: toggleFavorite
  }];
}

/***/ }),

/***/ "./src/app/hooks/index.js":
/*!********************************!*\
  !*** ./src/app/hooks/index.js ***!
  \********************************/
/*! exports provided: useFavorites, useMojoApi, useMojoFilter, useMojoSearch, useMojoSort, usePaginator, useStaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites */ "./src/app/hooks/favorites.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFavorites", function() { return _favorites__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mojo_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mojo-api */ "./src/app/hooks/mojo-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMojoApi", function() { return _mojo_api__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mojo_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mojo-filter */ "./src/app/hooks/mojo-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMojoFilter", function() { return _mojo_filter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _mojo_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mojo-search */ "./src/app/hooks/mojo-search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMojoSearch", function() { return _mojo_search__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mojo_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mojo-sort */ "./src/app/hooks/mojo-sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMojoSort", function() { return _mojo_sort__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginator */ "./src/app/hooks/paginator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePaginator", function() { return _paginator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _staging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staging */ "./src/app/hooks/staging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaging", function() { return _staging__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/app/hooks/mojo-api.js":
/*!***********************************!*\
  !*** ./src/app/hooks/mojo-api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMojoApi; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);





function useMojoApi() {
  var initialType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'themes';
  var initialParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      done = _useState2[0],
      setDone = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialType),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      type = _useState8[0],
      setType = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialParams),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      params = _useState10[0],
      setParams = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),
      payload = _useState12[0],
      setPayload = _useState12[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var urlParams, _i, _Object$entries, _Object$entries$_i, name, value, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setDone(false);
                setIsError(false);
                setIsLoading(true);
                _context.prev = 3;
                urlParams = new URLSearchParams('');

                for (_i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
                  _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2), name = _Object$entries$_i[0], value = _Object$entries$_i[1];
                  urlParams.append(name, value);
                }

                _context.next = 8;
                return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
                  path: '/mojo/v1/' + type + '?' + urlParams.toString()
                });

              case 8:
                response = _context.sent;
                setPayload(response);
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                setIsError(true);
                setPayload(_context.t0);

              case 16:
                setIsLoading(false);
                setDone(true);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [type, params]);
  return [{
    done: done,
    isError: isError,
    isLoading: isLoading,
    params: params,
    payload: payload
  }, {
    setType: setType,
    setParams: setParams
  }];
}

/***/ }),

/***/ "./src/app/hooks/mojo-filter.js":
/*!**************************************!*\
  !*** ./src/app/hooks/mojo-filter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMojoFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Mojo filter functionality.
 *
 * @param {Array} favorites
 * @return {Array}
 */

function useMojoFilter(favorites) {
  /**
   * Filter by favorites.
   *
   * @param {Array} items
   * @return {Array}
   */
  function filterByFavorites(items) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(items, function (item) {
      return favorites.includes(item.id);
    });
  }
  /**
   * Filter using a specific method.
   *
   * @param {Array} items
   * @param {string} method
   * @return {Array}
   */


  function filterBy(items, method) {
    switch (method) {
      case 'favorites':
        return filterByFavorites(items);

      default:
        return items;
    }
  }

  return [filterBy];
}

/***/ }),

/***/ "./src/app/hooks/mojo-search.js":
/*!**************************************!*\
  !*** ./src/app/hooks/mojo-search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMojoSearch; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function useMojoSearch() {
  var initialQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialQuery),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  function search(items) {
    if (!query) {
      return items;
    }

    var options = {
      threshold: 0.1,
      keys: ['name', 'short_description', 'features', 'tags']
    };
    var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1___default.a(items, options);
    return fuse.search(query);
  }

  return [{
    query: query
  }, {
    search: search,
    setQuery: setQuery
  }];
}

/***/ }),

/***/ "./src/app/hooks/mojo-sort.js":
/*!************************************!*\
  !*** ./src/app/hooks/mojo-sort.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMojoSort; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Mojo sort functionality.
 *
 * @return {Array}
 */

function useMojoSort() {
  /**
   * Sort a collection of Mojo items by date created in ascending order.
   *
   * @param {Array} items
   * @return {Array}
   */
  function sortByDateAddedAscending(items) {
    return items.sort(function (a, b) {
      if (a.created_timestamp > b.created_timestamp) {
        return 1;
      } else if (a.created_timestamp < b.created_timestamp) {
        return -1;
      } // If equal sort by name


      return a.name < b.name ? 1 : -1;
    });
  }
  /**
   * Sort a collection of Mojo items by date created in descending order.
   *
   * @param {Array} items
   * @return {Array}
   */


  function sortByDateAddedDescending(items) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reverse"])(sortByDateAddedAscending(items));
  }
  /**
   * Sort a collection of Mojo items by price in ascending order.
   *
   * @param {Array} items
   * @return {Array}
   */


  function sortByPriceAscending(items) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sort"])(items, function (item) {
      return parseInt(item.prices.single_domain_license, 10);
    });
  }
  /**
   * Sort a collection of Mojo items by price in descending order.
   *
   * @param {Array} items
   * @return {Array}
   */


  function sortByPriceDescending(items) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reverse"])(sortByPriceAscending(items));
  }
  /**
   * Sort a collection of Mojo items by sales in ascending order.
   *
   * @param {Array} items
   * @return {Array}
   */


  function sortBySalesAscending(items) {
    return items.sort(function (a, b) {
      if (a.sales_count > b.sales_count) {
        return 1;
      } else if (a.sales_count < b.sales_count) {
        return -1;
      } // If equal sort by name


      return a.name < b.name ? 1 : -1;
    });
  }
  /**
   * Sort a collection of Mojo items by sales in descending order.
   *
   * @param {Array} items
   * @return {Array}
   */


  function sortBySalesDescending(items) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reverse"])(sortBySalesAscending(items));
  }
  /**
   * Sort a collection of Mojo items using a specific method and order.
   *
   * @param {Array} items
   * @param {string} method One of 'date', 'price', or 'sales'.
   * @param {string} order One of 'desc' or 'asc'.
   * @return {Array}
   */


  function sortBy(items) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sales';
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'desc';

    switch (method) {
      case 'date':
        return 'desc' === order ? sortByDateAddedDescending(items) : sortByDateAddedAscending(items);

      case 'price':
        return 'desc' === order ? sortByPriceDescending(items) : sortByPriceAscending(items);

      default:
        return 'desc' === order ? sortBySalesDescending(items) : sortBySalesAscending(items);
    }
  }

  return [sortBy];
}

/***/ }),

/***/ "./src/app/hooks/paginator.js":
/*!************************************!*\
  !*** ./src/app/hooks/paginator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePaginator; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Paginates a collection of items.
 *
 * @param {Array} initialCollection
 * @param {number} initialItemsPerPage
 * @param {number} initialPageNumber
 * @return {Array}
 */

function usePaginator() {
  var initialCollection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var initialItemsPerPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var initialPageNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialCollection),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      collection = _useState2[0],
      setCollection = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialItemsPerPage),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      itemsPerPage = _useState6[0],
      setItemsPerPage = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      pages = _useState8[0],
      setPages = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      pageCount = _useState10[0],
      setPageCount = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPageNumber),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      pageNumber = _useState12[0],
      setPageNumber = _useState12[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var chunks = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["chunk"])(collection, itemsPerPage);
    setPages(chunks);
    setPageCount(chunks.length);
  }, [collection]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setItems(pages[pageNumber - 1]);
  }, [pages, pageNumber]);
  return [{
    items: items,
    itemsPerPage: itemsPerPage,
    pageCount: pageCount,
    pageNumber: pageNumber
  }, {
    setCollection: setCollection,
    setItemsPerPage: setItemsPerPage,
    setPageNumber: setPageNumber
  }];
}

/***/ }),

/***/ "./src/app/hooks/staging.js":
/*!**********************************!*\
  !*** ./src/app/hooks/staging.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStaging; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Staging functionality.
 *
 * @return {Array}
 */

function useStaging() {
  /**
   * The creation date of the staging environment.
   *
   * @member {string}
   */
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      creationDate = _useState2[0],
      setCreationDate = _useState2[1];
  /**
   * Whether or not we are on the production environment.
   *
   * @member {boolean}
   */


  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      isProduction = _useState4[0],
      setIsProduction = _useState4[1];
  /**
   * The notice to be displayed to the user.
   *
   * @member {string}
   */


  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      notice = _useState6[0],
      setNotice = _useState6[1];
  /**
   * Whether or not a staging environment exists.
   *
   * @member {boolean}
   */


  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      hasStaging = _useState8[0],
      setHasStaging = _useState8[1];
  /**
   * Whether or not a staging environment is being created.
   *
   * @member {boolean}
   */


  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      isCreatingStaging = _useState10[0],
      setIsCreatingStaging = _useState10[1];
  /**
   * Whether or not we have hit an error state.
   *
   * @member {boolean}
   */


  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
      isError = _useState12[0],
      setIsError = _useState12[1];
  /**
   * Whether or not we are actively making an HTTP request.
   *
   * @member {boolean}
   */


  var _useState13 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),
      isLoading = _useState14[0],
      setIsLoading = _useState14[1];
  /**
   * The production environment directory.
   *
   * @member {string}
   */


  var _useState15 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState15, 2),
      productionDir = _useState16[0],
      setProductionDir = _useState16[1];
  /**
   * The production thumbnail URL.
   *
   * @member {string}
   */


  var _useState17 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState17, 2),
      productionThumbnailUrl = _useState18[0],
      setProductionThumbnailUrl = _useState18[1];
  /**
   * The production environment URL.
   *
   * @member {string}
   */


  var _useState19 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState19, 2),
      productionUrl = _useState20[0],
      setProductionUrl = _useState20[1];
  /**
   * The staging environment directory.
   *
   * @member {string}
   */


  var _useState21 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState21, 2),
      stagingDir = _useState22[0],
      setStagingDir = _useState22[1];
  /**
   * The staging thumbnail URL.
   *
   * @member {string}
   */


  var _useState23 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState24 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState23, 2),
      stagingThumbnailUrl = _useState24[0],
      setStagingThumbnailUrl = _useState24[1];
  /**
   * The staging environment URL.
   *
   * @member {string}
   */


  var _useState25 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState26 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState25, 2),
      stagingUrl = _useState26[0],
      setStagingUrl = _useState26[1];
  /**
   * Set when switching between environments.
   *
   * @member {string} Can be one of 'staging' or 'production'.
   */


  var _useState27 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState28 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState27, 2),
      switchingTo = _useState28[0],
      setSwitchingTo = _useState28[1];
  /**
   * Fallback error message.
   *
   * @type {string}
   */


  var unknownErrorMsg = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('An unknown error has occurred.', 'bluehost-wordpress-plugin');
  /**
   * Call the WordPress REST API.
   *
   * @param options
   * @return {Promise<null>}
   */


  var callApi = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(options) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsError(false);
              setIsLoading(true);
              setNotice(null);
              _context.prev = 3;
              _context.next = 6;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()(options);

            case 6:
              response = _context.sent;

              if (!(response.hasOwnProperty('status') && response.status === 'error')) {
                _context.next = 9;
                break;
              }

              throw new Error(response.message);

            case 9:
              setIsLoading(false);
              return _context.abrupt("return", response);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setIsLoading(false);
              setIsError(true);
              setNotice((_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(_context.t0) === 'object' ? _context.t0.message : _context.t0) || unknownErrorMsg);
              return _context.abrupt("return", null);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function callApi(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var setup = function setup(response) {
    if (response.hasOwnProperty('stagingExists')) {
      setHasStaging(response.stagingExists);
    }

    if (response.hasOwnProperty('currentEnvironment')) {
      setIsProduction(response.currentEnvironment === 'production');
    }

    if (response.hasOwnProperty('productionDir')) {
      setProductionDir(response.productionDir);
    }

    if (response.hasOwnProperty('productionThumbnailUrl')) {
      setProductionThumbnailUrl(response.productionThumbnailUrl);
    }

    if (response.hasOwnProperty('productionUrl')) {
      setProductionUrl(response.productionUrl);
    }

    if (response.hasOwnProperty('stagingDir')) {
      setStagingDir(response.stagingDir);
    }

    if (response.hasOwnProperty('stagingThumbnailUrl')) {
      setStagingThumbnailUrl(response.stagingThumbnailUrl);
    }

    if (response.hasOwnProperty('stagingUrl')) {
      setStagingUrl(response.stagingUrl);
    }

    if (response.hasOwnProperty('creationDate')) {
      setCreationDate(response.creationDate);
    }
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Set staging details.
    callApi({
      path: '/bluehost/v1/staging'
    }).then(setup);
  }, []);
  /**
   * Create staging environment.
   */

  function createEnv() {
    return _createEnv.apply(this, arguments);
  }
  /**
   * Delete the staging environment.
   */


  function _createEnv() {
    _createEnv = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsCreatingStaging(true);
              _context2.next = 3;
              return callApi({
                path: '/bluehost/v1/staging',
                method: 'POST'
              });

            case 3:
              response = _context2.sent;

              if (response) {
                setup(response);
                setNotice(response.message);
                setIsError(response.status === 'error');
              }

              setIsCreatingStaging(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _createEnv.apply(this, arguments);
  }

  function deleteEnv() {
    return _deleteEnv.apply(this, arguments);
  }
  /**
   * Switch between environments.
   *
   * @param {string} env
   */


  function _deleteEnv() {
    _deleteEnv = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return callApi({
                path: '/bluehost/v1/staging',
                method: 'DELETE'
              });

            case 2:
              response = _context3.sent;

              if (response) {
                setHasStaging(false);
                setNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Staging website destroyed.', 'bluehost-wordpress-plugin'));
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _deleteEnv.apply(this, arguments);
  }

  function switchToEnv(_x2) {
    return _switchToEnv.apply(this, arguments);
  }
  /**
   * Clone the production environment to staging.
   */


  function _switchToEnv() {
    _switchToEnv = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(env) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setSwitchingTo(env);
              _context4.next = 3;
              return callApi({
                path: "/bluehost/v1/staging/switch-to?env=".concat(env)
              });

            case 3:
              response = _context4.sent;

              if (response && response.hasOwnProperty('load_page')) {
                window.location.href = response.load_page;
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _switchToEnv.apply(this, arguments);
  }

  function cloneEnv() {
    return _cloneEnv.apply(this, arguments);
  }
  /**
   * Deploy changes from staging to production.
   *
   * @param {string} type One of 'all', 'files', or 'db'
   */


  function _cloneEnv() {
    _cloneEnv = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return callApi({
                path: '/bluehost/v1/staging/clone',
                method: 'POST'
              });

            case 2:
              response = _context5.sent;

              if (response) {
                setNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Website cloned successfully.', 'bluehost-wordpress-plugin'));
              }

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _cloneEnv.apply(this, arguments);
  }

  function deployChanges() {
    return _deployChanges.apply(this, arguments);
  }

  function _deployChanges() {
    _deployChanges = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var type,
          response,
          _args6 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              type = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : 'all';
              _context6.next = 3;
              return callApi({
                path: "/bluehost/v1/staging/deploy?type=".concat(type),
                method: 'POST'
              });

            case 3:
              response = _context6.sent;

              if (response) {
                setNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Changes deployed successfully.', 'bluehost-wordpress-plugin'));
              }

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _deployChanges.apply(this, arguments);
  }

  return [{
    creationDate: creationDate,
    hasStaging: hasStaging,
    isCreatingStaging: isCreatingStaging,
    isError: isError,
    isProduction: isProduction,
    isLoading: isLoading,
    notice: notice,
    productionDir: productionDir,
    productionThumbnailUrl: productionThumbnailUrl,
    productionUrl: productionUrl,
    stagingDir: stagingDir,
    stagingThumbnailUrl: stagingThumbnailUrl,
    stagingUrl: stagingUrl,
    switchingTo: switchingTo
  }, {
    cloneEnv: cloneEnv,
    createEnv: createEnv,
    deleteEnv: deleteEnv,
    deployChanges: deployChanges,
    setNotice: setNotice,
    switchToEnv: switchToEnv
  }];
}

/***/ }),

/***/ "./src/app/pages/help/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/help/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/pages/help/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/atoms */ "./src/app/components/atoms/index.js");
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _app_components_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/templates */ "./src/app/components/templates/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ "./src/app/pages/help/search.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");
/* harmony import */ var _app_assets_blue_sky_group_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/assets/blue-sky-group.png */ "./src/app/assets/blue-sky-group.png");











var Help = function Help() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_templates__WEBPACK_IMPORTED_MODULE_4__["BWABaseTemplate"], {
    className: "page-help"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAHeading"], {
    level: "h2",
    size: 0
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Help', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "clouds"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-intro",
    style: {
      background: 'url("images/white-triangle.svg") center bottom no-repeat'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "chat-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    className: "chat-button",
    href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_8__["addUtmParams"])('https://helpchat.bluehost.com/', {
      utm_content: 'help_chat_button',
      utm_term: 'Chat with us'
    }),
    isPrimary: true,
    rel: "noopener noreferrer",
    target: "_blank"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Chat with us', 'bluehost-wordpress-plugin'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["ChatIcon"], {
    className: "chat-icon"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "section-title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('From DIY to full-service help', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "section-description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Feeling stuck? Choose how much help you\'d like, from how-to articles to your own website concierge.', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-blue-sky"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["BlueSkyLogo"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "screen-reader-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Blue Sky', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-block__media"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "react-player-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "react-player",
    height: "100%",
    light: _app_assets_blue_sky_group_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    playIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null),
    url: "https://www.youtube.com/embed/QEir4T7VweY",
    width: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-block__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-block__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Get your own website guide', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-block__description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Our WordPress experts can jump in wherever you need help, teaching you how to build, grow, and maintain your website.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    className: "media-block__button",
    href: "#/marketplace/services/blue-sky",
    isSecondary: true,
    onClick: function onClick() {
      window.scrollTo(0, 0);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Get Blue Sky', 'bluehost-wordpress-plugin')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-featured-services"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Let us do it for you', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "section-description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('What can we help you achieve today?', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-services"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-services-list"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["Computer"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Full-Service Website', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Ongoing marketing assistance and design', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    className: "featured-service__button",
    "data-testid": "full-service",
    href: "https://www.bluehost.com/solutions/full-service#full-service",
    isSecondary: true,
    utmContent: "help_full_service"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Learn more', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["SEO"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('SEO Services', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fine tune your website for better visibility', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    className: "featured-service__button",
    "data-testid": "seo-services",
    href: "https://www.bluehost.com/solutions/full-service#seo-services",
    isSecondary: true,
    utmContent: "help_seo_services"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Learn more', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["CallCenter"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Our experts can help', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "featured-service__description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Consult with an expert to figure out the best next steps.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    className: "featured-service__button",
    href: "https://www.bluehost.com/solutions/full-service#request-form",
    isSecondary: true,
    utmContent: "help_request_consultation"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Request a consultation', 'bluehost-wordpress-plugin')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-resources"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('DIY', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "section-description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Checkout our resource center for helpful how-to articles and guides.', 'bluehost-wordpress-plugin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "resources-search"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_search__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_components_atoms__WEBPACK_IMPORTED_MODULE_2__["BWAButton"], {
    href: "https://www.bluehost.com/resources/",
    isSecondary: true,
    utmContent: "help_visit_resource_center"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Visit resource center', 'bluehost-wordpress-plugin'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", {
    className: "help-footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "call-to-action",
    href: "tel:8884014678"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["Call"], {
    className: "footer-icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('888-401-4678', 'bluehost-wordpress-plugin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "call-to-action",
    href: Object(_app_functions__WEBPACK_IMPORTED_MODULE_8__["addUtmParams"])('https://helpchat.bluehost.com/', {
      utm_content: 'help_chat_link',
      utm_term: 'Chat with us'
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_3__["ChatIcon"], {
    className: "footer-icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Chat with us', 'bluehost-wordpress-plugin')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "./src/app/pages/help/search-filters/ExclusiveGroup.js":
/*!*************************************************************!*\
  !*** ./src/app/pages/help/search-filters/ExclusiveGroup.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExclusiveGroup; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExclusiveOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExclusiveOption */ "./src/app/pages/help/search-filters/ExclusiveOption.js");




function ExclusiveGroup(_ref) {
  var className = _ref.className,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      group = _ref.group,
      _onChange = _ref.onChange,
      options = _ref.options;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "".concat(className, "__group")
  }, options.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ExclusiveOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className,
      group: group,
      isChecked: selected === option,
      key: index,
      value: option,
      onChange: function onChange(value) {
        setSelected(selected !== value ? value : '');

        _onChange(value);
      }
    });
  }));
}

/***/ }),

/***/ "./src/app/pages/help/search-filters/ExclusiveOption.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/help/search-filters/ExclusiveOption.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExclusiveOption; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function ExclusiveOption(_ref) {
  var _classnames;

  var className = _ref.className,
      group = _ref.group,
      isChecked = _ref.isChecked,
      _onChange = _ref.onChange,
      value = _ref.value;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {
      'btn': true,
      'btn-secondary': true
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "".concat(className, "__option"), true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, '--is-active', isChecked), _classnames))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    checked: isChecked,
    className: "".concat(className, "__option-field"),
    name: group,
    onClick: function onClick() {
      if (isChecked) {
        _onChange('');
      }
    },
    onChange: function onChange() {
      _onChange(value);
    },
    type: "radio",
    value: value
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "".concat(className, "__option-field-label")
  }, value));
}

/***/ }),

/***/ "./src/app/pages/help/search-filters/index.js":
/*!****************************************************!*\
  !*** ./src/app/pages/help/search-filters/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchFilters; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExclusiveGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExclusiveGroup */ "./src/app/pages/help/search-filters/ExclusiveGroup.js");


function SearchFilters(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'resources-search-filters' : _ref$className,
      defaultValue = _ref.defaultValue,
      group = _ref.group,
      label = _ref.label,
      onChange = _ref.onChange,
      options = _ref.options;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "".concat(className, "__label screen-reader-text")
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ExclusiveGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    defaultValue: defaultValue,
    group: group,
    onChange: onChange,
    options: options
  }));
}

/***/ }),

/***/ "./src/app/pages/help/search-form/index.js":
/*!*************************************************!*\
  !*** ./src/app/pages/help/search-form/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/assets */ "./src/app/assets/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");







var SearchBox = function SearchBox(_ref) {
  var defaultRefinement = _ref.defaultRefinement,
      onSubmit = _ref.onSubmit,
      refine = _ref.refine;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultRefinement),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    refine(query);
    onSubmit(query);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", {
    action: "",
    className: "resources-search-form",
    noValidate: true,
    onSubmit: submitHandler,
    role: "search"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search Resources', 'bluehost-wordpress-plugin'),
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search', 'bluehost-wordpress-plugin')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    type: "submit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_app_assets__WEBPACK_IMPORTED_MODULE_2__["SearchIcon"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "screen-reader-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search Resources', 'bluehost-wordpress-plugin'))));
};

var SearchForm = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__["connectSearchBox"])(SearchBox);
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./src/app/pages/help/search-results/index.js":
/*!****************************************************!*\
  !*** ./src/app/pages/help/search-results/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);





function getExcerpt(content, charLength) {
  if (content.length <= charLength) {
    return content;
  }

  return content.substr(0, charLength) + '...';
}

var More = function More(_ref) {
  var hasMore = _ref.hasMore,
      onClick = _ref.onClick;

  if (!hasMore) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "components-button bluehost is-secondary is-link",
    onClick: onClick
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('More', 'bluehost-wordpress-plugin')));
};

var Hits = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectInfiniteHits"])(function (_ref2) {
  var hasMore = _ref2.hasMore,
      hits = _ref2.hits,
      refineNext = _ref2.refineNext;

  if (!hits.length) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "resource-search-no-results"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('There were no results for your query. Please try again.', 'bluehost-wordpress-plugin'));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "resources-search-results"
  }, hits.map(function (_ref3, index) {
    var permalink = _ref3.permalink,
        content = _ref3.content,
        title = _ref3.post_title;
    var url = new URL(permalink);
    url.host = 'bluehost.com';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "resource-card",
      href: url,
      key: index,
      rel: "noreferrer noopener",
      target: "_blank"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resource-card__title",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resource-card__description",
      dangerouslySetInnerHTML: {
        __html: getExcerpt(content, 100)
      }
    }));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(More, {
    hasMore: false,
    onClick: refineNext
  }));
});
var SearchResults = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Hits, null);
});
/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./src/app/pages/help/search.js":
/*!**************************************!*\
  !*** ./src/app/pages/help/search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _search_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-filters */ "./src/app/pages/help/search-filters/index.js");
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form */ "./src/app/pages/help/search-form/index.js");
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-results */ "./src/app/pages/help/search-results/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/functions */ "./src/app/functions/index.js");











var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_7___default()('AVE0JWZU92', // ALGOLIA_APP_ID,
'92e960b820b03fb532d5f440191ec0fe' // ALGOLIA_SEARCH_KEY
);
var sessionStorageCache = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["createInfiniteHitsSessionStorageCache"])();

var SearchPage = function SearchPage() {
  var isFirstRun = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    query: searchQuery
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      searchState = _useState4[0],
      setSearchState = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(['post_type:post']),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      filters = _useState6[0],
      setFilters = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('Websites'),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      category = _useState8[0],
      setCategory = _useState8[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (category) {
      setFilters(['post_type:post', "taxonomies.category:".concat(category)]);
    } else {
      setFilters(['post_type:post']);
    }
  }, [category]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // if (isFirstRun.current) {
    // 	isFirstRun.current = false;
    // 	return;
    // }
    Object(_app_functions__WEBPACK_IMPORTED_MODULE_9__["sendEvent"])({
      action: 'resource-center-search',
      data: {
        query: {
          text: searchQuery,
          category: category
        }
      }
    });
  }, [searchQuery, category]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["InstantSearch"], {
    indexName: 'bh_rc_searchable_posts' // ALGOLIA_INDEX_NAME
    ,
    searchClient: searchClient,
    searchState: searchState,
    onSearchStateChange: setSearchState
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["Configure"], {
    hitsPerPage: 6,
    filters: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["join"])(filters, ' AND '),
    distinct: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_search_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    defaultRefinement: searchQuery,
    onSubmit: function onSubmit(value) {
      return setSearchQuery(value);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_search_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultValue: category,
    group: "taxonomies.user_level_tax",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Filter by', 'bluehost-wordpress-plugin'),
    onChange: function onChange(value) {
      return setCategory(value);
    },
    options: ['Websites', 'Marketing', 'Business']
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_search_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cache: sessionStorageCache
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ }),

/***/ "./src/app/pages/help/style.scss":
/*!***************************************!*\
  !*** ./src/app/pages/help/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6-f5016b3bd3cfbf1d73a4.js.map