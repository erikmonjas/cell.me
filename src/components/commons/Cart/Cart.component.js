import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CartIcon } from './assets/cart.svg'
import { cartItem } from '../../../constants/models/cart'
import Loader from '../Loader/Loader.container'

const CartContent = React.lazy(() => import('../CartContent/CartContent.container'))

const Cart = ({ className, cartItems, openDefaultModal }) => {
  const totalItems = Object.values(cartItems).reduce((acc, { amount }) => acc + amount, 0)

  const handleCartClick = () => openDefaultModal({ children: (
    <Suspense fallback={<Loader />}>
      <CartContent />
    </Suspense>
  )})

  return (
    <button className={className} onClick={handleCartClick} data-testid="cart">
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