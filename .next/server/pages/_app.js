(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./context/theme.ts

const ThemeContext = /*#__PURE__*/(0,external_react_.createContext)({
  theme: 'light',
  setTheme: () => null
});
;// CONCATENATED MODULE: ./context/index.ts

;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/common/Layouts/index.tsx



 // import { AreaChartOutlined, GoldenFilled } from '@ant-design/icons';





const navItems = [{
  name: 'Home',
  link: '/',
  icon: /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {})
}, {
  name: 'Projects',
  link: '/projects',
  icon: /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {})
}, {
  name: 'Hackathons',
  link: '/hackathons',
  icon: /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {})
}, {
  name: 'Certificates',
  link: '/certificates',
  icon: /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {})
} // { name: 'E-BAR', link: '/eBar', icon: <MenuIcon /> },
];
function AppLayout() {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: external_clsx_default()('fixed top-0 z-50', 'bg-gray-900', 'w-[100%] xl:px-56 lg:px-36 px-8 py-4 flex flex-row items-center justify-between shadow-md'),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "md:flex hidden items-center",
        children: navItems.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
              name: item.name,
              icon: item.icon,
              link: item.link,
              route: router.asPath
            }, index)
          }, item.name + index);
        })
      })]
    })
  });
}
const Message = props => {
  const {
    content,
    open
  } = props;
  return /*#__PURE__*/_jsx("div", {
    className: clsx(`absolute bottom-3.5 left-3.5 bg-purple-300 px-10 py-4 rounded-md`, 'ease-out duration-300', open ? 'scale-100' : 'scale-0'),
    children: content
  });
};
const Logo = () => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
  href: "/",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mr-4 md:py-0 h-10 cursor-pointer",
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/logos/ac.png",
      className: "h-10",
      alt: ""
    })
  })
});
const NavbarItem = ({
  name,
  link,
  route
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: link,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()('sm:px-4 px-2 py-2 relative cursor-pointer'),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()({
          'text-white': link !== route
        }, {
          'text-primary': link === route
        }, 'gap-2 flex items-center'),
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: external_clsx_default()('text-sm font-bold text-center'),
          children: name
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { Provider } from 'next-auth/client';











/* import { Images } from 'consts'; */





function MyApp({
  Component,
  pageProps
}) {
  const [theme, setTheme] = external_react_.useState('light');
  const queryClientRef = external_react_.useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new external_react_query_namespaceObject.QueryClient();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Andres Contreras Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Andres Contreras  Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#e68fa7"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#e68fa7"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/logos/acIcon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Andres Contreras  Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Andres Contreras  Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:width",
        content: "300"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:height",
        content: "200"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Andres Contreras  Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Andres Contreras  Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_query_namespaceObject.QueryClientProvider, {
      client: queryClientRef.current,
      children: /*#__PURE__*/jsx_runtime_.jsx(ThemeContext.Provider, {
        value: {
          theme,
          setTheme
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: external_clsx_default()('font-montserrat min-h-screen text-gray-800', 'transition-colors duration-1000', theme),
          children: [/*#__PURE__*/jsx_runtime_.jsx(AppLayout, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
        })
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,49], () => (__webpack_exec__(866)));
module.exports = __webpack_exports__;

})();