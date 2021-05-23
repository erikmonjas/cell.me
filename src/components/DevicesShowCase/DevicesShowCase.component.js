import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import DeviceCard from './components/DeviceCard/DeviceCard.container'
import { stateReducer } from '../../utils/state/stateReducer'
import Loader from '../commons/Loader/Loader.container'
import { deviceWithoutDetails } from '../../constants/models/devices'

const DevicesShowCase = ({
  className,
  fetchDevices,
  devices,
  loading,
}) => {
  useEffect(() => {
    if (devices.length === 0) {
      fetchDevices()
    }
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

  useEffect(() => {
    setState({
      filteredDevices: filterDevices()
    })
  }, [devices])

  const handleSearchChange = ({ target }) => {
    setState({ search: target.value.toLowerCase() })
  }

  return (
    <div className={className}>
      {loading === 'devices-showcase' ? <Loader /> : (
        <div className="showcase-wrapper">
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
          {state.filteredDevices.length > 0 ? (
            <div className="showcase">
              {state.filteredDevices.map(({ model, id, brand, price, imgUrl }) => (
                <DeviceCard
                  key={id}
                  id={id}
                  model={model}
                  brand={brand}
                  price={price}
                  imgUrl={imgUrl}
                />
              ))}
            </div>
          ) : (
            <p className="no-match" data-testid="no-match-text">
              No smart phone matches your search. Please try some other product.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default DevicesShowCase

DevicesShowCase.propTypes = {
  className: PropTypes.string.isRequired,
  fetchDevices: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(deviceWithoutDetails).isRequired,
  loading: PropTypes.string.isRequired,
}
