import styled from "styled-components";
import { MOBILE } from "../../../helpers/constants";
import { fadeIn } from "../../../styles/globalStyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 0.7cm;
  color: #aaa;
  animation: ${fadeIn} 3s linear forwards;
  text-align: justify;
  text-justify: inter-word;
  @media ${MOBILE} {
    align-items: center;
  }
`;
