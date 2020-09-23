import React, { useState, useEffect } from "react";
import { RefToButton, RefToMobileNav } from "../utils/types";
import gsap from "gsap";

export const MobileNavContext = React.createContext({
  isMobileNavOpen: false,
  toggleNavModal: () => {},
  getReferences: (button: RefToButton, navigation: RefToMobileNav) => {},
  isInProgress: false,
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
  const [isInProgress, setIsInProgress] = useState(false);

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
      const arrow = buttonRef.querySelector("#Arrow");
      const tl = gsap.timeline();
      tl.set(navigation!, {
        clipPath: "circle(100px at 90% -10%)",
        translateX: 700,
      });
      tl.set(links!, { opacity: 0, display: "none" });
      tl.set(buttonRef, { right: -10 });
      tl.set(arrow!, {
        translateX: "272",
        rotate: -90,
        transformOrigin: "center",
      });

      tl.to(navigation!, { translateX: 0 })
        .to(navigation!, {
          clipPath: "circle(1000px at 90% -10%)",
          duration: "1",
        })
        .to(links!, { display: "initial" }, "=-0.5")
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
        .to(buttonRef!, { right: "+=9", duration: 0.5 }, "-=1")
        .to(arrow!, { translateX: "-=15", duration: 0.5 }, "-=1")
        .to(arrow!, { rotate: 90, duration: 0.5 }, "-=0.6")
        .to(arrow!, { fill: "url(#MenuButton)" })
        .paused(true);

      if (isMobileNavOpen) {
        setIsInProgress(true);
        tl.play().then(() => {
          setIsInProgress(false);
        });
      } else {
        tl.timeScale(1.2).reverse(10).delay(0.2);
      }
    }
  }, [isMobileNavOpen]);

  const context = {
    isMobileNavOpen,
    toggleNavModal,
    getReferences,
    isInProgress,
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
