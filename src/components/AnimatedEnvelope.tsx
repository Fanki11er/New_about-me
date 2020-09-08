import React, { useRef, useEffect, RefObject } from "react";
import styled from "styled-components";
import gsap from "gsap";

const SvgImage = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  opacity: 0;
  margin: 0 15vw 40px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 250px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 12vw 40px 0;
    width: 180px;
  }

  @media screen and (max-width: 960px) {
    width: 150px;
    margin: 0 12vw 0 0;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    margin: 0 12vw -40px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const AnimatedEnvelope = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animateProjects = (svgRef: RefObject<SVGSVGElement>) => {
    const svg = svgRef.current;
    const page1 = svg?.querySelector("#Page1");
    const page2 = svg?.querySelector("#Page2");
    const envelopeTop = svg?.querySelector("#EnvelopeTop");
    const envelopeCover = svg?.querySelector("#EnvelopeCover");

    gsap.set([svg], { scale: "0.2", x: "+=80%", y: "-=40%", opacity: "0" });
    gsap.set([page1!, page2!], { scaleY: "0.7", y: "+=215" });
    gsap.set(page1!, { x: "-=70" });
    gsap.set(page2!, { x: "+=70" });
    gsap.set(envelopeTop!, { opacity: "0" });
    gsap.set(envelopeCover!, { opacity: "1" });

    const tl = gsap.timeline();
    tl.to(svg, { opacity: "1", delay: "0.5", duration: "1" })
      .to(
        svg,
        {
          scale: "1",
          x: "-=80%",
          y: "+=40%",
          duration: "1.5",
          ease: "Power2.easeOut",
        },
        "-=1"
      )
      .to(envelopeTop!, { opacity: "1", duration: "1" }, "-=0.2")
      .to(envelopeCover!, { opacity: "0", duration: "0.5" }, "-=1")
      .to([page1!, page2!], { y: "-=215", duration: "1.5" })
      .to([page1!, page2!], { scaleY: "1", duration: "0.3" }, "-=1.42")
      .to(page1!, { x: "+=70", duration: "1.3" }, "-=1.3")
      .to(page2!, { x: "-=70", duration: "1.3" }, "-=1.3");
  };

  useEffect(() => {
    animateProjects(svgRef);
  }, []);
  return (
    <SvgImage
      xmlns="http://www.w3.org/2000/svg"
      width="276.558"
      height="323.893"
      viewBox="0 0 276.558 323.893"
      ref={svgRef}
    >
      <g id="EnvelopeWithCover" transform="translate(-261.167 -151.678)">
        <g id="AnimatedEnvelope" transform="translate(200 -143)">
          <g
            id="EnvelopeTop"
            transform="translate(207.305 406.364) rotate(45)"
            fill="#e6e6e6"
          >
            <path
              d="M 136.4919891357422 135.8204650878906 L 0.5688912272453308 135.8204650878906 L 16.1484203338623 15.47931575775146 L 136.4919891357422 0.5657787322998047 L 136.4919891357422 135.8204650878906 Z"
              stroke="none"
            />
            <path
              d="M 135.9919891357422 1.131561279296875 L 16.59453582763672 15.92784881591797 L 1.137802124023438 135.3204650878906 L 135.9919891357422 135.3204650878906 L 135.9919891357422 1.131561279296875 M 136.9919891357422 0 L 136.9919891357422 136.3204650878906 L 0 136.3204650878906 L 15.70232391357422 15.03077697753906 L 136.9919891357422 0 Z"
              stroke="none"
              fill="#0f0101"
            />
          </g>
          <g id="Page2" transform="translate(61.167 294.678)">
            <path
              id="Path_685"
              data-name="Path 685"
              d="M615.071,374.285a5.363,5.363,0,0,0-6.862-3.208l-6.532,2.369L562.863,387.52l-11.83,4.287a5.355,5.355,0,1,0,3.649,10.07l8.181-2.968,49-17.767c.111-.039.218-.086.325-.133A5.353,5.353,0,0,0,615.071,374.285Z"
              transform="translate(-542.311 -293.344)"
              fill="#fff"
            />
            <g id="Page2-2" data-name="Page2" transform="translate(0 0)">
              <path
                id="Path_698"
                data-name="Path 698"
                d="M5,0H105.131a5,5,0,0,1,5,5V119.9a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z"
                transform="matrix(0.94, -0.342, 0.342, 0.94, 0, 37.667)"
                fill="#f87269"
              />
              <path
                id="Path_687"
                data-name="Path 687"
                d="M584.118,287.585a5.363,5.363,0,0,0-6.862-3.208L555.112,292.4a5.355,5.355,0,1,0,3.649,10.07l7.007-2.54,4.639-1.683,10.5-3.808A5.359,5.359,0,0,0,584.118,287.585Z"
                transform="translate(-503.68 -241.093)"
                fill="#fff"
              />
              <path
                id="Path_684"
                data-name="Path 684"
                d="M599.223,330.565a5.363,5.363,0,0,0-6.862-3.208L553.8,341.342l-18.619,6.75a5.353,5.353,0,0,0,3.649,10.065l14.97-5.427,42.211-15.3A5.363,5.363,0,0,0,599.223,330.565Z"
                transform="translate(-492.29 -270.365)"
                fill="#fff"
              />
              <path
                id="Path_697"
                data-name="Path 697"
                d="M615.071,374.285a5.363,5.363,0,0,0-6.862-3.208l-6.532,2.369L562.863,387.52l-11.83,4.287a5.355,5.355,0,1,0,3.649,10.07l8.181-2.968,49-17.767c.111-.039.218-.086.325-.133A5.353,5.353,0,0,0,615.071,374.285Z"
                transform="translate(-500.676 -298.044)"
                fill="#fff"
              />
              <path
                id="Path_696"
                data-name="Path 696"
                d="M615.071,374.285a5.363,5.363,0,0,0-6.862-3.208l-6.532,2.369L562.863,387.52l-11.83,4.287a5.355,5.355,0,1,0,3.649,10.07l8.181-2.968,49-17.767c.111-.039.218-.086.325-.133A5.353,5.353,0,0,0,615.071,374.285Z"
                transform="translate(-493.961 -281.256)"
                fill="#fff"
              />
            </g>
          </g>
          <g id="Page1" transform="translate(226.77 294.756)">
            <g id="Group_164" data-name="Group 164" transform="translate(0 0)">
              <path
                id="Path_688"
                data-name="Path 688"
                d="M690.661,317.2H587.008a3.642,3.642,0,0,0-3.067,1.683,3.6,3.6,0,0,0-.574,1.957v69.8l29.85,13.531,4.206,1.906,6.643,3.011a3.007,3.007,0,0,0,2.476,0l6.643-3.011,20.791-9.423,19.377-8.785,20.949-9.492V320.836A3.643,3.643,0,0,0,690.661,317.2Z"
                transform="translate(-583.367 -317.195)"
                fill="#558eb9"
              />
              <path
                id="Path_689"
                data-name="Path 689"
                d="M695.542,431.2H634.721a5.353,5.353,0,0,0-5.345,5.144,1.722,1.722,0,0,0-.009.21,5.362,5.362,0,0,0,5.354,5.354h60.821a5.354,5.354,0,0,0,0-10.708Z"
                transform="translate(-609.664 -382.367)"
                fill="#fff"
              />
              <path
                id="Path_692"
                data-name="Path 692"
                d="M706.807,373.211a5.357,5.357,0,0,0-5.029-3.517H678.221a5.358,5.358,0,0,0-4.874,3.144,5.294,5.294,0,0,0-.48,2.21,5.362,5.362,0,0,0,5.354,5.354h23.557a5.353,5.353,0,0,0,5.029-7.191Z"
                transform="translate(-634.532 -347.208)"
                fill="#fff"
              />
            </g>
            <path
              id="Path_694"
              data-name="Path 694"
              d="M42.273-18.546l-.932,2.4s69.374-32.09,69.374-30.2l.013,61.8c0,1.886-3.007,3.414-6.715,3.414H6.641c-3.709,0-6.715-1.529-6.715-3.414l-.151-55.43C-.226-41.873,38.564-18.546,42.273-18.546Z"
              transform="translate(0.227 107.39)"
              fill="#5686b6"
            />
            <path
              id="Path_695"
              data-name="Path 695"
              d="M695.542,431.2H634.721a5.353,5.353,0,0,0-5.345,5.144,1.722,1.722,0,0,0-.009.21,5.362,5.362,0,0,0,5.354,5.354h60.821a5.354,5.354,0,0,0,0-10.708Z"
              transform="translate(-609.664 -360.878)"
              fill="#fff"
            />
          </g>
          <g
            id="EnvelopeBottom"
            transform="translate(110.748 501.047)"
            fill="#e6e6e6"
          >
            <path
              d="M 191.5807952880859 117.0241928100586 L 1.824587225914001 117.0241928100586 C 1.0942063331604 117.0241928100586 0.4999920129776001 116.3181228637695 0.4999920129776001 115.4502639770508 L 0.4999920129776001 2.073953628540039 C 0.4999920129776001 1.245271325111389 1.041677117347717 0.5641188621520996 1.726432800292969 0.504278838634491 L 95.90261077880859 43.0269775390625 L 96.10708618164062 43.11931228637695 L 96.31198883056641 43.0279541015625 L 191.6778564453125 0.5041834115982056 C 192.3631134033203 0.5634181499481201 192.9053802490234 1.244847536087036 192.9053802490234 2.073953628540039 L 192.9053802490234 115.4502639770508 C 192.9053802490234 116.3181228637695 192.3111877441406 117.0241928100586 191.5807952880859 117.0241928100586 Z"
              stroke="none"
            />
            <path
              d="M 191.7440185546875 1.022125244140625 L 96.51563262939453 43.484619140625 L 96.10580444335938 43.66734313964844 L 95.69686126708984 43.48269653320312 L 1.659439086914062 1.02264404296875 C 1.288406372070312 1.125457763671875 1 1.565208435058594 1 2.073944091796875 L 1 115.4502487182617 C 1 116.0323944091797 1.377609252929688 116.5241928100586 1.8245849609375 116.5241928100586 L 191.5807800292969 116.5241928100586 C 192.0277557373047 116.5241928100586 192.4053649902344 116.0323944091797 192.4053649902344 115.4502487182617 L 192.4053649902344 2.073944091796875 C 192.4053649902344 1.564315795898438 192.1159973144531 1.123939514160156 191.7440185546875 1.022125244140625 M 1.8245849609375 0 L 96.10838317871094 42.57129669189453 L 191.5807800292969 0 C 192.5884552001953 0 193.4053649902344 0.9285430908203125 193.4053649902344 2.073944091796875 L 193.4053649902344 115.4502487182617 C 193.4053649902344 116.5956497192383 192.5884552001953 117.5241928100586 191.5807800292969 117.5241928100586 L 1.8245849609375 117.5241928100586 C 0.8168792724609375 117.5241928100586 0 116.5956497192383 0 115.4502487182617 L 0 2.073944091796875 C 0 0.9285430908203125 0.8168792724609375 0 1.8245849609375 0 Z"
              stroke="none"
              fill="#070000"
            />
          </g>
        </g>
        <g
          id="EnvelopeCover"
          transform="translate(311.751 357.574)"
          fill="#e6e6e6"
          opacity="0"
        >
          <path
            d="M 92.17575073242188 77.87664794921875 C 85.82337188720703 73.19965362548828 80.01543426513672 68.9273681640625 74.39653015136719 64.79414367675781 C 37.83221817016602 37.8977165222168 19.47909736633301 24.39731216430664 10.07116985321045 16.2508602142334 C 5.606645584106445 12.38500308990479 3.048717260360718 9.621336936950684 1.777288556098938 7.289931774139404 C 0.6705797910690308 5.260573863983154 0.5174166560173035 3.577901124954224 0.5015913248062134 1.364484906196594 C 7.613821029663086 1.351776361465454 87.98971557617188 1.210384130477905 141.8196258544922 1.210384130477905 C 177.9518585205078 1.210384130477905 188.8049163818359 1.274270534515381 190.9550170898438 1.334990620613098 C 190.939208984375 3.57915997505188 190.7772216796875 5.278447151184082 189.5697937011719 7.323907852172852 C 188.1795196533203 9.679098129272461 185.3733062744141 12.48190784454346 180.4708557128906 16.41178894042969 C 170.138427734375 24.69447898864746 149.9390716552734 38.4726448059082 109.6965026855469 65.92245483398438 C 104.139518737793 69.71291351318359 98.39608764648438 73.63056945800781 92.17575073242188 77.87664794921875 Z"
            stroke="none"
          />
          <path
            d="M 141.8196105957031 1.710372924804688 C 89.05120849609375 1.710372924804688 10.77349853515625 1.846244812011719 1.008224487304688 1.863571166992188 C 1.046417236328125 3.759834289550781 1.248397827148438 5.275825500488281 2.21624755859375 7.050521850585938 C 3.457748413085938 9.3270263671875 5.981216430664062 12.04792785644531 10.39842224121094 15.87284851074219 C 19.79132080078125 24.00627517700195 38.13899230957031 37.5026741027832 74.69251251220703 64.39117431640625 C 80.22731018066406 68.46251678466797 85.94534301757812 72.66867828369141 92.18665313720703 77.2637939453125 C 98.2947998046875 73.09439849853516 103.9448013305664 69.240478515625 109.4146194458008 65.50947570800781 C 149.6466369628906 38.06684875488281 169.8406982421875 24.29230117797852 180.1581115722656 16.02167510986328 C 185.0112152099609 12.13132476806641 187.7810668945312 9.370452880859375 189.1391906738281 7.069725036621094 C 190.2021789550781 5.268974304199219 190.411865234375 3.790191650390625 190.4490814208984 1.823394775390625 C 187.4260406494141 1.766769409179688 175.8656616210938 1.710372924804688 141.8196105957031 1.710372924804688 M 141.8196258544922 0.71038818359375 C 170.1887359619141 0.71038818359375 191.4564971923828 0.749114990234375 191.4564971923828 0.8653717041015625 C 191.4564971923828 11.44342803955078 189.9683380126953 11.72612762451172 92.16478729248047 78.489501953125 C 1.4881591796875 11.72612762451172 -1.52587890625e-05 11.44342803955078 -1.52587890625e-05 0.8653717041015625 C -1.52587890625e-05 0.8653717041015625 85.09176635742188 0.71038818359375 141.8196258544922 0.71038818359375 Z"
            stroke="none"
            fill="#0c0b0b"
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default AnimatedEnvelope;
