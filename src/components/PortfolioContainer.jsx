import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Blog';
import Properties from './pages/Buy';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// import Portfolio from './pages/Project';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Buy') {
      return <Buy />;
    }
    if (currentPage === 'Rent') {
      return <Rent />;
    }
    if (currentPage === 'Sell') {
      return <Sell />;
    }
    if (currentPage === 'About'){
    return <About />;
  }
  if (currentPage === 'Contact'){
    return <Contact />;
  }
    if (currentPage === 'Footer'){
    return <Footer />;}

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
