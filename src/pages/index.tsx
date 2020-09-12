import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Skills from "../components/Skills";
import AnimatedCodeLine from "../components/AnimatedCodeLine";
import gsap from "gsap";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import { PageColorsContext } from "../Providers/PageColorsProvider";

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  min-width: 615px;
  height: 450px;
  padding-left: 30px;
  margin-top: 30px;

  @media screen and (min-width: 1600px) {
    height: 550px;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 960px) {
    height: 350px;
    min-width: 450px;
  }

  @media screen and (max-width: 768px) {
    height: 280px;
    min-width: 360px;
  }

  @media screen and (max-width: 560px) {
    min-width: 380px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 135px;
  margin-top: 135px;
  padding-left: 40px;

  @media screen and (min-width: 1600px) {
    padding-left: 25%;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 95px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 768px) {
    height: 110px;
    margin-top: 50px;
  }
  @media screen and (max-width: 560px) {
    margin-left: 30px;
    padding-left: 0px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  object-fit: contain;
  width: 60%;
  max-width: 320px;
  z-index: 2;
  right: 7%;
  bottom: 10%;

  @media screen and (max-width: 1280px) {
    width: 22vw;
  }

  @media screen and (max-width: 768px) {
    width: 20vw;
  }
  @media screen and (max-width: 560px) {
    width: 22vw;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 340px;
  height: 105px;
  margin: 0 0 40px 90px;
  opacity: 0;

  @media screen and (max-width: 768px) {
    margin: 0 0 40px 30px;
  }
  @media screen and (max-width: 560px) {
    min-width: 200px;
  }
`;

const SmallHeader = styled.h2`
  color: ${({ theme }) => theme.veryLightBlue};
  margin: 15px 0 20px 0;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.S} - 0.3rem);
    margin: 15px 0 10px 0;
  }
  @media screen and (max-width: 560px) {
    margin: 15px 0 5px 0;
  }
`;

const MainHeader = styled.h1`
  color: ${({ theme }) => theme.veryLightBlue};
  margin: 10px 0 15px 0;
  span {
    color: ${({ theme }) => theme.orange};
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.M} - 0.3rem);
  }
  @media screen and (max-width: 560px) {
    margin: 5px 0 5px 0;
  }
`;

const ProjectsButton = styled(AniLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 65px;
  background-color: ${({ theme }) => theme.dark};
  border-radius: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.M};
  margin-left: 70px;
  transition: color 0.4s;
  margin-bottom: 25px;
  z-index: 5;

  &:hover {
    color: ${({ theme }) => theme.turquoise};
    &:visited {
      color: ${({ theme }) => theme.turquoise};
    }
  }
  &:visited {
    color: white;
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    width: 220px;
    height: 50px;
    margin-left: 0px;
    margin-right: 5%;
    margin-bottom: 65px;
  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.XS};
    margin-bottom: 60px;
    margin-left: 10%;
  }

  @media screen and (max-width: 568px) {
    margin-left: -10%;
  }
`;

const IndexPage = () => {
  const { hero } = useBackgroundImage();
  const { currentColor } = useContext(PageColorsContext);

  const headerWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = headerWrapper.current;
    const span = header!.querySelector("span");
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });
    tl.fromTo(
      header,
      { autoAlpha: "0", scale: "0.8" },
      {
        delay: "1.5",
        duration: "3",
        autoAlpha: "1",
        scale: "1",
      }
    ).fromTo(
      span,
      { autoAlpha: "0" },
      {
        duration: "1",
        autoAlpha: 1,
      },
      "-=1.5"
    );
  });
  return (
    <>
      <SEO title="Home" />
      <TopWrapper>
        <>
          <TitleWrapper>
            <Title>
              <HeaderWrapper ref={headerWrapper}>
                <SmallHeader>I'm aspiring to become a </SmallHeader>
                <MainHeader>
                  <span>Junior</span> Front-end developer
                </MainHeader>
              </HeaderWrapper>

              <AnimatedCodeLine />
            </Title>
            <ProjectsButton
              bg={currentColor}
              cover
              duration={1.5}
              to={"/Projects"}
            >
              Check my projects
            </ProjectsButton>
          </TitleWrapper>
          <HeroImage src={hero} alt={"Hero image"} />
        </>
      </TopWrapper>
      <Skills />
    </>
  );
};

export default IndexPage;
