import React from 'react';
import ReactGA from 'react-ga';

import GameBoard from './GameBoard';

import './Snake.css';

const Snake: React.FC<{}> = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="Snake">
      <header className="Snake-header">
        <h1>Snake</h1>
        <GameBoard />
      </header>
    </div>
  );
};

export default Snake;
