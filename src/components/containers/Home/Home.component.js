import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../../commons/Layout/Layout.container'
import DevicesShowCase from '../../DevicesShowCase/DevicesShowCase.container'

const Home = ({ className }) => {
  return (
    <Layout className={className}>
      <section>
        <h2 className="page-title">The greatest smart phone dealer in GitHub</h2>
        <div className="presentation">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non pulvinar diam, sed dictum ex. Fusce congue a sem in fringilla. Donec imperdiet egestas felis, ac blandit quam scelerisque ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo elementum turpis, vel gravida leo finibus ac. Curabitur ac rhoncus justo. Cras molestie pellentesque vulputate. Proin at porttitor enim, vitae pulvinar turpis.</p>
          <p>Fusce viverra lorem nibh, eget tincidunt mauris molestie maximus. Suspendisse commodo tristique laoreet. In egestas tempus odio et suscipit. Aenean ullamcorper dictum ullamcorper. Cras blandit massa et lacus posuere faucibus. Pellentesque laoreet nulla aliquam, molestie elit ac, pellentesque quam. Sed quis imperdiet odio. Nunc eu orci eget tellus varius aliquam quis sed nisl. Nunc nec ipsum ipsum. Quisque et malesuada dolor.</p>
        </div>
        <DevicesShowCase />
      </section>
    </Layout>
  )
}

export default Home

Home.propTypes = {
  className: PropTypes.string.isRequired,
}
