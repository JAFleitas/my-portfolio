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
    font-size: 2rem;
  }
`;

export const ContainerProfession = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  h3 {
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.secondaryFontColor};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 10px 38px 0px ${({ theme }) => theme.primary};
  -webkit-box-shadow: 5px 10px 38px 0px ${({ theme }) => theme.primary};
  -moz-box-shadow: 5px 10px 38px 0px ${({ theme }) => theme.primary};
  @keyframes rotate {
    0% {
      transform: rotate(0turn);
    }
    25% {
      transform: rotate(-0.01turn);
    }
    50% {
      transform: rotate(0turn);
    }
    100% {
      transform: rotate(0.01turn);
    }
  }
  position: relative;
  left: 1000px;
  @keyframes visible {
    from {
      left: 1000px;
    }
    to {
      left: 0;
    }
  }
  animation: visible 1s linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
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
export const WrapperCard = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
