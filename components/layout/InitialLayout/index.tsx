import { FC, PropsWithChildren } from "react";
import { Navbar, SideMenu } from "../../ui";

import { Container, ChildrenContainer } from "./styles";

export const InitialLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <SideMenu />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
