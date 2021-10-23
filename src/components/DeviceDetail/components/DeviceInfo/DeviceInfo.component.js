import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { firstLetterUpperCase } from '../../../../utils/text'
import { getDetails } from '../../../../state/devices/selectors'

const DeviceInfo = ({ className, id }) => {
  const details = useSelector(getDetails)
  const deviceDetails = details[id]
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

  return (
    <div className={className}>
      <div className="device-highlight">
        <h2 className="device-title" data-testid="device-title">
          {deviceDetails.brand} {deviceDetails.model}
        </h2>
        <p className="device-price" data-testid="device-price">
          {deviceDetails.price}€
        </p>
      </div>
      <div className="specifications-wrapper">
        <h3 className="specifications-title">Technical specifications</h3>
        {otherFeatures.map(({ text, description }) => (
          <div key={text} className="device-specifications" data-testid={`specifications-${text}`}>
            <p className="specification-title" data-testid={`title-${text}`}>{firstLetterUpperCase(text)}</p>
            <div className="specification-description">
              {description.map(desc => <p key={desc} data-testid={`description-${text}`}>{desc}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeviceInfo

DeviceInfo.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}