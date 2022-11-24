import styled, { keyframes } from "styled-components";
import { MOBILE, TABLET } from "../helpers/constants";

export const SubTitle = styled.h2`
  font-weight: 900;
  color: #0f89e3;
  font-size: 2.4rem;
  display: flex;
  align-items: start;
  padding: 0 20px;
  padding-bottom: 16px;
  padding-top: 80px;
  margin: 0;
  border-bottom: 0.2rem solid #0f89e3;
  margin-bottom: 60px;

  @media ${MOBILE} {
    font-weight: 800;
  }
  @media ${TABLET} {
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
