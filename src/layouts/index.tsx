import React from "react";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "styled-components";
import mainTheme from "../assets/styles/mainTheme";
import Footer from "../components/Footer";
import PageColorsProvider from "../Providers/PageColorsProvider";
import ImagesProvider from "../Providers/ImagesProvider";
import MobileNavigation from "../components/MobileNavigation";
interface Props {
  children: React.ReactChild;
  location: Location;
}
const MainLayout = (props: Props) => {
  const { children, location } = props;

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <PageColorsProvider location={location}>
        <ImagesProvider>
          <>
            <MobileNavigation />
            <Navigation />
            {children}
            <Footer />
          </>
        </ImagesProvider>
      </PageColorsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
