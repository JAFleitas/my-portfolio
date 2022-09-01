import styled from "styled-components";

interface Props {
  isPressed?: boolean;
}
export const Ancor = styled.a<Props>`
  padding: 4px 10px;
  text-transform: capitalize;
  font-weight: "600";
  color: ${(props) => (props.isPressed ? "#aaa" : "#ccc")};

  border-radius: 0.25rem;
  border-bottom: ${(props) => (props.isPressed ? "2px solid #0f89e3" : null)};
  background: ${(props) => (props.isPressed ? "#0d1117" : null)};

  :hover {
    border-bottom: 2px solid #0f89e3;
  }
`;

export const Container = styled.div`
  padding: 4px;
  margin-left: 8px;
`;
