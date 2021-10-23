import React from 'react'
import * as redux from 'react-redux'
import { cleanup, fireEvent } from '@testing-library/react'

import AddToCartButton from './AddToCartButton.component'
import wrappedRender from '../../../utils/tests'
import { ADD_TO_CART } from '../../../state/cart/actionTypes'

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

describe('AddToCartButton', () => {
  const defaultProps = {
    className: '',
    id: 'abc',
    color: 1,
    storage: 2,
  }

  it('should call on click with correct params', () => {
    const { getByTestId } = wrappedRender(
      <AddToCartButton {...defaultProps} />
    )
    
    fireEvent.click(getByTestId('add-to-cart-button'))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        id: defaultProps.id,
        color: defaultProps.color,
        storage: defaultProps.storage,
      },
      type: ADD_TO_CART,
    })
  })
})
