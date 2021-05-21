import styled from 'styled-components'
import RadioGroup from './RadioGroup.component'

export default styled(RadioGroup)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 30px;
  &:first-of-type {
    margin-left: 0;
  }
  &--active {
    .radio-button {
      &:before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.white};
        display: block;
      }
    }
  }

  .radio-button {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`