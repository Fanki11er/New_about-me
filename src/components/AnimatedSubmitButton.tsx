import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Status } from "../utils/types";

const SvgImage = styled.svg`
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  outline: none;

  @media screen and (max-width: 1280px) {
  }
`;

interface Props {
  status: Status;
}

const AnimatedSubmitButton = (props: Props) => {
  const { status } = props;
  useEffect(() => {
    const submittingAnimation = gsap.timeline();
    const statusOkAnimation = gsap.timeline();
    const goBack = gsap.timeline();
    const svg = svgRef.current;
    const roundButton = svg?.querySelector("#RoundButton");
    const squareButton = svg?.querySelector("#SquareButton");
    const roundBorder = svg?.querySelector("#RoundBorder");
    const sendText = svg?.querySelector("#Send");
    const okSign = svg?.querySelector("#OkSign");
    const xSign = svg?.querySelector("#XSign");
    gsap.set([squareButton!, roundBorder!], { transformOrigin: "center" });
    gsap.set([okSign!, xSign!], { scale: "0.5", transformOrigin: "center" });
    submittingAnimation
      .to(roundButton!, {
        opacity: "1",
        duration: "2",
      })
      .to(sendText!, { autoAlpha: "0", duration: "1" }, "=-2.3")
      .to(
        squareButton!,
        {
          autoAlpha: "0",
          duration: "0.6",
          scaleX: "0.5",
        },
        "-=2"
      )
      .to(roundBorder!, { opacity: "1", duration: "2" }, "-=1.8")
      .to(
        roundBorder!,
        {
          rotate: "12000",
          duration: "60",
          ease: "Power0.easeInOut",
        },
        "-=2.5"
      )
      .pause();

    const animateSign = (sign: Element) => {
      return statusOkAnimation
        .to(roundBorder!, { opacity: 0, duration: "1", delay: "1" })
        .to(sign!, { opacity: "1", duration: "2" }, "-=0.3")
        .to(
          sign!,
          {
            scale: "1",
            duration: "1.5",
            ease: "Bounce.easeOut",
          },
          "-=2"
        )
        .pause();
    };

    goBack
      .to([roundButton!, okSign!, xSign!, roundBorder!], {
        opacity: "0",
        duration: "1",
      })
      .to(
        [squareButton!, sendText!],
        { autoAlpha: "1", duration: "1", scale: "1" },
        "-=1"
      )
      .pause();

    const animation = (status: Status) => {
      switch (status) {
        case "Submitting": {
          submittingAnimation.resume(0);
          break;
        }
        case "Ok": {
          submittingAnimation.pause();
          animateSign(okSign!).play(0).invalidate();
          break;
        }
        case "Err": {
          animateSign(xSign!).play(0);

          break;
        }
        default: {
          goBack.play(0).delay(3);
          break;
        }
      }
    };
    animation(status);
  }, [status]);
  const svgRef = useRef<SVGSVGElement>(null);
  return (
    <SvgImage
      width="332"
      height="180"
      viewBox="0 0 332 180"
      preserveAspectRatio="xMaxYMid meet"
      ref={svgRef}
    >
      <g id="SubmitButton" transform="translate(-134 -641)">
        <rect
          id="SquareButton"
          width="332"
          height="99"
          rx="25"
          transform="translate(134 681)"
          fill="#2e2d40"
        />
        <text
          id="Send"
          transform="translate(250 748)"
          fill="#42e9c5"
          fontSize="45"
          fontFamily="Roboto-Regular, Roboto"
        >
          <tspan x="0" y="0" className={"buttonText"}>
            Send
          </tspan>
        </text>
        <g id="AfterButton" transform="translate(115 74)">
          <circle
            id="RoundButton"
            cx="80"
            cy="80"
            r="80"
            transform="translate(105 577)"
            fill="#2e2d40"
            opacity="0"
          />
          <g
            id="RoundBorder"
            transform="translate(93 567)"
            fill="none"
            stroke="#f87a6a"
            strokeLinecap="round"
            strokeWidth="10"
            strokeDasharray="80 60"
            opacity="0"
          >
            <ellipse cx="92" cy="90" rx="92" ry="90" stroke="none" />
            <ellipse cx="92" cy="90" rx="88" ry="86" fill="none" />
          </g>
          <g id="OkSign" transform="translate(-115 -74)" opacity="0">
            <line
              id="Line_22"
              data-name="Line 22"
              x2="18"
              y2="45"
              transform="translate(271.5 715.5)"
              fill="none"
              stroke="#42e9c5"
              strokeLinecap="round"
              strokeWidth="15"
            />
            <line
              id="Line_23"
              data-name="Line 23"
              y1="57"
              x2="43"
              transform="translate(289.5 703.5)"
              fill="none"
              stroke="#42e9c5"
              strokeLinecap="round"
              strokeWidth="15"
            />
          </g>
          <g id="XSign" transform="translate(10 5)" opacity="0">
            <line
              id="Line_20"
              data-name="Line 20"
              x2="70"
              y2="70"
              transform="translate(140.5 617.5)"
              fill="none"
              stroke="#d94863"
              strokeLinecap="round"
              strokeWidth="15"
            />
            <line
              id="Line_21"
              data-name="Line 21"
              y1="70"
              x2="70"
              transform="translate(140.5 617.5)"
              fill="none"
              stroke="#d94863"
              strokeLinecap="round"
              strokeWidth="15"
            />
          </g>
        </g>
      </g>
    </SvgImage>
  );
};

export default AnimatedSubmitButton;
