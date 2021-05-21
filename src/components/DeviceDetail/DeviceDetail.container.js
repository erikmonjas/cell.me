import { connect } from 'react-redux'

import { fetchDeviceDetails } from '../../state/devices/actionCreators'
import { getDeviceDetails } from '../../state/devices/selectors'
import { getLoading } from '../../state/ui/selectors'
import DeviceDetail from './DeviceDetail.styled'

const mapStateToProps = state => ({
  deviceDetails: getDeviceDetails(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchDeviceDetails: ({ id }) => dispatch(fetchDeviceDetails({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail)