import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../../../utils/text'
import { stateReducer } from '../../../../utils/state/stateReducer'
import AddToCartButton from '../../../commons/AddToCartButton'
import RadioGroup from '../../../commons/RadioGroup'
import { useSelector } from 'react-redux'
import { getDetails } from '../../../../state/devices/selectors'

const DeviceActions = ({ className, id }) => {
  const details = useSelector(getDetails)

  const { options, price } = details[id]

  const generateState = () => Object.keys(options).reduce((acc, key) => ({
    ...acc,
    [key]: options[key][0].code
  }), {})
  
  const initialState = options ? generateState() : {}
  const [state, setState] = useReducer(stateReducer, initialState)

  useEffect(() => {
    options && setState(generateState())
  }, [options])

  const generateRadios = key => key.map(({ code, name }) => ({ text: name, value: code }))

  return options ? (
    <div className={className}>
      {Object.keys(options).map(key => (
        <div className="option" key={key}>
          <h3
            className="option-title"
            data-testid="option-title"
          >
            {firstLetterUpperCase(key)}
          </h3>
          <RadioGroup
            radios={generateRadios(options[key])}
            active={state[key]}
            onClick={value => setState({ [key]: value })}
          />
        </div>
      ))}
      {state.colors && state.storages && price !== '' && (
        <AddToCartButton
          id={id}
          color={state.colors}
          storage={state.storages}
        />
      )}
      {price === '' && (
        <p className="unavailable">At this time we are out of stock for this device. Please visit us soon to check availability.</p>
      )}
    </div>
  ) : null
}

export default DeviceActions

DeviceActions.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}