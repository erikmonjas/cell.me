import React, { Suspense } from 'react'

import BreadCrumbs from '../../commons/BreadCrumbs'
import Layout from '../../commons/Layout'
import Loader from '../../commons/Loader'

const DeviceDetail = React.lazy(() => import('../../DeviceDetail/DeviceDetail.container'))

const DetailPage = () => {
  return (
    <Layout>
      <BreadCrumbs crumbs={[{ text: 'home', link: '/' }, { text: 'product' }]} />
      <Suspense fallback={<Loader />}>
        <DeviceDetail />
      </Suspense>
    </Layout>
  )
}

export default DetailPage
