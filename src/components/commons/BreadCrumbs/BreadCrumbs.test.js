import React from 'react'
import { cleanup, screen, } from '@testing-library/react'

import BreadCrumbs from './BreadCrumbs.component'
import wrappedRender from '../../../utils/tests'
import { firstLetterUpperCase } from '../../../utils/text'

afterEach(cleanup)

describe('Breadcrumbs', () => {
  const defaultProps = {
    className: '',
    crumbs: [{ text: 'home', link: '/' }, { text: 'product' }]
  }

  it('should render everything according to props', () => {
    const { getAllByTestId } = wrappedRender(
      <BreadCrumbs {...defaultProps} />
    )

    defaultProps.crumbs.map(({ link, text }, index) => {
      expect(getAllByTestId('crumb')[index]).toHaveTextContent(firstLetterUpperCase(text))
      expect(screen.getByText(firstLetterUpperCase(text)).closest('a')).toHaveAttribute('href', link)
    })
  })
})
