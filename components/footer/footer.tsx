import GitHubIcon from "../icons/gitHub";
import LinkedinIcon from "../icons/linkedin";
import { ContainerFooter } from "./styles";

export default function Footer(): JSX.Element {
  return (
    <ContainerFooter>
      <LinkedinIcon />
      <GitHubIcon />
    </ContainerFooter>
  );
}
