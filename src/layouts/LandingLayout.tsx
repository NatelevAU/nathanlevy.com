import { Box, Container, ThemeProvider } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import SourceCodeButton from '../components/SourceCodeButton';
import { headerMiddlePages, pagesConfig } from '../config/PagesConfig';
import { PageConfig } from '../config/PagesConfigTypes';
import GlobalThemeStyles from '../themes/GlobalThemeStyles';
import lightTheme from '../themes/LightTheme';

import background from '/gradient.svg';

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
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        setHeaderHeight(headerElement.clientHeight);
      }
    };

    // Update the header height initially and whenever the window resizes
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  let childrenStyle: React.CSSProperties = {
    // backgroundColor: hasBackground ? undefined : 'white',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  if (currentPageConfig && 'component' in currentPageConfig) {
    if (currentPageConfig.maxWidth) {
      childrenStyle = { ...childrenStyle, padding: 0, minWidth: '100vw' };
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalThemeStyles theme={theme} />
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white',
          ...backgroundStyle,
        }}
      >
        <Header middlePages={headerMiddlePages} />
        <div
          style={{
            display: 'flex',
            flex: '1 0 auto',
            minHeight: `calc(100vh - ${headerHeight}px)`,
          }}
        >
          <Container style={childrenStyle}>{children}</Container>
        </div>
      </Box>
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default LandingLayout;
