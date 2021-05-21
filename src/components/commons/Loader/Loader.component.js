import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ className }) => {
  return (
    <div className={className}>
      <p>loading</p>
    </div>
  )
}

export default Loader

Loader.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}