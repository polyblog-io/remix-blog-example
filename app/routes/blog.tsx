import { Outlet } from "remix";

export default function BlogsRoute() {
  return (
    <div>
      <h1 className="fw-bold text-info text-center mb-3 mt-2">Blogs</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
