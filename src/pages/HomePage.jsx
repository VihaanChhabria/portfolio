import React from "react";
import MainSection from "../components/MainSection";
import Section from "../components/Section";
import { CircleStar, GraduationCap, Heart, Users } from "lucide-react";
import Card from "../components/Card";
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
