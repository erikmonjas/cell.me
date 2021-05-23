import React, { useEffect, Suspense, useState } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import Loader from '../commons/Loader/Loader.container'
import { deviceWithDetails } from '../../constants/models/devices'

const DeviceInfo = React.lazy(() => import('./components/DeviceInfo/DeviceInfo.container'))
const DeviceActions = React.lazy(() => import('./components/DeviceActions/DeviceActions.container'))

const DeviceDetail = ({
  className,
  loading,
  fetchDeviceDetails,
  details
}) => {
  const [localDetails, setLocalDetails] = useState({
    imgUrl: '',
  })
  const [isFetched, setIsFetched] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const detailsFetched = details[id]
    if (detailsFetched) {
      setLocalDetails(detailsFetched)
      setIsFetched(true)
    } else {
      fetchDeviceDetails({ id })
      setIsFetched(false)
    }
  }, [details])

  return (
    <div className={className}>
      {loading === 'device-detail' ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <div className="detail-wrapper">
          <div className="image-wrapper">
            <img src={localDetails.imgUrl} alt="device" data-testid="device-image" />
          </div>
          <div className="right-column">
            {isFetched && (
              <Suspense fallback={<Loader />}>
                <DeviceInfo id={id} />
                <DeviceActions id={id} />
              </Suspense>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default DeviceDetail

DeviceDetail.propTypes = {
  className: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  details: PropTypes.objectOf(deviceWithDetails).isRequired,
  fetchDeviceDetails: PropTypes.func.isRequired,
}
