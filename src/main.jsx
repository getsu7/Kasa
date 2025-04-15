import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/Notfound/NotFound.jsx';
import Header from './components/organisms/Header/Header.jsx';
import Footer from './components/organisms/Footer/Footer.jsx';
import Housing from './pages/Housing/Housing.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
