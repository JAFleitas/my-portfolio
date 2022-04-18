import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { PropsNav } from "../../models/navProps";
import { ButtonSwich, ContainerButton } from "./styles.buttonChange";

export default function ButtonChangeTheme({
  changeTheme,
  mode,
}: PropsNav): JSX.Element {
  const changePosition = () => {
    changeTheme();
  };
  return (
    <ContainerButton onClick={changePosition}>
      <ButtonSwich position={mode}>
        {mode === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </ButtonSwich>
    </ContainerButton>
  );
}
