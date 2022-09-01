import { GitHubIcon } from "../icons/Github";

export const DescriptionProfile = () => {
  return (
    <Container>
      <Title>Gonzalo Damian Fleitas</Title>
      <Profession>Jr. Frontend | Backend Developer</Profession>
      <SocialNetworkContainer>
        <GitHubIcon />
        <Linkedin />
        <Twitter />
      </SocialNetworkContainer>
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "30px",
        }}
      >
        <PrimaryButton content="Curriculum Vitae" />
        <PrimaryButton content="Contact" />
      </div>
    </Container>
  );
};
import styled from "styled-components";
import { Linkedin } from "../icons/Linkedin";
import { Twitter } from "../icons/Twitter";
import { PrimaryButton } from "../PrimaryButton/index";

const Title = styled.h1`
  font-weight: 900;
  color: #fde047f0;
  font-size: 3rem;
  margin: 0;
`;
const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  text-align: center;
`;
const Profession = styled.h2`
  color: #234c87;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-height: 60px;
  justify-content: center;
`;
