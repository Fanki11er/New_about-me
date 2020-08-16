import { AssetUrl } from "./types";

export const getImages = (nodes: AssetUrl[]) => {
  const images = {};
  nodes.forEach(node => {
    const [name] = node.publicURL.match(/\w+[.]/i);
    images[name.replace(".", "").toLowerCase()] = node.publicURL;
  });
  return images;
};
