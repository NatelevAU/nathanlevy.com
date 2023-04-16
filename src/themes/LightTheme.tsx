import { Palette } from '@mui/icons-material';
import { createTheme } from '@mui/material';

const primaryColor = '#1976d2';
const white = '#ffffff';
const black = '#000000';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    background: {
      default: white,
    },
    text: {
      primary: white,
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primaryColor,
        },
      },
    },
  },
});

export default lightTheme;
