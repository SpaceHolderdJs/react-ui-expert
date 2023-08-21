import React, { FC, PropsWithChildren } from "react";
import { UIThemeInterface } from "./createTheme";
import { ThemeProvider } from "styled-components";

interface PropsInterface {
  theme: Partial<UIThemeInterface>;
}

export const UIThemeProvider: FC<PropsWithChildren & PropsInterface> = ({
  children,
  theme,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
