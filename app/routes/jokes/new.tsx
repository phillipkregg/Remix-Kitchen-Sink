import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const newJoke = {
    name: body.get("content"),
    content: body.get("content"),
  };

  const jokeSaved = await db.joke.create({
    data: newJoke,
  });

  return redirect(`/jokes/${jokeSaved.id}`);
}

const JokesNewRoute = () => {
  return (
    <div>
      <h4>Jokes New Route</h4>
      <p>Add your favorite joke:</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default JokesNewRoute;
