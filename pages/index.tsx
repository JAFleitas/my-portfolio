import { useRef } from "react";
import { InitialLayout } from "../components/layout/InitialLayout";
import { Profile, About } from "../components/ui";

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
    </InitialLayout>
  );
};

export default HomePage;
