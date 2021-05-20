import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const fetchDevices = createAction(actionTypes.FETCH_DEVICES, () => ({ }))
export const setDevices = createAction(actionTypes.SET_DEVICES, ({ devices }) => ({ devices }))
