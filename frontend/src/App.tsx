import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './views/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />;
    </ThemeProvider>
  );
}

export default App;
