import styled from 'styled-components'
import AddToCartButton from './AddToCartButton.component'

export default styled(AddToCartButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: 0.16s ease;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.01);
  }
`