import { AssetUrl } from "./types";

export const getImages = (nodes: AssetUrl[]) => {
  const images = {};
  nodes.forEach(node => {
    const url = node.publicURL.match(/\w+[.]/i);
    images[url![0].replace(".", "").toLowerCase()] = node.publicURL;
  });
  return images;
};
