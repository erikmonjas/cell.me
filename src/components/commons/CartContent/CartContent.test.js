import React from 'react'
import { cleanup, waitFor } from '@testing-library/react'

import CartContent from './CartContent.component'
import wrappedRender from '../../../utils/tests'
import mockCartItems from '../../../constants/mocks/cartItems'
import mockDetails from '../../../constants/mocks/details'
import { getMockStore } from '../../../utils/tests/store'

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

  
  it('should render cart item', async () => {
    const localProps = {
      ...defaultProps,
      items: mockCartItems
    }

    const { getAllByTestId } = wrappedRender(
      <CartContent {...localProps} />,
      {state: getMockStore({
        variation: { devices: { details: mockDetails } }
      })}
    )

    await waitFor(() => expect(getAllByTestId('cart-item')).toHaveLength(1))
  })
})
