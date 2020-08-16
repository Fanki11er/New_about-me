import React from "react";
import styled from "styled-components";
import FooterBackground from "./FooterBackground";
import { useStaticQuery, graphql } from "gatsby";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100vw;
  height: 250px;
  z-index: 2;
  justify-content: flex-end;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 10%;
  margin-bottom: 50px;
  margin-right: 60px;
  z-index: 3;

  img {
    width: 40%;
  }

  span {
    color: ${({ theme }) => theme.veryLightBlue};
    font-size: ${({ theme }) => theme.fontSizes.S};
    font-weight: bold;
    margin-right: 20px;
  }
`;

const Footer = () => {
  const {
    file: { publicURL },
  } = useStaticQuery(graphql`
    {
      file(name: { regex: "/Logo/" }) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={publicURL} />
        <span>2020</span>
      </LogoWrapper>
      <FooterBackground />
    </FooterWrapper>
  );
};

export default Footer;
