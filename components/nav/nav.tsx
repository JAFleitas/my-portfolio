import Link from "next/link";
import { useState } from "react";
import { PropsNav } from "../../models/navProps";
import ButtonChangeTheme from "../buttonChangeTheme/buttonChange";
import { Ancor, ContainerLink, ContainerNav } from "./styles";

export default function Nav({ changeTheme, mode }: PropsNav) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <ContainerNav>
      <ContainerLink>
        <Link href="/" passHref>
          <Ancor
            selected={selected === 0 ? true : false}
            onClick={() => setSelected(0)}
          >
            Home
          </Ancor>
        </Link>
      </ContainerLink>
      <ContainerLink>
        <Link href="/my-proyects" passHref>
          <Ancor
            selected={selected === 1 ? true : false}
            onClick={() => setSelected(1)}
          >
            Proyects
          </Ancor>
        </Link>
      </ContainerLink>
      <ContainerLink>
        <Link href="/contact" passHref>
          <Ancor
            selected={selected === 2 ? true : false}
            onClick={() => setSelected(2)}
          >
            Contact
          </Ancor>
        </Link>
      </ContainerLink>
      <ContainerLink>
        <Link href="/about-me" passHref>
          <Ancor
            selected={selected === 3 ? true : false}
            onClick={() => setSelected(3)}
          >
            About Me
          </Ancor>
        </Link>
      </ContainerLink>
      <ButtonChangeTheme changeTheme={changeTheme} mode={mode} />
    </ContainerNav>
  );
}
