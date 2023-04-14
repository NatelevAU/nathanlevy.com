import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import headshot from '../../images/logos/Nathan.jpg';

const About: React.FC<{}> = () => {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 8rem)',
        alignItems: 'center',
        justifyContent: 'center',
        m: '4rem',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 256, md: 384 },
                maxWidth: { xs: 256, md: 384 },
                display: 'block',
                mx: 'auto',
              }}
              alt="Nathan Levy"
              src={headshot}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h2" align="center">
              About Me
            </Typography>

            <Box mt={2}>
              <Typography variant="h5" align="center">
                I'm Nathan Levy, a Software Engineer based in Melbourne, Australia.
              </Typography>
              <Typography variant="h6" align="center">
                I've been coding since I was 13, when I created a simple game and my own Minecraft
                plugin.
              </Typography>
              <Typography variant="h6" align="center">
                I'm passionate about solving complex problems and creating innovative solutions
                using technology.
              </Typography>
              <Typography variant="h6" align="center">
                My recent experience includes full-stack web development as well as game
                development.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
