import React, { ReactChild, useRef } from "react";
import styled from "styled-components";
import TopWrapperBackground from "./TopWrapperBackground";
import useChangeSvgColor from "../Hooks/useChangeSvgColor";

const Wrapper = styled.div`
  width: 100%;
  height: 555px;
  display: flex;
  position: relative;
  margin-top: -1px;
  @media screen and (max-width: 1280px) {
    height: 500px;
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
