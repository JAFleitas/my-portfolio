import styled from "styled-components";

export const Container = styled.div`
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

export const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;
`;

export const ContainerName = styled.div`
  h2 {
    font-weight: 900;
  }
`;

export const ContainerProfession = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.secondaryFontColor};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 10px 38px 0px rgba(0, 0, 0, 0.75);
`;

export const ButtonCv = styled.div`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryFontColor};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primary + "dd"};
    color: ${({ theme }) => theme.secondaryFontColor + "dd"};
  }
`;
