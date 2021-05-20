import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <p className="logo">cell.<span>me</span></p>
        </div>
      </header>
      <main>
        {children}
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