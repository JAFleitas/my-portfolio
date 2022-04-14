import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { useTheme } from "../hooks/useTheme";
import Nav from "../components/nav/nav";
import { GlobalStyles } from "../styles/globalStyles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const { mode, changeTheme } = useTheme();
  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyles />
      <Nav changeTheme={changeTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
