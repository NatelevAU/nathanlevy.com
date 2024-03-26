import { Box, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import Header from './components/Header';
import SourceCodeButton from './components/SourceCodeButton';
import GlobalThemeStyles from './themes/GlobalThemeStyles';
import lightTheme from './themes/LightTheme';

import background from './assets/backgrounds/Gradient.svg';

type LayoutProps = {
  children: ReactNode;
};

const theme = lightTheme;

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const headerPages = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
  { url: '/resume', name: 'Resume' },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalThemeStyles theme={theme} />
      <Header pages={headerPages} />
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
        {children}
      </Box>
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default Layout;
