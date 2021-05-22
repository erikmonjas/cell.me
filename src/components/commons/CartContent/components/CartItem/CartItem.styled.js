import styled from 'styled-components'
import CartItem from './CartItem.component'

export default styled(CartItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .device-image {
    width: 40px;
  }

  .content {
    width: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .device-name {
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 26px;
    text-transform: uppercase;
  }
`