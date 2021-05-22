import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const DefaultModal = ({ className, children, closeModal }) => {
  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden'
    return () => {
      document.querySelector('body').style.overflow = 'initial'
    }
  }, [])
  return (
    <div className={className}>
      <button className="modal-overlay" onClick={closeModal} />
      <div className="modal-inner">
        <button className="close-button" onClick={closeModal}>
          &#x2715;
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultModal

DefaultModal.propTypes = {
  className: PropTypes.string.isRequired,
}