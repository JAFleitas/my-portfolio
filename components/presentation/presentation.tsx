import Image from "next/image";
import {
  Container,
  ContainerName,
  ContainerProfession,
  PhotoContainer,
} from "./styles";
import photo from "../../public/assets/photo.jpeg";

export default function Presentation(): JSX.Element {
  return (
    <Container>
      <ContainerName>
        <h1>Gonzalo Fleitas</h1>
      </ContainerName>
      <PhotoContainer>
        <Image
          src={photo}
          alt="Photo"
          layout="responsive"
          height={100}
          width={100}
          style={{ borderRadius: "50%" }}
        />
      </PhotoContainer>

      <ContainerProfession>
        <h2>From-End Developer | Full-Stack Developer </h2>
      </ContainerProfession>
    </Container>
  );
}
