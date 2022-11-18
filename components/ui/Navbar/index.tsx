import { CustomLink } from "../CustomLink";
import { Container, Nav } from "./styles";
const pathRoutes = ["about", "proyects", "certifications"];

export const Navbar = () => {
  return (
    <Container>
      <Nav>
        <CustomLink path="" content="Home" />
        {pathRoutes.map((path) => (
          <CustomLink content={path} key={path} path={path} />
        ))}
      </Nav>
    </Container>
  );
};
