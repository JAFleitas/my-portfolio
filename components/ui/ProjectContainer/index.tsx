import styled from "styled-components";
import { SubTitle } from "../../../styles/globalStyledComponents";
import { CardProject } from "../";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const ProjectContainer = () => {
  return (
    <Container>
      <SubTitle id="projects">Proyectos</SubTitle>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <CardProject key={e} />
        ))}
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
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  @media ${TABLET} {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-content: start;
  }
  @media ${MOBILE} {
    display: flex;
    flex-wrap: wrap-reverse;

    justify-content: center;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  align-items: center;
  @media ${MOBILE} {
  }
`;
