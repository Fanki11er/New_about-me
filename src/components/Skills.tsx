import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { SkillType } from "../utils/types";
interface SkillInterface {
  allDatoCmsTechnology: {
    nodes: SkillType[];
  };
}

interface SkillProps {
  imageUrl: string;
}

const SkillsContainer = styled.section`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-around;
  width: 100%;
  min-height: 150px;
  padding: 20px 40px 0 40px;

  @media screen and (max-width: 1280px) {
    padding: 50px 40px 0 40px;
  }
`;

const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 270px;
  height: 255px;
  border-radius: 45px;
  background-image: ${(props: SkillProps) => `Url(${props.imageUrl})`};
  background-size: 135px;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.lightGray};
  overflow: hidden;
  margin: 50px 30px 50px 30px;

  :hover {
    .description {
      clip-path: circle(140% at 100% 0%);
      background-color: ${({ theme }) => theme.transparentBlue};
    }
    .list,
    .level {
      opacity: 1;
    }
    .technologyName {
      opacity: 0;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 1280px) {
    margin: 0px 30px 50px 30px;
  }
`;

const TechnologyName = styled.span`
  position: absolute;
  bottom: 25px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.lightBlue};
  font-size: ${({ theme }) => theme.fontSizes.M};
  font-weight: 700;
  transition: opacity 0.5s 0.3s, visibility 0.5s 0.3s;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.lightOrange};
  clip-path: circle(18% at 95% 10px);
  transition: clip-path 0.5s 0.2s, background-color 0.5s 0.2s;
`;

const SkillLevel = styled.h2`
  align-self: flex-start;
  color: ${({ theme }) => theme.darkerBlue};
  text-align: center;
  opacity: 0;
  transition: opacity 0.7s 0.3s;
  color: white;
`;

const List = styled.ul`
  opacity: 0;
  transition: opacity 0.7s 0.3s;
`;

const SkillDescription = styled.li`
  color: white;
  margin: 10px 25px;
  font-size: ${({ theme }) => theme.fontSizes.S};
  font-weight: 700;
  text-align: left;
`;

const Skills = () => {
  const skills = useStaticQuery(graphql`
    {
      allDatoCmsTechnology(sort: { fields: position, order: ASC }) {
        nodes {
          logo {
            url
          }
          level
          skills {
            skillDescription
          }
          technologyName
        }
      }
    }
  `);

  return <SkillsContainer>{renderSkill(skills)}</SkillsContainer>;
};

export default Skills;

const renderSkill = (skills: SkillInterface) => {
  const {
    allDatoCmsTechnology: { nodes },
  } = skills;

  return nodes.map(({ technologyName, level, logo, skills }) => {
    return (
      <SkillWrapper key={technologyName} imageUrl={logo.url}>
        <DescriptionWrapper className={"description"}>
          <SkillLevel className={"level"}>{level}</SkillLevel>
          <List className={"list"}>
            {skills.map(({ skillDescription, id }) => {
              return (
                <SkillDescription key={id}>{skillDescription}</SkillDescription>
              );
            })}
          </List>
        </DescriptionWrapper>
        <TechnologyName className={"technologyName"}>
          {technologyName}
        </TechnologyName>
      </SkillWrapper>
    );
  });
};

/*{
      allDatoCmsTechnology {
        nodes {
          id
          logo {
            alt
            url
          }
          level
          skills {
            id
            skillDescription
          }
          technologyName
        }
      }
    } */
