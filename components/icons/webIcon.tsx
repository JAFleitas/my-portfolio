import { GiEarthAmerica } from "react-icons/gi";
import { PropsIcon } from "../../models/propsIcon";
import { ContainerIcon } from "./styles";
export default function WebIcon({ linkTo }: PropsIcon) {
  return (
    <ContainerIcon>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <GiEarthAmerica />
      </a>
    </ContainerIcon>
  );
}
