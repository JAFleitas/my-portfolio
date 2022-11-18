import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #161b22;
  color: #d0d0d0;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  padding: 40px;
  @media ${MOBILE} {
    width: 100%;
  }
  @media ${TABLET} {
    width: 80%;
  }
`;
