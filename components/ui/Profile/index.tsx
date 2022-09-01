import { DescriptionProfile } from "../DescriptionProfile";
import { ImageProfile } from "../ImageProfile";
import { ContainerProfile } from "./style";

export const Profile = () => {
  return (
    <ContainerProfile>
      <ImageProfile />
      <DescriptionProfile />
    </ContainerProfile>
  );
};
