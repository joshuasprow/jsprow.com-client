/** @jsx jsx */

import { jsx } from "@emotion/core";
import { FC, InputHTMLAttributes } from "react";
import useTheme from "../hooks/use-theme";

const ThemeSwitch: FC = () => {
  const [theme, setTheme] = useTheme();

  const handleDarkChange: ChangeHandler = event => {
    const value = event.currentTarget.value;

    if (value === "dark") {
      setTheme(value);
    }
  };
  const handleLightChange: ChangeHandler = event => {
    const value = event.currentTarget.value;

    if (value === "light") {
      setTheme(value);
    }
  };

  return (
    <div>
      <div>
        <label>light</label>
        <input
          defaultChecked={theme.themeName === "light"}
          name="theme"
          onChange={handleLightChange}
          type="radio"
          value="light"
        />
      </div>
      <div>
        <label>dark</label>
        <input
          defaultChecked={theme.themeName === "dark"}
          name="theme"
          onChange={handleDarkChange}
          type="radio"
          value="dark"
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;

type ChangeHandler = InputHTMLAttributes<HTMLInputElement>["onChange"];
