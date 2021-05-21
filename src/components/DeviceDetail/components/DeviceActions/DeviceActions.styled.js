import styled from 'styled-components'
import DeviceActions from './DeviceActions.component'

export default styled(DeviceActions)`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;

  .option {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  .option-title {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .radiogroup {
    display: flex;
  }

  .radio {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 30px;
    &:first-of-type {
      margin-left: 0;
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
`