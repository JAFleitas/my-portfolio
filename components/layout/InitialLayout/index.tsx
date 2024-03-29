import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { DESCRIPTION } from "../../../utils/constants";
import { Navbar, SideMenu } from "../../ui";

import { Container, ChildrenContainer } from "./styles";

const origin = typeof window === "undefined" ? " " : window.location.origin;

export const InitialLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio - Gonzalo Fleitas</title>

        <meta name="description" content={DESCRIPTION} />
        <meta name="og:title" content="Portfolio - Gonzalo Fleitas" />
        <meta name="image" property="og:image" content={`${origin}/assets/linkedinbanner.jpg`} />
        <meta name="og:description" content={DESCRIPTION} />
      </Head>
      <Container>
        <Navbar />
        <SideMenu />
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </>
  );
};
