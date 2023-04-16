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
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'primary',
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
