import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../Header/Header.container'
import DefaultModal from '../DefaultModal/DefaultModal.container'
import modalTypes from '../../../constants/modals/modalTypes'
import { getOpenModal } from '../../../state/ui/selectors'
import { closeModal } from '../../../state/ui/actionCreators'

const Layout = ({ className, children }) => {
  const dispatch = useDispatch()
  const openModal = useSelector(getOpenModal)

  useEffect(() => {
    window.addEventListener('beforeunload', () => dispatch(closeModal()))
    return () => {
      window.removeEventListener('beforeunload', () => dispatch(closeModal()))
    }
  }, [])

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
  ]).isRequired,
}