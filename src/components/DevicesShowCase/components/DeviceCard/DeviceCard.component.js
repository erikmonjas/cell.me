import React from 'react'
import PropTypes from 'prop-types'

const DeviceCard = ({ className, id, model, brand, price, imgUrl }) => {
  return (
    <div className={className}>
      <img src={imgUrl} alt={`${brand} ${model}`} className="device-image" />
      <div className="text-wrapper">
        <p className="device-name">{brand} {model}</p>
        {price && <p className="price">{price}€</p>}
      </div>
    </div>
  )
}

export default DeviceCard

DeviceCard.propTypes = {
  className: PropTypes.string.isRequired,
}
