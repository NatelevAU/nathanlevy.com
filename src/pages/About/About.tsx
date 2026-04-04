import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import headshot from 'src/assets/logos/headshot_short.png';

const About: React.FC = () => {
  const { t } = useTranslation();

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
            {t('about.heading')}
          </Typography>

          <Box mt={2}>
            <Typography variant="h5" align="left">
              {t('about.intro')}
            </Typography>
            <Typography variant="h6" align="left">
              {t('about.paragraph1')}
            </Typography>
            <Typography variant="h6" align="left">
              {t('about.paragraph2')}
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
            alt={t('about.imageAlt')}
            src={headshot}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
