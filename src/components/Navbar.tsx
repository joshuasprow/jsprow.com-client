/** @jsx jsx **/

import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/use-theme";
import ThemeSwitch from "./ThemeSwitch";

const Nav: FC = props => {
  const [theme] = useTheme();

  return (
    <nav
      {...props}
      css={css`
        height: 2rem;
        position: relative;

        ::before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          content: "";
          background: ${theme.colors.text};
          opacity: 0.2;
          z-index: -1;
        }
      `}
    />
  );
};

const Ul: FC = props => (
  <ul
    {...props}
    css={css`
      display: flex;
      align-items: center;
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 100%;
    `}
  />
);

const Li: FC = props => (
  <li
    {...props}
    css={css`
      display: inline-block;
      height: 100%;
    `}
  />
);

const Link: FC<{ to: string }> = ({ to, ...props }) => {
  const [theme] = useTheme();

  return (
    <NavLink
      {...props}
      css={css`
        display: flex;
        align-items: center;
        box-sizing: border-box;
        color: ${theme.colors.text};
        text-decoration: none;
        height: 100%;
        padding: 0.25rem 0.5rem;
        position: relative;
        transition: background 500ms, border-bottom 500ms;

        &:hover {
          ::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            background: ${theme.background};
            opacity: 0.5;
            z-index: -1;
          }
        }

        &.active {
          background: ${theme.backgroundSecondary};
          border-bottom: 3px solid ${theme.colors.primary};
          border-right: 1px solid ${theme.background};
        }
      `}
      exact
      to={to}
    />
  );
};

const Navbar: FC = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/bird-conversation">Bird Conversation</Link>
        </Li>
        <Li>
          <Link to="/timer-tower">Timer Tower</Link>
        </Li>
        <Li>
          <ThemeSwitch />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
