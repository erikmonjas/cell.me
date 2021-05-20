import React from 'react'
import PropTypes from 'prop-types'

const DeviceCard = ({ className, id, model, brand, price, imgUrl }) => {
  return (
    <div className={className} data-testid="device-card">
      <img
        src={imgUrl}
        alt={`${brand}
        ${model}`}
        className="device-image"
        data-testid="device-card-image"
      />
      <div className="text-wrapper">
        <p className="device-name" data-testid="device-card-text">{brand} {model}</p>
        {price && <p className="price" data-testid="device-card-price">{price}€</p>}
      </div>
    </div>
  )
}

export default DeviceCard

DeviceCard.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}
