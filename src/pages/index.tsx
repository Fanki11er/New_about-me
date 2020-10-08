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

  #second-main-header,
  #second-small-header {
    opacity: 0;
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 40px 30px;
  }
  @media screen and (max-width: 560px) {
    min-width: 200px;
  }
`;

const SmallHeader = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.veryLightBlue};
  margin: 10px 0 20px 10px;
  span {
    color: ${({ theme }) => theme.orange};
  }
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.S} - 0.3rem);
    margin: 20px 0 10px 8px;
  }
  @media screen and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fontSizes.S} - 0.3rem);
    margin: 15px 0 10px 8px;
  }
`;

const SecondSmallHeder = styled(SmallHeader)`
  top: initial;
  bottom: -80px;
  left: 290px;
  @media screen and (min-width: 1600px) {
    bottom: -80px;
    left: 200px;
  }
  @media screen and (max-width: 1280px) {
    bottom: -55px;
    left: 150px;
  }

  @media screen and (max-width: 960px) {
    bottom: -20px;
    left: 80px;
  }
  @media screen and (max-width: 768px) {
    left: 85px;
  }
  @media screen and (max-width: 768px) {
    left: 95px;
    bottom: -25px;
  }
`;

const MainHeader = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0;
  color: ${({ theme }) => theme.veryLightBlue};
  font-size: ${({ theme }) => theme.fontSizes.L};
  font-weight: bold;
  margin: 0 0 20px 0;
  line-height: 40px;
  span {
    color: ${({ theme }) => theme.orange};
    margin-left: 5px;
  }
  @media screen and (min-width: 1600px) {
    line-height: 55px;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.M} - 0.3rem);
    margin: 5px 0 35px 0;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    margin: 0px 0 25px 0;
    line-height: 25px;
  }
  @media screen and (max-width: 560px) {
    margin: 5px 0 20px 0;
  }
`;

const SkillsSectionHeader = styled.h2`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 92%;
  max-width: 1460px;
  margin: 150px auto 80px auto;
  height: 110px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 50px;
  color: ${({ theme }) => theme.darkerBlue};
  font-family: "Montserrat";

  @media screen and (max-width: 960px) {
    margin: 120px auto 70px auto;
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    flex-direction: column;
    height: 180px;
    margin: 110px auto 40px auto;
  }
`;

const SkillsSectionHeaderText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.L};
  width: 80%;
  padding: 0 8% 0 8%;
  span {
    color: ${({ theme }) => theme.orange};
    margin: 0 10px;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 568px) {
      margin: 2px 0;
      height: 35px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 5% 0 8%;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 10% 0 20%;
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.M};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 5% 0 20%;
  }
  @media screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70%;
    padding: 0 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 10%;
  }
  @media screen and (max-width: 568px) {
    width: 100%;
    height: 30%;
  }
`;

const ToolsImage = styled.img`
  width: 180px;
  height: 180px;
  position: absolute;
  top: -35px;
  left: 30%;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    top: -10%;
  }
  @media screen and (max-width: 568px) {
    width: 110px;
    height: 110px;
    top: -65px;
    left: calc(50% - 55px);
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
  z-index: 7;

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
  const { hero, tools } = useBackgroundImage();
  const { currentColor } = useContext(PageColorsContext);

  const headerWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = headerWrapper.current;
    const span = header!.querySelector("span");
    const smallHeader = header!.querySelector("#small-header");
    const secondSmallHeader = header!.querySelector("#second-small-header");
    const firstMainHeader = header!.querySelector("#first-main-header");
    const secondMainHeader = header!.querySelector("#second-main-header");
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
    )
      .fromTo(
        span,
        { autoAlpha: "0" },
        {
          duration: "1",
          autoAlpha: 1,
        },
        "-=1.5"
      )
      .to([smallHeader!, firstMainHeader!], {
        autoAlpha: 0,
        duration: 2,
        delay: 1,
      })
      .to(
        [secondMainHeader!, secondSmallHeader!],
        { display: "initial", opacity: 1, duration: 3 },
        "-=2"
      );
  }, []);
  return (
    <>
      <SEO title="Home" />
      <TopWrapper>
        <>
          <TitleWrapper>
            <Title>
              <HeaderWrapper ref={headerWrapper}>
                <SmallHeader id={"small-header"}>
                  <span>K</span>rzysztof Dzie<span>dz</span>ic
                </SmallHeader>
                <SecondSmallHeder id={"second-small-header"}>
                  <span>K</span>rzysztof Dzie<span>dz</span>ic
                </SecondSmallHeder>
                <MainHeader id={"first-main-header"}>
                  <span>Junior</span> Front-end developer
                </MainHeader>
                <MainHeader id={"second-main-header"}>
                  A <span>reinforcement</span> for <br />
                  your development <span>team</span>
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
      <SkillsSectionHeader>
        <ImageWrapper>
          <ToolsImage src={tools} alt={"Tools image"} />
        </ImageWrapper>

        <SkillsSectionHeaderText>
          Engineering with <span>the best tools</span> behind my belt
        </SkillsSectionHeaderText>
      </SkillsSectionHeader>
      <Skills />
    </>
  );
};

export default IndexPage;
