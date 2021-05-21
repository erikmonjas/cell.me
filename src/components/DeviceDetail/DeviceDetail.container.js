import { connect } from 'react-redux'

import { fetchDeviceDetails } from '../../state/devices/actionCreators'
import DeviceDetail from './DeviceDetail.styled'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  fetchDeviceDetails: ({ id }) => dispatch(fetchDeviceDetails({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail)