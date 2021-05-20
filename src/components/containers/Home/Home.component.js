import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '../../commons/Layout/Layout.container'
import { fetchDevices } from '../../../state/devices/actionCreators'

const Home = ({ className }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDevices())
  }, [])
  return (
    <Layout className={className}>
      <p>home</p>
    </Layout>
  )
}

export default Home
