import styled from 'styled-components'
import RadioGroup from './RadioGroup.component'

export default styled(RadioGroup)`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  .radio {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 30px;
    cursor: pointer;
    &:first-of-type {
      margin-left: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 0;
      margin-bottom: 10px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .radio--active {
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