import Image from "next/image";
import { InitialLayout } from "../components/layout/InitialLayout";
import {
  Profile,
  About,
  ProjectContainer,
  Certificates,
} from "../components/ui";
import { Tecnologies } from "../components/ui/TecnologiesContainer";

const HomePage = () => {
  return (
    <InitialLayout>
      <Profile />
      <About />
      <Tecnologies />
      <ProjectContainer />
      <Certificates />
    </InitialLayout>
  );
};

export default HomePage;
