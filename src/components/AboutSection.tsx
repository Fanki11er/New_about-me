import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import { AboutContentParagraph, singleAdditionalSkill } from "../utils/types";

const AboutWrapper = styled.section`
  width: 80%;
  min-height: 300px;
  margin: 100px auto 65px auto;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 85px;
  padding: 40px;
`;

const PortraitImg = styled.img`
  shape-outside: margin-box circle(50%);
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 50px;
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
`;
const AdditionalSkillsSection = styled.section`
  width: 100%;
  margin: 30px 0 55px 0;
`;
const AdditionalSkillWrapper = styled.article`
  width: 80%;
  height: 70px;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  border-radius: 45px;
  margin: 5px auto 30px auto;
  align-items: center;
`;

const PointerImage = styled.img`
  width: 35px;
  margin: 0 20px;
`;

const AdditionalSkillContent = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSizes.S};
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
