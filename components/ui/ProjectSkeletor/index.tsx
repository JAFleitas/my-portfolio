import styled from "styled-components";

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
  width: 250px;
  height: 200px;
  background-color: #161b22;
  border-radius: 0.25rem;
`;
