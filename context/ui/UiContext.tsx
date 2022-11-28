import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  autoFocus: boolean;
  toggleSideMenu: () => void;
  onFocus: () => void;
}

export const UiContext = createContext({} as ContextProps);
