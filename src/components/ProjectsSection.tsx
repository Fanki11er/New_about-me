import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { ProjectType } from "../utils/types";

const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SingleProject = styled.article`
  width: 80%;
  height: 450px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 85px;
  padding: 40px 30px 30px 0;
  margin: 50px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  padding-left: 55px;
  position: relative;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
`;
const Header = styled.h2`
  color: ${({ theme }) => theme.projects};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  margin: 0 0 30px 0;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.projects};
  text-indent: 40px;
  font-size: ${({ theme }) => theme.fontSizes.S};
`;

const Screenshot = styled.img`
  position: absolute;
  right: 0;
  display: flex;
  width: 40%;
  height: 100%;
  margin-right: 30px;
  margin-left: 20px;
  align-self: center;
  object-fit: contain;
  transition: transform 0.8s;
  :hover {
    transform: scale(1.8) translateX(-150px);
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

interface ProjectsInterface {
  allDatoCmsProject: {
    nodes: ProjectType[];
  };
}

const ProjectsSection = () => {
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

  return <ProjectsWrapper>{renderProjectsData(nodes)}</ProjectsWrapper>;
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
