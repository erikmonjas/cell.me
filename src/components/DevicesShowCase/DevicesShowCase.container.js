import { connect } from 'react-redux'
import { fetchDevices } from '../../state/devices/actionCreators'
import { getDevices } from '../../state/devices/selectors'
import { getLoading } from '../../state/ui/selectors'
import DevicesShowCase from './DevicesShowCase.styled'

const mapStateToProps = state => ({
  devices: getDevices(state),
  loading: getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchDevices: () => dispatch(fetchDevices()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DevicesShowCase)