/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { FC, InputHTMLAttributes } from "react";
import { ThemeName } from "../context/ThemeContext";
import useTheme from "../hooks/use-theme";

const ThemeSwitchButton: FC<{
  label: string;
  themeName: ThemeName;
}> = ({ label, themeName }) => {
  const [theme, setTheme] = useTheme();
  const isSelected = theme.currentTheme === themeName;

  const handleChange: ChangeHandler = event => {
    const value = event.currentTarget.value;

    if (value === themeName) {
      setTheme(value);
    }
  };

  return (
    <label
      css={css`
        :first-of-type {
          margin-right: 0.25rem;
        }
      `}
      htmlFor={themeName}
    >
      <span
        aria-label={themeName}
        css={css`
          background: ${isSelected ? theme.colors.primary : "inherit"};
          border-radius: 0.5rem;
          cursor: pointer;
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
        `}
        role="img"
      >
        {label}
      </span>
      <input
        checked={isSelected}
        hidden
        id={themeName}
        name="theme"
        onChange={handleChange}
        type="radio"
        value={themeName}
      />
    </label>
  );
};

const ThemeSwitch: FC = () => {
  return (
    <div>
      <span
        css={css`
          margin-right: 0.5rem;
        `}
      >
        theme:
      </span>
      <ThemeSwitchButton label="😎" themeName="light" />
      <ThemeSwitchButton label="😈" themeName="dark" />
    </div>
  );
};

export default ThemeSwitch;

type ChangeHandler = InputHTMLAttributes<HTMLInputElement>["onChange"];
