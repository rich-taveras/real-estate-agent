import React from 'react';
import styled from 'styled-components';

const PropertiesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const PropertyList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PropertyCard = styled.li`
  width: calc(50% - 10px);
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const PropertyTitle = styled.h3`
  color: #555;
`;

const PropertyDescription = styled.p`
  color: #777;
`;

const Properties = () => {
  // Ejemplo de propiedades (puedes sustituir con datos reales de tu aplicación)
  const properties = [
    {
      id: 1,
      title: 'Cozy Suburban Home',
      description: 'Beautiful 3-bedroom home with spacious backyard in Fairfax, VA.',
    },
    {
      id: 2,
      title: 'Modern Condominium',
      description: 'Luxurious 2-bedroom condo with city views, conveniently located in Fairfax.',
    },
    {
      id: 3,
      title: 'Commercial Office Space',
      description: 'Prime commercial office space available for lease in downtown Fairfax.',
    },
    {
      id: 4,
      title: 'Investment Opportunity',
      description: 'Income-generating property with development potential in Fairfax, VA.',
    },
  ];

  return (
    <PropertiesContainer>
      <Heading>Explore Properties in Fairfax, VA with Taveras Group</Heading>
      <PropertyList>
        {properties.map((property) => (
          <PropertyCard key={property.id}>
            <PropertyTitle>{property.title}</PropertyTitle>
            <PropertyDescription>{property.description}</PropertyDescription>
          </PropertyCard>
        ))}
      </PropertyList>
      <Paragraph>
        Explore Fairfax, VA's vibrant real estate market with Taveras Group. Contact us today to schedule a consultation and begin your journey to finding the perfect property.
      </Paragraph>
    </PropertiesContainer>
  );
};

export default Properties;
