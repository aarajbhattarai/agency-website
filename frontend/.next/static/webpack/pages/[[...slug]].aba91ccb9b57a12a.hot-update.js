"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/elements/image.js":
/*!**************************************!*\
  !*** ./components/elements/image.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/media */ \"./utils/media.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/types */ \"./utils/types.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar NextImage = function(_param) {\n    var media = _param.media, props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_param, [\n        \"media\"\n    ]);\n    var _attributes = media.data.attributes, url = _attributes.url, alternativeText = _attributes.alternativeText, width = _attributes.width, height = _attributes.height;\n    console.log(media.data.attributes);\n    console.log(\"URL\", url);\n    var loader = function(param) {\n        var src = param.src;\n        // return getStrapiMedia(src)+\"h=\"+ height+\"w=\"+width\n        return (0,utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(src);\n    };\n    // The image has a fixed width and height\n    if (props.width && props.height) {\n        return(// <Image loader={loader} src={url} alt={alternativeText || \"Ideal Tours and Travels\"} {...props} />\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            loader: loader,\n            src: url,\n            alt: \"\",\n            height: props.height,\n            width: props.width\n        }, props), void 0, false, {\n            fileName: \"/Users/aaraj/agency-website/frontend/components/elements/image.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this));\n    }\n    // The image is responsive\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        loader: loader,\n        layout: \"responsive\",\n        width: width || \"100%\",\n        height: height || \"100%\",\n        objectFit: \"contain\",\n        src: url,\n        alt: alternativeText || \"\",\n        media: media.data.attributes\n    }, void 0, false, {\n        fileName: \"/Users/aaraj/agency-website/frontend/components/elements/image.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_c = NextImage;\n(next_image__WEBPACK_IMPORTED_MODULE_2___default().propTypes) = {\n    media: utils_types__WEBPACK_IMPORTED_MODULE_4__.mediaPropTypes.isRequired,\n    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NextImage);\nvar _c;\n$RefreshReg$(_c, \"NextImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL2ltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDZDtBQUNJO0FBQ1U7QUFFNUMsSUFBTUksU0FBUyxHQUFHLGlCQUF5QjtRQUF0QkMsS0FBSyxVQUFMQSxLQUFLLEVBQUtDLEtBQUs7UUFBZkQsT0FBSzs7SUFDeEIsSUFBZ0RBLFdBQXFCLEdBQXJCQSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsVUFBVSxFQUE3REMsR0FBRyxHQUFxQ0osV0FBcUIsQ0FBN0RJLEdBQUcsRUFBRUMsZUFBZSxHQUFvQkwsV0FBcUIsQ0FBeERLLGVBQWUsRUFBRUMsS0FBSyxHQUFhTixXQUFxQixDQUF2Q00sS0FBSyxFQUFFQyxNQUFNLEdBQUtQLFdBQXFCLENBQWhDTyxNQUFNO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUNsQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFDTCxHQUFHLENBQUM7SUFDdEIsSUFBTU0sTUFBTSxHQUFHLGdCQUFZO1lBQVRDLEdBQUcsU0FBSEEsR0FBRztRQUNuQixxREFBcUQ7UUFDckQsT0FBT2hCLDJEQUFjLENBQUNnQixHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxJQUFJVixLQUFLLENBQUNLLEtBQUssSUFBSUwsS0FBSyxDQUFDTSxNQUFNLEVBQUU7UUFDL0IsT0FDRSxvR0FBb0c7c0JBQ3BHLDhEQUFDWCxtREFBSztZQUFDYyxNQUFNLEVBQUVBLE1BQU07WUFBRUMsR0FBRyxFQUFFUCxHQUFHO1lBQUVRLEdBQUcsRUFBQyxFQUFFO1lBQUNMLE1BQU0sRUFBRU4sS0FBSyxDQUFDTSxNQUFNO1lBQUVELEtBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFLO1dBQU1MLEtBQUs7Ozs7aUJBQUksRUFFaEc7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLHFCQUNFLDhEQUFDTCxtREFBSztRQUNKYyxNQUFNLEVBQUVBLE1BQU07UUFDZEcsTUFBTSxFQUFDLFlBQVk7UUFDbkJQLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU07UUFDdEJDLE1BQU0sRUFBRUEsTUFBTSxJQUFJLE1BQU07UUFDeEJPLFNBQVMsRUFBQyxTQUFTO1FBQ25CSCxHQUFHLEVBQUVQLEdBQUc7UUFDUlEsR0FBRyxFQUFFUCxlQUFlLElBQUksRUFBRTtRQUMxQkwsS0FBSyxFQUFFQSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsVUFBVTs7Ozs7YUFDNUIsQ0FDSDtBQUNILENBQUM7QUEvQktKLEtBQUFBLFNBQVM7QUFpQ2ZILDZEQUFlLEdBQUc7SUFDaEJJLEtBQUssRUFBRUYsa0VBQXlCO0lBQ2hDbUIsU0FBUyxFQUFFcEIsMERBQWdCO0NBQzVCO0FBRUQsK0RBQWVFLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9pbWFnZS5qcz84ZTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcInV0aWxzL21lZGlhXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCB7IG1lZGlhUHJvcFR5cGVzIH0gZnJvbSBcInV0aWxzL3R5cGVzXCJcblxuY29uc3QgTmV4dEltYWdlID0gKHsgbWVkaWEsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXG4gIGNvbnNvbGUubG9nKG1lZGlhLmRhdGEuYXR0cmlidXRlcylcbiAgY29uc29sZS5sb2coXCJVUkxcIix1cmwpXG4gIGNvbnN0IGxvYWRlciA9ICh7IHNyY30pID0+IHtcbiAgICAvLyByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoc3JjKStcImg9XCIrIGhlaWdodCtcInc9XCIrd2lkdGhcbiAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoc3JjKVxuICB9XG5cbiAgLy8gVGhlIGltYWdlIGhhcyBhIGZpeGVkIHdpZHRoIGFuZCBoZWlnaHRcbiAgaWYgKHByb3BzLndpZHRoICYmIHByb3BzLmhlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8SW1hZ2UgbG9hZGVyPXtsb2FkZXJ9IHNyYz17dXJsfSBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCBcIklkZWFsIFRvdXJzIGFuZCBUcmF2ZWxzXCJ9IHsuLi5wcm9wc30gLz5cbiAgICAgIDxJbWFnZSBsb2FkZXI9e2xvYWRlcn0gc3JjPXt1cmx9IGFsdD1cIlwiIGhlaWdodD17cHJvcHMuaGVpZ2h0fSB3aWR0aD17cHJvcHMud2lkdGh9IHsuLi5wcm9wc30gLz5cbiAgICAgIFxuICAgIClcbiAgfVxuXG4gIC8vIFRoZSBpbWFnZSBpcyByZXNwb25zaXZlXG4gIHJldHVybiAoXG4gICAgPEltYWdlXG4gICAgICBsb2FkZXI9e2xvYWRlcn1cbiAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgd2lkdGg9e3dpZHRoIHx8IFwiMTAwJVwifVxuICAgICAgaGVpZ2h0PXtoZWlnaHQgfHwgXCIxMDAlXCJ9XG4gICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIHNyYz17dXJsfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAgIG1lZGlhPXttZWRpYS5kYXRhLmF0dHJpYnV0ZXN9XG4gICAgLz5cbiAgKVxufVxuXG5JbWFnZS5wcm9wVHlwZXMgPSB7XG4gIG1lZGlhOiBtZWRpYVByb3BUeXBlcy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRJbWFnZVxuIl0sIm5hbWVzIjpbImdldFN0cmFwaU1lZGlhIiwiSW1hZ2UiLCJQcm9wVHlwZXMiLCJtZWRpYVByb3BUeXBlcyIsIk5leHRJbWFnZSIsIm1lZGlhIiwicHJvcHMiLCJkYXRhIiwiYXR0cmlidXRlcyIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImxvYWRlciIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/image.js\n"));

/***/ })

});