import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import CartItem from './CartItem.component'
import wrappedRender from '../../../../../utils/tests'
import mockCartItem from '../../../../../constants/mocks/cartItem'
import mockDevice from '../../../../../constants/mocks/device'
import mockDetails from '../../../../../constants/mocks/details'
import { getRealID } from '../../../../../utils/commons'

afterEach(cleanup)

describe('CartItem', () => {
  const defaultProps = {
    className: '',
    item: mockCartItem,
    details: mockDetails,
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    subtractFromCart: jest.fn(),
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />
    )

    expect(getByTestId('device-image')).toHaveAttribute('src', mockDevice.imgUrl)
    expect(getByTestId('device-name')).toHaveTextContent(`${mockDevice.brand} ${mockDevice.model}`)
    expect(getByTestId('device-color')).toHaveTextContent(`Color: ${mockDevice.options.colors[0].name}`)
    expect(getByTestId('device-storage')).toHaveTextContent(`Storage: ${mockDevice.options.storages[0].name}`)
    expect(getByTestId('device-storage')).toHaveTextContent(`Storage: ${mockDevice.options.storages[0].name}`)
    expect(getByTestId('price')).toHaveTextContent(mockDevice.price * mockCartItem.amount)
    expect(getByTestId('subtract-button')).toHaveAttribute('disabled')
  })

  it('should call add to cart', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />
    )

    fireEvent.click(getByTestId('add-button'))
    expect(defaultProps.addToCart).toHaveBeenCalledWith({
      id: getRealID(mockCartItem.id),
      color: mockCartItem.color,
      storage: mockCartItem.storage,
    })
  })
  
  it('should call remove from cart', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />
    )

    fireEvent.click(getByTestId('remove-button'))
    expect(defaultProps.removeFromCart).toHaveBeenCalledWith({
      id: mockCartItem.id,
    })
  })
})
