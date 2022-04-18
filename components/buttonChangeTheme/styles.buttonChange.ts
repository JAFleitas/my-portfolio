import styled, { DefaultTheme } from "styled-components";
interface PropsContainerButton {
  position?: string | null;
  theme: DefaultTheme;
}
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  align-items: center;

  cursor: pointer;
`;

export const ButtonSwich = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  font-size: 28px;
  color: ${(props: PropsContainerButton) =>
    props.position === "dark"
      ? props.theme.primary
      : props.theme.secondaryFontColor};
  transition: all 0.4s;

  :hover {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }
`;

// #7a70fc
