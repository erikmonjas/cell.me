import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header.container'
import DefaultModal from '../DefaultModal/DefaultModal.container'
import modalTypes from '../../../constants/modals/modalTypes'

const Layout = ({ className, children, openModal }) => {
  return (
    <div className={className}>
      <Header />
      <main className="main">
        <div className="container">
          {children}
          {openModal === modalTypes.DEFAULT && <DefaultModal />}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="author">Developed by&nbsp;<a href="https://erikmonjas.com/">Érik Monjas</a></div>
        </div>
      </footer>
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