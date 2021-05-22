import styled from 'styled-components'
import CartItem from './CartItem.component'

export default styled(CartItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  &:last-of-type {
    margin-bottom: 0;
  }

  .device-image {
    width: 40px;
  }

  .content {
    width: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-text {
    width: 300px;
  }

  .device-name {
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 26px;
    text-transform: uppercase;
  }
  
  .price {
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  .device-details {
    display: flex;
    text-transform: lowercase;
    font-size: 14px;
  }

  .device-storage {
    margin-left: 10px;
  }

  .amount-wrapper {
    display: flex;
    align-items: center;
  }

  .action-button {
    position: relative;
    width: 25px;
    height: 25px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-weight: 700;
    border-radius: 15px;
    font-size: 28px;
    cursor: pointer;
    &:before, &:after {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.colors.primary};
      height: 2px;
      width: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:disabled {
      border-color: ${({ theme }) => theme.colors.greyLight};
      &:before, &:after {
        background-color: ${({ theme }) => theme.colors.greyLight};
      }
    }
  }

  .minus-button {
    margin-right: 10px;
    &:after {
      display: none;
    }
  }
  
  .plus-button {
    margin-left: 10px;
    &:after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
`