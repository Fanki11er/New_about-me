import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import HeaderWrapper from "../components/HeaderWrapper";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import TitleHeader from "../components/TitleHeader";

const StyledHeaderWrapper = styled(HeaderWrapper)`
  margin-left: 130px;
  span {
    margin: 0 10px;
  }
`;

const NotFoundImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 320px;
  margin: 0 10vw 100px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 6vw 60px 0;
    width: 300px;
  }

  @media screen and (max-width: 960px) {
    width: 220px;
    margin: 0 6vw 60px 0;
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    margin: 0 4vw 60px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NotFoundPage = () => {
  const { not_found, o4o_image } = useBackgroundImage();
  return (
    <>
      <SEO title="404: Not found" />
      <TopWrapper>
        <>
          <StyledHeaderWrapper imageUrl={not_found}>
            <TitleHeader>
              Page <span>not</span> found
            </TitleHeader>
          </StyledHeaderWrapper>
          <NotFoundImage src={o4o_image} alt={"404 image"} />
        </>
      </TopWrapper>
    </>
  );
};

export default NotFoundPage;
