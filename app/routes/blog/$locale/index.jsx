import { getArticles } from '@polyblog/polyblog-js-client';
import { useLoaderData, Link } from 'remix';

export const loader = async ({ params }) => {
  const locale = params.locale;
  let articles = await getArticles({
    organizationId: 'c398463407b5c12f27f9aed4',
    project: 'polyblog',
    published: true,
    locale,
  });

  return articles;
};

export default function BlogPage() {
  const article = useLoaderData();
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {article.map(
          ({
            _id,
            locale,
            slug,
            slugLocalized,
            coverUrl,
            title,
            author,
            creationTime,
            subtitle,
          }) => (
            <div key={_id} className="col-md-6 col-lg-4 col-12">
              <Link
                key={_id}
                to={`/blog/${locale}/${slugLocalized}`}
                className="text-decoration-none"
              >
                <div className="card h-100 shadow">
                  <img src={coverUrl} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h3 className="card-title my-3 text-dark">{title}</h3>
                    <h5 className="my-3 text-dark">{subtitle}</h5>
                    <p className="text-dark">
                      Posted by {author} on{' '}
                      {new Date(creationTime).toLocaleString(locale, {
                        dateStyle: 'long',
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ),
        )}
      </div>
    </>
  );
}
