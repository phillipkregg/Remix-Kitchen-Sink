import { json } from '@remix-run/node'
import { LiveReload, Outlet, useLoaderData } from '@remix-run/react'
import type { Film } from '~/types/Film'

import { dbMySql } from '~/utils/mysql/db.server'

export const loader = async () => {
  const films: Film[] = await dbMySql.film.findMany({
    orderBy: { release_year: 'desc' },
  })
  return json({ films })
}

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>MySql Prisma Client</title>
      </head>
      <body>
        <div className="">
          <main className="px-10">
            <div className="">
              <div className="">
                <h2 className="text-3xl text-gray-600">Film List!</h2>

                {data.films.map((film) => (
                  <div
                    className="px-4 py-2 mt-8 duration-200 ease-in-out bg-gray-400 shadow-md hover:shadow-xl shadow-slate-800 hover:shadow-slate-800 hover:bg-gray-500 hover:cursor-pointer"
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
  )
}
