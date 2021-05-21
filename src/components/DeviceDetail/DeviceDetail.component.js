import React, { useEffect, Suspense } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import Loader from '../commons/Loader/Loader.container'

const DeviceInfo = React.lazy(() => import('./components/DeviceInfo/DeviceInfo.container'))
const DeviceActions = React.lazy(() => import('./components/DeviceActions/DeviceActions.container'))


const DeviceDetail = ({
  className,
  loading,
  fetchDeviceDetails,
  deviceDetails
}) => {
  const { id } = useParams()
  
  useEffect(() => {
    if (deviceDetails.id !== id) {
      fetchDeviceDetails({ id })
    }
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
            <img src={deviceDetails.imgUrl} alt="device" />
          </div>
          <div className="right-column">
            <Suspense fallback={<Loader />}>
              <DeviceInfo />
              <DeviceActions />
            </Suspense>
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
