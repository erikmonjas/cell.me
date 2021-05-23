import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

import { cartItem } from '../../../constants/models/cart'
import Loader from '../Loader/Loader.container'

const CartItem = React.lazy(() => import('./components/CartItem/CartItem.container'))

const CartContent = ({
  className,
  items,
}) => {
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
  items: PropTypes.objectOf(cartItem).isRequired
}