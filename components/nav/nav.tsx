import { PropsNav } from "../../models/navProps";
import ButtonChangeTheme from "../buttonChangeTheme/buttonChange";
import { Ancor, ContainerLink, ContainerNav } from "./styles";

export default function Nav({ changeTheme }: PropsNav) {
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
      <ButtonChangeTheme changeTheme={changeTheme} />
    </ContainerNav>
  );
}
