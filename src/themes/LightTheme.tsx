import { createTheme } from '@mui/material';

const primaryColor = '#1976d2';
const white = '#ffffff';
const black = '#000000';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: white,
    },
    background: {
      default: white,
    },
    text: {
      primary: white,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        size: 'large',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '24px',
          paddingLeft: '15px',
          paddingRight: '15px',
          margin: '20px',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'primary',
        size: 'large',
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
        },
      },
    },
  },
});

export default lightTheme;
