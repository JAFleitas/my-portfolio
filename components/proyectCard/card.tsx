import Image from "next/image";
import rental from "../../public/assets/room-rental.jpeg";
import GitHubIcon from "../icons/gitHub";
import WebIcon from "../icons/webIcon";

import {
  ContainerCard,
  ImageContainer,
  Information,
  Links,
  Title,
} from "./styles";

export default function ProyectCard() {
  return (
    <ContainerCard>
      <Title>ROOM RENTAL APP</Title>
      <ImageContainer>
        <Image
          src={rental}
          alt="Probando Image"
          layout="raw"
          style={{ width: "100%", height: "300px", filter: "grayscale(100%)" }}
        />
      </ImageContainer>
      <Information>
        <p>
          SPA related to the rental of homes, properties or rooms in the tourist
          field. The app is intended for users who wish to travel for tourism or
          other personal reasons, and for users who are hosts of the properties
          and offer their hosting services. It is also aimed at the general
          public who want to find out about the prices of the tourist market and
          are interested in simply visiting the website without the need to
          register.
        </p>
        <Links>
          <div>
            <label>Visit Repository</label>
            <GitHubIcon linkTo="" />
          </div>
          <div>
            <label>Visit Web</label>
            <WebIcon linkTo="" />
          </div>
        </Links>
      </Information>
    </ContainerCard>
  );
}
