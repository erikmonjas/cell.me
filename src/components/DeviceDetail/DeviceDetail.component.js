import React, { useEffect, Suspense, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import Loader from '../commons/Loader'
import { getLoading } from '../../state/ui/selectors'
import { getDetails } from '../../state/devices/selectors'
import { fetchDeviceDetails } from '../../state/devices/actionCreators'

const DeviceInfo = React.lazy(() => import('./components/DeviceInfo'))
const DeviceActions = React.lazy(() => import('./components/DeviceActions'))

const DeviceDetail = ({
  className,
}) => {
  const dispatch = useDispatch()
  const details = useSelector(getDetails)
  const loading = useSelector(getLoading)

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
      dispatch(fetchDeviceDetails({ id }))
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
}
