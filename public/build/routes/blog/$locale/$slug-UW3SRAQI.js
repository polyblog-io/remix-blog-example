import {
  require_dist
} from "/build/_shared/chunk-3K2U2AZO.js";
import {
  require_main2 as require_main
} from "/build/_shared/chunk-VOADKNFO.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\projects\remix-blog-example\app\routes\blog\$locale\$slug.jsx?browser
init_react();

// app/routes/blog/$locale/$slug.jsx
init_react();
var import_polyblog_js_client = __toModule(require_dist());
var import_react = __toModule(require_react());
var import_react_router = __toModule(require_main());
var ArticlePage = () => {
  const { locale, slug } = (0, import_react_router.useParams)();
  const [article, setArticle] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (article)
      return;
    const fetchArticles = async () => {
      let articles = await (0, import_polyblog_js_client.getArticles)({
        organizationId: "c398463407b5c12f27f9aed4",
        project: "polyblog",
        locale,
        slugLocalized: slug
      });
      console.log({ articles });
      let articleArticle = articles?.[0];
      setArticle(articleArticle);
    };
    fetchArticles();
  }, [article, locale, slug]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "article"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogTop"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogHeader"
  }, /* @__PURE__ */ React.createElement(import_react_router.Link, {
    className: "link",
    to: `/${locale}`
  }, /* @__PURE__ */ React.createElement("h3", null, "Blog"))), article && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    src: article?.coverUrl,
    alt: article?.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogHeaderOverlay"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogHero"
  }, /* @__PURE__ */ React.createElement("h1", null, article?.title), /* @__PURE__ */ React.createElement("h3", null, article?.subtitle), /* @__PURE__ */ React.createElement("i", null, "Posted by ", /* @__PURE__ */ React.createElement("span", null, article?.author), " on", " ", /* @__PURE__ */ React.createElement("span", null, new Date(article?.creationTime).toLocaleString(locale, {
    dateStyle: "long"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogBody"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "articleBlogContent",
    dangerouslySetInnerHTML: { __html: article?.content }
  })));
};
var slug_default = ArticlePage;
export {
  slug_default as default
};
//# sourceMappingURL=/build/routes/blog/$locale/$slug-UW3SRAQI.js.map
