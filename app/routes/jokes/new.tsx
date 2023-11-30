import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { dbSqlite } from '~/utils/sqlite/db.server'

export async function action({ request }: ActionArgs) {
  const form = await request.formData()
  const name = form.get('name')
  const content = form.get('content')
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (typeof name !== 'string' || typeof content !== 'string') {
    throw new Error(`Form not submitted correctly.`)
  }

  const fields = { name, content }

  const joke = await dbSqlite.joke.create({ data: fields })
  return redirect(`/jokes/${joke.id}`)
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
          <button type="submit" className="bg-blue-400 button">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default JokesNewRoute
