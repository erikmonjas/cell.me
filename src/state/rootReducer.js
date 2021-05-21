import { combineReducers } from 'redux'

import devices from './devices/reducer'
import ui from './ui/reducer'

const rootReducer = combineReducers({
  devices,
  ui,
})

export default rootReducer
