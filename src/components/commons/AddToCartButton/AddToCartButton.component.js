import React from 'react'
import PropTypes from 'prop-types'

const AddToCartButton = ({
  className,
  id,
  color,
  storage,
  addToCart
 }) => {
  return (
    <button className={className} onClick={() => addToCart({ id, color, storage })}>
      Add to cart
    </button>
  )
}

export default AddToCartButton

AddToCartButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.number.isRequired,
  storage: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
}