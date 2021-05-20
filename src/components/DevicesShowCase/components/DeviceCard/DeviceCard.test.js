import React from 'react'
import { cleanup, render } from '@testing-library/react'
import DeviceCard from './DeviceCard.component'
import mockDevice from '../../../../constants/devices/mockDevice'

afterEach(cleanup)

describe('DeviceCard', () => {
  const defaultProps = {
    className: '',
    ...mockDevice
  }

  it('should render everything according to props', () => {
    const { getByTestId } = render(
      <DeviceCard {...defaultProps} />
    )

    expect(getByTestId('device-card-image')).toHaveAttribute('src', defaultProps.imgUrl)
    expect(getByTestId('device-card-text')).toHaveTextContent(`${defaultProps.brand} ${defaultProps.model}`)
    expect(getByTestId('device-card-price')).toHaveTextContent(defaultProps.price)
  })
})
