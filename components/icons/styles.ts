import styled from "styled-components";

export const ContainerIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryFontColor};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.secondaryFontColor};
    font-size: 33px;
  }
  a {
    color: ${({ theme }) => theme.primaryFontColor};
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: ${({ theme }) => theme.secondaryFontColor};
      font-size: 33px;
    }
  }
`;
