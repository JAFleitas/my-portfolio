import { useContext } from "react";
import { UiContext } from "../context/ui";
const useUiContext = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  return { isMenuOpen, toggleSideMenu };
};

export default useUiContext;
