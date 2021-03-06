import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { useTheme } from "../hooks/useTheme";
import { GlobalStyles } from "../styles/globalStyles/globalStyles";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import { Container, Layout } from "../styles/home/home.styles";

function MyApp({ Component, pageProps }: AppProps) {
  const { mode, changeTheme } = useTheme();
  return (
    <ThemeProvider theme={theme[mode!]}>
      <GlobalStyles />
      <Nav changeTheme={changeTheme} mode={mode} />
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;
