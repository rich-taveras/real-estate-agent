import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="left-links">
          <ul>
            <li><a href="/buy">Buy</a></li>
            <li><a href="/sell">Sell</a></li>
          </ul>
        </nav>
        <div className="logo">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <nav className="right-links">
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        {/* Contenido principal de la página */}
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="https://twitter.com/taverasr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com/rich_taveras" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
