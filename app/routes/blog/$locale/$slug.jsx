import { getArticles } from '@polyblog/polyblog-js-client';
import { useLoaderData } from 'remix';

export const loader = async ({ params }) => {
  const { locale, slug } = params;
  console.log('locale', locale);
  console.log('slug', slug);

  const articles = await getArticles({
    organizationId: 'c398463407b5c12f27f9aed4',
    project: 'polyblog',
    locale,
    slugLocalized: slug,
  });

  console.log('Articles', articles);
  const article = articles?.[0];
  return article;
};

export default function PostPage() {
  const article = useLoaderData();
  return (
    <div>
      {article && (
        <>
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundImage: `url(${article?.coverUrl})`,
              backgroundSize: 'cover',
            }}
            className="mb-5"
          >
            <h2 className="text-center pt-5">{article?.title}</h2>
            <h4 className="text-center pt-3">{article?.subtitle}</h4>
            <p className="text-center">
              <i>
                Posted by <span>{article?.author}</span> on{' '}
                <span>
                  {new Date(article?.creationTime).toLocaleString({
                    dateStyle: 'long',
                  })}
                </span>
              </i>
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
          <span></span>
        </>
      )}
    </div>
  );
}
