import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondaryFontColor};
  width: 80%;
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;
`;

export const ContainerName = styled.div`
  margin-top: 100px;
`;

export const ContainerProfession = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    padding: 4px;
    text-align: center;
  }
`;
