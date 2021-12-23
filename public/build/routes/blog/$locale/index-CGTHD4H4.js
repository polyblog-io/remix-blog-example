import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-ZCKILZKY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\projects\waiterio\my-remix-blog\app\routes\blog\$locale\index.jsx?browser
init_react();

// app/routes/blog/$locale/index.jsx
init_react();
function Blog({ articles }) {
  const article = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Blog"), articles?.map((article2) => /* @__PURE__ */ React.createElement(Link, {
    key: article2._id,
    href: article2.slugLocalized
  }, /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("div", null, article2.title), /* @__PURE__ */ React.createElement("div", null, article2.subtitle)))));
}
export {
  Blog as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-CGTHD4H4.js.map
