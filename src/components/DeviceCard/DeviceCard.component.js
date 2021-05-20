import React from 'react'
import PropTypes from 'prop-types'

const DeviceCard = ({ className, id, model, brand, price, imgUrl }) => {
  return (
    <div className={className}>
      <img src={imgUrl} alt={`${brand} ${model}`} />
      <p>{brand}</p>
      <p>{model}</p>
      <p>{price}€</p>
    </div>
  )
}

export default DeviceCard

DeviceCard.propTypes = {
  className: PropTypes.string.isRequired,
}
