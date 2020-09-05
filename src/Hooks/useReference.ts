import { useEffect, useRef, MutableRefObject } from "react";

const useReference = () => {
  let reference: MutableRefObject<any> = { current: null };
  useEffect(() => {
    reference = useRef(null);
  }, []);
  return reference;
};

export default useReference;
