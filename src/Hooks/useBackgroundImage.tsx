import { useContext } from "react";
import { ImagesContext } from "../Providers/ImagesProvider";

const useBackgroundImage = () => {
  const { images } = useContext(ImagesContext);
  return images;
};

export default useBackgroundImage;
