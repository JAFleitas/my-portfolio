import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    transition: all ${(props) => props.theme.transitionTime} ;
    background:${({ theme }) => theme.background} ;
    width:100% ;
    height:100% ;
  }

`;
