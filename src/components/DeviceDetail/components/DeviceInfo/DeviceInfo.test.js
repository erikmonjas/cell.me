import React from 'react'
import { cleanup } from '@testing-library/react'

import DeviceInfo from './DeviceInfo.component'
import mockDevice from '../../../../constants/devices/mockDevice'
import wrappedRender from '../../../../utils/tests'

afterEach(cleanup)

describe('DeviceInfo', () => {
  const defaultProps = {
    className: '',
    id: mockDevice.id,
    details: {[mockDevice.id]: mockDevice}
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DeviceInfo {...defaultProps} />
    )

    expect(getByTestId('device-title')).toHaveTextContent(`${mockDevice.brand} ${mockDevice.model}`)
    expect(getByTestId('device-price')).toHaveTextContent(`${mockDevice.price}€`)
    expect(getByTestId('title-radio')).toHaveTextContent('Radio')
    expect(getByTestId('description-radio')).toHaveTextContent('FM radio')
  })
})
