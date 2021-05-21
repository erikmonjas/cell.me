import React from 'react'

import BreadCrumbs from '../../commons/BreadCrumbs/BreadCrumbs.container'
import Layout from '../../commons/Layout/Layout.container'
import DeviceDetail from '../../DeviceDetail/DeviceDetail.container'

const DetailPage = () => {
  return (
    <Layout>
      <BreadCrumbs crumbs={[{ text: 'home', link: '/' }, { text: 'product' }]} />
      <DeviceDetail />
    </Layout>
  )
}

export default DetailPage
