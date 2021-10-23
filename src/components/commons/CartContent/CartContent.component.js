import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

import Loader from '../Loader/Loader.container'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../../state/cart/selectors'

const CartItem = React.lazy(() => import('./components/CartItem'))

const CartContent = ({
  className,
}) => {
  const items = useSelector(getCartItems)
  const itemsArray = Object.values(items)
  return (
    <div className={className}>
      <div>
        <Suspense fallback={<Loader /> }>
          {itemsArray.length > 0 ?
            itemsArray.map(item => <CartItem item={item} key={item.id} />) :
            <p className="empty-cart" data-testid="empty-cart">Your cart is currently empty</p>
          }
        </Suspense>
      </div>
    </div>
  )
}

export default CartContent

CartContent.propTypes = {
  className: PropTypes.string.isRequired,
}