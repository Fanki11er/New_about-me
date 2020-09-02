import React from "react";
import styled from "styled-components";

const ButtonIcon = styled.svg`
  position: absolute;
  right: -1px;
  top: -7px;
  display: none;
  width: 90px;

  @media screen and (max-width: 560px) {
    display: initial;
  }
`;

const MobileMenuButton = () => {
  return (
    <ButtonIcon width="129" height="92" viewBox="0 0 129 92">
      <g id="MobileMenuButton" transform="translate(-233 -27)">
        <g
          id="Border"
          transform="translate(233 27)"
          fill="none"
          stroke="#4FC0C8"
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
          fill="#4FC0C8"
        />
      </g>
    </ButtonIcon>
  );
};

export default MobileMenuButton;
