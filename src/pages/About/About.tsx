import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import headshot from 'src/assets/logos/headshot_short.png';

const About: React.FC = () => {
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
          size={{ xs: 12, md: 8 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography variant="h2" align="center">
            About Me
          </Typography>

          <Box mt={2}>
            <Typography variant="h5" align="left">
              I'm Nathan Levy, a Full-Stack Software Engineer with 5+ years of professional
              experience, based in Melbourne, Australia.
            </Typography>
            <Typography variant="h6" align="left">
              My coding journey started at 13 with developing a video-game addon. Since then I've
              evolved into a lead developer working across diverse tech stacks and industries.
            </Typography>
            <Typography variant="h6" align="left">
              I've built everything from fintech platforms and data pipelines to custom surveying
              applications, using technologies like React, Node.js, Python, AWS, and PostgreSQL.
            </Typography>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
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
