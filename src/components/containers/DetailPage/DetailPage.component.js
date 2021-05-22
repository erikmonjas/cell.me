import React, { Suspense } from 'react'

import BreadCrumbs from '../../commons/BreadCrumbs/BreadCrumbs.container'
import Layout from '../../commons/Layout/Layout.container'
import Loader from '../../commons/Loader/Loader.container'

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
