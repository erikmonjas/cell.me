import React from 'react'
import { cleanup } from '@testing-library/react'
import DeviceCard from './DeviceCard.component'
import mockDevice from '../../../../constants/devices/mockDevice'
import wrappedRender from '../../../../utils/tests'

afterEach(cleanup)

describe('DeviceCard', () => {
  const defaultProps = {
    className: '',
    ...mockDevice
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <DeviceCard {...defaultProps} />
    )

    expect(getByTestId('device-card-image')).toHaveAttribute('src', defaultProps.imgUrl)
    expect(getByTestId('device-card-text')).toHaveTextContent(`${defaultProps.brand} ${defaultProps.model}`)
    expect(getByTestId('device-card-price')).toHaveTextContent(defaultProps.price)
  })
})
