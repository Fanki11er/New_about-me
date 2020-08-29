import React from "react";
import styled from "styled-components";
import FooterBackground from "./FooterBackground";
import { useStaticQuery, graphql } from "gatsby";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 250px;
  z-index: 2;
  justify-content: flex-end;
  min-width: ${({ theme }) => theme.minScreen};

  @media screen and (min-width: 1600px) {
    height: 17vw;
    margin-top: 3vw;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
  }
  @media screen and (max-width: 568px) {
    width: 150%;
    height: 100px;
    transform: translateX(-45vw);
    margin-top: 8vw;
  }
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
    margin-left: 5px;
    @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.XS};
    }
    @media screen and (min-width: 1600px) {
      font-size: ${({ theme }) => theme.fontSizes.M};
    }
  }

  @media screen and (min-width: 1600px) {
    width: 11%;
    margin-bottom: 55px;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 35px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 4%;
  }
  @media screen and (max-width: 568px) {
    margin-right: 25px;
    width: 13%;
    margin-bottom: 27px;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 18px;
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
        <img src={publicURL} alt={"Logo"} />
        <span>2020</span>
      </LogoWrapper>
      <FooterBackground />
    </FooterWrapper>
  );
};

export default Footer;
