import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchDevices } from '../../state/devices/actionCreators'
import { getDevices } from '../../state/devices/selectors'
import DeviceCard from './components/DeviceCard/DeviceCard.container'

const DevicesShowCase = ({ className }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDevices())
  }, [])

  const devices = useSelector(getDevices)
  return (
    <div className={className}>
      {devices.map(({ model, id, brand, price, imgUrl }) => (
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
  )
}

export default DevicesShowCase

DevicesShowCase.propTypes = {
  className: PropTypes.string.isRequired,
}
