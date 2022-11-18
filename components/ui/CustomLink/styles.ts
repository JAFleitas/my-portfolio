import styled from "styled-components";

interface Props {
  isPressed?: boolean;
}
export const Ancor = styled.a<Props>`
  text-transform: capitalize;
  font-weight: 800;
  color: ${(props) => (props.isPressed ? "#aaa" : "#ccc")};

  color: ${(props) => (props.isPressed ? "#fff" : null)};

  :hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;

export const Container = styled.div`
  padding: 4px;
  margin-left: 8px;
`;
