import { useState } from "react";
import { PropsNav } from "../../models/navProps";
import ButtonChangeTheme from "../buttonChangeTheme/buttonChange";
import { Ancor, ContainerLink, ContainerNav } from "./styles";

export default function Nav({ changeTheme }: PropsNav) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <ContainerNav>
      <ContainerLink>
        <Ancor href="#" onClick={() => setSelected(0)}>
          Logo
        </Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor
          selected={selected === 1 ? true : false}
          onClick={() => setSelected(1)}
          href="#"
        >
          My Proyects
        </Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor
          selected={selected === 2 ? true : false}
          onClick={() => setSelected(2)}
          href="#"
        >
          Contact
        </Ancor>
      </ContainerLink>
      <ContainerLink>
        <Ancor
          selected={selected === 3 ? true : false}
          onClick={() => setSelected(3)}
          href="#"
        >
          About Me
        </Ancor>
      </ContainerLink>
      <ButtonChangeTheme changeTheme={changeTheme} />
    </ContainerNav>
  );
}
