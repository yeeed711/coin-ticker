import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from './atoms';
import { GlobalStyle } from './GlobalStyle';
import Router from './routes/Router';
import { darkTheme, lightTheme } from './theme';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
