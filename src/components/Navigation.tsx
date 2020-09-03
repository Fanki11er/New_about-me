import React, { useContext } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { PageColorsContext } from "../Providers/PageColorsProvider";
import MobileMenuButton from "./MobileMenuButton";
import NavigationList from "./NavigationList";

interface Color {
  color: string;
}

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.mainPadding};
  height: 90px;
  width: 100%;
  background-color: ${(props: Color) => props.color};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  color: ${({ theme }) => theme.darkerBlue};
  font-weight: 700;
  z-index: 8;
  color: ${({ theme }) => theme.gray};

  @media screen and (min-width: 1600px) {
    height: 120px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 calc(${({ theme }) => theme.mainPadding} - 50px);
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
    min-width: ${({ theme }) => theme.minScreen};
    height: 65px;
  }
  @media screen and (max-width: 560px) {
    padding: 0 15px;
    height: 80px;
  }
`;

const Logo = styled.img`
  height: 75%;
  align-self: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    height: 65%;
  }
  @media screen and (max-width: 768px) {
    height: 55%;
  }
`;

const Navigation = () => {
  const {
    file: { publicURL: logoUrl },
  } = useStaticQuery(graphql`
    {
      file(name: { regex: "/Logo/" }) {
        publicURL
      }
    }
  `);
  const { currentColor } = useContext(PageColorsContext);
  return (
    <NavigationWrapper color={currentColor}>
      <Logo src={logoUrl} alt={"Logo"} />
      <NavigationList />
      <MobileMenuButton />
    </NavigationWrapper>
  );
};

export default Navigation;
