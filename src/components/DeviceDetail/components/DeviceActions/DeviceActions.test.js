import React from 'react'
import ReactRouter from 'react-router'
import { cleanup } from '@testing-library/react'

import DeviceActions from './DeviceActions.component'
import mockDevice from '../../../../constants/devices/mockDevice'
import wrappedRender from '../../../../utils/tests'
import { firstLetterUpperCase } from '../../../../utils/text'

afterEach(cleanup)

describe('DeviceActions', () => {
  const defaultProps = {
    className: '',
    id: mockDevice.id,
    details: {[mockDevice.id]: mockDevice}
  }

  it('should render everything according to props', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' })

    const { getAllByTestId } = wrappedRender(
      <DeviceActions {...defaultProps} />,
      { currentRoute: '/product/testid' }
    )

    Object.keys(defaultProps.details[mockDevice.id].options).map((key, index) => {
      expect(getAllByTestId('option-title')[index]).toHaveTextContent(firstLetterUpperCase(key))
    })
  })
})
