import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 50%;
  max-width: 600px;
  @media (max-width: 500px) {
    width: 94%;
  }
`;
export const Title = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  top: 64px;
  text-align: center;
  z-index: 100;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #000000;
`;
export const Information = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primaryFontColor};
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  padding: 12px;
  p {
    text-align: center;
    padding: 4px;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  label {
    padding-right: 8px;
    color: ${({ theme }) => theme.secondaryFontColor};
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
