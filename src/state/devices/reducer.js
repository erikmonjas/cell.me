import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'

const devices = handleActions(
  {},
  initialState.devices,
)

export default devices
