import React, { FC } from "react";
import { ButtonStyled } from "./styles";
import { PropsWithChildren } from "react";
interface Props {
  onClick?: () => void;
}
export const PrimaryButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </>
  );
};
