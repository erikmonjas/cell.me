import React from 'react'
import { cleanup, screen, } from '@testing-library/react'

import DetailPage from './DetailPage.component'
import wrappedRender from '../../../utils/tests'
import { getMockStore } from '../../../utils/tests/store'

afterEach(cleanup)

describe('DetailPage', () => {
  it('should render correct breadcrumbs', () => {
    const { getAllByTestId } = wrappedRender(
      <DetailPage />,
      { state: getMockStore(), currentRoute: '/product/testid' }
    )
    
    const getCrumb = i => getAllByTestId('crumb')[i]
    expect(getCrumb(0)).toHaveTextContent('Home')
    expect(getCrumb(0)).toHaveAttribute('href', '/')

    expect(getCrumb(1)).toHaveTextContent('Product')
    expect(getCrumb(1)).toHaveAttribute('href', '/product/testid')
  })
})
