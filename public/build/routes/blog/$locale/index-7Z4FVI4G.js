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
function Blog() {
  const articles = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Blog"), articles?.map(({
    _id,
    locale,
    slug,
    coverUrl,
    title,
    author,
    creationTime,
    subtitle
  }) => /* @__PURE__ */ React.createElement(Link, {
    key: _id,
    href: article.slugLocalized
  }, /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("div", null, title), /* @__PURE__ */ React.createElement("div", null, subtitle)))));
}
export {
  Blog as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-7Z4FVI4G.js.map
