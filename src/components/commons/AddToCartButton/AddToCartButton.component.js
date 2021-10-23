import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { addToCart } from '../../../state/cart/actionCreators'

const AddToCartButton = ({
  className,
  id,
  color,
  storage,
 }) => {
  const dispatch = useDispatch()
  return (
    <button
      data-testid="add-to-cart-button"
      className={className}
      onClick={() => dispatch(
        addToCart({ id, color, storage })
      )}
    >
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
}