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
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
    max-height: 400px;
    overflow: auto;
  }

  .specifications-title {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }

  .device-specifications {
    display: flex;
    margin-bottom: 15px;
  }

  .specification-title {
    font-weight: 700;
    width: 200px;
  }
`