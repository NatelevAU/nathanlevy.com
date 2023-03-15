import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import ReactGA from 'react-ga';

import './Dice.css';

const Dice: React.FC<{}> = () => {
  const defaultNumDice = 1;
  const [numDice, setNumDice] = React.useState(defaultNumDice);
  const [wins, setWins] = React.useState(0);
  const [ones, setOnes] = React.useState(0);
  const [crit, setCrit] = React.useState(false);
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
      setCrit(false);
    }
    return null;
  };

  const rollSpecial = () => {
    rollDice();
    let currSixes = 0;
    let currOnes = 0;
    for (let i = 0; i < 2; i++) {
      const rand = 1 + Math.random() * 6;
      if (rand < 2) {
        currOnes++;
      }
      if (rand >= 6) {
        currSixes++;
      }
    }
    setCrit(currSixes == 2);
    setOnes(currOnes);
  };

  return (
    <div className="Dice">
      <header className="Dice-header">
        <h1> {wins} Successes </h1>
        <h2> {ones} ones rolled </h2>
        <h2> {crit ? 'CRITICAL HIT' : ''}</h2>
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
            Roll Normal
          </Button>
          <br></br>
          <br></br>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              rollSpecial();
            }}
          >
            Roll Special
          </Button>
        </Box>
      </header>
    </div>
  );
};

export default Dice;
