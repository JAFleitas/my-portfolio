import { CustomLink } from "../CustomLink";
import { Container, Wrapper, HomeLink, Nav } from "./styles";
const pathRoutes = ["proyects", "certifications", "about"];

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <HomeLink>
          <CustomLink path="Home" />
        </HomeLink>
        <Nav>
          {pathRoutes.map((path) => (
            <CustomLink key={path} path={path} />
          ))}
        </Nav>
      </Wrapper>
    </Container>
  );
};
