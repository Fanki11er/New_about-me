import React, { useState, useEffect } from "react";
import { RefToButton, RefToMobileNav } from "../utils/types";
import gsap from "gsap";

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

  useEffect(() => {
    if (refToButton && refToNavigation) {
      const buttonRef = refToButton?.current;
      const navigation = refToNavigation?.current;
      const links = navigation.querySelectorAll("li");
      const tl = gsap.timeline();
      tl.set(links!, { opacity: 0 });

      tl.fromTo(
        navigation!,
        { clipPath: "circle(100px at 90% -10%)" },
        {
          clipPath: "circle(1000px at 90% -10%)",
          duration: "1",
        }
      )
        .to(
          links,
          {
            duration: 0.4,
            opacity: 1,
            stagger: {
              grid: [6, 1],
              from: "start",
              amount: 0.5,
            },
          },
          "=-0.7"
        )
        .paused(true);

      if (isMobileNavOpen) {
        tl.play();
      } else {
        tl.timeScale(2).reverse(2);
      }
    }
  }, [isMobileNavOpen]);

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
