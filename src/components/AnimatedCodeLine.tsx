import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 50px;
  width: 100%;
  object-fit: fill;
`;

const AnimatedCodeLine = () => {
  const animatedCodeLines = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = animatedCodeLines.current!.querySelector("#CodeLineMiddle");
    const nodes = svg!.querySelectorAll("g") as any;
    const [line1, line3, line4, line5, line6, line7] = [...nodes].sort(
      (a, b) => {
        return a.id.localeCompare(b.id);
      }
    );
    const line2 = svg!.querySelector("#Line2");
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(line1, { x: "+=0" }, { delay: 2, duration: 2, x: "-=300" })
      .to(line1, { duration: 1.5, autoAlpha: 0 }, "-=2")
      .fromTo(
        line4,
        { x: "+=0", y: "+=0" },
        { duration: 2, x: "+=300", y: "-=100" },
        "-=2"
      )
      .to(line4, { duration: 1.5, autoAlpha: 0 }, "-=2")
      .fromTo(line5, { x: "+=0" }, { duration: 2.5, x: "+=400" }, "-=3")
      .to(line5, { duration: 1, autoAlpha: 0 }, "-=2")
      .fromTo(
        line6,
        { x: "+=0", y: "+=0", rotate: "+=0" },
        { duration: 3, x: "+=300", y: "-=100", rotate: "+=30" },
        "-=2"
      )
      .to(line6, { duration: 1.5, autoAlpha: 0 }, "-=2")
      .fromTo(
        line7,
        { x: "+=0", y: "+=0", rotate: "+=0" },
        { duration: 3, x: "-=50", y: "-=300", rotate: "-=30" },
        "-=3"
      )
      .to(line7, { duration: 1.5, autoAlpha: 0 }, "-=2")
      .to(
        line3,
        {
          duration: "2",
          y: "+=155",
          ease: "Bounce.easeOut",
        },
        "-=4"
      )
      .to(line3, { duration: "4", x: "+=200", ease: "Power2.easeIn" }, "-=3.5")
      .to(line3, { autoAlpha: "0", duration: "1.3" }, "-=1")
      .fromTo(
        line2,
        { x: "+=0", y: "+=0", rotate: "+=0" },
        { duration: 3, x: "-=100", y: "+=300", rotate: "-=30" },
        "-=3"
      )
      .to(line2, { duration: "0.8", autoAlpha: 0 }, "-=2");
  });

  return (
    <Svg width="663" height="335" viewBox="0 0 663 335" ref={animatedCodeLines}>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.987"
          y1="0.5"
          x2="0.032"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#52becc" />
          <stop offset="1" stopColor="#5682b4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          y1="0.5"
          x2="0.984"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#5e8ccc" />
          <stop offset="1" stopColor="#41ecc5" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="0.015"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#f9d377" />
          <stop offset="1" stopColor="#f86e68" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-9"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e498f1" />
          <stop offset="1" stopColor="#7d98fb" />
        </linearGradient>
      </defs>
      <g id="CodeLines" transform="translate(-256 -217)">
        <g id="CodeLines-2" data-name="CodeLines">
          <g id="CodeLinesTop">
            <rect
              id="Rectangle_81"
              data-name="Rectangle 81"
              width="189"
              height="24"
              rx="12"
              transform="translate(256 217)"
              fill="url(#linear-gradient)"
            />
            <g
              id="Rectangle_82"
              data-name="Rectangle 82"
              transform="translate(470 217)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="103" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="102"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_90"
              data-name="Rectangle 90"
              transform="translate(411 305)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="103" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="102"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_84"
              data-name="Rectangle 84"
              transform="translate(256 261)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-2)"
            >
              <rect width="380" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="379"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_87"
              data-name="Rectangle 87"
              transform="translate(256 305)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-3)"
            >
              <rect width="103" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="102"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_88"
              data-name="Rectangle 88"
              transform="translate(598 217)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="22" height="24" rx="11" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="21"
                height="23"
                rx="10.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_89"
              data-name="Rectangle 89"
              transform="translate(374 305)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="22" height="24" rx="11" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="21"
                height="23"
                rx="10.5"
                fill="none"
              />
            </g>
          </g>
          <g id="CodeLInesBottom">
            <rect
              id="Rectangle_92"
              data-name="Rectangle 92"
              width="175"
              height="24"
              rx="12"
              transform="translate(256 528)"
              fill="url(#linear-gradient)"
            />
            <g
              id="Rectangle_93"
              data-name="Rectangle 93"
              transform="translate(453 528)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="103" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="102"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_91"
              data-name="Rectangle 91"
              transform="translate(256 486)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-3)"
            >
              <rect width="206" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="205"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_94"
              data-name="Rectangle 94"
              transform="translate(578 528)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-3)"
            >
              <rect width="341" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="340"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
          </g>
          <g id="CodeLineMiddle">
            <rect
              id="Line2"
              width="189"
              height="24"
              rx="12"
              transform="translate(469 349)"
              fill="url(#linear-gradient)"
            />
            <g
              id="Line5"
              transform="translate(548 396)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="103" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="102"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Line6"
              transform="translate(262 443)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-2)"
            >
              <rect width="380" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="379"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Line7"
              transform="translate(486 486)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-9)"
            >
              <rect width="235" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="234"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Line1"
              transform="translate(261 349)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-9)"
            >
              <rect width="190" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="189"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
            <g
              id="Line3"
              transform="translate(676 349)"
              fill="#adadad"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
            >
              <rect width="22" height="24" rx="11" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="21"
                height="23"
                rx="10.5"
                fill="none"
              />
            </g>
            <g
              id="Line4"
              transform="translate(262 396)"
              stroke="rgba(112,112,112,0)"
              strokeWidth="1"
              fill="url(#linear-gradient-3)"
            >
              <rect width="271" height="24" rx="12" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="270"
                height="23"
                rx="11.5"
                fill="none"
              />
            </g>
          </g>
        </g>
        <g
          id="Rectangle_86"
          data-name="Rectangle 86"
          transform="translate(530 304)"
          stroke="rgba(112,112,112,0)"
          strokeWidth="1"
          fill="url(#linear-gradient-9)"
        >
          <rect width="190" height="24" rx="12" stroke="none" />
          <rect x="0.5" y="0.5" width="189" height="23" rx="11.5" fill="none" />
        </g>
      </g>
    </Svg>
  );
};

export default AnimatedCodeLine;
