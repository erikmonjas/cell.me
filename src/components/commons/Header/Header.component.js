import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart.container'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className="container">
        <div className="logo-cart-wrapper">
          <Link className="logo" to="/" data-testid="logo">cell.me</Link>
          <Cart />
        </div>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  className: PropTypes.string.isRequired,
}