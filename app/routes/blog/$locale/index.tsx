import { useLoaderData, Link } from "remix";

import { getPosts } from "~/getPosts";
import type { Post } from "~/Post";

export const loader = ({params}) => {
  const { locale } = params
  return getPosts(locale);
};

export default function BlogPage() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {posts.map(post => (
          <div key={post.id} className="col-md-6 col-lg-4 col-12">
            <Link to={post.title} className="text-decoration-none">
              <div className="card h-100 shadow">
                <img
                  src={post.imgUrl}
                  className="card-img-top"
                  alt="image here"
                />
                <div className="card-body">
                  <h3 className="card-title my-3 text-dark">{post.title}</h3>
                  <h5 className="my-3 text-dark">{post.shortDesc}</h5>
                  <p className="text-dark">
                    Posted by {post.authorName} on {post.publishDate}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
