import { connect } from 'react-redux'

import { fetchDeviceDetails } from '../../state/devices/actionCreators'
import { getDetails } from '../../state/devices/selectors'
import { getLoading } from '../../state/ui/selectors'
import DeviceDetail from './DeviceDetail.styled'

const mapStateToProps = state => ({
  details: getDetails(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchDeviceDetails: ({ id }) => dispatch(fetchDeviceDetails({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail)