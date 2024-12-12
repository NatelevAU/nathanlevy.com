import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  IconButton,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import tictactoeImage from 'src/assets/images/tictactoe.jpg';

interface Experiment {
  name: string;
  description: string;
  route: string;
  image: string;
}

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
    },
  },
});

const Experiments: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiments: Experiment[] = [
    {
      name: 'Tic Tac Toe',
      description: 'A classic game of Tic Tac Toe',
      route: '/experiments/tictactoe',
      image: tictactoeImage,
    },
    {
      name: 'Test Tac Toe',
      description: 'A classic game of Tic Tac Toe',
      route: '/experiments/tictactoe',
      image: tictactoeImage,
    },
    // Add more experiments here as they are created
  ];

  const transitions = useTransition(currentIndex, {
    from: { transform: 'translateX(0%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(0%)' },
    config: { tension: 300, friction: 30 },
  });

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : experiments.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < experiments.length - 1 ? prevIndex + 1 : 0));
  };

  const renderCard = (experiment: Experiment, index: number, isCurrent: boolean) => {
    return (
      <Card
        onClick={() => navigate(experiment.route)}
        sx={{
          width: isCurrent ? 240 : 200,
          height: isCurrent ? 300 : 260,
          transition: 'all 0.3s ease',
          opacity: isCurrent ? 1 : 0.7,
          transform: isCurrent ? 'scale(1)' : 'scale(0.9)',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: '8%',
          overflow: 'hidden',
          '&:hover': {
            transform: isCurrent ? 'scale(1.2)' : 'scale(1.1)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            borderRadius: 0,
            '& .MuiCardMedia-root': {
              borderRadius: 0,
            },
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: isCurrent ? 160 : 140,
            transition: 'all 0.3s ease',
            objectFit: 'contain',
            backgroundColor: '#f0f0f0',
            borderRadius: '8% 8% 0 0',
          }}
          image={experiment.image}
          alt={experiment.name}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
          }}
        >
          <Typography variant="subtitle1" gutterBottom align="center">
            {experiment.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {experiment.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Typography variant="h4" align="center" sx={{ mb: 6 }}>
          A collection of small projects and experiments
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {experiments.length > 1 && (
            <IconButton onClick={handlePrev} sx={{ mr: 2 }}>
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Box
            sx={{
              position: 'relative',
              width: experiments.length > 1 ? 720 : 280,
              height: 340,
              overflow: 'hidden',
            }}
          >
            {transitions((style, i) => (
              <animated.div
                style={{
                  ...style,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                {experiments.length > 1 &&
                  renderCard(
                    experiments[(i - 1 + experiments.length) % experiments.length],
                    (i - 1 + experiments.length) % experiments.length,
                    false,
                  )}
                {renderCard(experiments[i], i, true)}
                {experiments.length > 1 &&
                  renderCard(
                    experiments[(i + 1) % experiments.length],
                    (i + 1) % experiments.length,
                    false,
                  )}
              </animated.div>
            ))}
          </Box>
          {experiments.length > 1 && (
            <IconButton onClick={handleNext} sx={{ ml: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Experiments;
