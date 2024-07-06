import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  ul li {
    margin: 0 15px;
  }

  ul li a {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Rich Taveras | Real Estate Agent</h1>
      <Nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
