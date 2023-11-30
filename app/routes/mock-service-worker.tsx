import { Link, LiveReload, Outlet, useLoaderData } from '@remix-run/react'
import { serverInit } from '~/mocks'
import type { Joke } from '~/types/Joke'

export const loader = async () => {
  serverInit()
  const data = await fetch('http://localhost:3000/msw-test')
  const dataJson = await data.json()
  console.log(dataJson)
  return dataJson
}

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>SQLite Prisma Client - with Mock Service Worker</title>
      </head>
      <body>
        <div className="">
          <main className="px-10">
            <div className="">
              <div className="">
                <h2 className="text-3xl text-gray-600">
                  This is using a SQLite Prisma Client with data from an API
                  created with the Mock Service Worker Library.
                </h2>

                <Link
                  to="https://mswjs.io/"
                  className="font-bold text-blue-600 underline"
                >
                  <span className="text-xl">Mock Service Worker</span>
                </Link>

                {data.map((joke: Joke, idx: number) => (
                  <div
                    className="px-4 py-2 mt-8 duration-200 ease-in-out bg-gray-400 shadow-md hover:shadow-xl shadow-slate-800 hover:shadow-slate-800 hover:bg-gray-500 hover:cursor-pointer"
                    key={idx}
                  >
                    <h3 className="mb-2 text-2xl">{joke.name}</h3>
                    <p>{joke.content}</p>
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
