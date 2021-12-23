import {
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
function BlogPage() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "row row-cols-1 row-cols-md-2 g-4"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id,
    className: "col-md-6 col-lg-4 col-12"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.title,
    className: "text-decoration-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card h-100 shadow"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.imgUrl,
    className: "card-img-top",
    alt: "image here"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "card-title my-3 text-dark"
  }, post.title), /* @__PURE__ */ React.createElement("h5", {
    className: "my-3 text-dark"
  }, post.shortDesc), /* @__PURE__ */ React.createElement("p", {
    className: "text-dark"
  }, "Posted by ", post.authorName, " on ", post.publishDate))))))));
}
export {
  BlogPage as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-DCEEK5AE.js.map
