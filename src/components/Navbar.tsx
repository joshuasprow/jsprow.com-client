/** @jsx jsx **/

import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/use-theme";
import PanicButton from "./PanicButton";
import ThemeSwitch from "./ThemeSwitch";

const Nav: FC = props => {
  const [theme] = useTheme();

  return (
    <nav
      {...props}
      css={css`
        position: relative;
        padding: 0.25rem;

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
      list-style-type: none;
      margin: 0;
      padding: 0;
    `}
  />
);

const Li: FC = props => (
  <li
    {...props}
    css={css`
      display: inline-block;
      padding: 0 0.25rem;
    `}
  />
);

const Link: FC<{ to: string }> = ({ to, ...props }) => {
  const [theme] = useTheme();

  return (
    <NavLink
      {...props}
      css={css`
        color: ${theme.colors.text};
        text-decoration: none;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        position: relative;

        &:hover {
          ::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            background: ${theme.colors.primary};
            border-radius: 0.5rem;
            opacity: 0.5;
            z-index: -1;
          }
        }

        &.active {
          background: ${theme.colors.primary};
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
          <ThemeSwitch />
        </Li>
        <Li>
          <PanicButton />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
