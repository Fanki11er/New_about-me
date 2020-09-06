import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { ProjectType } from "../utils/types";
import useBackgroundImage from "../Hooks/useBackgroundImage";

const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SingleProject = styled.article`
  position: relative;
  width: 80%;
  max-width: 1350px;
  min-width: 320px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 85px;
  padding: 40px 30px 30px 0;
  margin: 50px 0;

  @media screen and (max-width: 960px) {
    min-height: 700px;
    padding: 40px 15px;
  }

  @media screen and (max-width: 560px) {
    min-height: 800px;
    width: 100%;
    border-radius: 60px;
  }
`;

const SourceWrapper = styled(SingleProject)`
  min-height: 300px;
  align-items: center;
  @media screen and (max-width: 960px) {
    min-height: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  padding-left: 55px;

  @media screen and (max-width: 960px) {
    padding: 0 45px;
  }
  @media screen and (max-width: 560px) {
    padding: 0 15px;
  }
`;

const Content = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const Header = styled.h2`
  color: ${({ theme }) => theme.projects};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  margin: 0 0 30px 0;
  text-align: center;

  @media screen and (max-width: 960px) {
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.projects};
  text-indent: 40px;
  font-size: ${({ theme }) => theme.fontSizes.S};
`;

const Screenshot = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 45%;
  bottom: 0;
  margin: auto 30px 130px 20px;
  transition: transform 0.8s;
  :hover {
    transform: scale(1.8) translateX(-150px);
  }

  @media screen and (max-width: 960px) {
    height: 30%;
    left: 0;
    margin: 0 auto;
    min-width: 250px;
    bottom: 130px;

    :hover {
      transform: scale(1.8) translateY(-40px);
    }
  }

  @media screen and (max-width: 560px) {
    bottom: 170px;
    height: 25%;

    :hover {
      transform: scale(1.4) translateY(-20px);
    }
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const OutsideLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  margin: 0 55px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.dark};
  font-weight: bold;
  color: ${({ theme }) => theme.turquoise};
  :visited {
    color: ${({ theme }) => theme.turquoise};
  }

  span {
    margin-right: 3px;
    transition: color 0.5s;
  }

  &:hover span {
    color: ${({ theme }) => theme.orange};
  }

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }

  @media screen and (max-width: 560px) {
    margin: 0 15px;
  }
`;

const SourceLink = styled(OutsideLink)`
  width: 220px;
  span {
    margin: 0 3px;
  }
`;

const CredentialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CredentialRow = styled.div`
  text-indent: 0px;
  width: 100%;
  span {
    margin-right: 3px;
    font-weight: bold;
  }
`;

const SourceImage = styled.img`
  margin-left: 20px;
`;

interface ProjectsInterface {
  allDatoCmsProject: {
    nodes: ProjectType[];
  };
}

const ProjectsSection = () => {
  const { source } = useBackgroundImage();
  const {
    allDatoCmsProject: { nodes },
  } = useStaticQuery(graphql`
    {
      allDatoCmsProject(sort: { fields: position, order: ASC }) {
        nodes {
          position
          projectName
          projectDescription
          appLink
          githubLink
          credentials {
            password
            username
          }
          projectPreview {
            alt
            url
          }
        }
      }
    }
  `) as ProjectsInterface;

  return (
    <ProjectsWrapper>
      {renderProjectsData(nodes)}
      <SourceWrapper>
        <SourceImage src={source} alt={"Page source"} />
        <SourceLink
          href={"https://github.com/Fanki11er/New_about-me"}
          target="_blank"
        >
          Check <span>code</span> of this page
        </SourceLink>
      </SourceWrapper>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;

const renderProjectsData = (projectData: ProjectType[]) => {
  return projectData.map(
    ({
      position,
      projectName,
      projectDescription,
      projectPreview: { alt, url },
      appLink,
      githubLink,
      credentials,
    }) => {
      return (
        <SingleProject key={position}>
          <ContentWrapper>
            <Content>
              <Header>{projectName}</Header>
              <Description>
                {projectDescription}
                {credentials.length > 0 && (
                  <CredentialsWrapper>
                    <CredentialRow>
                      <span>Username:</span>
                      {credentials[0].username}
                    </CredentialRow>
                    <CredentialRow>
                      <span>Password:</span>
                      {credentials[0].password}
                    </CredentialRow>
                  </CredentialsWrapper>
                )}
              </Description>
            </Content>
            <Screenshot src={url} alt={alt} />
          </ContentWrapper>
          <LinksWrapper>
            <OutsideLink href={githubLink} target="_blank">
              <span>Go</span>to code
            </OutsideLink>
            <OutsideLink href={appLink} target="_blank">
              <span>Go</span>to demo
            </OutsideLink>
          </LinksWrapper>
        </SingleProject>
      );
    }
  );
};
