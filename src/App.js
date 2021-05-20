import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>hola</p>
    </ThemeProvider>
  );
}

export default App;
