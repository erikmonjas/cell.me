import React from 'react'
import { cleanup } from '@testing-library/react'

import CartContent from './CartContent.component'
import wrappedRender from '../../../utils/tests'
import mockCartItem from '../../../constants/mocks/cartItem'
import mockDevice from '../../../constants/mocks/device'

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
      items: {
        [mockCartItem.id]: mockCartItem,
      }
    }

    const { getAllByTestId } = wrappedRender(
      <CartContent {...localProps} />,
      { state: { devices: { details: { [mockDevice.id]: mockDevice } } } }
    )

    expect(getAllByTestId('cart-item')).toHaveLength(1)
  })
})
