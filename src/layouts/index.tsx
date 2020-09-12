import React from "react";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";
import mainTheme from "../assets/styles/mainTheme";
import Footer from "../components/Footer";
import PageColorsProvider from "../Providers/PageColorsProvider";
import ImagesProvider from "../Providers/ImagesProvider";
import MobileNavigation from "../components/MobileNavigation";
import MobileMenuButton from "../components/MobileMenuButton";
import MobileNavProvider from "../Providers/MobileNavProvider";
import CookiesInfoModal from "../components/CookiesInfoModal";
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
          <MobileNavProvider>
            <CookiesProvider>
              <MobileNavigation />
              <MobileMenuButton />
              <Navigation />
              {children}
              <CookiesInfoModal />
              <Footer />
            </CookiesProvider>
          </MobileNavProvider>
        </ImagesProvider>
      </PageColorsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
