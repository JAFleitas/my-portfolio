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
`;
export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: #d0d0d0;
  margin-top: 80px;
  gap: 200px;
  @media ${MOBILE} {
    width: 90%;
  }
  @media ${TABLET} {
    width: 80%;
  }
`;
