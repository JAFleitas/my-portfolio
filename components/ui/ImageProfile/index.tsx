import Image from "next/image";
import { Container } from "./styles";

export const ImageProfile = () => {
  return (
    <Container>
      <Image
        src="/assets/photo1.jpeg"
        alt="Profile photo"
        layout="responsive"
        width={304}
        height={304}
      />
    </Container>
  );
};
