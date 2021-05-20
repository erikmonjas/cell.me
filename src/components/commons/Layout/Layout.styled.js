import styled from 'styled-components'
import Layout from './Layout.component'

export default styled(Layout)`
  .header {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 0;
  }

  .logo {
    font-family: ${({ theme }) => theme.fonts.anton};
    font-size: 30px;
    line-height: 0.8;
    span {
      display: block;
    }
  }
`