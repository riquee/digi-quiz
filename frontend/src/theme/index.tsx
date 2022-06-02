import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: 'darkred',
          backgroundImage: 'url(https://wallpaperaccess.com/full/2785812.jpg)',
          '& h1': {
            color: 'black',
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: colors.common.white,
      paper: '#F4F6F8',
    },
    primary: {
      main: '#002957',
    },
    secondary: {
      main: '#707070',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});

export default theme;
