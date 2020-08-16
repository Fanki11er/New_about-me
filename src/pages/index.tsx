import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Skills from "../components/Skills";
import AnimatedCodeLine from "../components/AnimatedCodeLine";
import gsap from "gsap";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 550px;
  min-width: 200px;
  height: 450px;
  padding-left: 30px;
  margin-top: 1vh;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 75%;
  padding-left: 40px;
  margin-top: 30px;

  @media screen and (max-width: 1280px) {
    margin-top: 0;
  }
`;

const HeroImage = styled.img`
  display: flex;
  justify-self: flex-end;
  align-self: flex-start;
  object-fit: contain;
  top: 20%;
  right: 10%;
  width: 60%;
  max-width: 320px;
  z-index: 2;
  margin-left: 18%;
  margin-top: 10%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 105px;
  margin: 0 0 40px 90px;
  opacity: 0;

  @media screen and (max-width: 1280px) {
    margin: 0 0 10px 90px;
  }
`;

const SmallHeader = styled.h2`
  color: ${({ theme }) => theme.veryLightBlue};
  margin: 15px 0 20px 0;
`;

const MainHeader = styled.h1`
  color: ${({ theme }) => theme.veryLightBlue};
  margin: 10px 0 15px 0;
  span {
    color: ${({ theme }) => theme.orange};
  }
`;

const ProjectsButton = styled(Link)`
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
  margin-bottom: 65px;
  transition: color 0.4s;

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
    margin-bottom: 125px;
  }
`;

const IndexPage = () => {
  const { hero } = useBackgroundImage();

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
            <ProjectsButton to={"/Projects"}>Check my projects</ProjectsButton>
          </TitleWrapper>
          <HeroImage src={hero} />
        </>
      </TopWrapper>
      <Skills />
    </>
  );
};

export default IndexPage;
