import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    transition: all ${(props) => props.theme.transitionTime} ;
    background:${({ theme }) => theme.background} ;
     
  }

`;
