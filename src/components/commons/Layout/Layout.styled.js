import styled from 'styled-components'
import Layout from './Layout.component'

export default styled(Layout)`
  .header {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 0;
  }

  .logo {
    font-family: ${({ theme }) => theme.fonts.oswald};
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .main {
    padding-top: 50px;
  }
`