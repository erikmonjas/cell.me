import { all, fork } from "redux-saga/effects"

import { watchAddToCart } from "./cart/sagas"
import {
  watchFetchDevices,
  watchFetchDeviceDetails,
} from './devices/sagas'

export default function* root() {
  yield all([
    fork(watchFetchDevices),
    fork(watchFetchDeviceDetails),
    fork(watchAddToCart),
  ])
}