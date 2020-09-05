import React, { useState, useEffect } from "react";
interface Clickable {
  onClick: Function;
}
interface Hidable {
  show: Function;
}

export const MobileNavContext = React.createContext({
  isMobileNavOpen: false,
  toggleNavModal: () => {},
  getReferences: (button: Clickable, navigation: Hidable) => {},
});
interface Props {
  children: React.ReactChild;
}

const MobileNavProvider = (props: Props) => {
  const { children } = props;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [refToButton, setRefToButton] = useState<Clickable | null>(null);
  const [refToNavigation, setRefToNavigation] = useState<Hidable | null>(null);

  const toggleNavModal = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const getReferences = (button: Clickable, navigation: Hidable) => {
    if (!refToButton && button) setRefToButton(button);
    if (!refToNavigation && navigation) setRefToNavigation(navigation);
  };

  useEffect(() => {});

  const context = {
    isMobileNavOpen,
    toggleNavModal,
    getReferences,
  };
  return (
    <MobileNavContext.Provider value={context}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
