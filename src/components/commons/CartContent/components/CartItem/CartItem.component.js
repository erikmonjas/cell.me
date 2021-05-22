import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({
  className,
  item,
  details
}) => {
  const [realID] = item.id.split('-')
  const {
    brand,
    model,
    price,
    imgUrl,
  } = details[realID]

  return (
    <div className={className}>
      <img
        src={imgUrl}
        alt={model}
        className="device-image"
      />
      <div className="content">
        <p className="device-name">{brand} {model}</p>
        <p>{price * item.amount}€</p>
        <div>
          <span className="plus-button" />
          <p>{item.amount}</p>
          <span className="plus-button" />
        </div>
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  className: PropTypes.string.isRequired,
}