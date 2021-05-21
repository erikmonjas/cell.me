import styled from 'styled-components'
import App from './App.component'

export default styled(App)`
  font-family: 'Lato';
  font-weight: 400;
  line-height: 1.3;
  color: #737373;

  .container {
    max-width: 950px;
    margin: 0 auto;
    @media (max-width: 992px) {
      width: 90%;
    }
  }
`