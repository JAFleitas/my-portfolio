import { ColorPallet } from "./colorPallet";

export interface Theme {
  [light: string]: ColorPallet;
  dark: ColorPallet;
}
