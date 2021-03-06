import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { firstLetterUpperCase } from '../../../utils/text'

const BreadCrumbs = ({ className, crumbs }) => {
  const { pathname } = useLocation()
  return (
    <div className={className}>
      {crumbs.map(({ text, link }) => (
        <Link
          key={text}
          className="crumb"
          to={link || pathname}
          data-testid="crumb"
        >
          {firstLetterUpperCase(text)}
        </Link>
      ))}
    </div>
  )
}

export default BreadCrumbs

BreadCrumbs.propTypes = {
  className: PropTypes.string.isRequired,
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
}