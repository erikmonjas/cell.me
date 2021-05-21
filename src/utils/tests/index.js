import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

import theme from '../../styles/theme'

export const FullWrapper = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MemoryRouter>
  )
}


export function wrappedRender(
  ui,
  { ...options } = {}
) {
  function Wrapper(props) {
    return <FullWrapper theme={theme} {...props} />
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

export default wrappedRender