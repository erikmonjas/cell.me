import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const DeviceDetail = ({
  className,
  fetchDeviceDetails
}) => {
  const { id } = useParams()

  useEffect(() => {
    fetchDeviceDetails({ id })
  }, [])
  return (
    <div className={className}>
      <p>{id}</p>
    </div>
  )
}

export default DeviceDetail
