import React from 'react'
import { cleanup } from '@testing-library/react'

import Cart from './Cart.component'
import wrappedRender from '../../../utils/tests'

afterEach(cleanup)

describe('Cart', () => {
  const defaultProps = {
    className: '',
    cartItems: {
      fweor: { amount: 2 },
      eiwor: { amount: 5 },
    }
  }

  it('should show correct number of items', () => {
    const { getByTestId } = wrappedRender(
      <Cart {...defaultProps} />
    )
    
    expect(getByTestId('item-count')).toHaveTextContent('7')
  })
})
