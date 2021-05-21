import { all, fork } from "redux-saga/effects"
import {
  watchFetchDevices,
  watchFetchDeviceDetails,
  watchAddToCart
} from './devices/sagas'

export default function* root() {
  yield all([
    fork(watchFetchDevices),
    fork(watchFetchDeviceDetails),
    fork(watchAddToCart),
  ])
}