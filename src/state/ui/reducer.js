import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'
import { combineReducers } from 'redux'

const loading = handleActions(
  {
    [actions.setLoading]: (_, { payload: { loading }}) => loading,
  },
  initialState.loading,
)

export default combineReducers({
  loading
})
