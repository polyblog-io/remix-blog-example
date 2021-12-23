import {
  require_dist
} from "/build/_shared/chunk-3K2U2AZO.js";
import {
  require_main2 as require_main
} from "/build/_shared/chunk-A7HUMUCP.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\projects\remix-blog-example\app\routes\blog\$locale\index.jsx?browser
init_react();

// app/routes/blog/$locale/index.jsx
init_react();
var import_react = __toModule(require_react());
var import_polyblog_js_client = __toModule(require_dist());
var import_react_router_dom = __toModule(require_main());
var HomePage = () => {
  const { locale = "en" } = (0, import_react_router_dom.useParams)();
  const [articles, setArticles] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (articles)
      return;
    const fetchArticles = async () => {
      let articles2 = await (0, import_polyblog_js_client.getArticles)({
        organizationId: "c398463407b5c12f27f9aed4",
        project: "polyblog",
        locale,
        published: true,
        sortDirection: "DESC"
      });
      console.log({ articles: articles2 });
      setArticles(articles2);
    };
    fetchArticles();
  }, [articles, locale]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Blog"), /* @__PURE__ */ React.createElement("div", {
    className: "articles"
  }, articles?.map(({
    _id,
    locale: locale2,
    slug,
    coverUrl,
    title,
    author,
    creationTime,
    subtitle
  }) => /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: {
      pathname: `/${locale2}/${slug}`
    },
    key: _id,
    className: "articleLink"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "article",
    key: _id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "imgContainer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coverUrl,
    alt: title
  })), /* @__PURE__ */ React.createElement("div", {
    className: "articleBody"
  }, /* @__PURE__ */ React.createElement("span", null, author), " -", " ", /* @__PURE__ */ React.createElement("span", null, new Date(creationTime).toLocaleString(locale2, {
    dateStyle: "long"
  })), /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("p", null, subtitle)))))));
};
var locale_default = HomePage;
export {
  locale_default as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-AJZJIAWD.js.map
