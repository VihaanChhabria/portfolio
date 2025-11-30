import React from "react";
import MainSection from "../components/MainSection";
import AboutMe from "../components/AboutMe";
import SectionPicker from "../components/SectionPicker";
import MouseFollower from "../components/MouseFollower";

const HomePage = () => {
  return (
    <>
      <MouseFollower />
      <MainSection />
      <AboutMe />
      <SectionPicker />
    </>
  );
};

export default HomePage;
