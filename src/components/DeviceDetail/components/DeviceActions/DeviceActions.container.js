import { connect } from 'react-redux'

import { getDeviceDetails } from '../../../../state/devices/selectors'
import DeviceActions from './DeviceActions.styled'

const mapStateToProps = state => ({
  deviceDetails: getDeviceDetails(state)
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceActions)