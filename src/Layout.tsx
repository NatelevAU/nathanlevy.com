import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import NavigationBar from './components/NavigationBar';
import SourceCodeButton from './components/SourceCodeButton';
import GlobalThemeStyles from './themes/GlobalThemeStyles';
import lightTheme from './themes/LightTheme';

type LayoutProps = {
  children: ReactNode;
};

const theme = lightTheme;

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalThemeStyles theme={theme} />
      <NavigationBar />
      {children}
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default Layout;
