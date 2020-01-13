/** @jsx jsx */

import { css, Global, jsx } from "@emotion/core";
import { createContext, FC, useEffect, useState } from "react";

const darkTheme: Theme = {
  background: "#444",
  colors: { primary: "rgb(33, 145, 251)", text: "#fff" },
  themeName: "dark"
};

const lightTheme: Theme = {
  background: "#fff",
  colors: { primary: "rgb(33, 145, 251)", text: "#444" },
  themeName: "light"
};

const Context = createContext<[Theme, (name: ThemeName) => void]>([
  lightTheme,
  () => {}
]);

const Provider: FC = ({ children, ...props }) => {
  const [theme, setTheme] = useState(lightTheme);

  const globalStyles = css`
    body {
      background: ${theme.background};
      color: ${theme.colors.text};
    }

    a {
      color: ${theme.colors.primary};
    }
  `;

  const onSetTheme = (name: ThemeName) => {
    setTheme(() => (name === "dark" ? darkTheme : lightTheme));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      onSetTheme("dark");
    }
  }, []);

  return (
    <Context.Provider {...props} value={[theme, onSetTheme]}>
      <Global styles={globalStyles} />
      {children}
    </Context.Provider>
  );
};

export default { Context, Provider };

interface Colors {
  primary: string;
  text: string;
}

export type ThemeName = "dark" | "light";

export interface Theme {
  background: string;
  colors: Colors;
  themeName: ThemeName;
}
