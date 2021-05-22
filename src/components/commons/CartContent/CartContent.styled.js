import styled from 'styled-components'
import CartContent from './CartContent.component'

export default styled(CartContent)`
  .empty-cart {
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
    text-transform: uppercase;
    font-weight: 700;
  }
`