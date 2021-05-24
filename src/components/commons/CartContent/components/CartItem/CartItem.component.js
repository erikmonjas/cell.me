import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrashIcon } from './assets/trash.svg'
import { getRealID } from '../../../../../utils/commons'
import { deviceWithDetails } from '../../../../../constants/models/devices'
import { cartItem } from '../../../../../constants/models/cart'

const CartItem = ({
  className,
  item,
  details,
  addToCart,
  removeFromCart,
  subtractFromCart,
}) => {
  const realID = getRealID(item.id)
  const itemDetails = details[realID]
  
  if (!itemDetails) {
    removeFromCart({ id: item.id })
    return null
  }
  
  const {
    brand,
    model,
    price,
    imgUrl,
    options,
  } = itemDetails

  const findOptionName = ({ option, optionCode }) =>
    options[option].find(({ code }) => code === optionCode)

  const deviceColor = findOptionName({ option: 'colors', optionCode: item.color })
  const deviceStorage = findOptionName({ option: 'storages', optionCode: item.storage })

  return (
    <div className={className} data-testid="cart-item">
      <img
        src={imgUrl}
        alt={model}
        className="device-image"
        data-testid="device-image"
      />
      <div className="content">
        <div className="item-text">
          <p className="device-name" data-testid="device-name">{brand} {model}</p>
          <div className="device-details">
            <p className="device-color" data-testid="device-color">Color: {deviceColor.name}</p>
            <p className="device-storage" data-testid="device-storage">Storage: {deviceStorage.name}</p>
          </div>
        </div>
        <p className="price" data-testid="price">{price * item.amount}€</p>
        <div className="actions-wrapper">
          <div className="amount-wrapper">
            <button
              className="action-button subtract-button"
              disabled={item.amount < 2}
              data-testid="subtract-button"
              onClick={() => subtractFromCart({ id: item.id })}
            />
            <p>{item.amount}</p>
            <button
              className="action-button add-button"
              data-testid="add-button"
              onClick={() => addToCart({ id: realID, color: item.color, storage: item.storage })}
            />
          </div>
          <button
            className="trash"
            data-testid="remove-button"
            onClick={() => removeFromCart({ id: item.id })}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  className: PropTypes.string.isRequired,
  item: cartItem.isRequired,
  details: PropTypes.objectOf(deviceWithDetails).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  subtractFromCart: PropTypes.func.isRequired,
}