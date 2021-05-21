import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../utils/text'

const DeviceDetail = ({
  className,
  fetchDeviceDetails,
  deviceDetails
}) => {
  const { id } = useParams()
  
  useEffect(() => {
    fetchDeviceDetails({ id })
  }, [])

  const otherFeatures = Object.keys(deviceDetails).reduce((acc = [], key) => {
    const unnecesaryKeys = ['id', 'brand', 'model', 'price', 'imgUrl', 'colors', 'internalMemory', 'options']
    if (unnecesaryKeys.includes(key)) {
      return acc
    }

    const text = key.split(/(?=[A-Z])/).join(' ')
    const desc = deviceDetails[key]
    const description = typeof(desc) === 'string' ? [desc] : desc

    return acc.concat({ text, description })
  }, [])

  console.log(otherFeatures)

  return (
    <div className={className}>
      <div className="image-wrapper">
        <img src={deviceDetails.imgUrl} alt="device image" />
      </div>
      <div className="info-wrapper">
        <div className="device-highlight">
          <h2 className="device-title">{deviceDetails.brand} {deviceDetails.model}</h2>
          <p className="device-price">{deviceDetails.price}€</p>
        </div>
        <div className="specifications-wrapper">
          <h3 className="specifications-title">Technical specifications</h3>
          {otherFeatures.map(({ text, description }) => (
            <div className="device-specifications">
              <p className="specification-title">{firstLetterUpperCase(text)}</p>
              <div className="specification-description">
                {description.map(desc => <p>{desc}</p>)}
              </div>
            </div>
          ))}
        </div>
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
