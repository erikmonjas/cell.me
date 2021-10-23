import styled from 'styled-components'
import Header from './Header.component'

export default styled(Header)`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 5px 0px rgba(0,0, 0, 0.1);
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 60px;
  display: flex;
  align-items: center;

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