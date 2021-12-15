import { useLoaderData, Link } from "remix";

import { getBlogs } from "~/blogEn";
import type { Post } from "~/blogEn";

export const loader = () => {
  return getBlogs();
};

export default function Blogs() {
  const blogs = useLoaderData<Post[]>();
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-4 col-12">
            <Link to={blog.title} className="text-decoration-none">
              <div className="card h-100 shadow">
                <img
                  src={blog.imgUrl}
                  className="card-img-top"
                  alt="image here"
                />
                <div className="card-body">
                  <h3 className="card-title my-3 text-dark">{blog.title}</h3>
                  <h5 className="my-3 text-dark">{blog.shortDesc}</h5>
                  <p className="text-dark">
                    Posted by {blog.authorName} on {blog.publishDate}
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
