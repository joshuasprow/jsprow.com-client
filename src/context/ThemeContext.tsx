/** @jsx jsx */

import { css, Global, jsx } from "@emotion/core";
import { createContext, FC, useEffect, useState } from "react";

const darkTheme: Theme = {
  background: "#444",
  colors: { link: "rgb(33, 145, 251)", text: "#fff" },
  themeName: "dark"
};

const lightTheme: Theme = {
  background: "#fff",
  colors: { link: "rgb(33, 145, 251)", text: "#444" },
  themeName: "light"
};

const ThemeContext = createContext<[Theme, (name: ThemeName) => void]>([
  lightTheme,
  () => {}
]);

const ThemeProvider: FC = ({ children, ...props }) => {
  const [theme, setTheme] = useState(lightTheme);

  const globalStyles = css`
    body {
      background: ${theme.background};
      color: ${theme.colors.text};
    }

    a {
      color: ${theme.colors.link};
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
    <ThemeContext.Provider {...props} value={[theme, onSetTheme]}>
      <Global styles={globalStyles} />
      {children}
    </ThemeContext.Provider>
  );
};

export default { Context: ThemeContext, Provider: ThemeProvider };

interface Colors {
  link: string;
  text: string;
}

export type ThemeName = "dark" | "light";

export interface Theme {
  background: string;
  colors: Colors;
  themeName: ThemeName;
}
