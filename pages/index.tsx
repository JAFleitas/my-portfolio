import { useRef } from "react";
import { InitialLayout } from "../components/layout/InitialLayout";
import { Profile, About, ProjectContainer } from "../components/ui";

const HomePage = () => {
  /* const prueba = useRef() as React.MutableRefObject<HTMLInputElement>; */
  return (
    <InitialLayout>
      {/*  <button
        onClick={() => {
          prueba.current!.scrollIntoView({ behavior: "smooth" });
        }}
      </button>
        scroll
      > */}
      <Profile />

      <About />
      <ProjectContainer />
    </InitialLayout>
  );
};

export default HomePage;
