import styled from 'styled-components'
import DeviceActions from './DeviceActions.component'

export default styled(DeviceActions)`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
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
`