// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">Tu Logotipo</div>
    <nav>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#properties">Propiedades</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
