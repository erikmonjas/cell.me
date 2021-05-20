import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import * as sagas from './sagas'
import { setDevices } from './actionCreators'
import mockDevice from '../../constants/devices/mockDevice'
import axios from 'axios'

describe('Devices sagas', () => {
  it('fetch devices', () => {
    return expectSaga(sagas.fetchDevicesSaga)
      .provide([
        [call(axios, {
          method: 'get',
          url: 'https://front-test-api.herokuapp.com/api/product',
        }), [mockDevice]],
      ])
      .put(setDevices([mockDevice]))
      .run()
  })
})
