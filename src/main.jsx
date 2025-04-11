import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/Notfound/NotFound.jsx';
import MainTemplate from './components/templates/MainTemplate/MainTemplate.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainTemplate><Home /></MainTemplate>} />
      <Route path="/about" element={<MainTemplate><About /></MainTemplate>} />
      <Route path="*" element={<MainTemplate><NotFound /></MainTemplate>} />
    </Routes>
  </BrowserRouter>
);
