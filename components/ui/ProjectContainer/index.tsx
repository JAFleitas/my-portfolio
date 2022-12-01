import styled from "styled-components";
import { SubTitle } from "../../../styles/globalStyledComponents";
import { CardProject } from "../";
import { MOBILE, TABLET } from "../../../utils/constants";
import { dataProjects } from "../../../utils/dataProjects";

export const ProjectContainer = () => {
  return (
    <Container id="projects">
      <SubTitle>Proyectos</SubTitle>
      <CardContainer>
        {dataProjects.map((project) => (
          <CardProject key={project.title} {...project} />
        ))}
      </CardContainer>
    </Container>
  );
};
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${MOBILE} {
  }
`;
