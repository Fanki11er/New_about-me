import { useEffect, useContext, RefObject } from "react";
import { PageColorsContext } from "../Providers/PageColorsProvider";

const useChangeSvgColor = (svgId: string, svgRef: RefObject<SVGSVGElement>) => {
  const { currentColor } = useContext(PageColorsContext);
  useEffect(() => {
    const svg = svgRef.current;
    const footerWrapper = svg?.getElementById(svgId);
    footerWrapper?.setAttribute("fill", currentColor);
  }, [currentColor]);
};

export default useChangeSvgColor;
