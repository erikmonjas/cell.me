import styled from 'styled-components'
import DeviceDetail from './DeviceDetail.component'

export default styled(DeviceDetail)`
  display: flex;
  justify-content: space-between;
  position: relative;

  .image-wrapper {
    width: 150px;
    height: fit-content;
    position: sticky;
    top: 15px;
    left: 0;
    img {
      width: 100%;
    }
  }

  .right-column {
    width: calc(100% - 190px);
  }
`