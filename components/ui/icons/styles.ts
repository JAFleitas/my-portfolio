import styled from "styled-components";

interface Props {
  fill?: string;
  fillHover?: string;
}
export const SvgStyled = styled.svg<Props>`
  transition: all 0.3s ease;

  path {
    fill: ${({ fill }) => (fill ? fill : "#ddd")};
  }
  :hover {
    transform: scale(1.4);
    path {
      fill: ${({ fillHover }) => (fillHover ? fillHover : "#fff")};
    }
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;
