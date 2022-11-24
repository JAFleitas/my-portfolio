import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  src: string;
  width?: number;
  height?: number;
}
export const IconTecno: FC<Props> = ({
  src,
  name,
  height = 30,
  width = 30,
}) => {
  return (
    <Container>
      <Icon>
        <Image src={src} alt={name} width={width} height={height} />
      </Icon>
      <p style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>{name}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  justify-content: center;
  align-items: center;
  border: 1px solid #4a5568;
  border-radius: 6px;
  padding: 20px 0;
  gap: 6px;
  text-align: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
