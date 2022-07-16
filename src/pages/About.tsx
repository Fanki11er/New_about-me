import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import HeaderWrapper from "../components/HeaderWrapper";
import AboutSection from "../components/AboutSection";
import TitleHeader from "../components/TitleHeader";

const StyledHeader = styled(TitleHeader)`
  margin-left: 50px;
  span {
    margin-left: 10px;
  }
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

const CvButton = styled.a`
  position: absolute;
  left: 25%;
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 55px;
  background-color: ${({ theme }) => theme.darkerBlue};
  border-radius: 20px;
  color: ${({ theme }) => theme.turquoise};
  font-size: ${({ theme }) => theme.fontSizes.M};

  transition: color 0.4s;
  margin-bottom: 25px;
  z-index: 7;

  span {
    margin-left: 5px;
    color: ${({ theme }) => theme.orange};
  }

  &:hover {
    &:visited {
      color: ${({ theme }) => theme.veryLightBlue};
    }
  }
  &:visited {
    color: ${({ theme }) => theme.turquoise};
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    margin-bottom: 20px;
    width: 160px;
    height: 50px;
    border-radius: 15px;
    margin-left: -10px;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.XS};
    margin-bottom: 5px;
    font-weight: bold;
  }

  @media screen and (max-width: 568px) {
    margin-left: -15px;
  }
`;

const AboutPage = () => {
  const { about_background, person } = useBackgroundImage();
  const {
    allDatoCmsCv: { nodes },
  } = useStaticQuery(graphql`
    {
      allDatoCmsCv {
        nodes {
          cv {
            url
          }
        }
      }
    }
  `);

  const {
    cv: { url },
  } = nodes[0];

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
          <CvButton
            href={
              "https://www.datocms-assets.com/32060/1655627524-cv-pl-strona.pdf"
            }
            target="_blank"
          >
            Open <span>CV</span>
          </CvButton>
          <PersonImage src={person} alt={"Standing person"} />
        </>
      </TopWrapper>
      <AboutSection />
    </>
  );
};

export default AboutPage;
