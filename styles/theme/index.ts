import { ColorPallet } from "../../models/colorPallet";
import { Theme } from "../../models/theme";

const darkTheme: ColorPallet = {
  primary: "#17266b",
  secondary: "#141430",
  background: "#141430",
  primaryFontColor: "#7fffffd8",
  secondaryFontColor: "#0a0a0a",
  transitionTime: "1s",
};
const lightTheme: ColorPallet = {
  primary: "#0a0a0a",
  secondary: "#fcfcfc",
  background: "#fff",
  primaryFontColor: "#fff",
  secondaryFontColor: "#7fffffd8;",
  transitionTime: "1s",
};
export const theme: Theme = { light: lightTheme, dark: darkTheme };
