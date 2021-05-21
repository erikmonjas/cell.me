import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CartIcon } from './assets/cart.svg'

const Cart = ({ className, cartItems, openDefaultModal }) => {
  const totalItems = Object.values(cartItems).reduce((acc, { amount }) => acc + amount, 0)

  const handleCartClick = () => openDefaultModal({ children: <p>items</p> })

  return (
    <button className={className} onClick={handleCartClick}>
      <CartIcon />
      {totalItems > 0 && <span className="item-count" data-testid="item-count">{totalItems}</span>}
    </button>
  )
}

export default Cart

Cart.propTypes = {
  className: PropTypes.string.isRequired,
  cartItems: PropTypes.object.isRequired,
}