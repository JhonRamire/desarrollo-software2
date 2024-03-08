// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InfoSection from './components/InfoSection/InfoSection';
import CategoriesSection from './components/CategoriaSection/CategoriaSection';
import ProductsSection from './components/ProducSection/ProductSection';
import ApiSection from './components/ApiSection/ApiSection';
import FormSection from './components/FormSection/FormSection';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/info' Component={InfoSection} />
          <Route path='/categoria' Component={CategoriesSection} />
          <Route path="/productos" component={ProductsSection} />
          <Route path="/api" component={ApiSection} />
          <Route path="/form" component={FormSection} />
          <Route path="/login" component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
