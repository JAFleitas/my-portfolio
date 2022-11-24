import styled from "styled-components";
import { data } from "../../../helpers/tecnos";
import { IconTecno } from "../IconTecno/index";

export const Tecnologies = () => {
  return (
    <Grid id="tecnologies">
      {data.map(({ name, src }, i) => (
        <IconTecno key={i} name={name} src={src} />
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
`;
