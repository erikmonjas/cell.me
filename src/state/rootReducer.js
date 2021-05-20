import { combineReducers } from 'redux'

import devices from './devices/reducer'

const rootReducer = combineReducers({
  devices
})

export default rootReducer
