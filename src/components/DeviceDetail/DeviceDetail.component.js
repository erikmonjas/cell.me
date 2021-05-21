import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import Loader from '../commons/Loader/Loader.container'
import DeviceInfo from './components/DeviceInfo/DeviceInfo.container'
import DeviceActions from './components/DeviceActions/DeviceActions.container'

const DeviceDetail = ({
  className,
  loading,
  fetchDeviceDetails,
  deviceDetails
}) => {
  const { id } = useParams()
  
  useEffect(() => {
    fetchDeviceDetails({ id })
  }, [])

  return (
    <div className={className}>
      {loading === 'device-detail' ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <>
          <div className="image-wrapper">
            <img src={deviceDetails.imgUrl} alt="device image" />
          </div>
          <div className="right-column">
            <DeviceInfo />
            <DeviceActions />
          </div>
        </>
      )}
    </div>
  )
}

export default DeviceDetail

DeviceDetail.propTypes = {
  className: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  fetchDeviceDetails: PropTypes.func.isRequired,
  deviceDetails: PropTypes.object.isRequired,
}
