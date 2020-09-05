import React, { useState, useEffect } from "react";

export const MobileNavContext = React.createContext({
  isMobileNavOpen: false,
  toggleNavModal: () => {},
});
interface Props {
  children: React.ReactChild;
}

const MobileNavProvider = (props: Props) => {
  const { children } = props;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNavModal = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {});

  const context = {
    isMobileNavOpen,
    toggleNavModal,
  };
  return (
    <MobileNavContext.Provider value={context}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
