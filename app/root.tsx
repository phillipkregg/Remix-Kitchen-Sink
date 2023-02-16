import { LiveReload, Outlet, Links } from "@remix-run/react";
import styles from "./styles/global.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        Hello world
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
