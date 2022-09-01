import { FC, PropsWithChildren } from "react"
import { Navbar } from "../../ui"
import {Container,ChildrenContainer} from "./styles"

export const InitialLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <Container>
      <Navbar />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Container>
  )
}
