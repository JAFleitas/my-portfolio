import { BsWhatsapp } from "react-icons/bs";
import { PropsIcon } from "../../models/propsIcon";
import { ContainerIcon } from "./styles";

export default function WhatsAppIcon({ linkTo }: PropsIcon) {
  return (
    <ContainerIcon>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
    </ContainerIcon>
  );
}
