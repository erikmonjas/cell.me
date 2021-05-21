import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_DEVICES, FETCH_DEVICE_DETAILS, ADD_TO_CART } from './actionTypes'
import { setDeviceDetails, setDevices } from './actionCreators'
import axios from 'axios'
import { setLoading } from '../ui/actionCreators'
import { API_BASE } from '../../constants/api'

export function* fetchDevicesSaga() {
  try {
    yield put(setLoading({ loading: 'devices-showcase' }))
    const { data } = yield call(axios, {
      method: 'get',
      url: `${API_BASE}/product`,
    })
    yield put(setDevices({ devices: data }))
  } catch(error) {
    console.log(error)
  }
  finally {
    yield put(setLoading({ loading: '' }))
  }
}

export function* fetchDeviceDetails({ payload: { id } }) {
  try {
    yield put(setLoading({ loading: 'device-detail' }))
    const { data } = yield call(axios, {
      method: 'get',
      url: `${API_BASE}/product/${id}`,
    })
    yield put(setDeviceDetails({ details: data }))
  } catch(error) {
    console.log(error)
  }
  finally {
    yield put(setLoading({ loading: '' }))
  }
}

export function* addToCart({ payload: { id, color, storage } }) {
  try {
    const response = yield call(axios, {
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

export function* watchFetchDevices() {
  yield takeLatest(FETCH_DEVICES, fetchDevicesSaga)
}

export function* watchFetchDeviceDetails() {
  yield takeLatest(FETCH_DEVICE_DETAILS, fetchDeviceDetails)
}

export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart)
}