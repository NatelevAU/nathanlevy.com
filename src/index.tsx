import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Dice from './pages/Dice/Dice';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Snake from './pages/Snake/Snake';

import './index.css';

const App = ({}) => {
  const TRACKING_ID = 'UA-204322935-1';

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
