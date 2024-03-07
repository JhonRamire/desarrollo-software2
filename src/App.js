// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import InfoSection from './components/InfoSection/InfoSection';
import CategoriesSection from './components/CategoriaSection/CategoriaSection';
import ProductsSection from './components/ProducSection/ProductSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <InfoSection />
        <CategoriesSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
