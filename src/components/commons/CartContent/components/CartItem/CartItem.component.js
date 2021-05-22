import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrashIcon } from './assets/trash.svg'
import { getRealID } from '../../../../../utils/commons'

const CartItem = ({
  className,
  item,
  details,
  addToCart,
  removeFromCart,
  subtractFromCart,
}) => {
  const realID = getRealID(item.id)

  const {
    brand,
    model,
    price,
    imgUrl,
    options,
  } = details[realID]

  const findOptionName = ({ option, optionCode }) =>
    options[option].find(({ code }) => code === optionCode)

  const deviceColor = findOptionName({ option: 'colors', optionCode: item.color })
  const deviceStorage = findOptionName({ option: 'storages', optionCode: item.storage })

  return (
    <div className={className}>
      <img
        src={imgUrl}
        alt={model}
        className="device-image"
      />
      <div className="content">
        <div className="item-text">
          <p className="device-name">{brand} {model}</p>
          <div className="device-details">
            <p className="device-color">Color: {deviceColor.name}</p>
            <p className="device-storage">Storage: {deviceStorage.name}</p>
          </div>
        </div>
        <p className="price">{price * item.amount}€</p>
        <div className="actions-wrapper">
          <div className="amount-wrapper">
            <button
              className="action-button minus-button"
              disabled={item.amount < 2}
              onClick={() => subtractFromCart({ id: item.id })}
            />
            <p>{item.amount}</p>
            <button
              className="action-button plus-button"
              onClick={() => addToCart({ id: realID, color: item.color, storage: item.storage })}
            />
          </div>
          <button className="trash" onClick={() => removeFromCart({ id: item.id })}>
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
}