// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InfoSection from './components/InfoSection/InfoSection';
import CategoriesSection from './components/CategoriaSection/CategoriaSection';
import ProductosSection from './components/ProductosSection/ProductosSection';
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
          <Route path="/productos" Component={ProductosSection} />
          <Route path="/api" Component={ApiSection} />
          <Route path="/form" Component={FormSection} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
