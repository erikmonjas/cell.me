import React from 'react'
import * as redux from 'react-redux'
import { cleanup } from '@testing-library/react'

import wrappedRender from '../../utils/tests'
import DeviceDetail from './DeviceDetail.component'
import { getMockStore } from '../../utils/tests/store'
import mockDetails from '../../constants/mocks/details'
import { deviceWithoutDetails } from '../../constants/mocks/device'
import router from 'react-router'
import { FETCH_DEVICE_DETAILS } from '../../state/devices/actionTypes'

describe('DeviceDetail', () => {
  const mockID = deviceWithoutDetails.id
  const state = getMockStore()
  
  let useDispatchSpy, mockDispatchFn
  
  beforeEach(() => {
    window.scrollTo = jest.fn()
    jest.spyOn(router, 'useParams').mockReturnValue({ id: mockID })
    useDispatchSpy = jest.spyOn(redux, 'useDispatch')
    mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)
  })
  
  afterEach(() => {
    useDispatchSpy.mockClear()
    cleanup()
  })

  const defaultProps = {
    className: '',
  }

  it('should fetch details', () => {
    wrappedRender(
      <DeviceDetail {...defaultProps} />,
      { state, currentRoute: `/product/${mockID}` }
    )

    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: { id: mockID },
      type: FETCH_DEVICE_DETAILS,
    })
  })

  
  it('should not fetch details and show image', () => {
    const localState = getMockStore({
      devices: {
        details: mockDetails
      }
    })

    const { getByTestId } = wrappedRender(
      <DeviceDetail {...defaultProps} />,
      {
        state: localState,
        currentRoute: `/product/${mockID}`
      }
    )

    expect(mockDispatchFn).not.toHaveBeenCalled()
    expect(getByTestId('device-image')).toHaveAttribute('src', deviceWithoutDetails.imgUrl)
  })
})
