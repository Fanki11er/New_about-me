import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { MobileNavContext } from "../Providers/MobileNavProvider";
import { Clickable } from "../utils/interfaces";

const ButtonIcon = styled.svg`
  position: fixed;
  right: -10px;
  top: -7px;
  display: none;
  width: 90px;
  z-index: 10;

  @media screen and (max-width: 560px) {
    display: initial;
  }
`;

const MobileMenuButton = () => {
  const { toggleNavModal, getReferences } = useContext(MobileNavContext);
  const ref = useRef<SVGSVGElement & Clickable>(null);

  getReferences(ref, null);

  return (
    <ButtonIcon
      width="129"
      height="92"
      viewBox="0 0 129 92"
      onClick={toggleNavModal}
      ref={ref}
    >
      <defs>
        <linearGradient id="MenuButton" x1="0.5" y1="0.881" x2="0.5">
          <stop offset="0" stopColor="#5d8fcc" />
          <stop offset="1" stopColor="#41ecc5" />
        </linearGradient>
      </defs>
      <g id="MobileMenuButton" transform="translate(-233 -27)">
        <g
          id="Border"
          transform="translate(233 27)"
          fill="none"
          stroke="#5d8fcc"
          strokeWidth="2"
        >
          <path
            d="M45,0h84a0,0,0,0,1,0,0V92a0,0,0,0,1,0,0H45A45,45,0,0,1,0,47V45A45,45,0,0,1,45,0Z"
            stroke="none"
          />
          <path
            d="M45,1h82a1,1,0,0,1,1,1V90a1,1,0,0,1-1,1H45A44,44,0,0,1,1,47V45A44,44,0,0,1,45,1Z"
            fill="none"
          />
        </g>
        <path
          id="Arrow"
          d="M21.215,3.384a5.969,5.969,0,0,1,10.76,0L52.259,40.647c2.56,4.7-.462,10.733-5.38,10.733H6.311c-4.918,0-7.94-6.03-5.38-10.733Z"
          transform="translate(272.055 99.596) rotate(-90)"
          fill="url(#MenuButton)"
        />
      </g>
    </ButtonIcon>
  );
};

export default MobileMenuButton;
