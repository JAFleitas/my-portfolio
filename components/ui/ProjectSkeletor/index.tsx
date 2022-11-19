import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const ProjectSkeletor = () => {
  return (
    <Container>
      <div>imagen</div>
      <div>descripcion</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 200px;
  background-color: #0f0f0f;
  border-radius: 0.5rem;
  max-width: 430;
  box-shadow: 6px 9px 15px -5px rgba(17, 26, 39, 0.3);
  @media ${MOBILE} {
    width: 75%;
  }
  @media ${TABLET} {
    width: 45%;
  }
`;
