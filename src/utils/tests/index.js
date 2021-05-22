import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import theme from '../../styles/theme'

const mockStore = configureStore([])
const store = (state = {}) => mockStore(state)

export const FullWrapper = ({ children, currentRoute = '/', state = {} }) => {
  const history = createMemoryHistory()
  history.push(currentRoute)

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Provider store={store(state)}>
          {children}
        </Provider>
      </ThemeProvider>
    </Router>
  )
}


export function wrappedRender(
  ui,
  { ...options } = {}
) {
  function Wrapper(props) {
    return (
      <FullWrapper
        theme={theme}
        currentRoute={options.currentRoute}
        state={options.state}
        {...props}
      />
    )
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

export default wrappedRender