import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    primaryFontColor: string;
    secondaryFontColor: string;

    transitionTime: string;
  }
}
