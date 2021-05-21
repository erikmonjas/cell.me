import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const setLoading = createAction(actionTypes.SET_LOADING, ({ loading }) => ({ loading }))

export const openDefaultModal = createAction(actionTypes.OPEN_DEFAULT_MODAL, ({ children }) => ({ children }))
export const closeModal = createAction(actionTypes.CLOSE_MODAL, () => ({ }))
