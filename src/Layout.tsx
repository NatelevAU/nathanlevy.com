import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import NavigationBar from './components/NavigationBar';
import SourceCodeButton from './components/SourceCodeButton';
import lightTheme from './themes/LightTheme';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationBar />
      {children}
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </ThemeProvider>
  );
};

export default Layout;
