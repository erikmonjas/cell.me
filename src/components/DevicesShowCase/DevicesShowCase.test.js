import React from 'react'
import * as reactRedux from 'react-redux'
import { cleanup, screen } from '@testing-library/react'

import renderWithTheme from '../../utils/tests'
import DevicesShowCase from './DevicesShowCase.component'
import mockDevice from './constants/mockDevice'

describe('DevicesShowCase', () => {
  
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const mockState = { devices: [mockDevice] }
  
  afterEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    cleanup()
  })

  const defaultProps = {
    className: '',
  }

  it('should fetch devices', () => {
    const dummyDispatch = jest.fn()
    useSelectorMock.mockImplementation(callback => callback(mockState))
    useDispatchMock.mockReturnValue(dummyDispatch)

    expect(dummyDispatch).not.toHaveBeenCalled()

    renderWithTheme(
      <DevicesShowCase {...defaultProps} />
    )

    expect(dummyDispatch).toHaveBeenCalled()
    expect(screen.getAllByTestId('device-card')).toHaveLength(mockState.devices.length)
  })
})
