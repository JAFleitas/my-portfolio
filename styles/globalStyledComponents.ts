import styled, { keyframes } from "styled-components";
import { MOBILE, TABLET } from "../helpers/constants";

export const SubTitle = styled.h2`
  font-weight: 900;
  color: #0f89e3;
  font-size: 2.4rem;
  display: flex;
  align-items: start;
  padding: 0 20px;
  padding-bottom: 10px;
  padding-top: 80px;
  margin: 0;

  margin-bottom: 60px;
  background: #ccc;
  background: linear-gradient(90deg, #234ca7, #5cb2f1, #234ca7);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media ${MOBILE} {
    font-weight: 800;
    font-size: 1.7rem;
  }
  @media ${TABLET} {
    font-size: 1.8rem;
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
