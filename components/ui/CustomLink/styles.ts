import styled from "styled-components";

interface Props {
  isPressed?: boolean;
}
export const Ancor = styled.a<Props>`
  padding: 4px 10px;
  text-transform: capitalize;
  font-weight: 800;
  color: ${(props) => (props.isPressed ? "#aaa" : "#ccc")};

  border-radius: 0.25rem;
  color: ${(props) => (props.isPressed ? "#fff" : null)};

  :hover {
    color: #fff;
  }
`;

export const Container = styled.div`
  padding: 4px;
  margin-left: 8px;
`;
