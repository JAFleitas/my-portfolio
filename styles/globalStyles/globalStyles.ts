import { createGlobalStyle } from "styled-components";
import { ColorPallet } from "../../models/colorPallet";

export const GlobalStyles = createGlobalStyle<{ theme: ColorPallet }>`
  body {
    transition: all ${(props) => props.theme.transitionTime} ;
    background:${({ theme }) => theme.background} ;
     filter: blur(4px);
  }

`;
