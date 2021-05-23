import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const addToCart = createAction(actionTypes.ADD_TO_CART, ({ id, color, storage }) => ({ id, color, storage }))
export const subtractFromCart = createAction(actionTypes.SUBTRACT_FROM_CART, ({ id }) => ({ id }))
export const removeFromCart = createAction(actionTypes.REMOVE_FROM_CART, ({ id }) => ({ id }))
export const emptyCart = createAction(actionTypes.EMPTY_CART, () => ({ }))
