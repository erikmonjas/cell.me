import React from 'react'
import { cleanup, screen } from '@testing-library/react'

import Layout from './Layout.component'
import wrappedRender from '../../../utils/tests'
import modalTypes from '../../../constants/modals/modalTypes'
import { getMockStore } from '../../../utils/tests/store'

describe('Layout', () => {
  afterEach(cleanup)

  const defaultProps = {
    className: '',
    children: <p data-testid="test-child">testing</p>,
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <Layout {...defaultProps} />
    )

    expect(getByTestId('test-child')).toBeTruthy()
    expect(getByTestId('test-child')).toHaveTextContent('testing')
    expect(screen.queryByTestId('default-modal')).toBeFalsy()
  })
  
  it('should render modal', () => {
    const localState = getMockStore({
      ui: {
        modal: {
          children: <p>TESTING MODAL</p>,
          open: modalTypes.DEFAULT,
        }
      }
    })

    const { getByTestId } = wrappedRender(
      <Layout {...defaultProps} />,
      { state: localState }
    )

    expect(getByTestId('default-modal')).toBeTruthy()
  })
})
