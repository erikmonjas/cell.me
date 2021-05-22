import PropTypes from 'prop-types'

export const deviceWithoutDetails = PropTypes.exact({
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
})

const option = PropTypes.exact({
  code: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
})

const options = PropTypes.shape({
  colors: PropTypes.arrayOf(option),
  storages: PropTypes.arrayOf(option),
})

export const deviceWithDetails = PropTypes.shape({
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  options
})
