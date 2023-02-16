import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import stylesUrl from "~/styles/jokes.css";
import { dbMySql } from "~/utils/mysql/db.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async () => {
  return json({
    jokeListItems: await dbMySql.film.findMany({
      orderBy: { release_year: "desc" },
    }),
  });
  //   return json({
  //     jokeListItems: await db.joke.findMany({
  //       take: 5,
  //       select: { id: true, name: true },
  //       orderBy: { createdAt: "desc" },
  //     }),
  //   });
};

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <p>Film List!</p>
            <ul>
              {data.jokeListItems.map((joke) => (
                <li key={joke.film_id}>
                  <Link to={joke.title}>{joke.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
