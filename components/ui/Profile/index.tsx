
export const Profile = () => {
  return (
    <ContainerProfile>
      <ImageProfile />
      <DescriptionProfile/>
    </ContainerProfile>

  )
}
import styled from "styled-components"
import { DescriptionProfile } from "../DescriptionProfile"
import { ImageProfile } from "../ImageProfile"

export const ContainerProfile = styled.div`
  display:flex ;
  flex-direction: row ;
  width:100% ;
  margin-top : 60px;
  justify-content:space-between ;
`