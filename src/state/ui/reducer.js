import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import initialState from './initial.state'
import * as actions from './actionCreators'
import modalTypes from '../../constants/modals/modalTypes'

const loading = handleActions(
  {
    [actions.setLoading]: (_, { payload: { loading }}) => loading,
  },
  initialState.loading,
)

const modal = handleActions(
  {
    [actions.openDefaultModal]: (_, { payload: { children }}) => ({
      open: modalTypes.DEFAULT,
      children
    }),
    [actions.closeModal]: () => initialState.modal,
  },
  initialState.modal,
)

export default combineReducers({
  loading,
  modal,
})
