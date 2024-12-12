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
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const getCardDimensions = (isCurrent: boolean) => {
    if (isMobile) {
      return {
        width: 240,
        height: 300,
      };
    }
    return {
      width: isCurrent ? 240 : 200,
      height: isCurrent ? 300 : 260,
    };
  };

  const renderCard = (experiment: Experiment, index: number, isCurrent: boolean) => {
    const dimensions = getCardDimensions(isCurrent);
    return (
      <Card
        onClick={() => navigate(experiment.route)}
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          transition: 'all 0.3s ease',
          opacity: isMobile ? 1 : isCurrent ? 1 : 0.7,
          transform: isMobile ? 'scale(1)' : isCurrent ? 'scale(1)' : 'scale(0.9)',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: '8%',
          overflow: 'hidden',
          '&:hover': {
            transform: 'scale(1.1)',
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
            height: isMobile ? 180 : isCurrent ? 160 : 140,
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
            p: isMobile ? 2 : 1,
          }}
        >
          <Typography variant={isMobile ? 'h6' : 'subtitle1'} gutterBottom align="center">
            {experiment.name}
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'body2'} color="text.secondary" align="center">
            {experiment.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          align="center"
          sx={{
            mb: { xs: 3, sm: 4, md: 6 },
            px: { xs: 1, sm: 2 },
          }}
        >
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
            <IconButton
              onClick={handlePrev}
              sx={{
                mr: { xs: 1, sm: 2 },
                '& svg': {
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Box
            sx={{
              position: 'relative',
              width: {
                xs: 240,
                sm: experiments.length > 1 ? 600 : 240,
                md: experiments.length > 1 ? 720 : 280,
              },
              height: {
                xs: 300,
                sm: 300,
                md: 340,
              },
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
                  gap: isMobile ? '8px' : '16px',
                }}
              >
                {!isMobile &&
                  experiments.length > 1 &&
                  renderCard(
                    experiments[(i - 1 + experiments.length) % experiments.length],
                    (i - 1 + experiments.length) % experiments.length,
                    false,
                  )}
                {renderCard(experiments[i], i, true)}
                {!isMobile &&
                  experiments.length > 1 &&
                  renderCard(
                    experiments[(i + 1) % experiments.length],
                    (i + 1) % experiments.length,
                    false,
                  )}
              </animated.div>
            ))}
          </Box>
          {experiments.length > 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                ml: { xs: 1, sm: 2 },
                '& svg': {
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Experiments;
