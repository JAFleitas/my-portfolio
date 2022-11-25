import { InitialLayout } from "../components/layout/InitialLayout";
import {
  Profile,
  About,
  ProjectContainer,
  Certificates,
  Technologies,
  ContactForm,
} from "../components/ui";

const HomePage = () => {
  return (
    <InitialLayout>
      <Profile />
      <About />
      <Technologies />
      <ProjectContainer />
      <Certificates />
      <ContactForm />
    </InitialLayout>
  );
};

export default HomePage;
