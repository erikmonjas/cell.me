import styled from 'styled-components'
import DeviceDetail from './DeviceDetail.component'

export default styled(DeviceDetail)`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
  }

  .loader-wrapper {
    width: 100%;
    margin-top: 20vh;
  }

  .image-wrapper {
    width: 150px;
    height: fit-content;
    position: sticky;
    top: 15px;
    left: 0;
    img {
      width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      position: static;
      margin-bottom: 30px;
    }
  }

  .right-column {
    width: calc(100% - 190px);
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 100%;
    }
  }
`