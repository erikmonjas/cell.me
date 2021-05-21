import { expectSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import { call } from 'redux-saga/effects'

import * as sagas from './sagas'
import { setDevices } from './actionCreators'
import mockDevice from '../../constants/devices/mockDevice'
import { setLoading } from '../ui/actionCreators'

describe('Devices sagas', () => {
  it('fetch devices', () => {
    return expectSaga(sagas.fetchDevicesSaga)
      .provide([
        [
          call(axios, {
            method: 'get',
            url: 'https://front-test-api.herokuapp.com/api/product',
          }),
          { data: [mockDevice] }
        ],
      ])
      .put(setLoading({ loading: 'devices-showcase' }))
      .put(setDevices({ devices: [mockDevice] }))
      .put(setLoading({ loading: '' }))
      .run()
  })
})
