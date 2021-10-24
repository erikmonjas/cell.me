import React from 'react'
import * as redux from 'react-redux'
import { cleanup, fireEvent } from '@testing-library/react'

import CartItem from './CartItem.component'
import wrappedRender from '../../../../../utils/tests'
import mockCartItem from '../../../../../constants/mocks/cartItem'
import mockDevice from '../../../../../constants/mocks/device'
import mockDetails from '../../../../../constants/mocks/details'
import { getRealID } from '../../../../../utils/commons'
import { getMockStore } from '../../../../../utils/tests/store'
import { ADD_TO_CART, REMOVE_FROM_CART, SUBTRACT_FROM_CART } from '../../../../../state/cart/actionTypes'

const state = getMockStore({
  devices: {
    details: mockDetails
  }
})

let useDispatchSpy, mockDispatchFn

beforeEach(() => {
  useDispatchSpy = jest.spyOn(redux, 'useDispatch')
  mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn)
})

afterEach(() => {
  useDispatchSpy.mockClear()
  cleanup()
})

describe('CartItem', () => {
  const defaultProps = {
    className: '',
    item: mockCartItem,
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />,
      { state }
    )

    expect(getByTestId('device-image')).toHaveAttribute('src', mockDevice.imgUrl)
    expect(getByTestId('device-name')).toHaveTextContent(`${mockDevice.brand} ${mockDevice.model}`)
    expect(getByTestId('device-color')).toHaveTextContent(`Color: ${mockDevice.options.colors[0].name}`)
    expect(getByTestId('device-storage')).toHaveTextContent(`Storage: ${mockDevice.options.storages[0].name}`)
    expect(getByTestId('device-storage')).toHaveTextContent(`Storage: ${mockDevice.options.storages[0].name}`)
    expect(getByTestId('price')).toHaveTextContent(mockDevice.price * mockCartItem.amount)
    expect(getByTestId('subtract-button')).toHaveAttribute('disabled')
  })

  it('should subtract button be disabled, not add button', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />,
      { state }
    )

    expect(getByTestId('subtract-button')).toHaveAttribute('disabled')
    expect(getByTestId('add-button')).not.toHaveAttribute('disabled')
  })
  

  it('should call add to cart', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />,
      { state }
    )

    fireEvent.click(getByTestId('add-button'))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        id: getRealID(mockCartItem.id),
        color: mockCartItem.color,
        storage: mockCartItem.storage,
      },
      type: ADD_TO_CART,
    })
  })
  
  it('should call subtract from cart', () => {
    const localProps = {
      ...defaultProps,
      item: {
        ...mockCartItem,
        amount: 3,
      },
    }
    const { getByTestId } = wrappedRender(
      <CartItem {...localProps} />,
      { state }
    )

    fireEvent.click(getByTestId('subtract-button'))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        id: mockCartItem.id,
      },
      type: SUBTRACT_FROM_CART,
    })
  })
  
  it('should call remove from cart', () => {
    const { getByTestId } = wrappedRender(
      <CartItem {...defaultProps} />,
      { state }
    )

    fireEvent.click(getByTestId('remove-button'))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        id: mockCartItem.id,
      },
      type: REMOVE_FROM_CART,
    })
  })
})
