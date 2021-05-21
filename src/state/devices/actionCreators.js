import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const fetchDevices = createAction(actionTypes.FETCH_DEVICES, () => ({ }))
export const setDevices = createAction(actionTypes.SET_DEVICES, ({ devices }) => ({ devices }))

export const fetchDeviceDetails = createAction(actionTypes.FETCH_DEVICE_DETAILS, ({ id }) => ({ id }))
export const setDeviceDetails = createAction(actionTypes.SET_DEVICE_DETAILS, ({ details }) => ({ details }))

export const addToCart = createAction(actionTypes.ADD_TO_CART, ({ id, color, storage }) => ({ id, color, storage }))