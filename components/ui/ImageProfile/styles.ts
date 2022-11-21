import styled, { keyframes } from "styled-components";
import { MOBILE } from "../../../helpers/constants";

export const borderMove = keyframes`
 
  0%{border-image: linear-gradient(
      to left,
      #a043ff,
      #e43ff3,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;}
     25%{border-image: linear-gradient(
      to top,
      #a043ff,
      #e43ff3,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;}
     50%{border-image: linear-gradient(
      to right,
      #a043ff,
      #e43ff3,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;}
     75%{border-image: linear-gradient(
      to bottom,
      #a043ff,
      #e43ff3,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;}
     100%{border-image: linear-gradient(
      to left,
      #a043ff,
      #e43ff3,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;}

   
`;

export const Container = styled.div`
  width: 400px;

  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      to left,
      #a043ff 10%,
      #e43ff3 50%,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;
  border-radius: 0.25rem;
  height: max-content;
  animation: ${borderMove} 6s linear infinite;
  @media ${MOBILE} {
    width: 100%;
  }
`;
