import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Listings from './components/Listings';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Listings />
      <Contact />
    </>
  );
};

export default App;
