import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  bottom: 0;
  align-items: center;
`;
