import Image from "next/image";
import {
  ContainerName,
  ContainerProfession,
  PhotoContainer,
  CardContainer,
  ButtonCv,
  WrapperCard,
} from "./styles";
import photo from "../../public/assets/photo.jpeg";

export default function Presentation(): JSX.Element {
  return (
    <>
      <WrapperCard>
        <CardContainer>
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
          <ContainerName>
            <h2>Gonzalo Damián Fleitas.</h2>
          </ContainerName>

          <ContainerProfession>
            <h3>Front-End Developer </h3>
          </ContainerProfession>
          <div>
            <ButtonCv>Download CV</ButtonCv>
          </div>
        </CardContainer>
      </WrapperCard>
    </>
  );
}
