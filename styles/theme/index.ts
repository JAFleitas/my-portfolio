import { DefaultTheme } from "styled-components";
import { Theme } from "../../models/theme";

const darkTheme: DefaultTheme = {
  primary: "#17266b",
  secondary: "#141430",
  background: "#141430",
  primaryFontColor: "#7fffffd8",
  secondaryFontColor: "#9583ed",
  transitionTime: "0.5s",
};
const lightTheme: DefaultTheme = {
  primary: "#0a0a0a",
  secondary: "#fcfcfc",
  background: "#fff",
  primaryFontColor: "#fff",
  secondaryFontColor: "#22d8d8;",
  transitionTime: "0.5s",
};
export const theme: Theme = { light: lightTheme, dark: darkTheme };
