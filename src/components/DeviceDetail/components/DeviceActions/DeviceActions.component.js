import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../../../utils/text'
import { stateReducer } from '../../../../utils/state/stateReducer'
import AddToCartButton from '../../../commons/AddToCartButton/AddToCartButton.container'
import { useParams } from 'react-router'

const DeviceActions = ({ className, deviceDetails: { options } }) => {
  const { id } = useParams()

  useEffect(() => {
    options && setState(Object.keys(options).reduce((acc, key) => ({
      ...acc,
      [key]: options[key][0].code
    }), {}))
  }, [options])

  const [state, setState] = useReducer(stateReducer, {})

  return options ? (
    <div className={className}>
      {Object.keys(options).map(key => (
        <div className="option" key={key}>
          <h3 className="option-title">{firstLetterUpperCase(key)}</h3>
          <div className="radiogroup" role="radiogroup">
            {options[key].map(({ name, code }) => (
              <button
                key={name}
                className={`radio ${state[key] === code ? 'radio--active' : ''}`}
                role="radio"
                onClick={() => setState({ [key]: code })}
              >
                <span className="radio-button" />
                <span className="radio-text">{name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {state.colors && state.storages && (
        <AddToCartButton
          id={id}
          color={state.colors}
          storage={state.storages}
        />
      )}
    </div>
  ) : null
}

export default DeviceActions

DeviceActions.propTypes = {
  className: PropTypes.string.isRequired,
  deviceDetails: PropTypes.object.isRequired,
}