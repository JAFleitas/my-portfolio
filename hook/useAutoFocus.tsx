import { useContext } from "react";
import { UiContext } from "../context/ui";
const useAutoFocus = () => {
  const { onFocus, autoFocus } = useContext(UiContext);
  return {
    onFocus,
    autoFocus,
  };
};

export default useAutoFocus;
