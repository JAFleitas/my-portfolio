import { InitialLayout } from "../components/layout/InitialLayout";
import {
  Profile,
  About,
  ProjectContainer,
  Certificates,
} from "../components/ui";

const HomePage = () => {
  return (
    <InitialLayout>
      <Profile />
      <About />
      <ProjectContainer />
      <Certificates />
    </InitialLayout>
  );
};

export default HomePage;
