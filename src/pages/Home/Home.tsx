import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import background from '../../assets/backgrounds/Home.jpg';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home: React.FC<{}> = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Software Engineer', 'Web Developer', 'Dog Lover'];

  const Mailto = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitleIndex, subtitles.length]);

  ReactGA.pageview(window.location.pathname);

  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        ...sectionStyle,
      }}
    >
      <h1> Nathan Levy </h1>
      <h2> {subtitles[subtitleIndex]} </h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          sx={{ margin: 1 }}
          href="https://github.com/NatelevAU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={{ margin: 1 }}
          href="https://www.linkedin.com/in/nathan-levy-au"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton sx={{ margin: 1 }} onClick={() => Mailto('nathan.levy.au@gmail.com')}>
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
