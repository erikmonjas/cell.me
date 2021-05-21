import styled from 'styled-components'
import DevicesShowCase from './DevicesShowCase.component'

export default styled(DevicesShowCase)`
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
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .no-match {
    margin: 0 auto;
    margin-top: 80px;
    width: 100%;
    text-align: center;
  }
`