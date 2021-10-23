import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ReactComponent as CartIcon } from './assets/cart.svg'
import Loader from '../Loader/Loader.container'
import { getCartItems } from '../../../state/cart/selectors'
import { openDefaultModal } from '../../../state/ui/actionCreators'

const CartContent = React.lazy(() => import('../CartContent/CartContent.container'))

const Cart = ({ className }) => {
  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()
  const totalItems = Object.values(cartItems).reduce((acc, { amount }) => acc + amount, 0)

  const handleCartClick = () => dispatch(
    openDefaultModal({
      children: (
        <Suspense fallback={<Loader />}>
          <CartContent />
        </Suspense>
      )
    })
  )

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
}