import { Box } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';

import GameBoard from './GameBoard';

const Snake: React.FC<{}> = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
      }}
    >
      <header>
        <h1>Snake</h1>
        <GameBoard />
      </header>
    </Box>
  );
};

export default Snake;
