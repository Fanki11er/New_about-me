import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import ProjectsAnimation from "../components/ProjectsAnimation";
import ProjectsSection from "../components/ProjectsSection";
import HeaderWrapper from "../components/HeaderWrapper";

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: ${({ theme }) => theme.veryLightBlue};

  span {
    color: ${({ theme }) => theme.orange};
    margin-right: 10px;
  }
`;

const ProjectsPage = () => {
  const { projects_background } = useBackgroundImage();
  return (
    <>
      <SEO title="Projects" />
      <TopWrapper>
        <>
          <HeaderWrapper imageUrl={projects_background}>
            <Header>
              <span>My</span> Projects
            </Header>
          </HeaderWrapper>
          <ProjectsAnimation />
        </>
      </TopWrapper>
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
