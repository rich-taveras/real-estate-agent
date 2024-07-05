import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
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

const Services = () => {
  return (
    <ServicesContainer>
      <Heading>Real Estate Services by Taveras Group</Heading>
      <Paragraph>
        At Taveras Group, we offer comprehensive real estate services tailored to meet the unique needs of our clients in Fairfax, Virginia, and surrounding areas. With a commitment to excellence and client satisfaction, our team of skilled professionals is dedicated to delivering exceptional service every step of the way.
      </Paragraph>
      <Paragraph>
        <strong>1. Property Listings and Sales:</strong> Whether you're buying or selling a home in Fairfax, VA, count on Taveras Group to navigate the process with expertise and personalized attention.
      </Paragraph>
      <Paragraph>
        <strong>2. Real Estate Investment:</strong> Explore real estate investment opportunities in Fairfax, VA, with guidance from Taveras Group to maximize your investment potential.
      </Paragraph>
      <Paragraph>
        <strong>3. Property Management:</strong> Trust Taveras Group to manage your properties in Fairfax, VA, ensuring efficient operations and tenant satisfaction.
      </Paragraph>
      <Paragraph>
        <strong>4. Relocation Services:</strong> Moving to or from Fairfax, VA? Let Taveras Group facilitate a smooth transition with our relocation services.
      </Paragraph>
      <Paragraph>
        <strong>5. Consultation and Market Analysis:</strong> Gain insights into the Fairfax, VA real estate market with expert consultation and market analysis from Taveras Group.
      </Paragraph>
      <Paragraph>
        Whether you're a first-time homebuyer, seasoned investor, or seeking property management solutions in Fairfax, Virginia, Taveras Group is here to assist you. Contact us today to schedule a consultation and experience the Taveras Group difference.
      </Paragraph>
    </ServicesContainer>
  );
};

export default Services;
