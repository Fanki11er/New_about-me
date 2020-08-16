import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import ProjectsAnimation from "../components/ProjectsAnimation";
import ProjectsSection from "../components/ProjectsSection";
interface BackgroundImageUrl {
  imageUrl: string;
}
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0 120px;
  width: 500px;
  height: 250px;
  background-image: url(${(props: BackgroundImageUrl) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 50%;
`;

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: ${({ theme }) => theme.veryLightBlue};

  span {
    color: ${({ theme }) => theme.orange};
    margin-right: 10px;
  }
`;

const ProjectsPage = () => {
  const { projectsbackground: projectsBackground } = useBackgroundImage();
  return (
    <>
      <SEO title="Projects" />
      <TopWrapper>
        <>
          <HeaderWrapper imageUrl={projectsBackground}>
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
