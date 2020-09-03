import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  clip-path: circle(150% at 90% -10%);
  background-color: ${({ theme }) => theme.darkerBlue};

  z-index: 7;
`;

const MobileNavigation = () => {
  return (
    <NavWrapper>
      <p></p>
    </NavWrapper>
  );
};

export default MobileNavigation;
