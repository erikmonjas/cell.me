import { connect } from 'react-redux'

import { getDetails } from '../../../../state/devices/selectors'
import DeviceActions from './DeviceActions.styled'

const mapStateToProps = state => ({
  details: getDetails(state)
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceActions)