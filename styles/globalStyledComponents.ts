import styled, { keyframes } from "styled-components";
import { MOBILE, TABLET } from "../helpers/constants";

export const SubTitle = styled.h2`
  font-weight: 900;
  color: #fde047f0;
  font-size: 4rem;
  display: flex;
  align-items: start;

  margin: 0;
  @media ${MOBILE} {
    font-size: 2.5rem;
    font-weight: 800;
  }
  @media ${TABLET} {
    font-size: 3rem;
  }
`;

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
