import { FC, useReducer, PropsWithChildren } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
  autoFocus: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
  autoFocus: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const toggleSideMenu = () => {
    dispatch({ type: "[UI] - ToggleMenu" });
  };
  const onFocus = () => {
    dispatch({ type: "[UI] - onFocus" });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu,
        onFocus,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
