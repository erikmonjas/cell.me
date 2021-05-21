import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchDevices } from '../../state/devices/actionCreators'
import { getDevices } from '../../state/devices/selectors'
import DeviceCard from './components/DeviceCard/DeviceCard.container'
import { stateReducer } from '../../utils/state/stateReducer'

const DevicesShowCase = ({ className, fetchDevices, devices }) => {
  useEffect(() => {
    fetchDevices()
  }, [])

  const initialState = {
    search: '',
    filteredDevices: devices,
  }

  const [state, setState] = useReducer(stateReducer, initialState)

  const filterDevices = () => devices.filter(({ model, brand }) =>
    model.toLowerCase().includes(state.search) ||
    brand.toLowerCase().includes(state.search) ||
    `${brand} ${model}`.toLocaleLowerCase().includes(state.search))

  useEffect(() => {
    setState({
      filteredDevices: filterDevices()
    })
  }, [state.search])

  const handleSearchChange = ({ target }) => {
    setState({ search: target.value.toLowerCase() })
  }

  return (
    <div className={className}>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={handleSearchChange}
            data-testid="search-input"
          />
        </div>
      </div>
      <div className="showcase">
        {state.filteredDevices.length > 0 ? state.filteredDevices.map(({ model, id, brand, price, imgUrl }) => (
          <DeviceCard
            key={id}
            id={id}
            model={model}
            brand={brand}
            price={price}
            imgUrl={imgUrl}
          />
        )) : (
          <p className="no-match" data-testid="no-match-text">
            No smart phone matches your search. Please try some other product.
          </p>
        )}
      </div>
    </div>
  )
}

export default DevicesShowCase

DevicesShowCase.propTypes = {
  className: PropTypes.string.isRequired,
}
