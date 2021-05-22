import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'
import { combineReducers } from 'redux'

const items = handleActions(
  {
    [actions.addToCart]: (state, { payload: { id, color, storage }}) => {
      const fullID = `${id}-color${color}-storage${storage}`
      return {
        ...state,
        [fullID]: {
          id: fullID,
          amount: state[fullID] ? state[fullID].amount + 1 : 1,
          color,
          storage
        }
      }
    },
    [actions.subtractFromCart]: (state, { payload: { id }}) => {
      return {
        ...state,
        [id]: {
          ...state[id],
          amount: state[id].amount - 1,
        }
      }
    },
    [actions.removeFromCart]: (state, { payload: { id }}) => {
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          amount: state[id].amount - 1,
        }
      }
      const filteredNewState = Object.keys(newState).filter(key => newState[key].amount > 0)
      return filteredNewState
    },
    [actions.emptyCart]: () => initialState.items,
  },
  initialState.items,
)

export default combineReducers({
  items
})
