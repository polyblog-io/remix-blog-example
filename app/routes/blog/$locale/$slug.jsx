// import { getArticles } from '@polyblog/polyblog-js-client';

// export async function loader({ locales }) {
//   let articles = await getArticles({
//     organizationId: 'c398463407b5c12f27f9aed4',
//     project: 'polyblog',
//     published: true,
//   });

//   articles = articles.filter(({ locale }) => locales.includes(locale));

//   const paths = articles.map(article => ({
//     locale: article.locale,
//     params: { slug: article.slugLocalized },
//   }));

//   return { paths, fallback: 'blocking' };
// }

// export async function loader({ locale, params }) {
//   // console.log('getStaticProps', params)

//   const { slug } = params;
//   const articles = await getArticles({
//     organizationId: 'c398463407b5c12f27f9aed4',
//     project: 'polyblog',
//     locale,
//     slugLocalized: slug,
//   });

//   return {
//     props: {
//       article: articles[0],
//     },
//   };
// }

// export default function Article({ article }) {
//   return (
//     <div>
//       {article && (
//         <div>
//           <h1>{article.title}</h1>
//           <div>{article.subtitle}</div>
//           <div dangerouslySetInnerHTML={{ __html: article.content }} />
//         </div>
//       )}
//     </div>
//   );
// }
