// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyList from './components/PropertyList';
import ContactForm from './components/ContactForm';
import './App.css';

const properties = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    title: 'Propiedad 1',
    description: 'Descripción de la propiedad 1',
    price: '$100,000'
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    title: 'Propiedad 2',
    description: 'Descripción de la propiedad 2',
    price: '$200,000'
  }
  // Añade más propiedades según sea necesario
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="properties">
          <h2>Propiedades Destacadas</h2>
          <PropertyList properties={properties} />
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
