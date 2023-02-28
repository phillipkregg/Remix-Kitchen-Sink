import styles from "../styles/index.css";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const IndexRoute = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link to="films">... or checkout films!</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default IndexRoute;
