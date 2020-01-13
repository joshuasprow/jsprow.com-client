/** @jsx jsx */

import { css, Global, jsx } from "@emotion/core";
import { createContext, FC, useState, useEffect } from "react";

const darkTheme: Theme = {
  background: "#444",
  colors: { link: "rgb(33, 145, 251)", primary: "#fff" },
  themeName: "dark"
};

const lightTheme: Theme = {
  background: "#fff",
  colors: { link: "rgb(22, 96, 167)", primary: "#444" },
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
      color: ${theme.colors.primary};
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
  [color: string]: string;
  link: string;
}

type ThemeName = "dark" | "light";

interface Theme {
  background: string;
  colors: Colors;
  themeName: ThemeName;
}
