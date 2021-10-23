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
    min-height: 85vh;
  }

  .footer {
    width: 100%;
    padding: 30px 0;
  }

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`