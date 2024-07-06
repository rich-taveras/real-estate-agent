// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import React from 'react';

import styled from 'styled-components';
import Footer from './pages/Footer';

const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #0A74DA;
`;

const NavBar = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  padding: 15px;
  

  @media (max-width: 430px){
  display: none;
  }
`;

const Logo = styled.img`
  max-height: 100px;
  border-radius: 20%;

  @media (max-width: 430px){
  max-height: 600px;
  display: block;
  margin: auto;
  
    
  }
`;

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <Logo src="assets/images/logo.jpg" alt="clean pools florida Company Logo" />
    <NavBar>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#properties"
          onClick={() => handlePageChange('Properties')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Properties"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Properties' ? 'nav-link active' : 'nav-link'}
        >
          Properties
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#buy"
          onClick={() => handlePageChange('Buy')}
          // Check to see if the currentPage is `Buy`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Buy' ? 'nav-link active' : 'nav-link'}
        >
          Buy
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#rent"
          onClick={() => handlePageChange('Rent')}
          // Check to see if the currentPage is `Rent`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Rent' ? 'nav-link active' : 'nav-link'}
        >
          Buy
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#sell"
          onClick={() => handlePageChange('Sell')}
          // Check to see if the currentPage is `Sell`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Sell' ? 'nav-link active' : 'nav-link'}
        >
          Sell
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#services"
          onClick={() => handlePageChange('Services')}
          // Check to see if the currentPage is `Services`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </li>
      <div>
        <IconLink href="https://twitter.com/taverasr" target="_blank"><i class="fab fa-twitter"></i></IconLink>
        <IconLink href="https://instagram.com/rich_taveras" target="_blank"><i class="fab fa-instagram"></i></IconLink>
        <IconLink href="https://facebook.com/" target="_blank"><i class="fab fa-facebook"></i></IconLink>
      
        
      </div>
    </ul>
    </NavBar>
   {/* Add your page content here */}
      {/* ... (your existing code) */}
      <Footer />
    </>
  );
}

export default NavTabs;
