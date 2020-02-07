/** @jsx jsx **/

import { css, jsx, SerializedStyles } from "@emotion/core";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import useTheme from "../hooks/use-theme";

const Button: FC<DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { cssOverrides?: SerializedStyles }> = ({ cssOverrides, ...props }) => {
  const [theme] = useTheme();

  return (
    <button
      css={css`
        background-color: ${theme.backgroundSecondary};
        color: ${theme.colors.textSecondary};

        :disabled {
          background-color: ${theme.background};
        }

        ${cssOverrides}
      `}
      {...props}
    />
  );
};

export default Button;
