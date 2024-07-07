import React from 'react';
import './App.css';

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
      </footer>
    </div>
  );
}

export default App;
