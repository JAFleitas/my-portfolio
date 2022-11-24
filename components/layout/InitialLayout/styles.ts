import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(22, 27, 34);
  background: linear-gradient(
    180deg,
    rgba(22, 27, 34, 1) 15%,
    rgba(13, 17, 23, 1) 30%
  );
  min-height: 100vh;
  align-items: center;
  padding-bottom: 400px;
`;
export const ChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #d0d0d0;
  margin-top: 80px;
  gap: 300px;
  @media ${MOBILE} {
    width: 70%;
  }
  @media ${TABLET} {
    width: 80%;
  }
`;
