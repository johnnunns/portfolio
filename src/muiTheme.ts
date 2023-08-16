import { createTheme } from '@mui/material';
import { grey, cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: cyan[50],
      main: cyan[200],
      dark: cyan[400],
      contrastText: '#FFFFFF',
    },
    secondary: {
      dark: grey[600],
      main: grey[400],
      light: grey[200],
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: cyan[200],
    },
    background: {
      paper: grey[800],
      default: grey[900],
    }
  },
  typography: {
    fontFamily: `Raleway, arial`,
    h1: {
      fontFamily: 'Roboto, Helvetica Neue',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Roboto, Helvetica Neue',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Roboto, Helvetica Neue',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Roboto, Helvetica Neue',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Roboto, Helvetica Neue',
      fontWeight: 500,
    },
  }
});

export default theme;
