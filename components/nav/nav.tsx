import { Ancor, ContainerLink, ContainerNav } from "./styles";

export default function Nav() {
  return (
    <ContainerNav>
      <ContainerLink>
        <Ancor href="#">Logo</Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor href="#">My Proyects</Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor href="#">Contact</Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor href="#">About Me</Ancor>
      </ContainerLink>
      <div>
        <button>mode</button>
      </div>
    </ContainerNav>
  );
}
