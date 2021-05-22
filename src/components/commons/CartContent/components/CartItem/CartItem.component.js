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
        <div className="amount-wrapper">
          <button className="action-button minus-button" disabled={item.amount < 2} />
          <p>{item.amount}</p>
          <button className="action-button plus-button" />
        </div>
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  className: PropTypes.string.isRequired,
}