import styled from 'styled-components'
import Header from './Header.component'

export default styled(Header)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 0;

  .logo-cart-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
`