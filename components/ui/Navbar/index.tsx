import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useUiContext from "../../../hook/useUiContext";
import useAutoFocus from "../../../hook/useAutoFocus";
import {
  Container,
  Item,
  ContainerNav,
  Header,
  ContactContainer,
  ContactButton,
  NavMobile,
} from "./styles";

export const Navbar = () => {
  let certificates: any;
  let projects: any;
  let profile: any;
  let about: any;
  let tecnologies: any;
  let contact: any;
  if (typeof window !== "undefined") {
    certificates = document.querySelector("#certificates");
    projects = document.querySelector("#projects");
    profile = document.querySelector("#profile");
    about = document.querySelector("#about");
    tecnologies = document.querySelector("#tecnologies");
    contact = document.querySelector("#contact");
  }
  const [isVisible, setIsVisible] = useState(false);
  const showContactButton = () => {
    if (window.scrollY >= 800 && window.scrollY < 4240) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", showContactButton);
    return () => document.removeEventListener("scroll", showContactButton);
  });

  const { toggleSideMenu } = useUiContext();
  const { onFocus } = useAutoFocus();
  return (
    <Header>
      <Container>
        <div>
          <Item
            onClick={() =>
              profile?.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          >
            {"<GF/>"}
          </Item>
        </div>
        <ContactContainer isVisible={isVisible}>
          <ContactButton
            onClick={() => {
              contact?.scrollIntoView({ behavior: "smooth", block: "start" });
              onFocus();
            }}
          >
            Contáctame
          </ContactButton>
        </ContactContainer>
        <ContainerNav>
          <Item
            onClick={() =>
              about?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Sobre Mi
          </Item>
          <Item
            onClick={() =>
              tecnologies?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Tecnologías
          </Item>
          <Item
            onClick={() =>
              projects?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Proyectos
          </Item>

          <Item
            onClick={() =>
              certificates?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Certificados
          </Item>
        </ContainerNav>
        <NavMobile onClick={toggleSideMenu}>
          <MenuRoundedIcon />
        </NavMobile>
      </Container>
    </Header>
  );
};
