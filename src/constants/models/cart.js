import PropTypes from 'prop-types'

export const cartItem = PropTypes.exact({
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
  storage: PropTypes.number.isRequired,
})
