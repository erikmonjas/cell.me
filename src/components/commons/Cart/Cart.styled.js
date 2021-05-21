import styled from 'styled-components'
import Cart from './Cart.component'

export default styled(Cart)`
  cursor: pointer;
  position: relative;

  svg {
    width: 40px;
    transform: scaleX(-1);
    fill: white;
  }

  .item-count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    transform: translate(50%, -20%);
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    border-radius: 15px;
  }
`