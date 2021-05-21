import styled from 'styled-components'
import DeviceCard from './DeviceCard.component'

export default styled(DeviceCard)`
  box-shadow: 0px 14px 15px 0px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  margin-left: 2%;
  margin-bottom: 60px;
  padding-top: 10px;
  text-align: center;
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);

    .text-wrapper {
      border-top-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-left: 0;
  }
  

  .text-wrapper {
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    flex: 1;
    width: 100%;
    margin-top: 20px;
    padding: 40px 20px;
    padding-top: 30px;
    transition: 0.1s ease;
  }

  .device-image {
    width: 120px;
  }

  .device-name {
    margin-bottom: 20px;
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-weight: 300;
    text-transform: uppercase;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${({ theme }) => theme.fonts.oswald};
  }
`