import GitHubIcon from "../icons/gitHub";
import LinkedinIcon from "../icons/linkedin";
import WhatsAppIcon from "../icons/whatsApp";
import { ContainerFooter } from "./styles";
import { LINKEDIN, WHATSAPP, GITHUB } from "../../utilities/constans/links";

export default function Footer(): JSX.Element {
  return (
    <ContainerFooter>
      <LinkedinIcon linkTo={LINKEDIN} />
      <WhatsAppIcon linkTo={WHATSAPP} />
      <GitHubIcon linkTo={GITHUB} />
    </ContainerFooter>
  );
}
