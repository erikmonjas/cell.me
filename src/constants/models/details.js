import PropTypes from 'prop-types'
import { deviceWithDetails } from './devices'

export const detailsModel = PropTypes.oneOfType([
  PropTypes.exact({}),
  deviceWithDetails,
])