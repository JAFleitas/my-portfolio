import styled from "styled-components";

export const SvgStyled = styled.svg`
  transition: all 0.3s ease;

  path {
    fill: #ddd;
  }
  :hover {
    width: 54px;
    height: 50px;
    path {
      fill: #fff;
    }
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;
