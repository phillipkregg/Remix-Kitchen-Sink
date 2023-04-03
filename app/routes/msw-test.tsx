import { Link, LiveReload, Outlet, useLoaderData } from "@remix-run/react";
import { serverInit } from "~/mocks";

export const loader = async () => {
  serverInit();
  const data = await fetch("http://localhost:3000/msw-test");
  const dataJson = await data.json();
  console.log(dataJson);
  return dataJson;
};

export default function JokesRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title></title>
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
          <main className="px-10">
            <div className="">
              <div className="">
                <h2 className="text-3xl text-gray-600">MSW Testing</h2>

                {data.map((film, idx) => (
                  <div
                    className="px-4 py-2 mt-8 duration-200 ease-in-out bg-gray-400 shadow-md hover:shadow-xl shadow-slate-800 hover:shadow-slate-800 hover:bg-gray-500 hover:cursor-pointer"
                    key={idx}
                  >
                    <h3 className="mb-2 text-2xl">{film.name}</h3>
                    <p>{film.content}</p>
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
