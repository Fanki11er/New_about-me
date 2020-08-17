import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import TopWrapper from "../components/TopWrapper";
import useBackgroundImage from "../Hooks/useBackgroundImage";
import HeaderWrapper from "../components/HeaderWrapper";
import AnimatedEnvelope from "../components/AnimatedEnvelope";
import ContactForm from "../components/ContactForm";

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: ${({ theme }) => theme.veryLightBlue};
  margin-bottom: 55px;
  span {
    color: ${({ theme }) => theme.orange};
    margin-left: 10px;
  }
`;

const StyledHeaderWrapper = styled(HeaderWrapper)`
  width: 350px;
  justify-content: flex-start;
  background-position-y: 25px;
`;

const ContactFormSection = styled.section`
  width: 100%;
  padding: 65px ${({ theme }) => theme.mainPadding};
  display: flex;
  justify-content: center;
`;

const ContactPage = () => {
  const { contact_background } = useBackgroundImage();
  return (
    <>
      <SEO title="Contact" />
      <TopWrapper>
        <>
          <StyledHeaderWrapper imageUrl={contact_background}>
            <Header>
              Contact<span>me</span>
            </Header>
          </StyledHeaderWrapper>
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
