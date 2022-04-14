import { DefaultTheme } from "styled-components";

export interface Theme {
  [light: string]: DefaultTheme;
  dark: DefaultTheme;
}
