import React, { ReactChild } from "react";
import styled from "styled-components";
import TopWrapperBackground from "./TopWrapperBackground";

const Wrapper = styled.div`
  width: 100%;
  height: 555px;
  display: flex;
  position: relative;
  margin-top: 79px;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 500px;
  }

  @media screen and (max-width: 960px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    margin-top: 60px;
  }

  @media screen and (max-width: 560px) {
    width: 150%;
    min-width: ${({ theme }) => theme.minScreen};
    margin-top: 60px;
  }
`;
interface Props {
  children: ReactChild;
}
const TopWrapper = (props: Props) => {
  const { children } = props;
  return (
    <Wrapper>
      <TopWrapperBackground />
      {children}
    </Wrapper>
  );
};

export default TopWrapper;

/*  @media screen and (max-width: 560px) {
    height: 200px;
    min-width: ${({ theme }) => theme.minScreen};
  } */
