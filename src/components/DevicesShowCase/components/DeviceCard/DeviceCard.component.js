import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DeviceCard = ({ className, id, model, brand, price, imgUrl }) => {


  return (
    <Link
      className={className}
      data-testid="device-card"
      role="button"
      to={`/product/${id}`}
    >
      <img
        src={imgUrl}
        alt={`${brand}
        ${model}`}
        className="device-image"
        data-testid="device-card-image"
      />
      <div className="text-wrapper">
        <p className="device-name" data-testid="device-card-text">{brand} {model}</p>
        {price ? (
            <p className="bottom-text price" data-testid="device-card-price">{price}€</p>
          ) : (
            <p className="bottom-text out-of-stock">Out of stock</p>   
        )}
      </div>
    </Link>
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
