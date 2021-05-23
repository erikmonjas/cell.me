import React from 'react'
import { cleanup } from '@testing-library/react'

import CartContent from './CartContent.component'
import wrappedRender from '../../../utils/tests'
import mockCartItems from '../../../constants/mocks/cartItems'
import mockDetails from '../../../constants/mocks/details'

afterEach(cleanup)

describe('CartContent', () => {
  const defaultProps = {
    className: '',
    items: { }
  }

  it('should render empty cart', () => {
    const { getByTestId } = wrappedRender(
      <CartContent {...defaultProps} />
    )

    expect(getByTestId('empty-cart')).toBeTruthy()
  })

  
  it('should render cart items', () => {
    const localProps = {
      ...defaultProps,
      items: mockCartItems
    }

    const { getAllByTestId } = wrappedRender(
      <CartContent {...localProps} />,
      { state: { devices: { details: mockDetails } } }
    )

    expect(getAllByTestId('cart-item')).toHaveLength(1)
  })
})
