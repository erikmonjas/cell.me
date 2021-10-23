import React from 'react'
import { cleanup } from '@testing-library/react'

import DeviceInfo from './DeviceInfo.component'
import mockDevice from '../../../../constants/mocks/device'
import { getMockStore } from '../../../../utils/tests/store'
import wrappedRender from '../../../../utils/tests'

const state = getMockStore({
  variation: {
    devices: {
      details: { [mockDevice.id]: mockDevice }
    }
  }
})

afterEach(cleanup)

describe('DeviceInfo', () => {
  const defaultProps = {
    className: '',
    id: mockDevice.id,
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DeviceInfo {...defaultProps} />,
      { state }
    )

    expect(getByTestId('device-title')).toHaveTextContent(`${mockDevice.brand} ${mockDevice.model}`)
    expect(getByTestId('device-price')).toHaveTextContent(`${mockDevice.price}€`)
    expect(getByTestId('title-radio')).toHaveTextContent('Radio')
    expect(getByTestId('description-radio')).toHaveTextContent('FM radio')
  })
})
