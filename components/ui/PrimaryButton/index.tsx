import React, { FC } from "react";
import { ButtonStyled } from "./styles";

interface Props {
  content: string;
}

export const PrimaryButton: FC<Props> = ({ content }) => {
  return (
    <>
      <ButtonStyled>{content}</ButtonStyled>
    </>
  );
};
