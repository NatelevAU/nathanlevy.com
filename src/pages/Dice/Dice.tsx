import { Box, Button } from '@material-ui/core';
import React from 'react';
import ReactGA from 'react-ga';

import './Dice.css';

const Dice: React.FC<{}> = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="Dice">
      <header className="Dice-header">
        <h1> Dice </h1>
        <Box m={2}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            // onClick={() => setRoll(!Roll)}
          >
            Roll
          </Button>
        </Box>
      </header>
    </div>
  );
};

export default Dice;
