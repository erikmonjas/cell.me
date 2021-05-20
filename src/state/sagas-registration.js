import { all, fork } from "redux-saga/effects"
import {
  watchFetchDevices
} from './devices/sagas'

export default function* root() {
  yield all([
    fork(watchFetchDevices),
  ])
}