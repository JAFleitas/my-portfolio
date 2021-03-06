import { BsGithub } from "react-icons/bs";
import { PropsIcon } from "../../models/propsIcon";
import { ContainerIcon } from "./styles";
export default function GitHubIcon({ linkTo }: PropsIcon) {
  return (
    <ContainerIcon>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </ContainerIcon>
  );
}
