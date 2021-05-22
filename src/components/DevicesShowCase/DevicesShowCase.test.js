import React from 'react'
import { cleanup, screen, fireEvent } from '@testing-library/react'

import wrappedRender from '../../utils/tests'
import DevicesShowCase from './DevicesShowCase.component'
import mockDevice from '../../constants/mocks/device'

describe('DevicesShowCase', () => {
  
  afterEach(cleanup)

  const defaultProps = {
    className: '',
    devices: [mockDevice],
    fetchDevices: jest.fn(),
    loading: '',
  }

  it('should not fetch devices', () => {
    wrappedRender(
      <DevicesShowCase {...defaultProps} />
    )

    expect(defaultProps.fetchDevices).not.toHaveBeenCalled()
    expect(screen.getAllByTestId('device-card')).toHaveLength(defaultProps.devices.length)
  })


  it('should fetch devices', () => {
    const localProps = {
      ...defaultProps,
      devices: []
    }

    wrappedRender(
      <DevicesShowCase {...localProps} />
    )

    expect(localProps.fetchDevices).toHaveBeenCalled()
  })

  it('should filter devices', () => {
    const localProps = {
      ...defaultProps,
      devices: [mockDevice, { model: 'galaxy 8', brand: 'samsung', id: 'wejor', price: '400', imgUrl: '/some-route' }]
    }
    const { getByTestId, queryByTestId } = wrappedRender(
      <DevicesShowCase {...localProps} />
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
    expect(screen.getAllByTestId('device-card')).toHaveLength(localProps.devices.length)
  })
  
})
