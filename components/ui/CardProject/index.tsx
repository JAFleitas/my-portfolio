import styled from "styled-components";
import { MOBILE, TABLET } from "../../../utils/constants";
import { GitHubIcon } from "../icons/Github";
import { PrimaryButton } from "../PrimaryButton";
import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
}
export const CardProject: FC<Props> = ({
  title,
  description,
  repoLink,
  demoLink,
  image,
}) => {
  return (
    <Container>
      <a href={demoLink} target="_blank" rel="noreferrer noopener">
        <ImageContainer>
          <Image
            objectFit="cover"
            objectPosition="0% 0%"
            alt="image project"
            src={image}
            layout="fill"
            style={{
              borderRadius: "8px",
            }}
          />
        </ImageContainer>
      </a>
      <ContainerDescription>
        <h2>{title}</h2>
        <p>{description}</p>
        <ContainerButton>
          <PrimaryButton>
            <a href={demoLink} target="_blank" rel="noreferrer noopener">
              Ver sitio web
            </a>
          </PrimaryButton>
          <div style={{ paddingTop: "6px", boxSizing: "border-box" }}>
            <GitHubIcon href={repoLink} />
          </div>
        </ContainerButton>
      </ContainerDescription>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  border-radius: 0.5rem;
  position: relative;
  @media ${MOBILE} {
    margin-bottom: 50px;
    height: 700px;
  }
`;

const ImageContainer = styled.article`
  display: flex;
  width: 80%;
  background: #000;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 32px -11px #0f0f0f83;

  opacity: 0.57;
  transition: all 0.4s ease-out;
  :hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
  @media ${MOBILE} {
    width: 100%;
    height: 260px;
    :hover {
      opacity: 0.57;
      transform: scale(1);
    }
  }
`;

const ContainerDescription = styled.article`
  z-index: 50;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  height: 100%;
  width: 50%;
  color: #f0f0f0;
  h2 {
    font-size: xx-large;
    font-weight: 900;
  }
  p {
    font-weight: 300;
    font-family: system-ui;
  }
  @media ${MOBILE} {
    width: 100%;
    padding-top: 300px;
    justify-content: flex-start;
    align-items: center;
    p {
      text-align: justify;
    }
  }
`;
const ContainerButton = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 20px 0px;
  gap: 30px;
`;
