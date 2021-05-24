import React from 'react'
import { cleanup } from '@testing-library/react'

import wrappedRender from '../../utils/tests'
import DeviceDetail from './DeviceDetail.component'
import { getMockStore } from '../../utils/tests/store'
import mockDetails from '../../constants/mocks/details'
import { deviceWithoutDetails } from '../../constants/mocks/device'
import ReactRouter from 'react-router'

describe('DeviceDetail', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })
  
  afterEach(cleanup)

  const defaultProps = {
    className: '',
    fetchDeviceDetails: jest.fn(),
    details: {},
    loading: '',
  }

  it('should fetch details', () => {
    wrappedRender(
      <DeviceDetail {...defaultProps} />,
      { state: getMockStore(), currentRoute: '/product/testid' }
    )

    expect(defaultProps.fetchDeviceDetails).toHaveBeenCalled()
  })

  
  it('should not fetch details and show image', () => {
    const localProps = {
      ...defaultProps,
      details: mockDetails
    }
    const mockID = deviceWithoutDetails.id

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: mockID })

    const { getByTestId } = wrappedRender(
      <DeviceDetail {...localProps} />,
      {
        state: getMockStore({ variation: {
          devices: {
            details: mockDetails
          }
      }}),
      currentRoute: `/product/${mockID}`
    })

    expect(defaultProps.fetchDeviceDetails).not.toHaveBeenCalled()
    expect(getByTestId('device-image')).toHaveAttribute('src', deviceWithoutDetails.imgUrl)
  })
})
