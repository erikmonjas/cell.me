import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CartIcon } from './assets/cart.svg'
import CartContent from '../CartContent/CartContent.container'
import { cartItem } from '../../../constants/models/cart'

const Cart = ({ className, cartItems, openDefaultModal }) => {
  const totalItems = Object.values(cartItems).reduce((acc, { amount }) => acc + amount, 0)

  const handleCartClick = () => openDefaultModal({ children: <CartContent /> })

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
  cartItems: PropTypes.objectOf(cartItem).isRequired,
  openDefaultModal: PropTypes.func.isRequired,
}