import { takeLatest } from 'redux-saga/effects'
import { FETCH_DEVICES } from './actionTypes'

export function* fetchDevicesSaga() {
  try {
    console.log('fetching')
  } catch(error) {
    console.log(error)
  }
}

export function* watchFetchDevices() {
  yield takeLatest(FETCH_DEVICES, fetchDevicesSaga)
}