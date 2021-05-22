import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import DefaultModal from './DefaultModal.component'
import wrappedRender from '../../../utils/tests'

afterEach(cleanup)

describe('DefaultModal', () => {
  const defaultProps = {
    className: '',
    children: <p data-testid="test-child">testing</p>,
    closeModal: jest.fn(),
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
  })
  
  it('should call close modal', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />
    )

    fireEvent.click(getByTestId('close-button'))
    expect(defaultProps.closeModal).toHaveBeenCalled()
  })
  
  it('should call close modal on click overlay', () => {
    const { getByTestId } = wrappedRender(
      <DefaultModal {...defaultProps} />
    )

    fireEvent.click(getByTestId('modal-overlay'))
    expect(defaultProps.closeModal).toHaveBeenCalled()
  })
})
