import { InitialLayout } from "../components/layout/InitialLayout";
import {
  Profile,
  About,
  ProjectContainer,
  Certificates,
} from "../components/ui";
import { Technologies } from "../components/ui/TechnologiesContainer";

const HomePage = () => {
  return (
    <InitialLayout>
      <Profile />
      <About />
      <Technologies />
      <ProjectContainer />
      <Certificates />
    </InitialLayout>
  );
};

export default HomePage;
