import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

interface GameSettingsProps {
  onGameStart: (isSinglePlayer: boolean, playerSymbol: 'X' | 'O') => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({ onGameStart }) => {
  const [selectedSymbol, setSelectedSymbol] = useState<'X' | 'O'>('X');

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
        Tic Tac Toe
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600, mt: 0 }}>
        {/* Symbol Selection */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Button
                variant={selectedSymbol === 'X' ? 'contained' : 'outlined'}
                onClick={() => setSelectedSymbol('X')}
                sx={{
                  minWidth: '48px',
                  width: '48px',
                  borderRadius: '4px 0 0 4px',
                  borderRight: 'none',
                  mx: 0,
                }}
              >
                X
              </Button>
              <Button
                variant={selectedSymbol === 'O' ? 'contained' : 'outlined'}
                onClick={() => setSelectedSymbol('O')}
                sx={{
                  minWidth: '48px',
                  width: '48px',
                  borderRadius: '0 4px 4px 0',
                  borderLeft: 'none',
                  mx: 0,
                }}
              >
                O
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Game Mode Selection */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={() => onGameStart(true, selectedSymbol)}
              sx={{ width: 200 }}
            >
              Play against AI
            </Button>
            <Button
              variant="contained"
              onClick={() => onGameStart(false, selectedSymbol)}
              sx={{ width: 200 }}
            >
              Play with a friend
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GameSettings;
