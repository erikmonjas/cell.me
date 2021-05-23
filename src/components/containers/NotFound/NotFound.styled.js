import styled from 'styled-components'
import NotFound from './NotFound.component'

export default styled(NotFound)`
  .wrapper {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .big-text {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .go-back {
    color: ${({ theme }) => theme.colors.secondary};
  }
`