import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';

import AppRoutes from './utils/AppRoutes';

import './index.css';

const App = ({}) => {
  const TRACKING_ID = 'UA-204322935-1';

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);

  return (
    <>
      <AppRoutes />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App></App>);
