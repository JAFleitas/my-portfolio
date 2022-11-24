import Image from "next/image";
import styled from "styled-components";
import { MOBILE } from "../../../helpers/constants";
import { borderMove } from "../ImageProfile/styles";
import { SubTitle } from "../../../styles/globalStyledComponents";

export const Certificates = () => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SubTitle id="certificates">Certificados</SubTitle>
      </div>
      <CertificatesContainer>
        <ContainerImage>
          <a
            href="https://certificates.soyhenry.com/cert?id=28d81c8c-7747-4f17-85d4-7ff99e37dc02"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              width={700}
              height={400}
              src="/assets/certificates/certificado-henry.jpg"
              alt="certificado Henry"
            />
          </a>
        </ContainerImage>
        <ContainerImage>
          <a
            href="https://assets.alkemy.org/certificates/google-oauth2%7C118001764543938601729/ACCELERATION_CERTIFICATE/45f2d211-f000-450c-aa60-0d62c43626e2.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              width={700}
              height={400}
              src="/assets/certificates/certificado-alkemy.jpg"
              alt="certificado Alkemy"
            />
          </a>
        </ContainerImage>
      </CertificatesContainer>
    </Container>
  );
};

export const ContainerImage = styled.div`
  width: 600px;
  padding: 4px;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      to left,
      #a043ff 10%,
      #e43ff3 50%,
      #b439de,
      #812fc4,
      #4e25a8,
      #0e1c8d,
      #001555
    )
    1;
  border-radius: 0.25rem;
  height: max-content;
  animation: ${borderMove} 6s linear infinite;
  @media ${MOBILE} {
    width: 100%;
    flex-direction: column;
  }
`;
const CertificatesContainer = styled.div`
  display: flex;
  gap: 40px;
  @media ${MOBILE} {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${MOBILE} {
    align-items: center;
  }
`;
