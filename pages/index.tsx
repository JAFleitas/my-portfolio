import { InitialLayout } from "../components/layout/InitialLayout";
import {
  Profile,
  About,
  ProjectContainer,
  Certificates,
} from "../components/ui";
import { Technologies } from "../components/ui/TechnologiesContainer";
import { ContactForm } from "../components/ui/ContactForm/index";

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
