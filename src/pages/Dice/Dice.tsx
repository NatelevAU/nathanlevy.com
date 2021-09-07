import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import ReactGA from 'react-ga';

import './Dice.css';

const Dice: React.FC<{}> = () => {
  const defaultNumDice = 1;
  const [numDice, setNumDice] = React.useState(defaultNumDice);
  const [wins, setWins] = React.useState(0);
  ReactGA.pageview(window.location.pathname);

  const rollDice = () => {
    if (numDice >= 0) {
      let newWins = 0;
      for (let i = 0; i < numDice; i++) {
        const rand = 1 + Math.random() * 6;
        if (rand >= 5) {
          newWins += 1;
        }
      }
      setWins(newWins);
    }
    return null;
  };

  return (
    <div className="Dice">
      <header className="Dice-header">
        <h1> {wins} Successes </h1>
        <Box m={2}>
          <TextField
            id="standard-number"
            label="Number of dice"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={defaultNumDice.toString()}
            onChange={e => {
              setNumDice(Number(e.currentTarget.value));
            }}
          />
          <br></br>
          <br></br>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => {
              rollDice();
            }}
          >
            Roll
          </Button>
        </Box>
      </header>
    </div>
  );
};

export default Dice;
