import { useLoaderData } from "remix";
import { getPosts } from "~/getPosts";
import type { Post } from "~/Post";


export const loader = ({params}) => {
  const { locale, slug } = params

  const posts = getPosts(locale)
  const post = posts.filter(post => {
    console.log('title', post.title)
    console.log('slug', slug)
    return post.title === slug
  })[0]
  return post;
};

export default function PostPage() {
  const post = useLoaderData<Post>();
  return (
    <div>
      <p>{post.title}</p>
      <p>
        {post.shortDesc}
      </p>
    </div>
  );
}
