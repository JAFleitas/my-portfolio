import styled from "styled-components";

export const ContainerIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryFontColor};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.secondaryFontColor};
  }
`;
