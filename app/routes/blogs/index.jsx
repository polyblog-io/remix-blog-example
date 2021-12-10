import { useLoaderData, json, Link } from "remix";

const blogs = [
  {
    id: 1,
    title: "22 Brilliant Content Marketing Tips",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp",
    shortDesc: "Taking your content marketing to the next level",
    authorName: "Vindya Vithana",
    publishDate: "November 30, 2021",
  },
  {
    id: 2,
    title: "10 Killer Content Marketing Examples To Inspire You",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-examples-b6079beb-640w.webp",
    shortDesc: "Some great examples of successful content marketing",
    authorName: "Catherine James",
    publishDate: "November 12, 2021",
  },
  {
    id: 3,
    title: "What is Content Marketing? [A Comprehensive Beginner's Guide]",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-what-is-content-marketing-d8f9acd6-640w.webp",
    shortDesc: "Understand exactly what content marketing means",
    authorName: "Vindya Vithana",
    publishDate: "November 11, 2021",
  },
  {
    id: 4,
    title: "Content Marketing Types: The Ammo for World Domination",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-types-19ec9633-640w.webp",
    shortDesc: "Learn about the various types of content marketing",
    authorName: "Michael Elkins",
    publishDate: "October 27, 2021",
  },
  {
    id: 5,
    title: "12 Ways Content Marketing Benefits Your Business",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-benefits-c5433353-640w.webp",
    shortDesc: "Why content marketing is important for businesses?",
    authorName: "Catherine James",
    publishDate: "October 25, 2021",
  },
  {
    id: 6,
    title: "How to Create a Killer Content Marketing Strategy [10 Steps]",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-strategy-073689ff-640w.webp",
    shortDesc: "A solid strategy will improve your content marketing",
    authorName: "Vindya Vithana",
    publishDate: "October 25, 2021",
  },
  {
    id: 7,
    title: "How Content Marketing Is Changing The Game",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-is-changing-the-game-619c884c-640w.webp",
    shortDesc: "All you need to know about content marketing",
    authorName: "Abhi Chatterjee",
    publishDate: "September 3, 2021",
  },
];

export default function Blogs() {
  return (
    <div>
      <h1 className="fw-bold text-info text-center mb-5 mt-2">Blogs</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {blogs.map((blog) => (
          <div class="col-md-4">
            <div class="card h-100">
              <img src={blog.imgUrl} class="card-img-top" alt="image here" />
              <div class="card-body">
                <h3 class="card-title">{blog.title}</h3>
                <h5>{blog.shortDesc}</h5>
                <p>
                  Posted by {blog.authorName} on {blog.publishDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// // Loaders provide data to components and are only ever called on the server, so
// // you can connect to a database or run any server side code you want right next
// // to the component that renders it.
// // https://remix.run/api/conventions#loader
// export let loader = () => {
//   let data = {
//     resources: [
//       {
//         name: "Remix Docs",
//         url: "https://remix.run/docs",
//       },
//       {
//         name: "React Router Docs",
//         url: "https://reactrouter.com/docs",
//       },
//       {
//         name: "Remix Discord",
//         url: "https://discord.gg/VBePs6d",
//       },
//     ],
//     demos: [
//       {
//         to: "demos/actions",
//         name: "Actions",
//       },
//       {
//         to: "demos/about",
//         name: "Nested Routes, CSS loading/unloading",
//       },
//       {
//         to: "demos/params",
//         name: "URL Params and Error Boundaries",
//       },
//     ],
//   };

//   // https://remix.run/api/remix#json
//   return json(data);
// };

// // https://remix.run/api/conventions#meta
// export let meta = () => {
//   return {
//     title: "Remix Starter",
//     description: "Welcome to remix!",
//   };
// };

// // https://remix.run/guides/routing#index-routes
// export default function Index() {
//   let data = useLoaderData();

//   return (
//     <div className="remix__page">
//       <main>
//         <h2>Welcome to Remix!</h2>
//         <p>We're stoked that you're here. 🥳</p>
//         <p>
//           Feel free to take a look around the code to see how Remix does things,
//           it might be a bit different than what you’re used to. When you're
//           ready to dive deeper, we've got plenty of resources to get you
//           up-and-running quickly.
//         </p>
//         <p>
//           Check out all the demos in this starter, and then just delete the{" "}
//           <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
//           folders when you're ready to turn this into your next project.
//         </p>
//       </main>
//       <aside>
//         <h2>Demos In This App</h2>
//         <ul>
//           {data.demos.map((demo) => (
//             <li key={demo.to} className="remix__page__resource">
//               <Link to={demo.to} prefetch="intent">
//                 {demo.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <h2>Resources</h2>
//         <ul>
//           {data.resources.map((resource) => (
//             <li key={resource.url} className="remix__page__resource">
//               <a href={resource.url}>{resource.name}</a>
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// }
