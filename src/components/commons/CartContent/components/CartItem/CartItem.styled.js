import styled from 'styled-components'
import CartItem from './CartItem.component'

export default styled(CartItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .device-image {
    width: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 60px;
      margin-bottom: 10px;
    }
  }

  .content {
    width: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: flex-start;
      width: calc(100% - 20px);
    }
  }

  .item-text {
    width: 300px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 10px;
      width: 100%;
    }
  }

  .device-name {
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 26px;
    text-transform: uppercase;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 5px;
    }
  }
  
  .price {
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 10px;
    }
  }

  .device-details {
    display: flex;
    text-transform: lowercase;
    font-size: 14px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  }

  .device-storage {
    margin-left: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 0;
    }
  }

  .actions-wrapper {
    display: flex;
  }

  .amount-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
  }

  .action-button {
    position: relative;
    width: 25px;
    height: 25px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-weight: 700;
    border-radius: 15px;
    font-size: 28px;
    cursor: pointer;
    &:before, &:after {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.colors.secondary};
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

  .subtract-button {
    margin-right: 10px;
    &:after {
      display: none;
    }
  }
  
  .add-button {
    margin-left: 10px;
    &:after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  .trash {
    cursor: pointer;
    margin-left: 20px;
    svg path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`