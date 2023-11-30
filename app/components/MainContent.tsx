import { Outlet } from '@remix-run/react'
import MainNavigation from './MainNavigation'

export default function MainContent() {
  return (
    <main id="content" role="main">
      <MainNavigation />

      <div className="max-w-auto mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[25rem]">
        <Outlet />
      </div>
    </main>
  )
}
