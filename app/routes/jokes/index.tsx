import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { dbSqlite } from "~/utils/sqlite/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const count = await dbSqlite.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await dbSqlite.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  return json({ randomJoke });
};

const JokesIndexRoute = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>"{data.randomJoke.name}" Permalink</Link>
    </div>
  );
};

export default JokesIndexRoute;
