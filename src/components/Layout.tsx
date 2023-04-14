import { Box, Button } from '@mui/material';
import { ReactNode } from 'react';

import NavigationBar from './NavigationBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <NavigationBar />
      {children}
      <Button
        color="primary"
        size="large"
        variant="contained"
        sx={{ margin: 2 }}
        href="https://github.com/NatelevAU/natelev"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        Source Code
      </Button>
    </Box>
  );
};

export default Layout;
