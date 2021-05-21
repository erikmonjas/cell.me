import { takeLatest, call } from 'redux-saga/effects'
import { ADD_TO_CART } from './actionTypes'
import axios from 'axios'
import { API_BASE } from '../../constants/api'

export function* addToCart({ payload: { id, color, storage } }) {
  try {
    yield call(axios, {
      method: 'post',
      url: `${API_BASE}/cart`,
      data: {
        id,
        colorCode: color,
        storageCode: storage
      }
    })
  } catch(error) {
    console.log(error)
  }
}

export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart)
}