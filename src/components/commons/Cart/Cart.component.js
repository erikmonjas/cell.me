import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CartIcon } from './assets/cart.svg'

const Cart = ({ className, cartItems }) => {
  const totalItems = Object.values(cartItems).reduce((acc, { amount }) => acc + amount, 0)
  console.log(totalItems)
  return (
    <div className={className} role="button">
      <CartIcon />
      {totalItems > 0 && <span className="item-count">{totalItems}</span>}
    </div>
  )
}

export default Cart

Cart.propTypes = {
  className: PropTypes.string.isRequired,
}