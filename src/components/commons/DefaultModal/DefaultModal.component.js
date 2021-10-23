import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getModalChildren } from '../../../state/ui/selectors'
import { closeModal } from '../../../state/ui/actionCreators'

const DefaultModal = ({ className }) => {
  const dispatch = useDispatch()
  const children = useSelector(getModalChildren)

  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden'
    return () => {
      document.querySelector('body').style.overflow = 'initial'
    }
  }, [])

  return (
    <div className={className} data-testid="default-modal">
      <button
        className="modal-overlay"
        onClick={() => dispatch(closeModal())}
        data-testid="modal-overlay"
      />
      <div className="modal-inner">
        <button
          className="close-button"
          onClick={() => dispatch(closeModal())}
          data-testid="close-button"
        >
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