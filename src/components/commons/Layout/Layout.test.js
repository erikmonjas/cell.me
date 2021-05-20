import React from 'react'
import { cleanup, render, } from '@testing-library/react'
import Layout from './Layout.component'

afterEach(cleanup)

describe('Layout', () => {
  const defaultProps = {
    className: '',
    children: <p data-testid="test-child">testing</p>
  }

  it('should render everything according to props', () => {
    const { getByTestId } = render(
      <Layout {...defaultProps} />
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
  })
})
