import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

export const Ancor = styled.a`
  color: ${({ theme }) => theme.primaryFontColor};
  padding: 6px;
  height: 100%;
  width: 64%;
  display: flex;
  align-items: center;
  padding-top: 2px;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
export const ContainerLink = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
