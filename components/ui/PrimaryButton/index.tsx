import React, { FC } from "react";
import { ButtonStyled, Container } from "./styles";
import { PropsWithChildren } from "react";
interface Props {
  onClick?: () => void;
}
export const PrimaryButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <ButtonStyled>{children}</ButtonStyled>
    </Container>
  );
};
