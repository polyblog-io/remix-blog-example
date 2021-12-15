import { useLoaderData } from "remix";

export const loader = async ({ params }) => {
  return params.title;
};
export default function BlogTitle() {
  const title = useLoaderData();
  return (
    <div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
}
// export default function BlogRoute() {
//   return (
//     <div>
//       <p>Here's your blog:</p>
//       <p>
//         Why don't you find hippopotamuses hiding in trees? They're really good
//         at it.
//       </p>
//     </div>
//   );
// }
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useRouteData } from "remix";
// export async function load({ params }) {
//   let api = "https://api.github.com";
//   let res = await fetch(`${api}/users/${params.user}/gists`);
//   let gists = await res.json();
//   return { gists };
// }
// export default function GistsUser() {
//   let params = useParams();
//   let data = useRouteData();
//   return (
//     <div>
//       <h2>{params.user}’s Gists</h2>
//       {/* ... */}
//     </div>
//   );
// }
