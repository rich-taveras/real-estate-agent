import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <ProfileImage src="/images/mypic.jpg" alt="Rich Taveras" />
      <h2>Welcome to Rich Taveras' Real Estate</h2>
      <p>Your trusted real estate agent in Northern Virginia.</p>
    </HomeContainer>
  );
};

export default Home;
