import { useState, useEffect } from "react";
import { SubTitle } from "../../../styles/globalStyledComponents";
import { Container, Paragraph } from "./styles";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    addEventListener("scroll", () => setIsVisible(true));
    return () => removeEventListener("scroll", () => setIsVisible(true));
  }, []);
  return (
    <Container>
      <SubTitle>Sobre Mi</SubTitle>
      {isVisible && (
        <Paragraph>
          Soy una persona que busca nuevos desafios y problemáticas que me
          permitan hacer volar la imaginación para resolverlas. Quiero crear y
          mejorar Apps. Tambien aprender nuevas tecnologías que me ayuden a
          ofrecer una mejor calidad en los proyectos que realice.
        </Paragraph>
      )}
    </Container>
  );
};
