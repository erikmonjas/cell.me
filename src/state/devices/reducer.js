import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'

const devices = handleActions(
  {
    [actions.setDevices]: (_, { payload: { devices }}) => devices,
  },
  initialState.devices,
)

export default devices
