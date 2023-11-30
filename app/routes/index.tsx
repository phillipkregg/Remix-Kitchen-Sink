import type { LinksFunction } from '@remix-run/node'
import styles from '../styles/index.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

const IndexRoute = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <h2 className="text-lg">... and other stuff too</h2>
      </div>
    </div>
  )
}

export default IndexRoute
