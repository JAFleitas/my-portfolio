import styled from "styled-components";
import { SubTitle } from "../../../styles/globalStyledComponents";
import { ProjectSkeletor } from "../";
import { TABLET } from "../../../helpers/constants";

export const ProjectContainer = () => {
  return (
    <Container>
      <SubTitle>Proyectos</SubTitle>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <ProjectSkeletor key={e} />
        ))}
      </CardContainer>
    </Container>
  );
};
export const CardContainer = styled.div`
  display: grid;
  margin-bottom: 40px;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  @media ${TABLET} {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-content: space-around;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
