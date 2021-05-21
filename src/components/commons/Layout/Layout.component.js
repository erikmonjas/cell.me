import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header.container'

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
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