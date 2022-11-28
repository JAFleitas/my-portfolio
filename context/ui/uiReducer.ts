import { UiState } from "./";

type UiActionType = { type: "[UI] - ToggleMenu" } | { type: "[UI] - onFocus" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case "[UI] - onFocus":
      return {
        ...state,
        autoFocus: true,
      };
    default:
      return state;
  }
};
