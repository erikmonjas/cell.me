import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import AddToCartButton from './AddToCartButton.component'
import wrappedRender from '../../../utils/tests'

afterEach(cleanup)

describe('AddToCartButton', () => {
  const defaultProps = {
    className: '',
    id: 'abc',
    color: 1,
    storage: 2,
    addToCart: jest.fn()
  }

  it('should call on click with correct params', () => {
    const { getByTestId } = wrappedRender(
      <AddToCartButton {...defaultProps} />
    )
    
    fireEvent.click(getByTestId('add-to-cart-button'))
    expect(defaultProps.addToCart).toHaveBeenCalledWith({
      id: defaultProps.id,
      color: defaultProps.color,
      storage: defaultProps.storage,
    })
  })
})
