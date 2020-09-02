import React from "react";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import ProjectsAnimation from "../components/ProjectsAnimation";
import ProjectsSection from "../components/ProjectsSection";
import HeaderWrapper from "../components/HeaderWrapper";
import TitleHeader from "../components/TitleHeader";

const ProjectsPage = () => {
  const { projects_background } = useBackgroundImage();
  return (
    <>
      <SEO title="Projects" />
      <TopWrapper>
        <>
          <HeaderWrapper imageUrl={projects_background}>
            <TitleHeader>
              <span>My</span> Projects
            </TitleHeader>
          </HeaderWrapper>
          <ProjectsAnimation />
        </>
      </TopWrapper>
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
