import React from 'react'
import { cleanup } from '@testing-library/react'

import Header from './Header.component'
import wrappedRender from '../../../utils/tests'
import { getMockStore } from '../../../utils/tests/store'

afterEach(cleanup)

describe('Header', () => {
  const defaultProps = {
    className: '',
  }

  it('should render logo with link to home', () => {
    const { getByTestId } = wrappedRender(
      <Header {...defaultProps} />,
      { state: getMockStore() }
    )

    expect(getByTestId('logo')).toHaveAttribute('href', '/')
  })
})
