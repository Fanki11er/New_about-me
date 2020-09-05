import React, { useState } from "react";
import { RefToButton, RefToMobileNav } from "../utils/types";

export const MobileNavContext = React.createContext({
  isMobileNavOpen: false,
  toggleNavModal: () => {},
  getReferences: (button: RefToButton, navigation: RefToMobileNav) => {},
  references: {
    MobileNavButton: null,
    MobileNavigation: null,
  },
});
interface Props {
  children: React.ReactChild;
}

const MobileNavProvider = (props: Props) => {
  const { children } = props;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [refToButton, setRefToButton] = useState<RefToButton>(null);
  const [refToNavigation, setRefToNavigation] = useState<RefToMobileNav>(null);

  const toggleNavModal = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const getReferences = (button: RefToButton, navigation: RefToMobileNav) => {
    if (!refToButton && button) setRefToButton(button);
    if (!refToNavigation && navigation) setRefToNavigation(navigation);
  };

  const context = {
    isMobileNavOpen,
    toggleNavModal,
    getReferences,
    references: {
      MobileNavButton: refToButton?.current,
      MobileNavigation: refToNavigation?.current,
    },
  };
  return (
    <MobileNavContext.Provider value={context}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
