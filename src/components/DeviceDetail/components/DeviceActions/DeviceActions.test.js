import React from 'react'
import router from 'react-router'
import { cleanup } from '@testing-library/react'

import DeviceActions from './DeviceActions.component'
import mockDevice from '../../../../constants/mocks/device'
import wrappedRender from '../../../../utils/tests'
import { getMockStore } from '../../../../utils/tests/store'
import { firstLetterUpperCase } from '../../../../utils/text'

const state = getMockStore({
  variation: {
    devices: {
      details: { [mockDevice.id]: mockDevice }
    }
  }
})

afterEach(cleanup)

describe('DeviceActions', () => {
  const defaultProps = {
    className: '',
    id: mockDevice.id,
  }

  it('should render everything according to props', () => {
    jest.spyOn(router, 'useParams').mockReturnValue({ id: '1234' })

    const { getAllByTestId } = wrappedRender(
      <DeviceActions {...defaultProps} />,
      {
        state,
        currentRoute: '/product/testid'
      }
    )

    expect(getAllByTestId('option-title')[0]).toHaveTextContent(firstLetterUpperCase('Colors'))
    expect(getAllByTestId('option-title')[1]).toHaveTextContent(firstLetterUpperCase('Storages'))
  })
})
