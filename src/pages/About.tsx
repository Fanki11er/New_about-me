import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import HeaderWrapper from "../components/HeaderWrapper";
import AboutSection from "../components/AboutSection";

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: ${({ theme }) => theme.veryLightBlue};
  margin-bottom: 35px;
  margin-left: 80px;
  span {
    color: ${({ theme }) => theme.orange};
    margin-left: 10px;
  }
`;

const StyledHeaderWrapper = styled(HeaderWrapper)`
  width: 400px;
  justify-content: flex-start;
  margin-left: 150px;
`;

const PersonImage = styled.img`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  width: 300px;
  margin-left: 30%;
  margin-right: 80px;
  margin-bottom: 75px;

  @media screen and (max-width: 1280px) {
    margin-left: 28%;
    margin-bottom: 65px;
  }
`;
const AboutPage = () => {
  const { about_background, person } = useBackgroundImage();
  return (
    <>
      <SEO title="About" />
      <TopWrapper>
        <>
          <StyledHeaderWrapper imageUrl={about_background}>
            <Header>
              About<span>me</span>
            </Header>
          </StyledHeaderWrapper>
          <PersonImage src={person} alt={"Standing person"} />
        </>
      </TopWrapper>
      <AboutSection />
    </>
  );
};

export default AboutPage;
