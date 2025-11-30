import React from "react";
import HomeMainSection from "../components/HomeComponents/HomeMainSection";
import HomeAboutMe from "../components/HomeComponents/HomeAboutMe";
import HomeSectionPicker from "../components/HomeComponents/HomeSectionPicker";
import HomeMouseFollower from "../components/HomeComponents/HomeMouseFollower";

const HomePage = () => {
  return (
    <>
      <HomeMouseFollower />
      <HomeMainSection />
      <HomeAboutMe />
      <HomeSectionPicker />
    </>
  );
};

export default HomePage;
