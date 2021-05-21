import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../utils/text'
import DeviceInfo from './components/DeviceInfo/DeviceInfo.container'

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
        {/* <div className="options-wrapper">
          {Object.keys(deviceDetails.options).map(key => (
            <div className="option" key={key}>
              <h3>{firstLetterUpperCase(key)}</h3>
              {deviceDetails.options[key].map(({ name }) => (
                <div className="radiogroup" role="radiogroup">
                  <div className="radio" role="radio">{name}</div>
                </div>
              ))}
            </div>
          ))}
        </div> */}
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
