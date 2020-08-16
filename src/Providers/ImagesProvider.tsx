import React, { ReactChild } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MainPageImages } from "../utils/types";
import { getImages } from "../utils/utils";

export const ImagesContext = React.createContext({
  images: {
    hero: "",
    logo: "",
    projects_background: "",
    background: "",
    contact_background: "",
  },
});
interface Props {
  children: ReactChild;
}

const ImagesProvider = (props: Props) => {
  const { children } = props;

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { dir: { regex: "/image/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const {
    allFile: { nodes },
  } = data as any;

  const images = getImages(nodes) as MainPageImages;

  const context = {
    images,
  };
  return (
    <ImagesContext.Provider value={context}>{children}</ImagesContext.Provider>
  );
};

export default ImagesProvider;
