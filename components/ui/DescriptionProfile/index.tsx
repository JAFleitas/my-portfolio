import { GitHubIcon } from "../icons/Github";
import { Linkedin } from "../icons/Linkedin";
import { Twitter } from "../icons/Twitter";
import { PrimaryButton } from "../PrimaryButton/index";
import { ImageProfile } from "../ImageProfile";

import styled, { keyframes } from "styled-components";
import { MOBILE, TABLET } from "../../../utils/constants";
import useAutoFocus from "../../../hook/useAutoFocus";

export const DescriptionProfile = () => {
  let contact: any;
  if (typeof window !== "undefined") {
    contact = document.querySelector("#contact");
  }
  const { onFocus } = useAutoFocus();
  const goToContact = () => {
    contact?.scrollIntoView({ behavior: "smooth", block: "start" });
    onFocus();
  };
  return (
    <Container>
      <Title id="profile"> Gonzalo Damián Fleitas</Title>
      <Profession>Desarrollador Frontend - Backend Jr.</Profession>
      <article style={{ display: "flex", justifyContent: "center" }}>
        <ImageProfile />
      </article>
      <SocialNetworkContainer>
        <Linkedin />
        <Twitter />
        <GitHubIcon href="https://github.com/JAFleitas" />
      </SocialNetworkContainer>
      <ContainerContactButton>
        <AncorCv
          title="Descargar cv"
          href="/documents/CV-Frontend-Web-Developer-Gonzalo-Fleitas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="CV-Frontend-Web-Developer-Gonzalo-Fleitas.pdf"
        >
          <PrimaryButton>Curriculum Vitae</PrimaryButton>
        </AncorCv>
        <PrimaryButton onClick={goToContact}>Contáctame</PrimaryButton>
      </ContainerContactButton>
    </Container>
  );
};

const colorChange = keyframes`
 0%{
    color: #234c87;
  }
  100%{
    color: #0f89e3;
  }

`;
const Title = styled.h1`
  font-weight: 900;
  color: #fde047f0;
  font-size: 4rem;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0;
  @media ${MOBILE} {
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media ${TABLET} {
    font-size: 3rem;
  }
`;
const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;
const Profession = styled.h2`
  color: #234c87;
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 0;

  animation: ${colorChange} 2.5s alternate infinite;

  @media ${MOBILE} {
    font-size: 0.8rem;
  }
  @media ${TABLET} {
    font-size: 1.2rem;
  }
`;

export const SocialNetworkContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-height: 60px;
  justify-content: center;
`;

const ContainerContactButton = styled.article`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 100px;

  @media ${MOBILE} {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    a {
      width: 100%;
    }
  }
`;

const AncorCv = styled.a`
  width: max-content;
  display: flex;
  justify-content: center;
  @media ${MOBILE} {
    width: 100%;
  }
`;
