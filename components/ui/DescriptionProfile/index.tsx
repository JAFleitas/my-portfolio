import { GitHubIcon } from "../icons/Github";
import { Linkedin } from "../icons/Linkedin";
import { Twitter } from "../icons/Twitter";
import { PrimaryButton } from "../PrimaryButton/index";
import { ImageProfile } from "../ImageProfile";

export const DescriptionProfile = () => {
  return (
    <Container>
      <Title> Gonzalo Damian Fleitas</Title>
      <Profession>Jr. Frontend and Backend Developer</Profession>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageProfile />
      </div>
      <SocialNetworkContainer>
        <GitHubIcon />
        <Linkedin />
        <Twitter />
      </SocialNetworkContainer>
      <ContainerContactButton>
        <PrimaryButton content="Curriculum Vitae" />
        <PrimaryButton content="Contact" />
      </ContainerContactButton>
    </Container>
  );
};
import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

const Title = styled.h1`
  font-weight: 900;
  color: #fde047f0;
  font-size: 4rem;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0;
  @media ${MOBILE} {
    font-size: 2.5rem;
    font-weight: 800;
  }
  @media ${TABLET} {
    font-size: 3rem;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;
const Profession = styled.h2`
  color: #234c87;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 0;
  @media ${MOBILE} {
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media ${TABLET} {
    font-size: 1.8rem;
  }
`;

const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-height: 60px;
  justify-content: center;
`;

const ContainerContactButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 100px;

  @media ${MOBILE} {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
  }
`;
