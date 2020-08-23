import React, { useState, useEffect } from "react";
import mainTheme from "../assets/styles/mainTheme";

export const PageColorsContext = React.createContext({
  currentColor: mainTheme.darkerBlue,
});
interface Props {
  children: React.ReactChild;
  location: Location;
}

const PageColorsProvider = (props: Props) => {
  const {
    children,
    location: { pathname },
  } = props;
  const locationsColors = {
    home: mainTheme.darkerBlue,
    projects: mainTheme.projects,
    contact: mainTheme.contact,
    about: mainTheme.dark,
    notFound: mainTheme.darkBlue,
  };

  const [currentColor, setCurrentColor] = useState<string>(
    mainTheme.darkerBlue
  );

  useEffect(() => {
    switch (pathname) {
      case "/Projects": {
        setCurrentColor(locationsColors.projects);
        break;
      }
      case "/Contact": {
        setCurrentColor(locationsColors.contact);
        break;
      }
      case "/About": {
        setCurrentColor(locationsColors.about);
        break;
      }
      case "/404": {
        setCurrentColor(locationsColors.notFound);
        break;
      }
      default: {
        setCurrentColor(locationsColors.home);
        break;
      }
    }
  }, [pathname]);

  const context = {
    currentColor: currentColor,
  };
  return (
    <PageColorsContext.Provider value={context}>
      {children}
    </PageColorsContext.Provider>
  );
};

export default PageColorsProvider;
