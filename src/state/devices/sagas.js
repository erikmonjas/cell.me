import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_DEVICES, FETCH_DEVICE_DETAILS } from './actionTypes'
import { setDeviceDetails, setDevices } from './actionCreators'
import axios from 'axios'
import { setLoading } from '../ui/actionCreators'

export function* fetchDevicesSaga() {
  try {
    yield put(setLoading({ loading: 'devices-showcase' }))
    const { data } = yield call(axios, {
      method: 'get',
      url: 'https://front-test-api.herokuapp.com/api/product',
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
      url: `https://front-test-api.herokuapp.com/api/product/${id}`,
    })
    yield put(setDeviceDetails({ details: data }))
  } catch(error) {
    console.log(error)
  }
  finally {
    yield put(setLoading({ loading: '' }))
  }
}

export function* watchFetchDevices() {
  yield takeLatest(FETCH_DEVICES, fetchDevicesSaga)
}

export function* watchFetchDeviceDetails() {
  yield takeLatest(FETCH_DEVICE_DETAILS, fetchDeviceDetails)
}