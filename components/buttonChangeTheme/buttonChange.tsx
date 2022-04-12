import { useState } from "react";
import { PropsNav } from "../../models/navProps";
import { ButtonSwich, ContainerButton } from "./styles.buttonChange";

export default function ButtonChangeTheme({
  changeTheme,
}: PropsNav): JSX.Element {
  const [position, setPosition] = useState<boolean>(false);
  const changePosition = () => {
    setPosition(!position);
    changeTheme();
  };
  return (
    <ContainerButton onClick={changePosition}>
      <ButtonSwich />
    </ContainerButton>
  );
}
