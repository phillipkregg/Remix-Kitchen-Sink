import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { dbSqlite } from "~/utils/sqlite/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const joke = await dbSqlite.joke.findUnique({
    where: { id: params.jokeId },
  });

  if (!joke) {
    throw new Error("Joke not found");
  }

  return json({
    joke: joke,
  });
};

const JokeIdRoute = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  );
};

export default JokeIdRoute;
