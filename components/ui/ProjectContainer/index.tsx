import styled from "styled-components";
import { SubTitle } from "../../../styles/globalStyledComponents";
import { CardProject } from "../";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const ProjectContainer = () => {
  return (
    <Container id="projects">
      <SubTitle>Proyectos</SubTitle>
      <CardContainer>
        <CardProject />
      </CardContainer>
    </Container>
  );
};
export const CardContainer = styled.div`
  /* display: grid;
  margin-bottom: 40px;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px)); */
  display: flex;
  gap: 20px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${MOBILE} {
  }
`;
