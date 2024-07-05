import React from 'react';
import styled from 'styled-components';

// Estilos con Styled Components
const Container = styled.div`
  max-width: 100%;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #343a40;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #007bff;

  @media (max-width: 430px) {
    max-height: 600px;
    display: block;
    margin: auto;
  }
`;

const Home = () => {
  return (
    <Container>
      <IconLink href="tel:7542759057" target="_blank"><i className="fa fa-phone"></i></IconLink>
      <IconLink href="https://wa.me/7542759057" target="_blank"><i className="fab fa-whatsapp"></i></IconLink>
      <Title>Taveras Group</Title>
      <Subtitle>Real Estate Agent in Northern Virginia</Subtitle>
      <Image src="./assets/images/luxury-property.jpg" alt="Luxurious property with modern architecture and pool" />
    </Container>
  );
};

export default Home;
