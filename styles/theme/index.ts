import { ColorPallet } from "../../models/colorPallet";
import { Theme } from "../../models/theme";

const darkTheme: ColorPallet = {
  primary: "#17266b",
  secondary: "#141430",
  background: "#141430",
  primaryFontColor: "#7fffff",
  secondaryFontColor: "",
};
const lightTheme: ColorPallet = {
  primary: "#4444ff",
  secondary: "#141430",
  background: "#141430",
  primaryFontColor: "#7fffff",
  secondaryFontColor: "",
};
export const theme: Theme = { light: lightTheme, dark: darkTheme };
