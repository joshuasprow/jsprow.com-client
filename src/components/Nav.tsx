/** @jsx jsx **/

import { jsx } from "@emotion/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import GitHubCorners from "./GitHubCorners";
import PanicButton from "./PanicButton";
import ThemeSwitch from "./ThemeSwitch";

const Nav: FC = () => {
  return (
    <nav>
      <GitHubCorners />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bird-conversation">Bird Conversation</Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <PanicButton />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
