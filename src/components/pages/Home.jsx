
import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: 1900px){
    display: none;

  @media (max-width: 430px){
    max-height: 600px;
    display: block;
    margin: auto;
`;

export default function Home() {
  return (
    <Container>
      <IconLink href="tel:7862906721" target=""><i class="fa fa-phone"></i> </IconLink>
      <IconLink href="https://wa.me/7862906721" target=""><i class="fa-brands fa-whatsapp"></i>
 </IconLink>
      <Title>Clean Pools Florida</Title>
      <Subtitle>SoFlo Swimming Pools Service and Maintenace</Subtitle>
      
      <Image src="./assets/images/resort-pool-front-page.jpg" alt="pool cleaning tools, test kit, net, chlorine floater, resort-pool-front-page" />
      
    </Container>
  );
}
