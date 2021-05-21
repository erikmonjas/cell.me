import styled from 'styled-components'
import BreadCrumbs from './BreadCrumbs.component'

export default styled(BreadCrumbs)`
  display: flex;
  margin-bottom: 15px;

  .crumb {
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
      content: '/';
      display: block;
      margin-left: 5px;
      color: ${({ theme }) => theme.colors.grey};
    }
    &:last-of-type:after {
      display: none;
    }
  }
`