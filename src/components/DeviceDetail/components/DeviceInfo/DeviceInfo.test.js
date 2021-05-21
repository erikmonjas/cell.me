import React from 'react'
import { cleanup } from '@testing-library/react'

import DeviceInfo from './DeviceInfo.component'
import mockDevice from '../../../../constants/devices/mockDevice'
import wrappedRender from '../../../../utils/tests'
import { firstLetterUpperCase } from '../../../../utils/text'

afterEach(cleanup)

describe('DeviceInfo', () => {
  const defaultProps = {
    className: '',
    deviceDetails: mockDevice
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DeviceInfo {...defaultProps} />
    )

    expect(getByTestId('device-title')).toHaveTextContent(`${deviceDetails.brand} ${deviceDetails.model}`)
    expect(getByTestId('device-price')).toHaveTextContent(`${deviceDetails.price}€`)
    expect(getByTestId('title-radio')).toHaveTextContent('Radio')
    expect(getByTestId('description-radio')).toHaveTextContent('FM radio')
  })
})
