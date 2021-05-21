import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_DEVICES } from './actionTypes'
import { setDevices } from './actionCreators'
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

export function* watchFetchDevices() {
  yield takeLatest(FETCH_DEVICES, fetchDevicesSaga)
}