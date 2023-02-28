import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { LiveReload } from "@remix-run/react";

import { dbMySql } from "~/utils/mysql/db.server";

export const loader = async () => {
  return json({
    films: await dbMySql.film.findMany({
      orderBy: { release_year: "desc" },
    }),
  });
};

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body className="bg-gray-100">
        <div className="">
          <header className="px-10 py-5">
            <div className="">
              <h1 className="home-link">
                <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
                  <span className="text-gray-600 logo-medium">
                    {"<-"} back to the J🤪KES
                  </span>
                </Link>
              </h1>
            </div>
          </header>
          <main className="p-10">
            <div className="">
              <div className="">
                <h2 className="text-3xl text-gray-600">Film List!</h2>

                {data.films.map((film) => (
                  <div
                    className="px-4 py-2 mt-8 duration-200 ease-in-out bg-gray-400 shadow-md hover:shadow-xl shadow-slate-800 hover:shadow-slate-800 hover:bg-gray-500"
                    key={film.film_id}
                  >
                    <h3 className="mb-2 text-2xl">{film.title}</h3>
                    <p>{film.description}</p>
                  </div>
                ))}
              </div>
              <div className="jokes-outlet">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
