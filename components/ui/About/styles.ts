import styled from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";
import { fadeIn } from "../../../styles/globalStyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 50px;
  @media ${MOBILE} {
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1cm;
  color: #ccc;
  animation: ${fadeIn} 2s linear forwards;
`;
