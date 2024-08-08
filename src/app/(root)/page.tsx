import React from "react";
import HeroSection from "./components/HeroSection";
import RecentProjects from "./components/RecentProjects";
import TopSkills from "./components/TopSkills";
import Services from "./components/Services";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecentProjects />
      <TopSkills />
      <Services />
     
    </>
  );
};

export default HomePage;
