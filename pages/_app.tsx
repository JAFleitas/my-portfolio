import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UiProvider } from "../context/ui";
import { darkTheme } from "../styles/stylesMui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UiProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </>
  );
}

export default MyApp;
