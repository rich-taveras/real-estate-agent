// src/index.js
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root')).render(
    <App />
  );
});
