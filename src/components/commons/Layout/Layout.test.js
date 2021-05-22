import React from 'react'
import { cleanup } from '@testing-library/react'

import Layout from './Layout.component'
import wrappedRender from '../../../utils/tests'

afterEach(cleanup)

describe('Layout', () => {
  const defaultProps = {
    className: '',
    children: <p data-testid="test-child">testing</p>
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <Layout {...defaultProps} />, { state: {
        cart: {
          items: []
        }
      }}
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
  })
})
