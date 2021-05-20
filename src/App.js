import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import theme from './styles/theme'
import Home from './components/containers/Home/Home.container'
import NotFound from './components/containers/NotFound/NotFound.container'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
