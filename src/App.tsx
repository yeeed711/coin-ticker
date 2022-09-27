import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './routes/Router';
import { darkTheme, lightTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
