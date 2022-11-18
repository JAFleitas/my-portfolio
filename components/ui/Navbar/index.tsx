import { CustomLink } from "../CustomLink";
import { Container, Wrapper, HomeLink, Nav } from "./styles";
const pathRoutes = ["proyects", "certifications", "about"];

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <HomeLink>
          <CustomLink path="" content="Home" />
        </HomeLink>
        <Nav>
          {pathRoutes.map((path) => (
            <CustomLink content={path} key={path} path={path} />
          ))}
        </Nav>
      </Wrapper>
    </Container>
  );
};
