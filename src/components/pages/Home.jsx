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
  color: #0A74DA;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 200px; /* Tamaño ajustable según tu preferencia */
  height: auto;
  border-radius: 50%; /* Para un borde redondeado en la imagen */
  margin-top: 20px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #0A74DA;

  @media (max-width: 430px) {
    max-height: 600px;
    display: block;
    margin: auto;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Container>
      <IconLink href="tel:7542759057" target="_blank"><i className="fa fa-phone"></i></IconLink>
      <IconLink href="https://wa.me/7542759057" target="_blank"><i className="fab fa-whatsapp"></i></IconLink>
      <Title>Rich Taveras</Title>
      <Subtitle>Real Estate Agent in Northern Virginia</Subtitle>
      <Image src="./assets/images/mypic.jpg" alt="Rich Taveras - Real Estate Agent" />
      <Paragraph>Explore Northern Virginia's vibrant real estate market with Rich Taveras. </Paragraph>
      <Paragraph>Contact me today to schedule a consultation and find your dream home.</Paragraph>
    </Container>
  );
};

export default Home;
