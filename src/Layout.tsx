import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import Header from './components/Header';
import SourceCodeButton from './components/SourceCodeButton';
import GlobalThemeStyles from './themes/GlobalThemeStyles';
import lightTheme from './themes/LightTheme';

type LayoutProps = {
  children: ReactNode;
};

const theme = lightTheme;

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
      {children}
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default Layout;
