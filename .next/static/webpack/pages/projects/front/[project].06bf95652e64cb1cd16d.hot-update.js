"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/front/[project]",{

/***/ "./pages/projects/front/[project].tsx":
/*!********************************************!*\
  !*** ./pages/projects/front/[project].tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var frontprojects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontprojects.json */ \"./frontprojects.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/andres/Documentos/Portfolio/pages/projects/front/[project].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      query = _useRouter.query;\n\n  var project = frontprojects_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (contract, i) {\n    var _query$project;\n\n    return contract.link.includes(((_query$project = query.project) === null || _query$project === void 0 ? void 0 : _query$project.toString()) || '');\n  })[0];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      className: \"text-center text-white text-4xl font-bold\",\n      children: project.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n      src: project.image,\n      className: \"md:w-2/3 rounded-xl\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n      href: project.code,\n      target: \"_blank\",\n      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__.default)('text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'),\n      children: \"Code\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"flex flex-col gap-8 items-center justify-center w-full\",\n      children: [' ', project.codeDescription.paragraphs.map(function (paragraph, i) {\n        return paragraph.subTexts ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex flex-col gap-4 w-full\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n            className: \"text-lg text-white text-justify\",\n            children: paragraph.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 8\n          }, _this), paragraph.subTexts.map(function (text, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              className: \"text-md text-white text-justify pl-4\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n                className: \"font-bold\",\n                children: [i + 1, \" -\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 10\n              }, _this), \" \", text]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 9\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          className: \"text-lg text-white text-justify w-full\",\n          children: paragraph.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Project, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9mcm9udC9bcHJvamVjdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDckIsbUJBQWtCRixzREFBUyxFQUEzQjtBQUFBLE1BQVFHLEtBQVIsY0FBUUEsS0FBUjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLHNEQUFBLENBQWlCLFVBQUNPLFFBQUQsRUFBV0MsQ0FBWDtBQUFBOztBQUFBLFdBQ2hDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsUUFBZCxDQUF1QixtQkFBQU4sS0FBSyxDQUFDQyxPQUFOLGtFQUFlTSxRQUFmLE9BQTZCLEVBQXBELENBRGdDO0FBQUEsR0FBakIsRUFFZCxDQUZjLENBQWhCO0FBR0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsZ0ZBQWY7QUFBQSw0QkFDQztBQUFJLGVBQVMsRUFBQywyQ0FBZDtBQUFBLGdCQUNFTixPQUFPLENBQUNPO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFBSyxTQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsS0FBbEI7QUFBeUIsZUFBUyxFQUFDLHFCQUFuQztBQUF5RCxTQUFHLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBS0M7QUFDQyxVQUFJLEVBQUdSLE9BQUQsQ0FBaUJTLElBRHhCO0FBRUMsWUFBTSxFQUFDLFFBRlI7QUFHQyxlQUFTLEVBQUVmLDZDQUFJLENBQ2QsdUtBRGMsQ0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQWNDO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUEsaUJBQ0UsR0FERixFQUVFTSxPQUFPLENBQUNVLGVBQVIsQ0FBd0JDLFVBQXhCLENBQW1DQyxHQUFuQyxDQUF1QyxVQUFDQyxTQUFELEVBQVlWLENBQVosRUFBa0I7QUFDekQsZUFBT1UsU0FBUyxDQUFDQyxRQUFWLGdCQUNOO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNDO0FBQUkscUJBQVMsRUFBQyxpQ0FBZDtBQUFBLHNCQUNFRCxTQUFTLENBQUNFO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxFQUlFRixTQUFTLENBQUNDLFFBQVYsQ0FBbUJGLEdBQW5CLENBQXVCLFVBQUNHLElBQUQsRUFBT1osQ0FBUDtBQUFBLGdDQUN2QjtBQUFHLHVCQUFTLEVBQUMsc0NBQWI7QUFBQSxzQ0FDQztBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQSwyQkFBNkJBLENBQUMsR0FBRyxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsT0FDK0NZLElBRC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEdUI7QUFBQSxXQUF2QixDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETSxnQkFZTjtBQUFHLG1CQUFTLEVBQUMsd0NBQWI7QUFBQSxvQkFDRUYsU0FBUyxDQUFDRTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkQ7QUFnQkEsT0FqQkEsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNDQSxDQTNDRDs7R0FBTWpCO1VBQ2FGOzs7S0FEYkU7QUE0Q04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvZnJvbnQvW3Byb2plY3RdLnRzeD8xMDMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGNvbnRyYWN0cyBmcm9tICdmcm9udHByb2plY3RzLmpzb24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuXHRjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgcHJvamVjdCA9IGNvbnRyYWN0cy5maWx0ZXIoKGNvbnRyYWN0LCBpKSA9PlxuXHRcdGNvbnRyYWN0LmxpbmsuaW5jbHVkZXMocXVlcnkucHJvamVjdD8udG9TdHJpbmcoKSB8fCAnJylcblx0KVswXTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweS0yOCBiZy1ncmF5LTkwMCBnYXAtNiBtZDpweC0zNiBweC0xMFwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC00eGwgZm9udC1ib2xkXCI+XG5cdFx0XHRcdHtwcm9qZWN0Lm5hbWV9XG5cdFx0XHQ8L2gxPlxuXHRcdFx0PGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGNsYXNzTmFtZT1cIm1kOnctMi8zIHJvdW5kZWQteGxcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj17KHByb2plY3QgYXMgYW55KS5jb2RlfVxuXHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXG5cdFx0XHRcdFx0J3RleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgcHgtNCBweS0yIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1wcmltYXJ5IGN1cnNvci1wb2ludGVyIHctNTQgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCdcblx0XHRcdFx0KX1cblx0XHRcdD5cblx0XHRcdFx0Q29kZVxuXHRcdFx0PC9hPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cblx0XHRcdFx0eycgJ31cblx0XHRcdFx0e3Byb2plY3QuY29kZURlc2NyaXB0aW9uLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgsIGkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyYWdyYXBoLnN1YlRleHRzID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXdoaXRlIHRleHQtanVzdGlmeVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtwYXJhZ3JhcGgudGV4dH1cblx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0e3BhcmFncmFwaC5zdWJUZXh0cy5tYXAoKHRleHQsIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5IHBsLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntpICsgMX0gLTwvc3Bhbj4ge3RleHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHR7cGFyYWdyYXBoLnRleHR9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbImNsc3giLCJjb250cmFjdHMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlByb2plY3QiLCJxdWVyeSIsInByb2plY3QiLCJmaWx0ZXIiLCJjb250cmFjdCIsImkiLCJsaW5rIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsIm5hbWUiLCJpbWFnZSIsImNvZGUiLCJjb2RlRGVzY3JpcHRpb24iLCJwYXJhZ3JhcGhzIiwibWFwIiwicGFyYWdyYXBoIiwic3ViVGV4dHMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/front/[project].tsx\n");

/***/ })

});