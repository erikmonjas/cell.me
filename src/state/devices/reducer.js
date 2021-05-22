import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'
import { combineReducers } from 'redux'

const devices = handleActions(
  {
    [actions.setDevices]: (_, { payload: { devices }}) => devices,
  },
  initialState.devices,
)

const details = handleActions(
  {
    [actions.setDeviceDetails]: (state, { payload: { details }}) => ({
      ...state,
      [details.id]: details
    }),
  },
  initialState.devices,
)

export default combineReducers({
  devices,
  details,
})
