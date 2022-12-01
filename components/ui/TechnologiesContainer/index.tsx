import styled from "styled-components";
import { data } from "../../../utils/technologies";
import { IconTech } from "../IconTech/index";

export const Technologies = () => {
  return (
    <Grid id="tecnologies">
      {data.map(({ name, src }, i) => (
        <IconTech key={i} name={name} src={src} />
      ))}
    </Grid>
  );
};

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  max-width: 800px;
  gap: 20px;
  padding-top: 80px;
  justify-items: center;
  @media (max-width: 390px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;
