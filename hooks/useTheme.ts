import { useState } from "react";

export function useTheme() {
  const [mode, setMode] = useState<string>("light");

  const changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return { mode, changeTheme };
}
