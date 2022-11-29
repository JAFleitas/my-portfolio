import React, { FC } from "react";
import { ButtonStyled, Container } from "./styles";
import { PropsWithChildren } from "react";
interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
export const PrimaryButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  type,
}) => {
  return (
    <Container onClick={onClick}>
      <ButtonStyled type={type}>{children}</ButtonStyled>
    </Container>
  );
};
