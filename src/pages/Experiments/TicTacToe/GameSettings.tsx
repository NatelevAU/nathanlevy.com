import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface GameSettingsProps {
  onModeSelect: (isSinglePlayer: boolean) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({ onModeSelect }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: 'black' }}>
        Select Game Mode
      </Typography>
      <Button variant="contained" onClick={() => onModeSelect(true)} sx={{ width: 200 }}>
        Play against AI
      </Button>
      <Button variant="contained" onClick={() => onModeSelect(false)} sx={{ width: 200 }}>
        Play with a friend
      </Button>
    </Box>
  );
};

export default GameSettings;
