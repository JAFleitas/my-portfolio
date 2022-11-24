import { Container, Item, ContainerNav, Header } from "./styles";

export const Navbar = () => {
  let certificates: any;
  let projects: any;
  let profile: any;
  let about: any;
  if (typeof window !== "undefined") {
    certificates = document.querySelector("#certificates");
    projects = document.querySelector("#projects");
    profile = document.querySelector("#profile");
    about = document.querySelector("#about");
  }

  return (
    <Container>
      <Header>
        <div>
          <Item
            onClick={() =>
              profile?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            {"<GF/>"}
          </Item>
        </div>
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
      </Header>
    </Container>
  );
};
