import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../../../utils/text'
import { stateReducer } from '../../../../utils/state/stateReducer'
import AddToCartButton from '../../../commons/AddToCartButton/AddToCartButton.container'
import { useParams } from 'react-router'
import RadioGroup from '../../../commons/RadioGroup/RadioGroup.container'

const DeviceActions = ({ className, deviceDetails: { options } }) => {
  const { id } = useParams()

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
          <div className="radiogroup" role="radiogroup">
            <RadioGroup
              radios={generateRadios(options[key])}
              active={state[key]}
              onClick={value => setState({ [key]: value })}
            />
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