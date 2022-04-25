import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondaryFontColor};
  background-color: ${({ theme }) => theme.background};
  width: 70%;
  height: 100vh;
  margin-top: 140px;

  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;
