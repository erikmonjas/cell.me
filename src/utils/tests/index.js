import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'

export function renderWithTheme(
  ui,
  { ...options } = {}
) {
  function Wrapper(props) {
    return <ThemeProvider theme={theme} {...props} />
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

export default renderWithTheme