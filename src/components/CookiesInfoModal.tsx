import React from "react";
import styled from "styled-components";
//import { useCookies } from 'react-cookie';

const CookiesInfoWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 90%;
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
`;

const CookieTextWrapper = styled.section`
  width: 75%;
  font-weight: bold;
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
`;

const CookiesInfoModal = () => {
  return (
    <CookiesInfoWrapper>
      <CookieTextWrapper>
        <CookiesParagraph>
          If you agree, I will use the Analytical cookies of Google Analytics
          service to analyse the use of this website.
        </CookiesParagraph>
        <CookiesParagraph>
          Google Analytics generate statistical and other information about this
          website’s use.
          <CookiesParagraph>
            <CookiesParagraph>
              Details and privacy policy of Google analytics cookies can be
              found here:
              <AdditionalInfoLink>Google Analytics</AdditionalInfoLink>.
            </CookiesParagraph>
            If you do not consent to the use of Cookies, you may block or
            disable them using your browser settings:
            <AdditionalInfoLink>Google Chrome</AdditionalInfoLink>,
            <AdditionalInfoLink>Firefox</AdditionalInfoLink>,
            <AdditionalInfoLink>Safari</AdditionalInfoLink>,
            <AdditionalInfoLink>Microsoft Edge</AdditionalInfoLink>
          </CookiesParagraph>
        </CookiesParagraph>
      </CookieTextWrapper>
      <ButtonsWrapper>
        <Button>
          I <span>agree</span>
        </Button>
        <Button>
          I <span>don't </span>agree
        </Button>
      </ButtonsWrapper>
    </CookiesInfoWrapper>
  );
};

export default CookiesInfoModal;

/* const [cookies, setCookie] = useCookies(['infoSaw']);
  const [cookiesInfoRed, setCookiesIfoRed] = useState(cookies.infoSaw);
  useEffect(() => {
    initGA();
    pageView();
  }, []);

  const hideCookieInfo = () => {
    setCookie('infoSaw', true, { maxAge: 5184000 });
    setCookiesIfoRed(true); 
  }; */
