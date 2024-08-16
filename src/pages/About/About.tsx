import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import headshot from 'src/assets/logos/headshot_short.png';

const About: React.FC<{}> = () => {
  return (
    <Box
      id="about"
      flex={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: { xs: 'auto', md: '4rem' },
      }}
    >
      <Grid container spacing={4} style={{ flexGrow: 1 }}>
        <Grid
          item
          xs={12}
          md={8}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography variant="h2" align="center">
            About Me
          </Typography>

          <Box mt={2}>
            <Typography variant="h5" align="left">
              I'm Nathan Levy, a Software Engineer based in Melbourne, Australia.
            </Typography>
            <Typography variant="h6" align="left">
              I've been coding since I was 13, when I created my own Minecraft plugin.
            </Typography>
            <Typography variant="h6" align="left">
              Since then, I've launched websites, created games, developed APIs, and more!
            </Typography>
            <Typography variant="h6" align="left">
              Recently, I've been focusing on full-stack web development.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
        >
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 256, md: 384 },
              maxWidth: { xs: 256, md: 384 },
              alignSelf: 'flex-end',
              display: 'block',
            }}
            alt="Nathan Levy"
            src={headshot}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
