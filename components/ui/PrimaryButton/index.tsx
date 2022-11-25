import React, { FC } from "react";
import { ButtonStyled } from "./styles";
import { PropsWithChildren } from "react";

export const PrimaryButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ButtonStyled>{children}</ButtonStyled>
    </>
  );
};
