import styled from 'styled-components'
import Loader from './Loader.component'

export default styled(Loader)`
  position: relative;
  height: 100px;
  .loader,
  .loader:before,
  .loader:after {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 0.3em;
    height: 4em;
  }
  .loader {
    color: ${({ theme }) => theme.colors.primary};
    text-indent: -9999em;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(0);
    font-size: 11px;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 2em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 2.5em;
    }
  }
`