import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload } from '@remix-run/react'
import MainContent from './components/MainContent'
import PageHeader from './components/PageHeader'
import styles from './styles/global.css'
import tailwind from './styles/tailwind.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: tailwind,
    },
  ]
}

if (typeof window !== 'undefined') {
  require('preline/preline')
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
      </head>
      <body className="bg-gray-200 dark:bg-slate-900">
        <PageHeader />
        <MainContent />
        <LiveReload />
      </body>
    </html>
  )
}
