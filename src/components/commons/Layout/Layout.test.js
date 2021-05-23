import React from 'react'
import { cleanup, screen } from '@testing-library/react'

import Layout from './Layout.component'
import wrappedRender from '../../../utils/tests'
import modalTypes from '../../../constants/modals/modalTypes'
import { getMockStore } from '../../../utils/tests/store'

afterEach(cleanup)

describe('Layout', () => {
  const defaultProps = {
    className: '',
    children: <p data-testid="test-child">testing</p>,
    openModal: '',
    closeModal: jest.fn(),
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <Layout {...defaultProps} />,
      { state: getMockStore() }
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
    expect(screen.queryByTestId('default-modal')).toBeFalsy()
  })
  
  it('should render modal', () => {
    const localProps = {
      ...defaultProps,
      openModal: modalTypes.DEFAULT
    }
    const { getByTestId } = wrappedRender(
      <Layout {...localProps} />,
      { state: getMockStore({ variation: {
        ui: {
          modal: {
            children: <p>testing</p>
          }
        }
      }})}
    )

    expect(getByTestId('default-modal')).toBeTruthy()
  })
})
