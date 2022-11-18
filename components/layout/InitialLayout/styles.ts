import styled from "styled-components";
import { MOBILE } from "../../../helpers/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #0d1117;
  min-height: 100vh;
  align-items: center;
`;
export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: #d0d0d0;
  @media ${MOBILE} {
    width: 90%;
  }
`;
