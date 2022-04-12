import styled from "styled-components";
interface PropsContainerButton {
  position: boolean;
}
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 36px;
  height: 20px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  justify-content: left;

  cursor: pointer;
`;

export const ButtonSwich = styled.button`
  width: 20px;
  height: 20px;
  background-color: #000;
  border: none;
  border-radius: 50%;
`;
