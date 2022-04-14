import { BsLinkedin } from "react-icons/bs";
import { PropsIcon } from "../../models/propsIcon";
import { ContainerIcon } from "./styles";
export default function LinkedinIcon({ linkTo }: PropsIcon) {
  return (
    <ContainerIcon>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </ContainerIcon>
  );
}
