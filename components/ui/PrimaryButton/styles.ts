import styled, { keyframes } from "styled-components";
import { MOBILE, TABLET } from "../../../helpers/constants";

export const ButtonStyled = styled.button`
  display: flex;
  min-width: 180px;
  /* border: 4px solid #234ca7; */
  border: none;
  border-radius: 12px;
  border-left: 1px solid #333;

  /*  background: #161b22; */
  background-color: transparent;
  color: #ccc;
  text-align: center;
  font-weight: 700;
  justify-content: center;
  padding: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    color: #eee;
    border-left: 1px solid #555;
  }

  @media ${MOBILE} {
    width: 100%;
  }
`;

/* const roundedTurn = keyframes

   0%{
    background: linear-gradient(40deg, #0d1118 60%, #404c5e);
  
  }
   5%{
    background: linear-gradient(58deg, #0d1118 60%, #404c5e);
  
  }
   10%{
    background: linear-gradient(76deg, #0d1118 60%, #404c5e);
  
  }
   15%{
    background: linear-gradient(94deg, #0d1118 60%, #404c5e);
  
  }
   20%{
    background: linear-gradient(112deg, #0d1118 60%, #404c5e);
  
  }
   25%{
    background: linear-gradient(130deg, #0d1118 60%, #404c5e);
  
  } 30%{
    background: linear-gradient(148deg, #0d1118 60%, #404c5e);
  
  } 35%{
    background: linear-gradient(166deg, #0d1118 55%, #404c5e);
  
  } 
  
  40%{
    background: linear-gradient(184deg, #0d1118 50%, #404c5e);
  
  } 45%{
    background: linear-gradient(202deg, #0d1118 60%, #404c5e);
  
  }
   50%{
    background: linear-gradient(220deg, #0d1118 60%, #6b80a0);
  
  }
   55%{
    background: linear-gradient(238deg, #0d1118 60%, #6b80a0);
  
  }
   60%{
    background: linear-gradient(256deg, #0d1118 60%, #6b80a0);
  
  }
   65%{
    background: linear-gradient(274deg, #0d1118 60%, #6b80a0);
  
  }
   70%{
    background: linear-gradient(292deg, #0d1118 60%, #6b80a0);
  
  }
   75%{
    background: linear-gradient(310deg, #0d1118 60%, #6b80a0);
  
  }
   80%{
    background: linear-gradient(328deg, #0d1118 60%, #6b80a0);
  
  } 85%{
    background: linear-gradient(346deg, #0d1118 55%, #404c5e);
  
  } 90%{
    background: linear-gradient(364deg, #0d1118 50%, #404c5e);
  
  } 95%{
    background: linear-gradient(382deg, #0d1118 60%, #404c5e);
  
  } 100%{
    background: linear-gradient(400deg, #0d1118 60%, #404c5e);
  
  }
   

*/
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
  border: 1px solid #404c5e;
  border-radius: 1rem;
  background: linear-gradient(40deg, #0d1118 60%, #404c5e);
  transition: all 0.4s;
  padding: 6px;
  box-shadow: 0px 0px 15px -9px #404c5e;
  :hover {
    border: 1px solid #ccc;
  }
  @media ${MOBILE} {
    width: 90%;
  }
`;
