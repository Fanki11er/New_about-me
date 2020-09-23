import React, { useContext } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Home2 as Home } from "@styled-icons/remix-fill";
import { PageMultiple as Projects } from "@styled-icons/foundation";
import { FilePersonFill as About } from "@styled-icons/bootstrap";
import { Envelope } from "@styled-icons/boxicons-solid";
import { Git } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/fa-brands";
import { MenuElementProps } from "../utils/interfaces";
import { PageColorsContext } from "../Providers/PageColorsProvider";

const Wrapper = styled.ul`
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
    &.hide {
      display: none;
      pointer-events: none;
      visibility: hidden;
      transform: scale(0);
      z-index: -10;
    }

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 120px 0 100px 0;
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

  @media screen and (max-width: 560px) {
    max-width: 200px;
    transform: scale(1.2);
  }
`;
const MenuLabel = styled.span`
  display: flex;
  width: 30px;
  height: 100%;
  text-align: center;
  align-items: center;
`;

interface MobileHide {
  hideOnMobile?: boolean;
}

const NavigationList = (props: MobileHide) => {
  const { hideOnMobile } = props;
  return (
    <Wrapper className={hideOnMobile ? "hide" : undefined}>
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
    </Wrapper>
  );
};

export default NavigationList;

const MenuElement = (props: MenuElementProps) => {
  const { linkToPage, label, children, newWindow, externalLink } = props;
  const { currentColor } = useContext(PageColorsContext);
  return (
    <ListElement>
      {!externalLink && (
        <AniLink
          cover
          bg={currentColor}
          to={linkToPage}
          activeClassName={"isActive"}
          target={newWindow ? "_blank" : ""}
          duration={1.5}
          direction={"right"}
        >
          {children}
          <MenuLabel>{label}</MenuLabel>
        </AniLink>
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
