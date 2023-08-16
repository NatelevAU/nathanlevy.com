import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import About from './pages/About';
import Dice from './pages/Dice';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Resume from './pages/Resume';

import './index.css';

const App = ({}) => {
  const TRACKING_ID = 'UA-204322935-1';

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Navigate to="/resume" replace />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/snake" element={<Snake />} /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App></App>);
