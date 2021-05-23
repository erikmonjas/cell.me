import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import Cart from './Cart.component'
import wrappedRender from '../../../utils/tests'
import mockCartItems from '../../../constants/mocks/cartItems'

afterEach(cleanup)

describe('Cart', () => {
  const defaultProps = {
    className: '',
    cartItems: mockCartItems,
    openDefaultModal: jest.fn()
  }

  it('should show correct number of items', () => {
    const { getByTestId } = wrappedRender(
      <Cart {...defaultProps} />
    )
    
    expect(getByTestId('item-count')).toHaveTextContent('1')
  })
  
  it('should open modal', () => {
    const { getByTestId } = wrappedRender(
      <Cart {...defaultProps} />
    )
    
    fireEvent.click(getByTestId('cart'))
    expect(defaultProps.openDefaultModal).toHaveBeenCalled()
  })
})
