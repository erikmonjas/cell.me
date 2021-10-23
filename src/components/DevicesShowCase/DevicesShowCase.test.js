import React from 'react'
import * as redux from 'react-redux'
import { cleanup, screen, fireEvent } from '@testing-library/react'

import wrappedRender from '../../utils/tests'
import DevicesShowCase from './DevicesShowCase.component'
import { getMockStore } from '../../utils/tests/store'
import { deviceWithoutDetails } from '../../constants/mocks/device'
import { FETCH_DEVICES } from '../../state/devices/actionTypes'

describe('DevicesShowCase', () => {
  const state = getMockStore({
    variation: {
      devices: {
        devices: [ deviceWithoutDetails ]
      },
      ui: {
        loading: ''
      }
    }
  })
  
  let useDispatchSpy, mockDispatchFn
  
  beforeEach(() => {
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

  it('should not fetch devices', () => {
    wrappedRender(
      <DevicesShowCase {...defaultProps} />,
      { state }
    )

    expect(mockDispatchFn).not.toHaveBeenCalled()
    expect(screen.getAllByTestId('device-card')).toHaveLength(1)
  })


  it('should fetch devices', () => {
    const localState = state
    localState.devices.devices = []

    wrappedRender(
      <DevicesShowCase {...defaultProps} />,
      { state: localState }
    )

    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {},
      type: FETCH_DEVICES
    })
  })

  it('should filter devices', () => {
    const localState = state
    localState.devices.devices = [
      deviceWithoutDetails,
      {
        model: 'galaxy 8',
        brand: 'samsung',
        id: 'wejor',
        price: '400',
        imgUrl: '/some-route',
      }
    ]
    const { getByTestId, queryByTestId } = wrappedRender(
      <DevicesShowCase {...defaultProps} />,
      { state: localState }
    )
    const searchInput = getByTestId('search-input')
    
    fireEvent.change(searchInput, { target: { value: 'samsung' } })
    expect(searchInput.value).toBe('samsung')
    expect(queryByTestId('no-match-text')).toBeNull()
    expect(screen.getAllByTestId('device-card')).toHaveLength(1)

    fireEvent.change(searchInput, { target: { value: 'apple' } })
    expect(queryByTestId('device-card')).toBeNull()
    expect(getByTestId('no-match-text')).toBeTruthy()

    fireEvent.change(searchInput, { target: { value: '' } })
    expect(queryByTestId('no-match-text')).toBeNull()
    expect(screen.getAllByTestId('device-card')).toHaveLength(2)
  })
  
})
