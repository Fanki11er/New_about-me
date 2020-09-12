import React, { useState } from "react";
import styled from "styled-components";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import { useCookies } from "react-cookie";
import { ModalProps } from "../utils/interfaces";

const CookiesInfoWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 90%;
  max-width: 3000px;
  min-height: 320px;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 75px;
  margin-left: 5%;
  z-index: 100;
  padding: 55px;
  display: ${(props: ModalProps) => (props.isVisible ? "none" : "flex")};
  opacity: 0;
  animation-name: show;
  animation-duration: 1.5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;

  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;

const CookieTextWrapper = styled.section`
  position: relative;
  width: 75%;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CookiesParagraph = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.darkerBlue};
  margin: 5px 0;
  line-height: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.turquoise};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  border: none;
  margin: 0 60px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 560px) {
    transform: scale(0.8);
  }

  span {
    margin: 0 4px;
  }
  :hover {
    span {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

const AdditionalInfoLink = styled.a`
  color: ${({ theme }) => theme.orange};
  margin-left: 5px;
  :visited {
    color: ${({ theme }) => theme.orange};
  }
`;

const CookieImage = styled.img`
  width: 150px;
  position: absolute;
  top: 0;
  right: -200px;
  margin: 30px 30px 0 0;
  @media screen and (max-width: 768px) {
    left: 50px;
    top: -150px;
    width: 110px;
  }
`;

const CookiesInfoModal = () => {
  const { cookie } = useBackgroundImage();
  const [cookies, setCookie] = useCookies([
    "infoRed",
    "gatsby-gdpr-google-analytics",
  ]);
  const [isInfoRed, setIsInfoRed] = useState<boolean>(
    cookies.infoRed ? true : false
  );

  const hideCookieInfo = (userOption: boolean) => {
    setCookie("infoRed", true, { maxAge: 5184000 });
    setCookie("gatsby-gdpr-google-analytics", userOption);
    setIsInfoRed(true);
  };
  return (
    <CookiesInfoWrapper isVisible={isInfoRed}>
      <CookieTextWrapper>
        <CookiesParagraph>
          If you agree, I will use the Analytical cookies of Google Analytics
          service to analyse the use of this website.
        </CookiesParagraph>
        <CookiesParagraph>
          Google Analytics generate statistical and other information about this
          website’s use.
        </CookiesParagraph>
        <CookiesParagraph>
          Details and privacy policy of Google analytics cookies can be found
          here:
          <AdditionalInfoLink
            href={"https://policies.google.com/technologies/types?hl=en"}
            target={"_blank"}
          >
            Google Analytics
          </AdditionalInfoLink>
          .
        </CookiesParagraph>
        <CookiesParagraph>
          If you do not consent to the use of Cookies, you may block or disable
          them using your browser settings:
          <AdditionalInfoLink
            href={"https://support.google.com/chrome/answer/95647?hl=en"}
            target={"_blank"}
          >
            Google Chrome
          </AdditionalInfoLink>
          ,
          <AdditionalInfoLink
            href={
              "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            }
            target={"_blank"}
          >
            Firefox
          </AdditionalInfoLink>
          ,
          <AdditionalInfoLink
            href={"https://support.apple.com/en-gb/HT201265"}
            target={"_blank"}
          >
            Safari
          </AdditionalInfoLink>
          ,
          <AdditionalInfoLink
            href={
              "https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies"
            }
            target={"_blank"}
          >
            Microsoft Edge
          </AdditionalInfoLink>
        </CookiesParagraph>
        <CookieImage src={cookie} alt={"Cookie"} />
      </CookieTextWrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            hideCookieInfo(true);
          }}
        >
          I <span>agree</span>
        </Button>
        <Button
          onClick={() => {
            hideCookieInfo(false);
          }}
        >
          I <span>don't </span>agree
        </Button>
      </ButtonsWrapper>
    </CookiesInfoWrapper>
  );
};

export default CookiesInfoModal;
