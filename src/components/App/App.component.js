import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import theme from '../../styles/theme'
import GlobalStyle from '../../styles/GlobalStyle'
import Home from '../containers/Home/Home.container'
import NotFound from '../containers/NotFound/NotFound.container'

export const App = ({ className }) => {
  return (
    <div className={className}>
      <Router>
        <GlobalStyle />
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
    </div>
  )
}

export default App;

App.propTypes = {
  className: PropTypes.string.isRequired,
}