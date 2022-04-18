import { useEffect, useState } from "react";

export function useTheme() {
  const [mode, setMode] = useState<string | undefined | null>("light");

  useEffect(() => {
    if (window.localStorage.getItem("theme")) {
      setMode(window.localStorage.getItem("theme"));
    }
  }, []);

  const changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setMode("light");

      window.localStorage.setItem("theme", "light");
    }
  };

  return { mode, changeTheme };
}
