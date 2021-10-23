import styled from 'styled-components'
import Layout from './Layout.component'

export default styled(Layout)`
  .main {
    padding-top: 100px;
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