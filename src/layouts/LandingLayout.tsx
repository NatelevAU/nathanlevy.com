import { Box, Container, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import SourceCodeButton from '../components/SourceCodeButton';
import { headerMiddlePages, pagesConfig } from '../config/PagesConfig';
import { PageConfig } from '../config/PagesConfigTypes';
import GlobalThemeStyles from '../themes/GlobalThemeStyles';
import lightTheme from '../themes/LightTheme';

import background from '../assets/backgrounds/Gradient.svg';

type LayoutProps = {
  children: ReactNode;
};

const theme = lightTheme;

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const LandingLayout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const currentPageConfig = pagesConfig.find((page: PageConfig) => page.path === location.pathname);

  const divStyle: React.CSSProperties = {
    // backgroundColor: hasBackground ? undefined : 'white',
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'center',
    textAlign: 'center',
  };

  let contentStyle: React.CSSProperties = {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  if (currentPageConfig && 'component' in currentPageConfig) {
    if (currentPageConfig.maxWidth) {
      contentStyle = { ...contentStyle, padding: 0, minWidth: '100vw' };
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalThemeStyles theme={theme} />
      <Box
        sx={{
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white',
          ...backgroundStyle,
        }}
      >
        <Header middlePages={headerMiddlePages} />
        <div style={divStyle}>
          <Container style={contentStyle}>{children}</Container>
        </div>
      </Box>
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default LandingLayout;
