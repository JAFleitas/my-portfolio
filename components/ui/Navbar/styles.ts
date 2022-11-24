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
  max-width: 800px;
`;

interface PropsContactButton {
  isVisible: boolean;
}

export const ContactContainer = styled.div<PropsContactButton>`
  border: 2px solid #0f89e3;
  border-radius: 6px;
  box-shadow: 0 0 17px 0px #234ca7;

  display: ${({ isVisible }) => (isVisible ? "inline-block" : "none")};
  :hover {
    box-shadow: 0 0 21px 0px #234ca7;
  }
`;
export const ContactButton = styled.div`
  padding: 11px 16px;
  background-color: #000;
  border: 0 solid #e5e7eb;
  border-radius: 0.2rem;
  box-sizing: border-box;
  color: #fff;
  font-weight: bold;
  font-family: Roboto;
  cursor: pointer;
`;
