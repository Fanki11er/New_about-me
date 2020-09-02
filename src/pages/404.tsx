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
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  width: 320px;
  margin-left: 30%;
  margin-right: 80px;
  margin-bottom: 75px;

  @media screen and (max-width: 1280px) {
    margin-left: 25%;
    margin-bottom: 80px;
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
