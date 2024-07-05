// src/components/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <Heading>About Me</Heading>
      <hr />
      <Paragraph>
        Welcome to Taveras Group Realty, your trusted partner in real estate services in Northern Virginia. My name is Rich Taveras, and I am dedicated to helping you find your dream home or sell your property at the best price. With years of experience in the real estate market, I bring a wealth of knowledge and a personalized approach to each transaction.
      </Paragraph>
      <Paragraph>
        At Taveras Group Realty, we understand that buying or selling a home is more than just a transaction; it’s a life-changing experience. That's why I am committed to providing exceptional, personalized service
        </Paragraph>
        </AboutContainer>
  );
}
