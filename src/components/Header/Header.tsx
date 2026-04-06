import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  AppBar,
  Box,
  Container,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  PopoverOrigin,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageConfig } from 'src/config/PagesConfigTypes';

import MenuButton from './MenuButton';
import SettingsPopup from './SettingsPopup';

const anchorOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'right' };
const transformOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'right' };

interface TopHeaderProps {
  leftPages?: PageConfig[];
  middlePages?: PageConfig[];
  rightPages?: PageConfig[];
  logo?: React.FC;
  background?: string;
  transparent?: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({
  leftPages = [],
  middlePages = [],
  rightPages = [],
  logo: LogoComponent,
  background,
  transparent,
}) => {
  const theme = useTheme();
  const localTheme = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: { backgroundColor: theme.palette.primary.main },
        },
      },
    },
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  // Close mobile menu on route change
  const location = useLocation();
  React.useEffect(() => {
    handleCloseNavMenu();
  }, [location.pathname]);

  const backgroundColor = transparent || background ? 'transparent' : 'primary.main';
  const allPages = [...leftPages, ...middlePages, ...rightPages];

  const desktopButtonProps = {
    backgroundColor,
    textColor: 'white',
    highlightBackgroundColor: 'white',
    highlightTextColor: 'primary.main',
    shrunk: false,
    handleClose: handleCloseNavMenu,
  };

  return (
    <div style={{ position: 'relative' }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'background-color 0s ease, box-shadow 0s ease',
          ...(transparent ? { boxShadow: 'none' } : {}),
          backgroundColor,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          {/* Left elements */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexBasis: '33%',
              justifyContent: 'flex-start',
            }}
          >
            {LogoComponent && <LogoComponent />}
            {leftPages.map(page => (
              <MenuButton key={page.name} page={page} {...desktopButtonProps} />
            ))}
          </Box>

          {/* Middle elements */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexBasis: '33%',
              justifyContent: 'center',
            }}
          >
            {middlePages.map(page => (
              <MenuButton key={page.name} page={page} {...desktopButtonProps} />
            ))}
          </Box>

          {/* Right elements */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexBasis: '33%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {rightPages.map(page => (
              <MenuButton key={page.name} page={page} {...desktopButtonProps} />
            ))}
            <IconButton
              color="secondary"
              aria-label="settings"
              onClick={() => setSettingsOpen(true)}
            >
              <SettingsIcon />
            </IconButton>
          </Box>

          {/* Mobile row */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={e => {
                if (!anchorElNav) e.stopPropagation();
                handleOpenNavMenu(e);
              }}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>

            {LogoComponent && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <LogoComponent />
              </Box>
            )}

            <IconButton
              color="secondary"
              aria-label="settings"
              onClick={() => setSettingsOpen(true)}
            >
              <SettingsIcon />
            </IconButton>

            <ThemeProvider theme={localTheme}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={anchorOrigin}
                keepMounted
                transformOrigin={transformOrigin}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {allPages.map(page => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ mx: 0, my: 0, px: 0, py: 0 }}
                  >
                    <MenuButton
                      page={page}
                      backgroundColor="primary"
                      textColor="white"
                      isDropDown
                      shrunk={false}
                      handleClose={handleCloseNavMenu}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </ThemeProvider>
          </Box>
        </Container>
      </AppBar>

      <SettingsPopup open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default TopHeader;
