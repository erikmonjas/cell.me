import { combineReducers } from 'redux'

import devices from './devices/reducer'
import ui from './ui/reducer'
import cart from './cart/reducer'

const rootReducer = combineReducers({
  devices,
  ui,
  cart,
})

export default rootReducer
