import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../utils/text'
import DeviceInfo from './components/DeviceInfo/DeviceInfo.container'
import DeviceActions from './components/DeviceActions/DeviceActions.container'

const DeviceDetail = ({
  className,
  fetchDeviceDetails,
  deviceDetails
}) => {
  const { id } = useParams()
  
  useEffect(() => {
    fetchDeviceDetails({ id })
  }, [])

  return (
    <div className={className}>
      <div className="image-wrapper">
        <img src={deviceDetails.imgUrl} alt="device image" />
      </div>
      <div className="right-column">
        <DeviceInfo />
        <DeviceActions />
      </div>
    </div>
  )
}

export default DeviceDetail

DeviceDetail.propTypes = {
  className: PropTypes.string.isRequired,
  fetchDeviceDetails: PropTypes.func.isRequired,
  deviceDetails: PropTypes.object.isRequired,
}
