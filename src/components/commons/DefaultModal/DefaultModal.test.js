import React from 'react'
import * as redux from 'react-redux'
import { cleanup, fireEvent } from '@testing-library/react'

import DefaultModal from './DefaultModal.component'
import wrappedRender from '../../../utils/tests'
import { getMockStore } from '../../../utils/tests/store'
import { CLOSE_MODAL } from '../../../state/ui/actionTypes'

const state = getMockStore({
  ui: {
    modal: { 
      children: <p data-testid="test-child">testing</p>
    }
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

describe('DefaultModal', () => {
  const defaultProps = {
    className: '',
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />,
      { state }
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
  })
  
  it('should call close modal on click close button', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />,
      { state }
    )

    fireEvent.click(getByTestId('close-button'))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {},
      type: CLOSE_MODAL
    })
  })
  
  it('should call close modal on click overlay', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />,
      { state }
    )

    fireEvent.click(getByTestId('modal-overlay'))
    
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {},
      type: CLOSE_MODAL
    })
  })
})
