import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { getImages } from "../utils/utils";
import { MenuIconsPaths } from "../utils/types";
import { PageColorsContext } from "../Providers/PageColorsProvider";

interface MenuElementProps {
  linkToPage: string;
  label: string;
  iconUrl: string;
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
`;

const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.mainPadding};
  height: 90px;
  width: 100vw;
  background-color: ${(props: Color) => props.color};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  color: ${({ theme }) => theme.darkerBlue};
  font-weight: 700;
  z-index: 5;
  color: ${({ theme }) => theme.gray};
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
    }
  }
  .isActive {
    color: ${({ theme }) => theme.turquoise};
    border: 2px solid ${({ theme }) => theme.turquoise};
    pointer-events: none;
    cursor: initial;
  }
`;
const MenuLabel = styled.span`
  display: flex;
  width: 30px;
  height: 100%;
  text-align: center;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 5px 0 10px;
  align-self: center;
`;

const Logo = styled.img`
  height: 75%;
  align-self: center;
  justify-content: flex-start;
`;

const Navigation = () => {
  const {
    allFile: { nodes: iconsUrls },
    file: { publicURL: logoUrl },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { dir: { regex: "/icons/" } }) {
        nodes {
          publicURL
        }
      }
      file(name: { regex: "/Logo/" }) {
        publicURL
      }
    }
  `);
  const icons = getImages(iconsUrls) as MenuIconsPaths;
  const { currentColor } = useContext(PageColorsContext);
  return (
    <NavigationWrapper color={currentColor}>
      <Logo src={logoUrl} />
      <NavigationList>
        <MenuElement linkToPage={"/"} label={"Home"} iconUrl={icons.home} />
        <MenuElement
          linkToPage={"https://github.com/Fanki11er"}
          label={"GitHub"}
          iconUrl={icons.github}
          newWindow={true}
          externalLink={true}
        />
        <MenuElement
          linkToPage={"https://www.linkedin.com/in/dziedzic-k/"}
          label={"LinkedIn"}
          iconUrl={icons.linkedin}
          newWindow={true}
          externalLink={true}
        />
        <MenuElement
          linkToPage={"/About"}
          label={"About"}
          iconUrl={icons.about}
        />
        <MenuElement
          linkToPage={"/Projects"}
          label={"Projects"}
          iconUrl={icons.projects}
        />
        <MenuElement
          linkToPage={"/Contact"}
          label={"Contact"}
          iconUrl={icons.contact}
        />
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;

const MenuElement = (props: MenuElementProps) => {
  const { linkToPage, label, iconUrl, newWindow, externalLink } = props;
  return (
    <ListElement>
      {!externalLink && (
        <Link
          to={linkToPage}
          activeClassName={"isActive"}
          target={newWindow ? "_blank" : ""}
        >
          <NavIcon src={iconUrl} />
          <MenuLabel>{label}</MenuLabel>
        </Link>
      )}
      {externalLink && (
        <a href={linkToPage} target={newWindow ? "_blank" : ""}>
          <NavIcon src={iconUrl} />
          <MenuLabel>{label}</MenuLabel>
        </a>
      )}
    </ListElement>
  );
};
