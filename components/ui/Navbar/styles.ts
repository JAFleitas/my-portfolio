import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const Container = styled.header`
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

export const ContainerNav = styled.ul`
  display: flex;
  justify-content: end;
  gap: 20px;
  @media ${MOBILE} {
    width: 100%;
  }
  @media ${TABLET} {
  }
`;

interface Props {
  isPressed?: boolean;
}
export const Item = styled.li<Props>`
  text-transform: capitalize;
  font-weight: 800;
  color: ${(props) => (props.isPressed ? "#888" : "#ccc")};
  list-style: none;
  cursor: pointer;
  :hover {
    color: #eee;
  }
`;

export const Header = styled.nav`
  display: flex;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
`;
