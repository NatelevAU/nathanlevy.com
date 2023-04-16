import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import About from './pages/About/About';
import Dice from './pages/Dice/Dice';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

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
          <Route path="/dice" element={<Dice />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* <Route path="/snake" element={<Snake />} /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
