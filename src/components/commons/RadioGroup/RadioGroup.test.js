import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import RadioGroup from './RadioGroup.component'
import wrappedRender from '../../../utils/tests'

afterEach(cleanup)

describe('RadioGroup', () => {
  const defaultProps = {
    className: '',
    active: 'a',
    onClick: jest.fn(),
    radios: [{ text: 'A', value: 'a' }, { text: 'B', value: 'b' }],
  }

  it('should render everything according to props', () => {
    const { getByTestId } = wrappedRender(
      <RadioGroup {...defaultProps} />
    )

    expect(getByTestId('radio-a')).toHaveTextContent('A')
    expect(getByTestId('radio-a')).toHaveAttribute('aria-checked', 'true')
    expect(getByTestId('radio-b')).toHaveAttribute('aria-checked', 'false')    
  })

  it('should call on click with value', () => {
    const { getByTestId } = wrappedRender(
      <RadioGroup {...defaultProps} />
    )
    
    fireEvent.click(getByTestId('radio-b'))
    expect(defaultProps.onClick).toHaveBeenCalledWith('b')
  })
})
