import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import { AboutContentParagraph, singleAdditionalSkill } from "../utils/types";

const AboutWrapper = styled.section`
  width: 80%;
  max-width: 1500px;
  min-height: 300px;
  margin: 100px auto 65px auto;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 85px;
  padding: 40px;
  @media screen and (min-width: 1600px) {
    min-height: 500px;
    padding: 80px;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
    border-radius: 50px;
  }
`;

const PortraitImg = styled.img`
  shape-outside: margin-box circle(50%);
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 50px;
  @media screen and (min-width: 1600px) {
    width: 250px;
    height: 250px;
    margin-right: 80px;
  }

  @media screen and (max-width: 768px) {
    shape-outside: none;
    display: flex;
    float: initial;
    margin: 0 auto 30px auto;
  }
`;

const AboutContent = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSizes.S};
  line-height: 26px;
  color: ${({ theme }) => theme.dark};
  margin: 0 0 10px 0;
  ::first-letter {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.M};
  }

  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
    line-height: 35px;
  }
`;
const AdditionalSkillsSection = styled.section`
  width: 100%;
  margin: 30px 0 55px 0;
`;
const AdditionalSkillWrapper = styled.article`
  width: 80%;
  min-width: 340px;
  max-width: 1500px;
  min-height: 70px;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  border-radius: 45px;
  margin: 5px auto 30px auto;
  align-items: center;
  padding-right: 15px;

  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
    min-height: 90px;
  }
`;

const PointerImage = styled.img`
  width: 35px;
  margin: 0 20px;
  @media screen and (min-width: 1600px) {
    width: 40px;
  }
`;

const AdditionalSkillContent = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSizes.S};
  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
  }
`;

const AboutSection = () => {
  const { bulb } = useBackgroundImage();
  const {
    allDatoCmsAboutMe: {
      nodes: [
        {
          portrait: { alt, url },
        },
      ],
    },
    allDatoCmsAboutParagraph: { nodes: aboutParagraphs },
    allDatoCmsSingleAdditionalSkill: { nodes: additionalSkills },
  } = useStaticQuery(graphql`
    {
      allDatoCmsAboutMe {
        nodes {
          portrait {
            alt
            url
          }
        }
      }
      allDatoCmsAboutParagraph(sort: { fields: paragraphNode___id }) {
        nodes {
          paragraph
          id
        }
      }
      allDatoCmsSingleAdditionalSkill(sort: { fields: position, order: ASC }) {
        nodes {
          additionalSkill
          id
        }
      }
    }
  `);

  return (
    <>
      <AboutWrapper>
        <PortraitImg src={url} alt={alt} />
        {renderAboutContent(aboutParagraphs)}
      </AboutWrapper>
      <AdditionalSkillsSection>
        {renderAdditionalSkills(additionalSkills, bulb)}
      </AdditionalSkillsSection>
    </>
  );
};

export default AboutSection;

const renderAboutContent = (aboutContent: AboutContentParagraph[]) => {
  return aboutContent.map(({ paragraph, id }) => {
    return <AboutContent key={id}>{paragraph}</AboutContent>;
  });
};

const renderAdditionalSkills = (
  additionalSkills: singleAdditionalSkill[],
  pointerImg: string
) => {
  return additionalSkills.map(({ additionalSkill, id }) => {
    return (
      <AdditionalSkillWrapper key={id}>
        <PointerImage src={pointerImg} alt={"Bulb"} />
        <AdditionalSkillContent>{additionalSkill}</AdditionalSkillContent>
      </AdditionalSkillWrapper>
    );
  });
};

/*
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
  } */
