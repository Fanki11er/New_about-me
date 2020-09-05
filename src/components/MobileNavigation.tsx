import React, { useContext } from "react";
import styled from "styled-components";
import NavigationList from "./NavigationList";
import { PageColorsContext } from "../Providers/PageColorsProvider";
import { Color } from "../utils/interfaces";

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  clip-path: circle(100px at 90% -10%);
  background-color: ${(props: Color) => props.color};
  min-width: 360px;
  z-index: 7;
`;

const MobileNavigation = () => {
  const { currentColor } = useContext(PageColorsContext);
  return (
    <NavWrapper color={currentColor}>
      <NavigationList />
    </NavWrapper>
  );
};

export default MobileNavigation;
