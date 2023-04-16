import { Box } from '@mui/material';
import { ReactNode } from 'react';

import NavigationBar from './NavigationBar';
import SourceCodeButton from './SourceCodeButton';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <NavigationBar />
      {children}
      <SourceCodeButton href={'https://github.com/NatelevAU/natelev'} />
    </Box>
  );
};

export default Layout;
