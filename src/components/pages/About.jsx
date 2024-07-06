import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>
        I am Rich Taveras, a dedicated real estate agent with over 10 years of experience
        helping clients find their dream homes in Northern Virginia.
      </p>
    </AboutContainer>
  );
};

export default About;
