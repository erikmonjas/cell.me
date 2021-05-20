import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from 'react-redux'

const Layout = ({ className, children }) => {
  const store = useStore()
  console.log(store.getState())
  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <p className="logo">cell.<span>me</span></p>
        </div>
      </header>
      <main>
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