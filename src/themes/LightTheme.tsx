import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#d32f2f',
    },
    text: {
      primary: '#d32f2f',
      secondary: '#d32f2f',
      disabled: '#d32f2f',
    },
  },
});

export default lightTheme;
