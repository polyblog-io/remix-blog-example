import {
  Link
} from "/build/_shared/chunk-YU36HJ2D.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\projects\waiterio\my-remix-blog\app\routes\blog\$locale\index.jsx?browser
init_react();

// app/routes/blog/$locale/index.jsx
init_react();
function Blog({ articles }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Blog"), articles?.map((article) => /* @__PURE__ */ React.createElement(Link, {
    key: article._id,
    href: article.slugLocalized
  }, /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("div", null, article.title), /* @__PURE__ */ React.createElement("div", null, article.subtitle)))));
}
export {
  Blog as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-ATAYZRSB.js.map
