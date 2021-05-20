import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchDevices } from '../../../state/devices/actionCreators'
import { getDevices } from '../../../state/devices/selectors'
import Layout from '../../commons/Layout/Layout.container'
import DeviceCard from '../../DeviceCard/DeviceCard.component'

const Home = ({ className }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDevices())
  }, [])

  const devices = useSelector(getDevices)
  return (
    <Layout className={className}>
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
    </Layout>
  )
}

export default Home

Home.propTypes = {
  className: PropTypes.string.isRequired,
}
