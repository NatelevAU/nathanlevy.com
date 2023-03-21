import { Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';

import './Snake.css';

const Snake: React.FC<{}> = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="Snake">
      <header className="Snake-header">
        <h1>Snake</h1>
        <Button size="large" variant="contained" color="primary">
          Snake
        </Button>
      </header>
    </div>
  );
};

export default Snake;
