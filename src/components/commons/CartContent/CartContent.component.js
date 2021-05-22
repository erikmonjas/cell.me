import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './components/CartItem/CartItem.container'
import { cartItem } from '../../../constants/models/cart'

const CartContent = ({
  className,
  items,
}) => {
  const itemsArray = Object.values(items)
  return (
    <div className={className}>
      <div>
        {itemsArray.length > 0 ?
          itemsArray.map(item => <CartItem item={item} key={item.id} />) :
          <p className="empty-cart" data-testid="empty-cart">Your cart is currently empty</p>
        }
      </div>
    </div>
  )
}

export default CartContent

CartContent.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.objectOf(cartItem).isRequired
}