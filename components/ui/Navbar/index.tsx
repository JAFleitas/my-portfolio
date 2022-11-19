import { CustomLink } from "../CustomLink";
import { Container, Nav } from "./styles";
const pathRoutes = ["Sobre mi", "proyectos", "certificados"];

export const Navbar = () => {
  return (
    <Container>
      <Nav>
        <CustomLink path="" content="<GF/>" />
        {pathRoutes.map((path) => (
          <CustomLink content={path} key={path} path={path} />
        ))}
      </Nav>
    </Container>
  );
};
