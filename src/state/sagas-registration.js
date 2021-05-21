import { all, fork } from "redux-saga/effects"
import {
  watchFetchDevices,
  watchFetchDeviceDetails
} from './devices/sagas'

export default function* root() {
  yield all([
    fork(watchFetchDevices),
    fork(watchFetchDeviceDetails),
  ])
}