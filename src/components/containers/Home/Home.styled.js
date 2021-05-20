import styled from 'styled-components'
import Home from './Home.component'

export default styled(Home)`
  .page-title {
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  .presentation {
    margin-top: 20px;
    margin-bottom: 60px;
    p {
      margin-bottom: 15px;
      color: #737373;
    }
  }
`