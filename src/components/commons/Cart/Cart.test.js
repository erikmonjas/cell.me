import React from 'react'
import * as redux from 'react-redux'
import { cleanup, fireEvent } from '@testing-library/react'

import Cart from './Cart.component'
import wrappedRender from '../../../utils/tests'
import mockCartItems from '../../../constants/mocks/cartItems'
import { getMockStore } from '../../../utils/tests/store'
import { OPEN_DEFAULT_MODAL } from '../../../state/ui/actionTypes'

const state = getMockStore({ 
  variation: {
    cart: {
      items: mockCartItems,
    }
  }
})

let useDispatchSpy, mockDispatchFn

beforeEach(() => {
  useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
  mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);
})

afterEach(() => {
  useDispatchSpy.mockClear()
  cleanup()
})

describe('Cart', () => {
  const defaultProps = {
    className: '',
  }

  it('should show correct number of items', () => {
    const { getByTestId } = wrappedRender(
      <Cart {...defaultProps} />,
      { state }
    )
    
    expect(getByTestId('item-count')).toHaveTextContent('1')
  })
  
  it('should open modal', () => {
    const { getByTestId } = wrappedRender(
      <Cart {...defaultProps} />,
      { state }
    )
    
    fireEvent.click(getByTestId('cart'))
    expect(mockDispatchFn).toHaveBeenCalledWith(
      expect.objectContaining({
        type: OPEN_DEFAULT_MODAL, 
       })
    )
  })
})
