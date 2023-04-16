import { Box, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import NavigationBar from './components/NavigationBar';
import SourceCodeButton from './components/SourceCodeButton';
import theme from './Theme';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationBar />
        {children}
        <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
