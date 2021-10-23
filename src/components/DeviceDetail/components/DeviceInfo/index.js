import styled from 'styled-components'
import DeviceInfo from './DeviceInfo.component'

export default styled(DeviceInfo)`
  .device-highlight {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.oswald};
    text-transform: uppercase;
    font-size: 28px;
  }

  .device-price {
    margin-left: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  .specifications-wrapper {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
    max-height: 400px;
    overflow: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: 15px;
    }
  }

  .specifications-title {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .device-specifications {
    display: flex;
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }

  .specification-title {
    font-weight: 700;
    width: 200px;
  }
`