import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const ButtonStyled = styled.button`
  display: flex;
  min-width: 200px;
  border: 4px solid #234ca7;
  border-radius: 0.25rem;
  background: #161b22;
  color: #ccc;
  text-align: center;
  font-weight: 700;
  justify-content: center;
  padding: 0.6rem;
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    border: 4px solid #0f89e3;
    color: #fff;
    background: #0d1117;
  }

  @media ${MOBILE} {
    width: 100%;
  }
`;
