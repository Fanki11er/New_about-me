import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import HeaderWrapper from "../components/HeaderWrapper";
import AnimatedEnvelope from "../components/AnimatedEnvelope";
import ContactForm from "../components/ContactForm";
import TitleHeader from "../components/TitleHeader";

const Header = styled(TitleHeader)`
  margin-bottom: 55px;
  span {
    margin-left: 10px;
    margin-right: 0;
  }
`;

const ContactFormSection = styled.section`
  width: 100%;
  padding: 65px ${({ theme }) => theme.mainPadding};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 40px 50px;
  }
  @media screen and (max-width: 560px) {
    padding: 30px;
  }
`;

const ContactPage = () => {
  const { contact_background } = useBackgroundImage();
  return (
    <>
      <SEO title="Contact" />
      <TopWrapper>
        <>
          <HeaderWrapper imageUrl={contact_background}>
            <Header>
              Contact<span>me</span>
            </Header>
          </HeaderWrapper>
          <AnimatedEnvelope />
        </>
      </TopWrapper>
      <ContactFormSection>
        <ContactForm />
      </ContactFormSection>
    </>
  );
};

export default ContactPage;
