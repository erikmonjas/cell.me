import React from 'react'
import PropTypes from 'prop-types'

const DefaultModal = ({ className, modalChildren, closeModal }) => {
  return (
    <div className={className}>
      <button className="modal-overlay" onClick={closeModal} />
      <div className="modal-inner">
        <button className="close-button" onClick={closeModal}>
          &#x2715;
        </button>        
        {modalChildren}
      </div>
    </div>
  )
}

export default DefaultModal

DefaultModal.propTypes = {
  className: PropTypes.string.isRequired,
}