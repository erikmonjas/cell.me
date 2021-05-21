import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <Link className="logo" to="/">cell.me</Link>
        </div>
      </header>
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}