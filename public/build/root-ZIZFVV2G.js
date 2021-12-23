import {
  Link,
  Links,
  LiveReload,
  Meta,
  import_react_router_dom
} from "/build/_shared/chunk-YU36HJ2D.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\projects\waiterio\my-remix-blog\app\root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-Q7ETCNL5.css";

// app/root.jsx
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
    crossOrigin: "anonymous"
  }
];
var meta = () => {
  const description = "A cool blog builds with Polyblog Api";
  const keywords = "remix, react, javascript, polyblog";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Welcome | My Blog")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null, /* @__PURE__ */ React.createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
    crossOrigin: "anonymous"
  })));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo"
  }, "Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts"
  }, "Posts")))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message)));
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-ZIZFVV2G.js.map