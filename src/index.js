import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Archivo de estilos globales
import App from './App'; // Componente principal de la aplicación
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres medir el rendimiento de tu aplicación, puedes usar reportWebVitals
reportWebVitals();
