import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  AppBarProps,
  Box,
  Container,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  PopoverOrigin,
  Theme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const anchorOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

const transformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

interface HeaderProps extends AppBarProps {
  headerType: 'top' | 'side' | 'side-right' | 'bottom' | 'drop-top' | 'drop-side';
  logo?: React.FC;
  firstElements?: React.FC[];
  middleElements?: React.FC[];
  lastElements?: React.FC[];
  headerWidth?: number;
  topBackground?: string;
  background?: string;
  backgroundColor?: string;
  textColor?: string;
  highlightBackgroundColor?: string;
  highlightTextColor?: string;
  children?: ReactNode;
}

const BaseHeader = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      headerType,
      logo: LogoComponent,
      firstElements = [],
      middleElements = [],
      lastElements = [],
      headerWidth = 15,
      topBackground,
      background,
      backgroundColor = 'white',
      textColor = 'primary.main',
      highlightBackgroundColor = 'primary.main',
      highlightTextColor = 'white',
      children,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();
    const localTheme = createTheme({
      components: {
        MuiList: {
          styleOverrides: {
            root: {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
      },
    });

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const isTopHeader = headerType === 'top' || headerType === 'drop-top';
    const isSideHeader =
      headerType === 'side' || headerType === 'side-right' || headerType === 'drop-side';
    const isDropHeader = headerType === 'drop-top' || headerType === 'drop-side';
    const isFooter = headerType === 'bottom';
    const isTransparent = backgroundColor === 'transparent';

    const isXsScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const [isShrunk, setIsShrunk] = React.useState(isXsScreen);

    const location = useLocation();

    // Required to fix a scrollbar bug that shifts side header
    isSideHeader &&
      useEffect(() => {
        const setScrollBar = () => {
          const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          const hasScrollbar = scrollbarWidth > 0;

          // Hide scrollbar when menu is open
          if (anchorElNav) {
            document.body.style.overflow = 'hidden';
            if (hasScrollbar) {
              document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
          } else {
            // Restore default styles when menu is closed
            document.body.style.overflow = '';
            document.body.style.paddingRight = ''; // Reset to browser default
          }

          return () => {
            // Reset styles when component unmounts
            document.body.style.overflow = 'hidden';
            if (hasScrollbar) {
              document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
          };
        };

        setScrollBar();
      }, [anchorElNav]);

    useEffect(() => {
      if (isXsScreen && !isTopHeader) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    }, [location.pathname, isXsScreen]);

    useEffect(() => {}, []);

    // Function to toggle the 'shrunk' state
    const toggleShrunk = () => {
      setIsShrunk(!isShrunk);
    };

    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };

    const topBackgroundStyle = {
      backgroundImage: `url(${topBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
    };

    const AppBarStyle = {
      position: isSideHeader ? ('fixed' as const) : ('sticky' as const),
      sx: {
        ...(isSideHeader
          ? {
              top: 0,
              left: headerType === 'side-right' ? 'auto' : 0,
              right: headerType === 'side-right' ? 0 : 'auto',
              bottom: 0,
              width: isShrunk
                ? { xs: `${headerWidth}vw`, md: `${headerWidth / 3}vw` }
                : { xs: '80vw', md: `${headerWidth}vw` },
              height: '100vh',
              overflowX: 'auto',
              flexDirection: 'column',
            }
          : {}),
        transition: 'background-color 0s ease, box-shadow 0s ease',
        ...(isTransparent ? { boxShadow: 'none' } : {}),
        backgroundColor: backgroundColor,
        ...(isSideHeader ? {} : { ...backgroundStyle }),
      },
      ...rest,
    };

    const allElements = [...firstElements, ...middleElements, ...lastElements];

    const addElementProps = (Element: React.FC<any>, index: number) => {
      const extraProps = {
        backgroundColor,
        textColor,
        highlightBackgroundColor,
        highlightTextColor,
        shrunk: isShrunk,
      };

      return <Element key={index} {...extraProps} />;
    };

    const addElementPropsMobile = (Element: React.FC<any>, index: number) => {
      const extraProps = {
        backgroundColor: 'primary',
        textColor: 'white',
        isDropDown: true,
        shrunk: isShrunk,
      };

      return <Element key={index} {...extraProps} />;
    };

    return (
      <AppBar ref={ref} {...AppBarStyle}>
        {/* Top Logo Component */}
        {isSideHeader && (
          <Box sx={{ ...topBackgroundStyle }}>
            {!isShrunk && LogoComponent ? <LogoComponent /> : null}
            <IconButton
              aria-label="close"
              sx={{
                color: 'white',
              }}
              onClick={toggleShrunk}
            >
              {isShrunk ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Box>
        )}
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            ...(isTopHeader ? { flexDirection: 'row' } : {}),
            ...(isFooter ? { flexDirection: { xs: 'column', md: 'row' } } : {}),
            ...(isSideHeader
              ? { flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }
              : {}),
            alignItems: isFooter ? 'flex-start' : 'center',
            padding: isFooter ? 1 : undefined,
          }}
        >
          {isDropHeader || (
            <>
              {/* Rest of header */}
              {/* First Elements */}
              <Box
                sx={{
                  width: isSideHeader ? '100%' : 'auto',
                  display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' },
                  justifyContent: 'flex-start',
                  ...(isSideHeader ? { flexDirection: 'column' } : {}),
                  ...(isTopHeader ? { flexBasis: '33%' } : {}),
                  ...(isFooter ? { flexDirection: 'column', flex: 1, py: 1 } : {}),
                }}
              >
                {!isSideHeader && LogoComponent && <LogoComponent />}
                {firstElements.map((Element, index) => addElementProps(Element, index))}
              </Box>

              {/* Middle Elements */}
              <Box
                sx={{
                  width: isSideHeader ? '100%' : 'auto',
                  display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' },
                  ...(isSideHeader
                    ? {
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        // Below code keeps middleElements centered perfectly, BUT has risk of overflow
                        // position: 'absolute',
                        // top: '50%',
                        // left: '2%',
                        // width: '100%',
                      }
                    : {}),
                  ...(isTopHeader ? { flexBasis: '33%', justifyContent: 'center' } : {}),
                  ...(isFooter ? { flexDirection: 'column', flex: '0 1 auto', py: 1 } : {}),
                }}
              >
                {middleElements.map((Element, index) => addElementProps(Element, index))}
              </Box>

              {/* Last Elements */}
              <Box
                sx={{
                  width: isSideHeader ? '100%' : 'auto',
                  display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' },
                  ...(isSideHeader
                    ? { flexDirection: 'column', justifyContent: 'flex-start' }
                    : {}),
                  ...(isTopHeader ? { flexBasis: '33%', justifyContent: 'flex-end' } : {}),
                  ...(isFooter
                    ? {
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: { xs: 'flex-start', md: 'center' },
                      }
                    : {}),
                }}
              >
                {lastElements.map((Element, index) => addElementProps(Element, index))}
              </Box>
            </>
          )}

          {/* Dropdown */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: isTopHeader || isDropHeader ? 'flex' : 'none',
                md: isDropHeader ? 'flex' : 'none',
              },
              justifyContent: 'space-between',
            }}
          >
            {/* Dropdown menu button */}
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={e => {
                Boolean(anchorElNav) || e.stopPropagation();
                handleOpenNavMenu(e);
              }}
              color={backgroundColor !== 'white' ? 'secondary' : 'primary'}
            >
              <MenuIcon />
            </IconButton>

            {/* Buttons with icons in the middle */}
            {LogoComponent && !isSideHeader && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  marginLeft: '-48px',
                }}
              >
                {<LogoComponent />}
              </Box>
            )}

            {/* Dropdown menu */}
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
                {allElements.map((Element, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ mx: 0, my: 0, px: 0, py: 0 }}
                  >
                    {addElementPropsMobile(Element, index)}
                  </MenuItem>
                ))}
              </Menu>
            </ThemeProvider>
          </Box>
        </Container>
      </AppBar>
    );
  },
);

export default BaseHeader;
