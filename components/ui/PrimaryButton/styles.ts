import styled from "styled-components";
import { MOBILE } from "../../../helpers/constants";

export const ButtonStyled = styled.button`
  display: flex;
  min-width: 180px;

  border: none;
  border-radius: 12px;
  border-left: 1px solid #333;

  background-color: transparent;
  color: #ccc;
  text-align: center;
  font-weight: 700;
  justify-content: center;
  padding: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    color: #eee;
    border-left: 1px solid #555;
  }

  @media ${MOBILE} {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
  border: 1px solid #404c5e;
  border-radius: 1rem;
  background: linear-gradient(343deg, #0d1118 60%, #404c5e);
  transition: all 0.3s ease;
  padding: 6px;
  box-shadow: 0px 0px 15px -9px #051122;
  :hover {
    border: 1px solid #ccc;
  }
  @media ${MOBILE} {
    width: 90%;
  }
`;
