import styled from 'styled-components'
import DevicesShowCase from './DevicesShowCase.component'

export default styled(DevicesShowCase)`
  .showcase-wrapper {
    opacity: 0;
    animation: fadein 0.5s forwards;
    transform: translateY(50px);
  }

  @keyframes fadein {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    width: 110%;
    margin-left: -5%;
    padding: 15px 5%;
    padding-top: 5px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .search-input {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    text-align: right;
    padding: 10px;
    color: ${({ theme }) => theme.colors.grey};
    &::placeholder {
      text-align: right;
    }
  }

  .showcase {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5%;
    grid-row-gap: 80px;
    justify-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .no-match {
    margin: 0 auto;
    margin-top: 80px;
    width: 100%;
    text-align: center;
  }
`