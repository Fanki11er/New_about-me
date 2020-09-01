import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import HeaderWrapper from "../components/HeaderWrapper";
import AboutSection from "../components/AboutSection";
import TitleHeader from "../components/TitleHeader";

const StyledHeader = styled(TitleHeader)`
  margin-left: 50px;
`;

const PersonImage = styled.img`
  position: absolute;
  width: 320px;
  right: 0;
  bottom: 0;
  margin: 0 8vw 35px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 6vw 35px 0;
    width: 280px;
  }

  @media screen and (max-width: 960px) {
    width: 200px;
    margin: 0 8vw 35px 0;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 0 6vw 30px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
const AboutPage = () => {
  const { about_background, person } = useBackgroundImage();
  return (
    <>
      <SEO title="About" />
      <TopWrapper>
        <>
          <HeaderWrapper imageUrl={about_background}>
            <StyledHeader>
              About<span>me</span>
            </StyledHeader>
          </HeaderWrapper>
          <PersonImage src={person} alt={"Standing person"} />
        </>
      </TopWrapper>
      <AboutSection />
    </>
  );
};

export default AboutPage;
