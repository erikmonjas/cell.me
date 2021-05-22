import styled from 'styled-components'
import DefaultModal from './DefaultModal.component'

export default styled(DefaultModal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .modal-overlay {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }

  .modal-inner {
    position: absolute;
    width: 90%;
    max-width: 950px;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 14px 15px 0px rgba(0,0,0,0.1);
    border-radius: 4px;
  }

  .modal-content {
    max-height: 80vh;
    overflow-y: auto;
  }

  .close-button {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
  }
`