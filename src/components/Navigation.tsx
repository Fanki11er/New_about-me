import React, { useContext, ReactChild } from "react";
import styled from "styled-components";
import { Home2 as Home } from "@styled-icons/remix-fill";
import { PageMultiple as Projects } from "@styled-icons/foundation";
import { FilePersonFill as About } from "@styled-icons/bootstrap";
import { Envelope } from "@styled-icons/boxicons-solid";
import { Git } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/fa-brands";
import { Link, useStaticQuery, graphql } from "gatsby";
import { PageColorsContext } from "../Providers/PageColorsProvider";
import MobileMenuButton from "./MobileMenuButton";

interface MenuElementProps {
  linkToPage: string;
  label: string;
  children: ReactChild;
  newWindow?: boolean;
  externalLink?: boolean;
}

interface Color {
  color: string;
}

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 80%;

  @media screen and (min-width: 1600px) {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    padding: 0 25px;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }

  @media screen and (max-width: 560px) {
    visibility: hidden;
  }
`;

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

const ListElement = styled.li`
  display: flex;
  min-width: 110px;
  height: 100%;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    transition: filter 0.5s, box-shadow 0.5s;
    border: 2px solid ${({ theme }) => theme.transparentGray};
    border-radius: 45px;
    height: 35px;
    transition: color 0.5s, border 0.2s, box-shadow 0.5s;

    &:hover {
      color: ${({ theme }) => theme.turquoise};
      border: 2px solid ${({ theme }) => theme.turquoise};
      box-shadow: 0 0 4px 1px ${({ theme }) => theme.turquoise};
      border: 2px solid transparent;
      .icon {
        color: ${({ theme }) => theme.turquoise};
      }
    }
  }
  .isActive {
    color: ${({ theme }) => theme.turquoise};
    border: 2px solid ${({ theme }) => theme.turquoise};
    pointer-events: none;
    cursor: initial;
    .icon {
      color: ${({ theme }) => theme.turquoise};
    }
  }
  .icon {
    width: 25px;
    height: 25px;
    margin: 0 5px 0 10px;
    align-self: center;
    color: ${({ theme }) => theme.transparentGray};
    transition: color 0.5s;
  }

  @media screen and (min-width: 1600px) {
    transform: scale(1.3);
  }

  @media screen and (max-width: 960px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 768px) {
    transform: scale(0.7);
    margin-left: -25px;
  }
`;
const MenuLabel = styled.span`
  display: flex;
  width: 30px;
  height: 100%;
  text-align: center;
  align-items: center;
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
      <NavigationList>
        <MenuElement linkToPage={"/"} label={"Home"}>
          <Home className={"icon"} />
        </MenuElement>
        <MenuElement linkToPage={"/Projects"} label={"Projects"}>
          <Projects className={"icon"} />
        </MenuElement>

        <MenuElement linkToPage={"/About"} label={"About"}>
          <About className={"icon"} />
        </MenuElement>

        <MenuElement linkToPage={"/Contact"} label={"Contact"}>
          <Envelope className={"icon"} />
        </MenuElement>
        <MenuElement
          linkToPage={"https://github.com/Fanki11er"}
          label={"GitHub"}
          newWindow={true}
          externalLink={true}
        >
          <Git className={"icon"} />
        </MenuElement>
        <MenuElement
          linkToPage={"https://www.linkedin.com/in/dziedzic-k/"}
          label={"LinkedIn"}
          newWindow={true}
          externalLink={true}
        >
          <Linkedin className={"icon"} />
        </MenuElement>
      </NavigationList>
      <MobileMenuButton />
    </NavigationWrapper>
  );
};

export default Navigation;

const MenuElement = (props: MenuElementProps) => {
  const { linkToPage, label, children, newWindow, externalLink } = props;
  return (
    <ListElement>
      {!externalLink && (
        <Link
          to={linkToPage}
          activeClassName={"isActive"}
          target={newWindow ? "_blank" : ""}
        >
          {children}
          <MenuLabel>{label}</MenuLabel>
        </Link>
      )}
      {externalLink && (
        <a href={linkToPage} target={newWindow ? "_blank" : ""}>
          {children}
          <MenuLabel>{label}</MenuLabel>
        </a>
      )}
    </ListElement>
  );
};
