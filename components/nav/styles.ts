import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  z-index: 100;
`;
interface PropsAncor {
  selected?: boolean;
}
export const Ancor = styled.a`
  color: ${({ theme, selected }) =>
    selected ? theme.secondaryFontColor : theme.primaryFontColor};
  padding: 6px;
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  padding-top: 2px;
  justify-content: center;
  font-weight: 800;
  text-decoration: ${(props: PropsAncor) =>
    props.selected ? "underline" : "none"};

  &:hover {
    color: ${({ theme }) => theme.secondaryFontColor};
  }
`;
export const ContainerLink = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
