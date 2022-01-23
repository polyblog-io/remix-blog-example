import { Outlet, LiveReload, Link, Links, Meta } from 'remix';
import globalStylesUrl from '~/styles/global.css';

export const links = () => [
  { rel: 'stylesheet', href: globalStylesUrl },

  // Bootstrap CSS CDN
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    integrity:
      'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
    crossOrigin: 'anonymous',
  },
];

export const meta = () => {
  const description = 'A multi-language blog built with Remix';
  const keywords = 'remix, react, javascript, polyblog';
  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>Blog</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}

        {/* Bootstrap JS CDN */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <Link
            className="navbar-brand text-color fw-bold"
            to="/"
            style={{ color: 'RGBA(0,0,0,.55)' }}
          >
            Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li class="nav-item">
                <Link to="/en" class="nav-link">
                  English
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/es" class="nav-link">
                  Español
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container p-4">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1 className="text-center">Error</h1>
        <p className="text-center">{error.message}</p>
      </Layout>
    </Document>
  );
}
